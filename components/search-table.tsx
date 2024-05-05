"use client"

import {DataTable} from '@/components/data-table'
import {columns} from '@/app/columns'
import {useQuery} from '@tanstack/react-query'
import {fetchRepos} from '@/server/actions/github-repos'
import {useSearchParams} from 'next/navigation'

const SearchTable = () => {
  const searchParams = useSearchParams()
  const searchPhrase = searchParams.get('s')?.toString() || ''

  const { data, error, isLoading } = useQuery({
    queryKey: ['search', searchPhrase],
    queryFn: () => fetchRepos(searchPhrase),
    retryDelay: 10000,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  const items = data?.data || []

  return (
    <DataTable data={items} columns={columns} />
  )
}

export default SearchTable