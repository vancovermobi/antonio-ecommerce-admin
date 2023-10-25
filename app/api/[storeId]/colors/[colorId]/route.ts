
import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs';

import { prismadbPLSC, prismadbMongo } from '@/lib/prismadb';

//===GET COLOR===
export async function GET(
    req: Request,
    { params }: { params: { colorId: string } }
) {
    try {          
        if(!params.colorId) {
            return new NextResponse("Color id is required ", { status: 400 })
        }
       
        //===MONGOOSE_DB====      
        const colorMongo = await prismadbMongo.color.findUnique({
            where: {
                id: params.colorId,
            }
        })

        //===PRISMA_PLANETSCALE===
        const colorPlsc = await prismadbPLSC.color.findUnique({
            where: {
                id: params.colorId,
            }
        })       

        return NextResponse.json( 
            {
                colorPlsc, 
                colorMongo 
            }, 
            { status: 201 }
        )
        
    } catch (error) {
        console.log('[COLOR_GET_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}

//===UPDATE COLOR===
export async function PATCH(
    req: Request,
    { params }: { 
        params: { 
            storeId: string,
            colorId: string
        } 
    }
) {
    try {  
        const { userId } = auth()      
        const body = await req.json()
        const { name, value } = body

        const colorData: any = {            
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
        if(!params.colorId) {
            return new NextResponse("Color id is required ", { status: 400 })
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
        const colorMongo = await prismadbMongo.color.updateMany({
            where: {
                id: params.colorId,
            },
            data: colorData
        })

        //===PRISMA_PLANETSCALE===
        const colorPlsc = await prismadbPLSC.color.updateMany({
            where: {
                id: params.colorId,
            },
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
        console.log('[COLOR_PATCH_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}

//===DELETE COLOR===
export async function DELETE(
    req: Request,
    { params }: { 
        params: { 
            storeId: string,
            colorId: string
        } 
    }
) {
    try {  
        const { userId } = auth()  

        if(!userId) {
            return new NextResponse("Unauthenticated", { status: 403 })
        }          
        if(!params.colorId) {
            return new NextResponse("Color id is required ", { status: 400 })
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
        const colorMongo = await prismadbMongo.color.delete({
            where: {
                id: params.colorId,
            }
        })

        //===PRISMA_PLANETSCALE===
        const colorPlsc = await prismadbPLSC.color.delete({
            where: {
                id: params.colorId,
            }
        })       

        return NextResponse.json( 
            {
                colorPlsc, 
                colorMongo 
            }, 
            { status: 201 }
        )
        
    } catch (error) {
        console.log('[COLOR_DELETE_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}