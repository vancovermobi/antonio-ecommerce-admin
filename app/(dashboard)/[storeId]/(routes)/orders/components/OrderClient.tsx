"use client"

import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { DataTable } from "@/components/ui/data-table"

import { OrderColumn, HeaderColumns } from "./OrderColumns"

interface OrderClientProps {
    data: OrderColumn[]
}

export const OrderClient: React.FC<OrderClientProps> = ({ data }) => {

  return (
  <>   
    <Heading 
      title={`Orders (${data.length})`}
      description="Manage Orders for your store"
    />
    
    <Separator />

    <DataTable data={ data } searchKey="products" columns={ HeaderColumns } />

    </>
  )
}
