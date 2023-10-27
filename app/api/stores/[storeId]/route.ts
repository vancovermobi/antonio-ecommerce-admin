
import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs';

import { prismadbPLSC, prismadbMongo } from '@/lib/prismadb';

//===DELETE STORE===
export async function PATCH(
    req: Request,
    { params }: { params: { storeId: string } }
) {
    try {
        const { userId } = auth()
        const body = await req.json()
        const { name } = body
        // console.log('userId', userId);
        const storeData: any = {            
            name,           
        }
        //console.log('storeData', storeData);
        if(!userId) {
            return new NextResponse("Unauthenticated", { status: 403 })
        }
        if(!name) {
            return new NextResponse("Name is required ", { status: 400 })
        }
        if(!params.storeId) {
            return new NextResponse("Store id is required ", { status: 400 })
        }
        
        //===MONGOOSE_DB====      
        const storeMongo = await prismadbMongo.store.updateMany({
            where: {
                id: params.storeId,
                userId,
            },
            data: storeData
        })

        //===PRISMA_PLANETSCALE===
        const storePlsc = await prismadbPLSC.store.updateMany({
            where: {
                id: params.storeId,
                userId,
            },
            data: storeData
        })       

        return NextResponse.json( 
            {
                storePlsc, 
                storeMongo 
            }, 
            { status: 201 }
        )
        
    } catch (error) {
        console.log('[STORES_PATCH_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}

//===DELETE STORE===
export async function DELETE(
    req: Request,
    { params }: { params: { storeId: string } }
) {
    try {
        const { userId } = auth()
        
        if(!userId) {
            return new NextResponse("Unauthenticated", { status: 403 })
        }       
        if(!params.storeId) {
            return new NextResponse("Store id is required ", { status: 400 })
        }

        //===MONGOOSE_DB====      
        const storeMongo = await prismadbMongo.store.deleteMany({
            where: {
                id: params.storeId,
                userId,
            }
        })

        //===PRISMA_PLANETSCALE===
        const storePlsc = await prismadbPLSC.store.deleteMany({
            where: {
                id: params.storeId,
                userId,
            }
        })       

        return NextResponse.json( 
            {
                storePlsc, 
                storeMongo 
            }, 
            { status: 201 }
        )
        
    } catch (error) {
        console.log('[STORES_DELETE_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}