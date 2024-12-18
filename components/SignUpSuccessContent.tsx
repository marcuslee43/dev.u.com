'use client'

import { useSearchParams } from 'next/navigation'

export default function SignUpSuccessContent() {
  const searchParams = useSearchParams()
  const resent = searchParams.get('resent')

  return (
    <div>
      {resent ? (
        <p>We've resent the verification email to your address. Please check your inbox and follow the instructions to verify your account.</p>
      ) : (
        <p>Thank you for signing up! Please check your email to verify your account.</p>
      )}
    </div>
  )
}

