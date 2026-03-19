import type { NextApiRequest, NextApiResponse } from 'next'

// Public Web3Forms access key used as compile-time fallback (lowest priority).
// This is an intentionally public key per Web3Forms documentation.
// Set WEB3FORMS_KEY or NEXT_PUBLIC_WEB3FORMS_KEY env vars to override.
const FALLBACK_KEY = '604b7168-08c6-4b2a-9f46-a3ef1581e224'

type ResponseData =
  | { success: true; data: unknown }
  | { error: string; details?: unknown }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { name, email, message } = req.body ?? {}

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: 'Missing required fields: name, email, message' })
  }

  // Key priority: WEB3FORMS_KEY > NEXT_PUBLIC_WEB3FORMS_KEY > compile-time fallback
  const access_key =
    process.env.WEB3FORMS_KEY ??
    process.env.NEXT_PUBLIC_WEB3FORMS_KEY ??
    FALLBACK_KEY

  const payload: Record<string, string> = {
    access_key,
    name: String(name),
    email: String(email),
    message: String(message),
    subject: 'Nytt meddelande från Simon Linds portfolio',
  }

  if (process.env.SUPPORT_TEST_EMAIL) {
    payload._test_recipient = process.env.SUPPORT_TEST_EMAIL
    console.log(
      '[web3forms-proxy] Using test recipient:',
      process.env.SUPPORT_TEST_EMAIL
    )
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const json: unknown = await response.json()

    console.log('[web3forms-proxy] Response status:', response.status)
    console.log('[web3forms-proxy] Response body:', JSON.stringify(json))

    if (response.ok) {
      return res.status(200).json({ success: true, data: json })
    } else {
      console.error('[web3forms-proxy] Non-OK response:', JSON.stringify(json))
      return res.status(500).json({ error: 'Delivery error', details: json })
    }
  } catch (err) {
    console.error('[web3forms-proxy] Error:', err)
    return res
      .status(500)
      .json({ error: 'Delivery error', details: String(err) })
  }
}
