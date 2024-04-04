import { NextResponse } from "next/server";
import prismadb from '@/lib/prisma/prismadb';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { email, id } = data;

        // Check if the user exists in the database
        const existingUser = await prismadb.voter.findUnique({
            where: {
                email,
            },
        });

        if (!existingUser) {
            return NextResponse.json({ message: "User not found" }, { status: 401 });
        }

        if (existingUser.voted) {
            return NextResponse.json({ message: "You have already voted" }, { status: 401 });
        }

        // Update the user's voted status
        await prismadb.voter.update({
            where: {
                email,
            },
            data: {
                voted: true,
            },
        });
        console.log(id)
         // Update the candidate's votes

        await prismadb.candidate.update({
            where: {
                id,
            },
            data: {
                votes: {
                    increment: 1, // Increment the votes by 1
                },
            },
        });

        return NextResponse.json({ message: "Vote recorded successfully" }, { status: 200 });
    } catch (error) {
        console.error('An error occurred:', error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
