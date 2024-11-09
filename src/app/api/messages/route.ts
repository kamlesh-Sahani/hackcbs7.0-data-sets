import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Message from "@/lib/models/Message";
export async function GET(req: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const chatId = searchParams.get("chatId");
    const cursor = searchParams.get("cursor");
    const limit = 20;

    if (!chatId) {
      return NextResponse.json({ error: "Chat ID is required" }, { status: 400 });
    }

    let query = Message.find({ chatId });

    if (cursor) {
      query = query.where('_id').lt(cursor);
    }

    const messages = await query
      .sort({ createdAt: -1 })
      .limit(limit)
      .populate('sender', 'name avatar')
      .lean();

    return NextResponse.json(messages);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const { content, chatId, senderId, receiverId } = body;

    const message = await Message.create({
      content,
      chatId,
      senderId,
      receiverId,
    });

    const populatedMessage = await Message.findById(message._id)
      .populate('sender', 'name avatar')
      .lean();

    return NextResponse.json(populatedMessage);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}