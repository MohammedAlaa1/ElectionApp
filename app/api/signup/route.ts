//import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from "@/lib/prisma/prismadb";

export async function POST(request: Request) {

try{
    const body = await request.json();
    const {username, email, password, full_name, DOB, national_id, gender, city} = body

    const newVoter = await prismadb.voter.create({
        data:{
            username, 
            email, 
            password, 
            full_name, 
            DOB, 
            national_id, 
            gender, 
            city, 
        }
    })

    return new Response(JSON.stringify(newVoter),{
        headers: {"test": "test post api"},
        status:201,
    })
}catch(error){
        console.log("an error accured: ", error)
        return new Response(JSON.stringify("internal error"), {status:500})
}

}