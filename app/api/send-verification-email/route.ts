import { NextResponse } from 'next/server'
import { sendVerificationEmail } from '@/lib/email'

export async function POST(request: Request) {
  const { email, token } = await request.json()

  try {
    await sendVerificationEmail(email, token)
    return NextResponse.json({ message: 'Verification email sent successfully' })
  } catch (error) {
    console.error('Failed to send verification email:', error)
    return NextResponse.json({ error: 'Failed to send verification email' }, { status: 500 })
  }
}

