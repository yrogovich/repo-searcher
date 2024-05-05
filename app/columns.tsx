"use client"

import { ColumnDef } from '@tanstack/react-table'
import { format } from "date-fns"

export type Repo = {
  id: number
  name: string
  owner: string
  stars: number
  created_at: string
}

export const columns: ColumnDef<Repo>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      // TODO: Long names should be truncated
      // TODO: Add a link to the repository
      return <div className='text-left'>{row.original.owner}/{row.original.name}</div>
    }
  },
  {
    accessorKey: "owner",
    header: "Owner",
  },
  {
    accessorKey: "stars",
    header: "Stars",
    cell: ({ row }) => {
      return <div className='text-right'>{row.original.stars}</div>
    }
  },
  {
    accessorKey: "created_at",
    header: "Created at",
    cell: ({ row }) => {
      return format(new Date(row.original.created_at), "yyyy-MM-dd")
    },
  },
]