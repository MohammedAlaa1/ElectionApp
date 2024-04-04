// import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from "@/lib/prisma/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { email, password } = data;

        const existingVoter = await prismadb.voter.findUnique({
            where: {
                email,
                password,
            },
        });

        if (existingVoter) {
            // Return the entire user object if found
            return NextResponse.json(existingVoter, { status: 200 });
        } else {
            // If user is not found, return an error response
            return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
        }
    } catch (error) {
        console.log("An error occurred: ", error);
        // Return an internal server error response
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
