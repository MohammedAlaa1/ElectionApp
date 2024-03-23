// import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from "@/lib/prisma/prismadb";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password } = body;


        const existingVoter = await prismadb.voter.findFirst({
            where: {
                email,
                password,
            },
        });

        if (existingVoter) {
            // Return the user data if found
            return new Response(JSON.stringify(existingVoter), {
                headers: { "Content-Type": "application/json" },
                status: 200,
            });
        } else {
            // If user is not found, return an error response
            return new Response(
                JSON.stringify({ message: "Invalid email or password" }),
                {
                    headers: { "Content-Type": "application/json" },
                    status: 401, // Unauthorized
                }
            );
        }
    } catch (error) {
        console.log("An error occurred: ", error);
        // Return an internal server error response
        return new Response(
            JSON.stringify({ message: "Internal server error" }),
            { status: 500 }
        );
    }
}
