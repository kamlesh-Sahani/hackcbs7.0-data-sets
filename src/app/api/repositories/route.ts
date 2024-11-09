import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Repository from '@/lib/models/Repository';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const data = await req.json();
    
    const repository = await Repository.create({
      ...data,
      owner: 'temp-user-id', // Replace with actual user ID from auth
    });

    return NextResponse.json(repository);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create repository' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const repositories = await Repository.find({
      owner: 'temp-user-id', // Replace with actual user ID from auth
    });

    return NextResponse.json(repositories);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch repositories' },
      { status: 500 }
    );
  }
}