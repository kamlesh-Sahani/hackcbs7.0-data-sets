"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Trash2, Eye, GitFork } from "lucide-react";

// Mock data - replace with actual data fetching
const repos = [
  {
    id: 1,
    name: "awesome-project",
    description: "A revolutionary web application",
    lastUpdated: "2024-03-20",
    language: "TypeScript",
  },
  {
    id: 2,
    name: "data-visualization",
    description: "Interactive data visualization library",
    lastUpdated: "2024-03-19",
    language: "JavaScript",
  },
];

export function RepoList() {
  return (
    <Card className="">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Repository</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead>Language</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {repos.map((repo) => (
            <TableRow key={repo.id}>
              <TableCell className="font-medium">{repo.name}</TableCell>
              <TableCell>{repo.description}</TableCell>
              <TableCell>{repo.lastUpdated}</TableCell>
              <TableCell>{repo.language}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <GitFork className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}