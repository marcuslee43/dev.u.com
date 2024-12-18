import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Header from '@/components/Header'

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/signin')
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p>Welcome, {user.email || user.user_metadata.full_name}!</p>
        {user.app_metadata.provider === 'github' && (
          <p>You signed in with GitHub.</p>
        )}
        {/* Add more dashboard content here */}
      </main>
    </div>
  )
}

