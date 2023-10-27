import { format } from 'date-fns'

import { prismadbPLSC } from "@/lib/prismadb"
import { formatter } from '@/lib/utils'

import { ProductClient } from "./components/ProductClient"
import { ProductColumn } from './components/ProductColumns'

const ProductPage = async(
    { params }: { params: { storeId: string }}
) => {
    const products = await prismadbPLSC.product.findMany({
        where: {
            storeId: params.storeId,
        },
        include: {
            category:   true,
            size    :   true,
            color   :   true,
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    const formattedProducts: ProductColumn[] = products.map((item) => ({
        id          : item.id,
        name        : item.name,
        isFeatured  : item.isFeatured,
        isArchived  : item.isArchived,
        price       : formatter.format(item.price.toNumber()),
        category    : item.category.name,
        size        : item.size.name,
        color       : item.color.value,
        createdAt   : format(item.createdAt, 'MMMM do, yyyy'),
    }))

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ProductClient data={ formattedProducts } />
            </div>
        </div>
    )
}

export default ProductPage