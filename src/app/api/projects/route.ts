import { NextResponse } from 'next/server';
import connectToMongoDb from '@/utils/dbConnect';
import Project from '@/models/Project';
export async function POST(request: Request) {
  try {
    await connectToMongoDb();
    const body = await request.json();
    
    const project = await Project.create(body);
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}

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