'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function VerifyEmailClient() {
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  useEffect(() => {
    if (token) {
      verifyEmail(token)
    } else {
      setStatus('error')
      setError('No verification token provided')
    }
  }, [token])

  const verifyEmail = async (token: string) => {
    try {
      const res = await fetch('/api/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })

      if (res.ok) {
        setStatus('success')
        setTimeout(() => router.push('/signin'), 3000)
      } else {
        const errorData = await res.json()
        setStatus('error')
        setError(errorData.error || 'Failed to verify email')
      }
    } catch (error) {
      setStatus('error')
      setError('An unexpected error occurred')
    }
  }

  if (status === 'verifying') {
    return <p>Verifying your email...</p>
  }

  if (status === 'success') {
    return <p>Your email has been verified successfully! Redirecting to sign in...</p>
  }

  if (status === 'error') {
    return (
      <>
        <p className="text-red-500">{error}</p>
        <Button onClick={() => router.push('/signin')} className="mt-4">
          Go to Sign In
        </Button>
      </>
    )
  }

  return null
}

