
import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs';
import { ObjectId } from 'bson'

import { prismadbPLSC, prismadbMongo } from '@/lib/prismadb';

//=====POST PRODUCTS========
export async function POST(
    req: Request,
    { params }: { params: { storeId: string } }
) {
    try {
        const { userId } = auth()
        const body = await req.json()
        const { name, price, categoryId, colorId, sizeId, images, isFeatured, isArchived } = body

        const productData: any = {
            id: new ObjectId().toString(),
            name,
            price,
            isFeatured,
            isArchived,
            categoryId,
            colorId,
            sizeId,
            storeId: params.storeId,
            images: {
                createMany: {
                    data: [
                        ...images.map((image: { url: string }) => image ),
                    ],
                },
            },
        }
        //console.log('storeData', storeData);
        if(!userId) {
            return new NextResponse("Unauthenticated", { status: 401 })
        }
        if(!name) {
            return new NextResponse("Name is required ", { status: 400 })
        }
        if(!images) {
            return new NextResponse("Images is required ", { status: 400 })
        }
        if(!price) {
            return new NextResponse("Price is required ", { status: 400 })
        }
        if(!categoryId) {
            return new NextResponse("Category ID is required ", { status: 400 })
        }
        if(!colorId) {
            return new NextResponse("Color ID is required ", { status: 400 })
        }
        if(!sizeId) {
            return new NextResponse("Size ID is required ", { status: 400 })
        }
        if (!params.storeId) {
            return new NextResponse("Store id is required", { status: 400 });
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
        const productMongo = await prismadbMongo.product.create({
            data: productData
        })

        //===PRISMA_PLANETSCALE===
        const productPlsc = await prismadbPLSC.product.create({
            data: productData
        })       

        return NextResponse.json( 
            {
                productPlsc, 
                productMongo 
            }, 
            { status: 201 }
        )
        
    } catch (error) {
        console.log('[PRODUCTS_POST_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}

//=====GET PRODUCT========
export async function GET(
    req: Request,
    { params }: { params: { storeId: string } }
) {
    try {
        const { searchParams } = new URL(req.url)
        const categoryId = searchParams.get('categoryId') || undefined
        const colorId    = searchParams.get('colorId') || undefined
        const sizeId     = searchParams.get('sizeId') || undefined
        const isFeatured = searchParams.get('isFeatured')
        
        if(!params.storeId) {
            return new NextResponse("Store id is required ", { status: 400 })
        }
       
        //===MONGOOSE_DB====       
        const productsMongo = await prismadbMongo.product.findMany({
            where: {
                storeId: params.storeId,
                categoryId,
                colorId,
                sizeId,
                isFeatured: isFeatured ? true : undefined,
                isArchived: false,
            },
            include: {
                images  : true,
                category: true,
                color   : true,
                size    : true,
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        //===PRISMA_PLANETSCALE===
        const productsPlsc = await prismadbPLSC.product.findMany({
            where: {
                storeId: params.storeId,
                categoryId,
                colorId,
                sizeId,
                isFeatured: isFeatured ? true : undefined,
                isArchived: false,
            },
            include: {
                images  : true,
                category: true,
                color   : true,
                size    : true,
            },
            orderBy: {
                createdAt: 'desc'
            }
        })       

        return NextResponse.json( 
            {
                productsPlsc, 
                productsMongo 
            }, 
            { status: 201 }
        )
        
    } catch (error) {
        console.log('[PRODUCTS_GET_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}