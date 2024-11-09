"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter } from "lucide-react";

export function SearchFilters() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Language</DropdownMenuItem>
        <DropdownMenuItem>Date Updated</DropdownMenuItem>
        <DropdownMenuItem>Collaborators</DropdownMenuItem>
        <DropdownMenuItem>Status</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}