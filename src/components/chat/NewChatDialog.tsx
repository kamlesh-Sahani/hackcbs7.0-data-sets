"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export default function NewChatDialog() {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  // Mock data - replace with actual API call
  const users: User[] = [
    {
      id: "1",
      name: "Sarah Chen",
      email: "sarah.chen@example.com",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    },
    {
      id: "2",
      name: "Michael Torres",
      email: "michael.t@example.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    },
  ];

  const handleCreateChat = async () => {
    if (selectedUsers.length === 0) return;

    try {
      await fetch("/api/chats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          creatorId: "current-user-id", // Replace with actual user ID
          participantIds: selectedUsers,
          isGroup: selectedUsers.length > 1,
          name: selectedUsers.length > 1 ? "New Group Chat" : undefined,
        }),
      });

      setSelectedUsers([]);
      // Close dialog and refresh chat list
    } catch (error) {
      console.error("Failed to create chat:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Chat</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-2">
            {users.map((user) => (
              <div
                key={user.id}
                className={`p-3 rounded-lg cursor-pointer hover:bg-accent transition-colors ${
                  selectedUsers.includes(user.id) ? "bg-accent" : ""
                }`}
                onClick={() => {
                  setSelectedUsers((prev) =>
                    prev.includes(user.id)
                      ? prev.filter((id) => id !== user.id)
                      : [...prev, user.id]
                  );
                }}
              >
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <Button
          onClick={handleCreateChat}
          disabled={selectedUsers.length === 0}
          className="mt-4"
        >
          Create Chat
        </Button>
      </DialogContent>
    </Dialog>
  );
}