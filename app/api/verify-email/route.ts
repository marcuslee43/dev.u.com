import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { token } = await request.json()
  const supabase = createRouteHandlerClient({ cookies })

  try {
    const { data, error } = await supabase
      .from('email_verification')
      .select('user_id')
      .eq('token', token)
      .single()

    if (error || !data) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 400 })
    }

    await supabase
      .from('users')
      .update({ email_verified: true })
      .eq('id', data.user_id)

    await supabase
      .from('email_verification')
      .delete()
      .eq('token', token)

    return NextResponse.json({ message: 'Email verified successfully' })
  } catch (error) {
    console.error('Error verifying email:', error)
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 })
  }
}

