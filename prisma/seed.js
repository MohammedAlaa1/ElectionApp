import  Pool  from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

const connectionString = `${process.env.DATABASE_URL}`
const prisma = new PrismaClient()

async function main() {
    const alice = await prisma.voter.upsert({
        where: { email: 'mohamed@prisma.io' },
        update: {},
        create: {
        username: 'mohamed.elhakim',
        email: 'mohamed@prisma.io',
        password: 'mohamed2020',
        full_name:'mohamed alaa mohamed',
        DOB:'17/6/2001',
        national_id: '12345678912345',
        gender: 'male',
        city: 'Cairo',
        voted: false
        },
    })

    console.log({ alice })
    }
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })