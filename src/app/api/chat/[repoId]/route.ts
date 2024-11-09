import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Chat from "@/lib/models/Chat";
import Message from "@/lib/models/Message";

export async function GET(req: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    const chats = await Chat.find({
      participants: userId,
    })
      .populate({
        path: 'participants',
        select: 'id name avatar',
      })
      .lean();

    // Get latest message for each chat
    const chatsWithLastMessage = await Promise.all(
      chats.map(async (chat) => {
        const lastMessage = await Message.findOne({ chatId: chat._id })
          .sort({ createdAt: -1 })
          .populate('sender', 'name avatar')
          .lean();

        return {
          ...chat,
          lastMessage,
        };
      })
    );

    return NextResponse.json(chatsWithLastMessage);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const { creatorId, participantIds, isGroup, name } = body;

    const chat = await Chat.create({
      creatorId,
      isGroup,
      name,
      participants: [creatorId, ...participantIds],
    });

    const populatedChat = await Chat.findById(chat._id)
      .populate('participants', 'name avatar')
      .lean();

    return NextResponse.json(populatedChat);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}