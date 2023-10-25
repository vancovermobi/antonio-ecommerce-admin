
import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs';
import { ObjectId } from 'bson'

import { prismadbPLSC, prismadbMongo } from '@/lib/prismadb';

//=====POST SIZE========
export async function POST(
    req: Request,
    { params }: { params: { storeId: string } }
) {
    try {
        const { userId } = auth()
        const body = await req.json()
        const { name, value } = body

        const colorData: any = {
            id: new ObjectId().toString(),
            name,
            value,
            storeId: params.storeId,
        }
        //console.log('storeData', storeData);
        if(!userId) {
            return new NextResponse("Unauthenticated", { status: 401 })
        }
        if(!params.storeId) {
            return new NextResponse("Store id is required ", { status: 400 })
        }
        if(!name) {
            return new NextResponse("Name is required ", { status: 400 })
        }
        if(!value) {
            return new NextResponse("Value is required ", { status: 400 })
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
        const sizeMongo = await prismadbMongo.size.create({
            data: colorData
        })

        //===PRISMA_PLANETSCALE===
        const sizePlsc = await prismadbPLSC.size.create({
            data: colorData
        })       

        return NextResponse.json( 
            {
                sizePlsc, 
                sizeMongo 
            }, 
            { status: 201 }
        )
        
    } catch (error) {
        console.log('[SIZES_POST_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}

//=====GET SIZE========
export async function GET(
    req: Request,
    { params }: { params: { storeId: string } }
) {
    try {
        
        if(!params.storeId) {
            return new NextResponse("Store id is required ", { status: 400 })
        }
       
        //===MONGOOSE_DB====       
        const sizesMongo = await prismadbMongo.size.findMany({
            where: {
                storeId: params.storeId,
            }
        })

        //===PRISMA_PLANETSCALE===
        const sizesPlsc = await prismadbPLSC.size.findMany({
            where: {
                storeId: params.storeId,
            }
        })       

        return NextResponse.json( 
            {
                sizesPlsc, 
                sizesMongo 
            }, 
            { status: 201 }
        )
        
    } catch (error) {
        console.log('[SIZES_GET_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}