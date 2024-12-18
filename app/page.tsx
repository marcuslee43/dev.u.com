import Header from '@/components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Dev U</h1>
        <p>Create your API key and secret to use our APIs.</p>
      </main>
    </div>
  )
}

