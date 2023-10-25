
import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs';

import { prismadbPLSC, prismadbMongo } from '@/lib/prismadb';

//===GET SIZE===
export async function GET(
    req: Request,
    { params }: { params: { sizeId: string } }
) {
    try {          
        if(!params.sizeId) {
            return new NextResponse("Size id is required ", { status: 400 })
        }
       
        //===MONGOOSE_DB====      
        const sizeMongo = await prismadbMongo.size.findUnique({
            where: {
                id: params.sizeId,
            }
        })

        //===PRISMA_PLANETSCALE===
        const sizePlsc = await prismadbPLSC.size.findUnique({
            where: {
                id: params.sizeId,
            }
        })       

        return NextResponse.json( 
            {
                sizePlsc, 
                sizeMongo 
            }, 
            { status: 201 }
        )
        
    } catch (error) {
        console.log('[SIZE_GET_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}

//===UPDATE SIZE===
export async function PATCH(
    req: Request,
    { params }: { 
        params: { 
            storeId: string,
            sizeId: string
        } 
    }
) {
    try {  
        const { userId } = auth()      
        const body = await req.json()
        const { name, value } = body

        const sizeData: any = {            
            name,
            value, 
                      
        }
        if(!userId) {
            return new NextResponse("Unauthenticated", { status: 401 })
        }   
        if(!name) {
            return new NextResponse("Name is required ", { status: 400 })
        }
        if(!value) {
            return new NextResponse("Value Url is required ", { status: 400 })
        }       
        if(!params.sizeId) {
            return new NextResponse("size id is required ", { status: 400 })
        }
        const storeByUserId = await prismadbPLSC.store.findFirst({
            where: {
                id: params.storeId,
                userId,
            }
        })
        if(!storeByUserId) {
            return new NextResponse("Unauthorized", { status: 403 })
        }
        
        //===MONGOOSE_DB====      
        const sizeMongo = await prismadbMongo.size.updateMany({
            where: {
                id: params.sizeId,
            },
            data: sizeData
        })

        //===PRISMA_PLANETSCALE===
        const sizePlsc = await prismadbPLSC.size.updateMany({
            where: {
                id: params.sizeId,
            },
            data: sizeData
        })       

        return NextResponse.json( 
            {
                sizePlsc, 
                sizeMongo 
            }, 
            { status: 201 }
        )
        
    } catch (error) {
        console.log('[SIZE_PATCH_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}

//===DELETE SIZE===
export async function DELETE(
    req: Request,
    { params }: { 
        params: { 
            storeId: string,
            sizeId: string
        } 
    }
) {
    try {  
        const { userId } = auth()  

        if(!userId) {
            return new NextResponse("Unauthenticated", { status: 403 })
        }          
        if(!params.sizeId) {
            return new NextResponse("size id is required ", { status: 400 })
        }
        const storeByUserId = await prismadbPLSC.store.findFirst({
            where: {
                id: params.storeId,
                userId,
            }
        })
        if(!storeByUserId) {
            return new NextResponse("Unauthorized", { status: 403 })
        }

        //===MONGOOSE_DB====      
        const sizeMongo = await prismadbMongo.size.delete({
            where: {
                id: params.sizeId,
            }
        })

        //===PRISMA_PLANETSCALE===
        const sizePlsc = await prismadbPLSC.size.delete({
            where: {
                id: params.sizeId,
            }
        })       

        return NextResponse.json( 
            {
                sizePlsc, 
                sizeMongo 
            }, 
            { status: 201 }
        )
        
    } catch (error) {
        console.log('[SIZE_DELETE_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}