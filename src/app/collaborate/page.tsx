"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Users, FolderGit2, Mail, Plus } from "lucide-react";

interface Collaborator {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

interface Folder {
  id: string;
  name: string;
  path: string;
}

export default function CollaboratorsPage() {
  const [selectedFolder, setSelectedFolder] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  // Mock data - replace with actual data fetching
  const folders: Folder[] = [
    { id: "1", name: "Frontend", path: "/src/frontend" },
    { id: "2", name: "Backend", path: "/src/backend" },
    { id: "3", name: "Documentation", path: "/docs" },
  ];

  const collaborators: Collaborator[] = [
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
    {
      id: "3",
      name: "Emma Wilson",
      email: "emma.w@example.com",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    },
  ];

  const handleAddCollaborator = (collaboratorId: string) => {
    if (!selectedFolder) {
      alert("Please select a folder first");
      return;
    }
    // Implement your add collaborator logic here
    console.log(`Adding collaborator ${collaboratorId} to folder ${selectedFolder}`);
  };

  const handleAddByEmail = () => {
    if (!selectedFolder || !email) {
      alert("Please select a folder and enter an email");
      return;
    }
    // Implement your email invitation logic here
    console.log(`Inviting ${email} to folder ${selectedFolder}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">Project Collaborators</h1>
            <p className="text-muted-foreground">
              Manage access and permissions for your project folders.
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add People
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Collaborator</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="flex items-center space-x-4">
                  <Input
                    placeholder="Enter email address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button onClick={handleAddByEmail}>
                    <Mail className="mr-2 h-4 w-4" />
                    Invite
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FolderGit2 className="h-5 w-5" />
              <h2 className="text-lg font-semibold">Select Folder</h2>
            </div>
            <Select value={selectedFolder} onValueChange={setSelectedFolder}>
              <SelectTrigger>
                <SelectValue placeholder="Select a folder" />
              </SelectTrigger>
              <SelectContent>
                {folders.map((folder) => (
                  <SelectItem key={folder.id} value={folder.id}>
                    {folder.name} <span className="text-muted-foreground">({folder.path})</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <h2 className="text-lg font-semibold">Your Network</h2>
            </div>
            <ScrollArea className="h-[300px] rounded-md border p-4">
              <div className="space-y-4">
                {collaborators.map((collaborator) => (
                  <div
                    key={collaborator.id}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-accent transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={collaborator.avatar} alt={collaborator.name} />
                        <AvatarFallback>{collaborator.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{collaborator.name}</p>
                        <p className="text-sm text-muted-foreground">{collaborator.email}</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleAddCollaborator(collaborator.id)}
                      disabled={!selectedFolder}
                    >
                      Add
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Current Collaborators</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {folders.map((folder) => (
              <div key={folder.id} className="rounded-lg border p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{folder.name}</h3>
                  <Badge variant="secondary">{folder.path}</Badge>
                </div>
                <div className="flex -space-x-2">
                  {collaborators.slice(0, 3).map((collaborator) => (
                    <Avatar key={collaborator.id} className="border-2 border-background">
                      <AvatarImage src={collaborator.avatar} alt={collaborator.name} />
                      <AvatarFallback>{collaborator.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}