import { PrismaClient as PrismaClientPLSC } from "@/prisma/generated/clientplsc"
import { PrismaClient as PrismaClientMongo } from "@/prisma/generated/clientmongo"

declare global {
    var prismaPLSC: PrismaClientPLSC | undefined
    var prismaMongo: PrismaClientMongo | undefined
}

export const prismadbPLSC = globalThis.prismaPLSC || new PrismaClientPLSC()
export const prismadbMongo = globalThis.prismaMongo || new PrismaClientMongo()

if(process.env.NODE_ENV !== 'production') { 
    globalThis.prismaPLSC = prismadbPLSC
    globalThis.prismaMongo = prismadbMongo
}

// export default { prismadbPLSC , prismadbMongo }