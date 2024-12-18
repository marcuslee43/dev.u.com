import Header from '@/components/Header'
import SignIn from '@/components/SignIn'

export default function SignInPage() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SignIn />
      </main>
    </div>
  )
}

