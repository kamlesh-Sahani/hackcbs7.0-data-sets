import { NextResponse } from 'next/server';
import connectToMongoDb from '@/utils/dbConnect';
import Chat from '@/models/chat';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    await connectToMongoDb();
    const chats = await Chat.find({
      participants: userId
    }).populate('participants');
    
    return NextResponse.json(chats);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch chats' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { participants } = await request.json();
    
    await connectToMongoDb();
    const chat = new Chat({ participants });
    await chat.save();
    
    const populatedChat = await chat.populate('participants');
    return NextResponse.json(populatedChat, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create chat' },
      { status: 400 }
    );
  }
}