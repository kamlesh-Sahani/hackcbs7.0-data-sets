"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, FolderUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function RepoUpload() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { toast } = useToast();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file upload logic here
    toast({
      title: "Files received",
      description: `${acceptedFiles.length} files are being processed...`,
    });
  }, [toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle repository creation
    toast({
      title: "Repository Creation Started",
      description: "Your repository is being processed...",
    });
    
    setName("");
    setDescription("");
  };

  return (
  <div className="flex w-full justify-center items-center">
      <Card className=" max-w-3xl border-none">
      <CardHeader>
        <CardTitle>Create New Repository</CardTitle>
        <CardDescription>
          Create a new repository by uploading your project files
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div className="space-y-2 ">
            <Label htmlFor="name">Repository Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="my-awesome-project"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="A brief description of your project"
            />
          </div>

          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              isDragActive ? "border-primary bg-primary/10" : "border-muted"
            }`}
          >
            <input {...getInputProps()} />
            <FolderUp className="mx-auto h-12 w-12 text-muted-foreground" />
            <p className="mt-2 text-sm text-muted-foreground">
              Drag and drop your project files here, or click to select files
            </p>
          </div>

          <Button type="submit" className="w-full bg-[#003366]">
            <Upload className="mr-2 h-4 w-4" />
            Create Repository
          </Button>
        </form>
      </CardContent>
    </Card>
  </div>
  );
}