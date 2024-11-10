import Project from "@/models/Project";
import connectToMongoDb from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
    try {

      await connectToMongoDb();
      const projects = await Project.find({}).sort({ createdAt: -1 });
      return NextResponse.json(projects);
    } catch (error) {
      return NextResponse.json(
        { error: 'Failed to fetch projects' },
        { status: 500 }
      );
    }
  }