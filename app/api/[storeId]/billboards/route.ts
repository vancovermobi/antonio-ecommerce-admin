
import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs';
import { ObjectId } from 'bson'

import { prismadbPLSC, prismadbMongo } from '@/lib/prismadb';

//=====POST BILLBOARDS========
export async function POST(
    req: Request,
    { params }: { params: { storeId: string } }
) {
    try {
        const { userId } = auth()
        const body = await req.json()
        const { label, imageUrl } = body

        const billboardData: any = {
            id: new ObjectId().toString(),
            label,
            imageUrl,
            storeId: params.storeId,
        }
        //console.log('storeData', storeData);
        if(!userId) {
            return new NextResponse("Unauthenticated", { status: 401 })
        }
        if(!params.storeId) {
            return new NextResponse("Store id is required ", { status: 400 })
        }
        if(!label) {
            return new NextResponse("Label is required ", { status: 400 })
        }
        if(!imageUrl) {
            return new NextResponse("Image URL is required ", { status: 400 })
        }

        const storeByUserId = await prismadbPLSC.store.findFirst({
            where: {
                id: params.storeId,
                userId,
            }
        })
        if(!storeByUserId) {
            return new NextResponse("Unauthorized", { status: 405 })
        }

        //===MONGOOSE_DB====       
        const billboardMongo = await prismadbMongo.billboard.create({
            data: billboardData
        })

        //===PRISMA_PLANETSCALE===
        const billboardPlsc = await prismadbPLSC.billboard.create({
            data: billboardData
        })       

        return NextResponse.json( 
            {
                billboardPlsc, 
                billboardMongo 
            }, 
            { status: 201 }
        )
        
    } catch (error) {
        console.log('[STORES_POST_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}

//=====GET BILLBOARDS========
export async function GET(
    req: Request,
    { params }: { params: { storeId: string } }
) {
    try {
        
        if(!params.storeId) {
            return new NextResponse("Store id is required ", { status: 400 })
        }
       
        //===MONGOOSE_DB====       
        const billboardsMongo = await prismadbMongo.billboard.findMany({
            where: {
                storeId: params.storeId,
            }
        })

        //===PRISMA_PLANETSCALE===
        const billboardsPlsc = await prismadbPLSC.billboard.findMany({
            where: {
                storeId: params.storeId,
            }
        })       

        return NextResponse.json( 
            {
                billboardsPlsc, 
                billboardsMongo 
            }, 
            { status: 201 }
        )
        
    } catch (error) {
        console.log('[BILLBOARDS_GET_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}