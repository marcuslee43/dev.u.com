import Header from '@/components/Header'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function SignUpSuccessPage() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Sign Up Successful</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Thank you for signing up! Please check your email to verify your account.</p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

