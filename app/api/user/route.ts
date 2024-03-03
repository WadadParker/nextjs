import { NextRequest , NextResponse } from "next/server"
import {PrismaClient} from "@prisma/client"
const client = new PrismaClient();

export async function GET() {
    return Response.json({ username: "Wadad", email: "wadad@gmail.com" })
  }

export async function POST(req:NextRequest) {
    // Extract the body from request
    const body = await req.json();

    // Store the body in the database
    console.log(body);
    return NextResponse.json({username:body.username,email:body.password})
}

// Define all the API types GET, POST, DELETE, PUT whatever here as functions
// Like damn man, what a convinient way to do api calls