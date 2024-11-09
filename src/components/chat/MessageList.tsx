"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
  id: string;
  content: string;
  createdAt: string;
  sender: {
    id: string;
    name: string;
    avatar: string;
  };
}

interface MessageListProps {
  chatId: string;
}

export default function MessageList({ chatId }: MessageListProps) {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`/api/messages?chatId=${chatId}`);
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    fetchMessages();
  }, [chatId]);

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex items-start space-x-2 ${
            message.sender.id === "current-user-id" // Replace with actual user ID
              ? "flex-row-reverse space-x-reverse"
              : ""
          }`}
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={message.sender.avatar} />
            <AvatarFallback>{message.sender.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div
            className={`rounded-lg p-3 max-w-[70%] ${
              message.sender.id === "current-user-id"
                ? "bg-primary text-primary-foreground"
                : "bg-muted"
            }`}
          >
            <p className="text-sm">{message.content}</p>
            <span className="text-xs text-muted-foreground block mt-1">
              {new Date(message.createdAt).toLocaleTimeString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}