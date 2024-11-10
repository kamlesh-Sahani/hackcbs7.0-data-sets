"use client"
import React from 'react'
 import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";
import {
  Search,
  Sun,
  Moon,
  Github,
  Users,
  MessageSquare,
  FileText,
  Rocket,
  BarChart,
} from "lucide-react";
import { FaFolder } from "react-icons/fa6";
const NavSearch = () => {
      const { setTheme } = useTheme();
  const [search, setSearch] = useState("");
  return (
    <div>
         <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search repositories..."
                className="pl-8 outline-none border-white shadow-none w-[400px]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}

              />
            </div>
          </div>
    </div>
  )
}

export default NavSearch
