
import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs';

import { prismadbPLSC, prismadbMongo } from '@/lib/prismadb';

//===GET BILLBOARD===
export async function GET(
    req: Request,
    { params }: { params: { billboardId: string } }
) {
    try {          
        if(!params.billboardId) {
            return new NextResponse("Billboard id is required ", { status: 400 })
        }
       
        //===MONGOOSE_DB====      
        const billboardMongo = await prismadbMongo.billboard.findUnique({
            where: {
                id: params.billboardId,
            }
        })

        //===PRISMA_PLANETSCALE===
        const billboardPlsc = await prismadbPLSC.billboard.findUnique({
            where: {
                id: params.billboardId,
            }
        })       

        return NextResponse.json( 
            {
                billboardPlsc, 
                billboardMongo 
            }, 
            { status: 201 }
        )
        
    } catch (error) {
        console.log('[BILLBOARD_GET_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}

//===UPDATE BILLBOARD===
export async function PATCH(
    req: Request,
    { params }: { 
        params: { 
            storeId: string,
            billboardId: string
        } 
    }
) {
    try {  
        const { userId } = auth()      
        const body = await req.json()
        const { label, imageUrl } = body

        const billboardData: any = {            
            label,
            imageUrl, 
                      
        }
        if(!userId) {
            return new NextResponse("Unauthenticated", { status: 401 })
        }   
        if(!label) {
            return new NextResponse("Label is required ", { status: 400 })
        }
        if(!imageUrl) {
            return new NextResponse("Image Url is required ", { status: 400 })
        }       
        if(!params.billboardId) {
            return new NextResponse("Billboard id is required ", { status: 400 })
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
        const billboardMongo = await prismadbMongo.billboard.updateMany({
            where: {
                id: params.billboardId,
            },
            data: billboardData
        })

        //===PRISMA_PLANETSCALE===
        const billboardPlsc = await prismadbPLSC.billboard.updateMany({
            where: {
                id: params.billboardId,
            },
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
        console.log('[BILLBOARD_PATCH_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}

//===DELETE BILLBOARD===
export async function DELETE(
    req: Request,
    { params }: { 
        params: { 
            storeId: string,
            billboardId: string
        } 
    }
) {
    try {  
        const { userId } = auth()  

        if(!userId) {
            return new NextResponse("Unauthenticated", { status: 403 })
        }          
        if(!params.billboardId) {
            return new NextResponse("Billboard id is required ", { status: 400 })
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
        const billboardMongo = await prismadbMongo.billboard.delete({
            where: {
                id: params.billboardId,
            }
        })

        //===PRISMA_PLANETSCALE===
        const billboardPlsc = await prismadbPLSC.billboard.delete({
            where: {
                id: params.billboardId,
            }
        })       

        return NextResponse.json( 
            {
                billboardPlsc, 
                billboardMongo 
            }, 
            { status: 201 }
        )
        
    } catch (error) {
        console.log('[BILLBOARD_DELETE_ERROR]', error);
        return new NextResponse("Interal error", { status: 500})
    }
}