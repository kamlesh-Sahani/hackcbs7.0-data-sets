import Project from "@/models/Project";
import connectToMongoDb from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    try {
        await connectToMongoDb();
        const reqBody = await req.json();
        console.log(reqBody);
      const projects = await Project.findById(reqBody.id);
      return NextResponse.json(projects);
    } catch (error) {
        console.log(error);
      return NextResponse.json(
        { error: 'Failed to fetch projects' },
        { status: 500 }
      );
    }
  }