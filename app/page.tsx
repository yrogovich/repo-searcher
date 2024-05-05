import Container from "@/components/container"
import { SearchForm } from "@/components/search-form"
import SearchTable from "@/components/search-table"

export default function Home() {
  return (
    <main className="relative min-h-screen py-16">
      <Container className="space-y-6">
        <h1 className="text-2xl">Github Repos</h1>
        <SearchForm />
        <SearchTable />
      </Container>
    </main>
  )
}
