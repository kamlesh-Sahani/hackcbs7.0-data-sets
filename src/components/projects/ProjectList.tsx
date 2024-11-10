"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Folder, File, ChevronDown, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';

interface File {
  name: string;
  content: string;
  type: string;
  size: number;
  createdAt: string;
}

interface Project {
  _id: string;
  name: string;
  description: string;
  technology: string;
  files: File[];
  createdAt: string;
}

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());
  const [selectedFile, setSelectedFile] = useState<{ content: string; name: string } | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleProject = (projectId: string) => {
    setExpandedProjects((prev) => {
      const next = new Set(prev);
      if (next.has(projectId)) {
        next.delete(projectId);
      } else {
        next.add(projectId);
      }
      return next;
    });
  };

  if (loading) {
    return <div>Loading projects...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-4">
          {projects.map((project) => (
            <Card key={project._id}>
              <CardHeader className="cursor-pointer" onClick={() => toggleProject(project._id)}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Folder className="w-5 h-5 text-primary" />
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                  </div>
                  {expandedProjects.has(project._id) ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Badge>{project.technology}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {format(new Date(project.createdAt), 'PP')}
                  </span>
                </div>
              </CardHeader>
              {expandedProjects.has(project._id) && (
                <CardContent>
                  {project.description && (
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  )}
                  <div className="space-y-2">
                    {project.files.map((file, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => setSelectedFile({ content: file.content, name: file.name })}
                      >
                        <File className="w-4 h-4 mr-2" />
                        <span className="truncate">{file.name}</span>
                        <span className="ml-auto text-xs text-muted-foreground">
                          {(file.size / 1024).toFixed(1)} KB
                        </span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <Card className="h-[600px] overflow-hidden">
          <CardHeader>
            <CardTitle>{selectedFile ? selectedFile.name : 'Select a file to view'}</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="overflow-auto h-[500px] p-4 bg-muted rounded-lg">
              <code>{selectedFile ? selectedFile.content : 'No file selected'}</code>
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}