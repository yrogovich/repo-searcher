import Container from "@/components/container"
import { SearchForm } from "@/components/search-form"
import SearchTable from "@/components/search-table"
import { Suspense } from "react"

export default function Home() {
  return (
    <main className="relative min-h-screen py-16">
      <Container className="space-y-6">
        <h1 className="text-center text-2xl">Github repository search</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <SearchForm />
          <SearchTable />
        </Suspense>
      </Container>
    </main>
  )
}
