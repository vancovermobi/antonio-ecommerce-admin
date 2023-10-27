"use client"

import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { DataTable } from "@/components/ui/data-table"
import { ApiList } from "@/components/ui/api-list"

import { ProductColumn, HeaderColumns } from "./ProductColumns"

interface ProductClientProps {
    data: ProductColumn[] 
}

export const ProductClient: React.FC<ProductClientProps> = ({ data }) => {
  const params = useParams()
  const router = useRouter()

  return (
  <>
    <div className="flex items-center justify-between">
        <Heading 
            title={`Products (${data.length})`}
            description="Manage products for your store"
        />

        <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
            <Plus className="mr-2 h-4 w-4" />
            Add New
        </Button>
    </div>

    <Separator />

    <DataTable data={ data } searchKey="name" columns={ HeaderColumns } />

    <Heading title="API" description="API calls for Products" />

    <Separator />

    <ApiList entityName="products" entityIdName="productId" />
  </>
  )
}
