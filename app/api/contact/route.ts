import { NextRequest, NextResponse } from 'next/server'

// Compile-time fallback – läses på serversidan, exponeras INTE i klient-bundeln.
// Sätt WEB3FORMS_KEY (utan NEXT_PUBLIC_-prefix) i miljövariabler för att åsidosätta.
const WEB3FORMS_KEY =
  process.env.WEB3FORMS_KEY ?? '604b7168-08c6-4b2a-9f46-a3ef1581e224'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        ...body,
        access_key: WEB3FORMS_KEY,
      }),
    })

    const data = await response.json()

    if (response.ok) {
      return NextResponse.json({ success: true }, { status: 200 })
    } else {
      return NextResponse.json(
        { success: false, message: data.message ?? 'Submission failed' },
        { status: response.status },
      )
    }
  } catch (err) {
    console.error('[/api/contact] Unexpected error:', err)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 },
    )
  }
}
