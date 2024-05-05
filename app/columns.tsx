"use client"

import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"
import { DataTableColumnHeader } from "@/components/data-table-column-header"

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
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Name"
      />
    ),
    cell: ({ row }) => {
      // TODO: Long names should be truncated
      // TODO: Add a link to the repository
      return (
        <div className="text-left">
          {row.original.owner}/{row.original.name}
        </div>
      )
    },
  },
  {
    accessorKey: "owner",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Owner"
      />
    ),
  },
  {
    accessorKey: "stars",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Stars"
      />
    ),
    cell: ({ row }) => {
      return <div className="text-right">{row.original.stars}</div>
    },
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Created at"
      />
    ),
    cell: ({ row }) => {
      return format(new Date(row.original.created_at), "yyyy-MM-dd")
    },
  },
]
