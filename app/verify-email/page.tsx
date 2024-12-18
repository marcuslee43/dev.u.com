import { Suspense } from 'react'
import Header from '@/components/Header'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import VerifyEmailClient from './VerifyEmailClient'

export default function VerifyEmail() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Email Verification</CardTitle>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<p>Verifying your email...</p>}>
              <VerifyEmailClient />
            </Suspense>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

