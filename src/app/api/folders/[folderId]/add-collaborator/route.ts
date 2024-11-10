import { NextRequest, NextResponse } from 'next/server';
import connectToMongoDb from '@/utils/dbConnect';
import { Folder } from '@/models/Folders';
import { MyEventUser } from '@/models/User';

export async function POST(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  
  // Split the pathname and safely extract the folderId
  const folderId = pathname.split('/').pop();

  // Ensure folderId is valid, otherwise return a 400 error
  if (!folderId) {
    return NextResponse.json({ message: 'Folder ID is missing or invalid' }, { status: 400 });
  }

  // Parse the body from the request
  const { collaboratorId } = await req.json();
console.log(collaboratorId)
  await connectToMongoDb();

  try {
    console.log("Hello")
    // Fetch the folder by its ID
    const folder = await Folder.findById(folderId);
console.log(folder)
    if (!folder) {
      return NextResponse.json({ message: 'Folder not found' }, { status: 404 });
    }

    // Fetch the collaborator by ID
    const collaborator = await MyEventUser.findById(collaboratorId);

    if (!collaborator) {
      return NextResponse.json({ message: 'Collaborator not found' }, { status: 404 });
    }

    // Add the collaborator to the folder's collaborators array
    folder.collaborators.push(collaborator._id);
    await folder.save();

    return NextResponse.json({ message: 'Collaborator added successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error adding collaborator:', error);
    return NextResponse.json({ message: 'Error adding collaborator' }, { status: 500 });
  }
}
