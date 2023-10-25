import { prismadbPLSC } from "@/lib/prismadb"

export const getStockCount = async (storeId: string) => {
    
    const stockCount = await prismadbPLSC.product.count({
        where: {
            storeId,
            isArchived: false,
        }
    })

    return stockCount
}