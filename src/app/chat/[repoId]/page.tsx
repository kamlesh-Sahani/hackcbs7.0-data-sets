"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: {
    id: string;
    name: string;
    avatar?: string;
  };
  createdAt: string;
}

export default function ChatPage() {
  const params = useParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add message to the list (replace with actual API call)
    const message: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: {
        id: "user-1",
        name: "Current User",
      },
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, message]);
    setNewMessage("");
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col">
      <Card className="flex-1 flex flex-col">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-2 ${
                  message.sender.id === "user-1" ? "flex-row-reverse" : ""
                }`}
              >
                <Avatar>
                  <AvatarImage src={message.sender.avatar} />
                  <AvatarFallback>
                    {message.sender.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div
                  className={`rounded-lg p-3 max-w-[70%] ${
                    message.sender.id === "user-1"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p className="text-sm font-medium mb-1">
                    {message.sender.name}
                  </p>
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <form onSubmit={sendMessage} className="p-4 border-t">
          <div className="flex space-x-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button type="submit">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}