import type { NextApiRequest, NextApiResponse } from 'next'

// Key priority: server-side secret → NEXT_PUBLIC fallback → compile-time fallback
// ⚠️  WARNING: The compile-time fallback key must be replaced with a proper secret in production.
//    Set WEB3FORMS_KEY as a Vercel secret (or environment variable) before deploying.
const WEB3FORMS_KEY =
  process.env.WEB3FORMS_KEY ??
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ??
  '604b7168-08c6-4b2a-9f46-a3ef1581e224'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body

    // Build payload – always inject the server-side key so it never appears in client code
    const payload: Record<string, unknown> = {
      ...body,
      access_key: WEB3FORMS_KEY,
    }

    // SUPPORT_TEST_EMAIL: if set, log test recipient and include recipient_email in payload
    const testEmail = process.env.SUPPORT_TEST_EMAIL
    if (testEmail) {
      console.log(`[web3forms-proxy] test_recipient: ${testEmail}`)
      payload.recipient_email = testEmail
    }

    const web3Response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const responseText = await web3Response.text()

    let responseData: unknown
    try {
      responseData = JSON.parse(responseText)
    } catch {
      responseData = responseText
    }

    // Log status and response body for delivery diagnostics (visible in Vercel logs)
    console.log(`[web3forms-proxy] ${new Date().toISOString()} status=${web3Response.status} body=${JSON.stringify(responseData)}`)

    if (web3Response.ok) {
      return res.status(200).json({ success: true, data: responseData })
    } else {
      console.error(`[web3forms-proxy] Web3Forms returned non-OK status ${web3Response.status}:`, responseData)
      return res.status(web3Response.status).json({ success: false, data: responseData })
    }
  } catch (err) {
    console.error('[web3forms-proxy] Unexpected error:', err)
    return res.status(500).json({ success: false, message: 'Internal server error' })
  }
}
