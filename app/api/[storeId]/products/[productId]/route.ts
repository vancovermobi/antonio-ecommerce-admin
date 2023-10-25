
import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs';

import { prismadbPLSC, prismadbMongo } from '@/lib/prismadb';

//===GET PRODUCT===
export async function GET(
    req: Request,
    { params }: { params: { productId: string } }
) {
    try {          
        if(!params.productId) {
            return new NextResponse("Product id is required ", { status: 400 })
        }
       
        //===MONGOOSE_DB====      
        const productMongo = await prismadbMongo.product.findUnique({
            where: {
                id: params.productId,
            },
            include: {
                images  : true,
                category: true,
                color   : true,
                size    : true,
            },
        })

        //===PRISMA_PLANETSCALE===
        const productPlsc = await prismadbPLSC.product.findUnique({
            where: {
                id: params.productId,
            },
            include: {
                images  : true,
                category: true,
                color   : true,
                size    : true,
            },
        })       

        return NextResponse.json( 
            {
                productPlsc, 
                productMongo 
            }, 
            { status: 201 }
        )
        
    } catch (error) {
        console.log('[PRODUCT_GET_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}

//===UPDATE PRODUCT===
export async function PATCH(
    req: Request,
    { params }: { 
        params: { 
            storeId: string,
            productId: string
        } 
    }
) {
    try {  
        const { userId } = auth()      
        const body = await req.json()
        const { name, price, categoryId, colorId, sizeId, images, isFeatured, isArchived } = body

        const productData: any = {
            name,
            price,
            isFeatured,
            isArchived,
            categoryId,
            colorId,
            sizeId,            
            images: {
                deleteMany: {},
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
        if(!params.productId) {
            return new NextResponse("product id is required ", { status: 400 })
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
        await prismadbMongo.product.update({
            where: {
                id: params.productId
            },
            data: productData,
        })   
        const productMongo = await prismadbMongo.product.update({
            where: {
                id: params.productId,
            },
            data: {
                images: {
                    createMany: {
                        data: [
                            ...images.map((image: { url: string }) => image )
                        ],
                    },
                },               
            },
        })

        //===PRISMA_PLANETSCALE===
        await prismadbPLSC.product.update({
            where: {
                id: params.productId
            },
            data: productData,
        })  
        const productPlsc = await prismadbPLSC.product.update({
            where: {
                id: params.productId,
            },
            data: {
                images: {
                    createMany: {
                        data: [
                            ...images.map((image: { url: string }) => image )
                        ],
                    },
                },               
            }
        })       

        return NextResponse.json( 
            {
                productPlsc, 
                productMongo 
            }, 
            { status: 201 }
        )
        
    } catch (error) {
        console.log('[PRODUCT_PATCH_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}

//===DELETE PRODUCT===
export async function DELETE(
    req: Request,
    { params }: { 
        params: { 
            storeId: string,
            productId: string
        } 
    }
) {
    try {  
        const { userId } = auth()  

        if(!userId) {
            return new NextResponse("Unauthenticated", { status: 403 })
        }          
        if(!params.productId) {
            return new NextResponse("Product id is required ", { status: 400 })
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
        const productMongo = await prismadbMongo.product.delete({
            where: {
                id: params.productId,
            }
        })

        //===PRISMA_PLANETSCALE===
        const productPlsc = await prismadbPLSC.product.delete({
            where: {
                id: params.productId,
            }
        })       

        return NextResponse.json( 
            {
                productPlsc, 
                productMongo 
            }, 
            { status: 201 }
        )
        
    } catch (error) {
        console.log('[PRODUCT_DELETE_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}