import { NextResponse } from 'next/server';
import connectToMongoDb from '@/utils/dbConnect';
import Chat from '@/models/chat';


export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const chatId = searchParams.get('chatId');
    
    await connectToMongoDb();
    const chat = await Chat.findById(chatId).populate('messages.sender');
    
    return NextResponse.json(chat.messages);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { chatId, senderId, content } = await request.json();
    
    await connectToMongoDb();
    const chat = await Chat.findById(chatId);
    
    const message = {
      sender: senderId,
      content,
      createdAt: new Date()
    };

    chat.messages.push(message);
    chat.lastMessage = {
      content,
      createdAt: new Date()
    };

    await chat.save();
    const populatedMessage = await Chat.populate(message, { path: 'sender' });
    

    
    return NextResponse.json(populatedMessage, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 400 }
    );
  }
}