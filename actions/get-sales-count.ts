import { prismadbPLSC } from "@/lib/prismadb"

export const getSalesCount = async (storeId: string) => {
    
    const salesCount = await prismadbPLSC.order.count({
        where: {
            storeId,
            isPaid: true
        }
    })

    return salesCount
}