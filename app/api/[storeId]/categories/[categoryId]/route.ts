
import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs';

import { prismadbPLSC, prismadbMongo } from '@/lib/prismadb';

//===GET CATEGORY===
export async function GET(
    req: Request,
    { params }: { params: { categoryId: string } }
) {
    try {          
        if(!params.categoryId) {
            return new NextResponse("category id is required ", { status: 400 })
        }
       
        //===MONGOOSE_DB====      
        const categoryMongo = await prismadbMongo.category.findUnique({
            where: {
                id: params.categoryId,
            },
            include: {
                billboard: true,
            }
        })

        //===PRISMA_PLANETSCALE===
        const categoryPlsc = await prismadbPLSC.category.findUnique({
            where: {
                id: params.categoryId,
            },
            include: {
                billboard: true,
            }
        })       

        return NextResponse.json( 
            {
                categoryPlsc, 
                categoryMongo 
            }, 
            { status: 201 }
        )
        
    } catch (error) {
        console.log('[CATEGORY_GET_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}

//===UPDATE CATEGORY===
export async function PATCH(
    req: Request,
    { params }: { 
        params: { 
            storeId: string,
            categoryId: string
        } 
    }
) {
    try {  
        const { userId } = auth()      
        const body = await req.json()
        const { name, billboardId } = body

        const categoryData: any = {            
            name, 
            billboardId,                     
        }
        if(!userId) {
            return new NextResponse("Unauthenticated", { status: 401 })
        }   
        if(!name) {
            return new NextResponse("Name is required ", { status: 400 })
        } 
        if (!billboardId) {
            return new NextResponse("Billboard ID is required", { status: 400 });
        }     
        if(!params.categoryId) {
            return new NextResponse("Category id is required ", { status: 400 })
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
        const categoryMongo = await prismadbMongo.category.update({
            where: {
                id: params.categoryId,
            },
            data: categoryData
        })

        //===PRISMA_PLANETSCALE===
        const categoryPlsc = await prismadbPLSC.category.update({
            where: {
                id: params.categoryId,
            },
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
        console.log('[BILLBOARD_PATCH_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}

//===DELETE CATEGORY===
export async function DELETE(
    req: Request,
    { params }: { 
        params: { 
            storeId     : string,
            categoryId  : string
        } 
    }
) {
    console.log("storeId:", params.categoryId);
    try {  
        const { userId } = auth()  

        if(!userId) {
            return new NextResponse("Unauthenticated", { status: 403 })
        }          
        if(!params.categoryId) {
            return new NextResponse("Category id is required ", { status: 400 })
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
        const categoryMongo = await prismadbMongo.category.delete({
            where: {
                id: params.categoryId,
            }
        })

        //===PRISMA_PLANETSCALE===
        const categoryPlsc = await prismadbPLSC.category.delete({
            where: {
                id: params.categoryId,
            }
        })       

        return NextResponse.json( 
            {
                categoryPlsc, 
                categoryMongo 
            }, 
            { status: 201 }
        )
        
    } catch (error) {
        console.log('[CATEGORY_DELETE_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}