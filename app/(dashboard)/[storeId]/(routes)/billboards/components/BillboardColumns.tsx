"use client"

import { ColumnDef } from '@tanstack/react-table'
import { CellAction } from './Cell-Action'

export type BillboardColumn = {
    id          : string
    label       : string
    createdAt   : string
}

export const BillboardColumns: ColumnDef<BillboardColumn>[] = [
    {
        accessorKey : 'label',
        header      : 'Label',
    },
    {
        accessorKey : 'createdAt',
        header      : 'Date',
    },
    {
        id: "actions",
        cell: ({ row }) => <CellAction data={ row.original } />
    }
]