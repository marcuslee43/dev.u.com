'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null)
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <header className="bg-primary text-primary-foreground">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Dev U
        </Link>
        <div>
          <Link href="/" passHref>
            <Button variant="ghost" className="mr-2">Home</Button>
          </Link>
          {user ? (
            <>
              <Link href="/dashboard" passHref>
                <Button variant="ghost" className="mr-2">Dashboard</Button>
              </Link>
              <Button variant="ghost" onClick={handleSignOut}>Sign Out</Button>
            </>
          ) : (
            <>
              <Link href="/signin" passHref>
                <Button variant="ghost" className="mr-2">Sign In</Button>
              </Link>
              <Link href="/signup" passHref>
                <Button variant="ghost">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

