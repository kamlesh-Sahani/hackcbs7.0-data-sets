"use client"
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
import { mockUsers } from "@/lib/ChatData";

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export default function NewChatDialog() {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const handleCreateChat = async () => {
    if (selectedUsers.length === 0) return;

    // Simulate API call
    console.log("Creating chat with users:", selectedUsers);
    setSelectedUsers([]);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-[#003366]">New Chat</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-2">
            {mockUsers.map((user:any) => (
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
          className="mt-4 bg-[#003366] hover:bg-[#003366d1]"
        >
          Create Chat
        </Button>
      </DialogContent>
    </Dialog>
  );
}