"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export default function UploadProject() {
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const fileInput = e.currentTarget.querySelector('input[type="file"]') as HTMLInputElement;
      const files = fileInput.files;
      
      if (!files) {
        throw new Error('No files selected');
      }

      // First, read all files
      const fileContents = await Promise.all(
        Array.from(files).map(async (file) => {
          return new Promise<{
            name: string;
            content: string | ArrayBuffer | null;
            type: string;
            size: number;
          }>((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => {
              resolve({
                name: file.name,
                content: e.target?.result || '',
                type: file.type,
                size: file.size,
              });
            };
            reader.readAsText(file);
          });
        })
      );

      // Create project with files
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          description: formData.get('description'),
          technology: formData.get('technology'),
          files: fileContents,
        }),
      });

      if (!response.ok) throw new Error('Failed to upload project');

      toast({
        title: "Success",
        description: "Project uploaded successfully",
      });

      // Reset form
      e.currentTarget.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload project",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload New Project</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Project Name</Label>
            <Input id="name" name="name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="technology">Technology</Label>
            <Select name="technology" required>
              <SelectTrigger>
                <SelectValue placeholder="Select technology" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nextjs">Next.js</SelectItem>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="typescript">TypeScript</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="files">Project Files</Label>
            <Input
              id="files"
              name="files"
              type="file"
              multiple
              required
              accept=".js,.jsx,.ts,.tsx,.py,.html,.css,.json"
            />
          </div>

          <Button type="submit" disabled={uploading} className="w-full">
            {uploading ? (
              "Uploading..."
            ) : (
              <>
                <Upload className="w-4 h-4 mr-2" />
                Upload Project
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}