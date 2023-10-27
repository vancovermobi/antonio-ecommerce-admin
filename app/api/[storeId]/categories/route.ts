
import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs';
import { ObjectId } from 'bson'

import { prismadbPLSC, prismadbMongo } from '@/lib/prismadb';

//=====POST CATEGORY========
export async function POST(
    req: Request,
    { params }: { params: { storeId: string } }
) {
    try {
        const { userId } = auth()
        const body = await req.json()
        const { name, billboardId } = body

        const categoryData: any = {
            id: new ObjectId().toString(),
            name,
            billboardId,
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
        if(!billboardId) {
            return new NextResponse("Billboard ID is required ", { status: 400 })
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
        const categoryMongo = await prismadbMongo.category.create({
            data: categoryData
        })

        //===PRISMA_PLANETSCALE===
        const categoryPlsc = await prismadbPLSC.category.create({
            data: categoryData
        })       

        return NextResponse.json( 
            {
                categoryPlsc, 
                categoryMongo 
            }, 
            { status: 201 }
        )
        
    } catch (error) {
        console.log('[CATEGORY_POST_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}

//=====GET CATEGORIES========
export async function GET(
    req: Request,
    { params }: { params: { storeId: string } }
) {
    try {
        
        if(!params.storeId) {
            return new NextResponse("Store id is required ", { status: 400 })
        }
       
        //===MONGOOSE_DB====       
        const categoriesMongo = await prismadbMongo.category.findMany({
            where: {
                storeId: params.storeId,
            }
        })

        //===PRISMA_PLANETSCALE===
        const categoriesPlsc = await prismadbPLSC.category.findMany({
            where: {
                storeId: params.storeId,
            }
        })       

        return NextResponse.json( 
            {
                categoriesPlsc, 
                categoriesMongo 
            }, 
            { status: 201 }
        )
        
    } catch (error) {
        console.log('[CATEGORIES_GET_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}