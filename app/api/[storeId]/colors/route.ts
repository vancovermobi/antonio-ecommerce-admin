
import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs';
import { ObjectId } from 'bson'

import { prismadbPLSC, prismadbMongo } from '@/lib/prismadb';

//=====POST COLOR========
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
        const colorMongo = await prismadbMongo.color.create({
            data: colorData
        })

        //===PRISMA_PLANETSCALE===
        const colorPlsc = await prismadbPLSC.color.create({
            data: colorData
        })       

        return NextResponse.json( 
            {
                colorPlsc, 
                colorMongo 
            }, 
            { status: 201 }
        )
        
    } catch (error) {
        console.log('[COLORS_POST_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}

//=====GET COLOR=======
export async function GET(
    req: Request,
    { params }: { params: { storeId: string } }
) {
    try {
        
        if(!params.storeId) {
            return new NextResponse("Store id is required ", { status: 400 })
        }
       
        //===MONGOOSE_DB====       
        const colorsMongo = await prismadbMongo.color.findMany({
            where: {
                storeId: params.storeId,
            }
        })

        //===PRISMA_PLANETSCALE===
        const colorsPlsc = await prismadbPLSC.color.findMany({
            where: {
                storeId: params.storeId,
            }
        })       

        return NextResponse.json( 
            {
                colorsPlsc, 
                colorsMongo 
            }, 
            { status: 201 }
        )
        
    } catch (error) {
        console.log('[COLORS_GET_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}