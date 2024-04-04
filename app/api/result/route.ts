import { NextResponse } from "next/server";
import prismadb from '@/lib/prisma/prismadb';

export async function GET() {
    try {
        // Fetch all candidates along with their votes
        const candidates = await prismadb.candidate.findMany({
            select: {
                id: true,
                name: true,
                votes: true,
                imagePath: true,
            },
        });
        

        return NextResponse.json(candidates, { status: 200 });
    } catch (error) {
        console.error('An error occurred:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
