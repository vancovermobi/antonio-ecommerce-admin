
import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs';
import { ObjectId } from 'bson'

import { prismadbPLSC, prismadbMongo } from '@/lib/prismadb';

export async function POST(req: Request) {
    try {
        const { userId } = auth()
        const body = await req.json()
        const { name } = body
        // console.log('userId', userId);
        const storeData: any = {
            id: new ObjectId().toString(),
            name,
            userId,
        }
        //console.log('storeData', storeData);
        if(!userId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        if(!name) {
            return new NextResponse("Name is required ", { status: 400 })
        }
        //===MONGOOSE_DB====   
        const storeMongo = await prismadbMongo.store.create({
            data: storeData
        })

        //===PRISMA_PLANETSCALE===
        const storePlsc = await prismadbPLSC.store.create({
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
        console.log('[STORES_POST_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}