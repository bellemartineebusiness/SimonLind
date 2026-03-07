import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * Web3Forms proxy — keeps the API key server-side so it is never exposed in the
 * client bundle.
 *
 * Key priority:
 *   1. process.env.WEB3FORMS_KEY          (recommended: Vercel secret, not prefixed)
 *   2. process.env.NEXT_PUBLIC_WEB3FORMS_KEY  (dev convenience, visible to browser)
 *   3. Compile-time fallback constant      (quick testing only — remove before making
 *                                           this repo public and set WEB3FORMS_KEY in
 *                                           your hosting environment instead)
 *
 * Security note: grep check to verify the key is not bundled client-side:
 *   grep -R "604b7168-08c6-4b2a-9f46-a3ef1581e224" .next/ || true
 */
const FALLBACK_KEY = '604b7168-08c6-4b2a-9f46-a3ef1581e224'

const API_KEY =
  process.env.WEB3FORMS_KEY ??
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ??
  FALLBACK_KEY

type ResponseData = {
  success: boolean
  message?: string
  [key: string]: unknown
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    const payload: Record<string, unknown> = {
      ...req.body,
      access_key: API_KEY,
    }

    // SUPPORT_TEST_EMAIL: when set, add a test_recipient field so Web3Forms
    // (if it honours the field) routes the email to an alternate address for
    // isolating delivery issues (e.g. iCloud vs Gmail).
    // Note: Web3Forms may not honour recipient overrides depending on account settings.
    if (process.env.SUPPORT_TEST_EMAIL) {
      payload.test_recipient = process.env.SUPPORT_TEST_EMAIL
      console.log(
        '[web3forms-proxy] SUPPORT_TEST_EMAIL set – adding test_recipient:',
        process.env.SUPPORT_TEST_EMAIL,
      )
    }

    const upstream = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const data: ResponseData = await upstream.json()
    console.log('[web3forms-proxy] upstream response:', JSON.stringify(data))

    if (upstream.ok && data.success) {
      return res.status(200).json(data)
    }

    return res
      .status(upstream.status || 502)
      .json({ success: false, message: data.message ?? 'Upstream error' })
  } catch (err) {
    console.error('[web3forms-proxy] error:', err)
    return res.status(500).json({ success: false, message: 'Internal server error' })
  }
}
