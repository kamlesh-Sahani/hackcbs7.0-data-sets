"use client";

import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Send, Plus } from "lucide-react";
import ChatList from "@/components/chat/ChatList";
import MessageList from "@/components/chat/MessageList";
import NewChatDialog from "@/components/chat/NewChatDialog";

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  const handleSendMessage = async () => {
    if (!message.trim() || !selectedChat) return;

    try {
      await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: message,
          chatId: selectedChat,
          senderId: "current-user-id", // Replace with actual user ID
        }),
      });

      setMessage("");
      // Refresh messages or use real-time updates
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-12 gap-6 h-[80vh]">
          {/* Chat List Sidebar */}
          <div className="col-span-4 border rounded-lg">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Chats</h2>
                <NewChatDialog />
              </div>
              <ChatList onSelectChat={setSelectedChat} selectedChat={selectedChat} />
            </div>
          </div>

          {/* Chat Area */}
          <div className="col-span-8 border rounded-lg">
            {selectedChat ? (
              <div className="h-full flex flex-col">
                <div className="p-4 border-b">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">Chat Name</h3>
                      <p className="text-sm text-muted-foreground">Online</p>
                    </div>
                  </div>
                </div>

                <ScrollArea className="flex-1 p-4">
                  <MessageList chatId={selectedChat} />
                </ScrollArea>

                <div className="p-4 border-t">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Type a message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    />
                    <Button onClick={handleSendMessage}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-lg font-semibold">No Chat Selected</h3>
                  <p className="text-muted-foreground">
                    Select a chat from the sidebar or start a new conversation
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}