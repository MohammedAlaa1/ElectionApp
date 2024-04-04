import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
}

//const prismadb = globalThis.prisma || new PrismaClient()
if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient();
    }
    
    const prismadb = globalThis.prisma;
    
    export default prismadb;