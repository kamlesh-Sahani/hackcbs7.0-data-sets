// import React from 'react'

// const Navbar = () => {
//   return (
//     <header className="bg-gray-800 text-white p-4">
//     <div className="container mx-auto flex justify-between items-center">
//       <h1 className="text-3xl font-bold">Datasets</h1>
//       <nav>
//         <ul className="flex space-x-4">
//           <li><a href="#" className="hover:underline">Home</a></li>
//           <li><a href="#" className="hover:underline">Explore</a></li>
//           <li><a href="#" className="hover:underline">Create Project</a></li>
//           <li><a href="#" className="hover:underline">Profile</a></li>
//         </ul>
//       </nav>
//     </div>
//   </header>
//   )
// }

// export default Navbar


// "use client";
import { handleSignOut } from "@/action/auth.action";
// import { useState } from "react";
import { ScrollText } from 'lucide-react';
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
 
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
import { auth } from "@/auth";
import NavSearch from "./NavSearch";
import { getUserData } from "@/action/auth.action";
export interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
  image?: string;

}
export default async function Navbar() {
  // const { setTheme } = useTheme();
  // const [search, setSearch] = useState("");
  const fetchedUser = await getUserData();
  const formattedUser: User[] =
    fetchedUser && Array.isArray(fetchedUser)
      ? fetchedUser.map((userData: any) => ({
          id: userData.id as string,
          name: userData.name,
          email: userData.email.toString(),
          role: userData.role?.toString() || "",
          image: userData.image,
        }))
      : [];
  const session = await auth();
console.log(session)
  return (
    <header className=" w-full border-b bg-[#003366]  px-10 text-white py-2 mb-5">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <Github className="h-6 w-6" />
            <span className="font-bold">Datasets</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end gap-10 ">
       <NavSearch/>
          {!session ? (
            <Link href="/login">
              <Button variant="default">Sign In</Button>
            </Link>
          ) : (

            <form action={handleSignOut}>

              <NavigationMenu>
                <NavigationMenuList className="flex gap-4 ">
                  <NavigationMenuItem >
                    <Link href="/upload" legacyBehavior passHref>
                      <NavigationMenuLink className=" hover:text-gray-300 flex  items-center">
                        <FaFolder className="mr-2 h-4 w-4" />
                        Upload
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/collaborate" legacyBehavior passHref>
                      <NavigationMenuLink className=" hover:text-gray-300 flex  items-center" >
                        <Users className="mr-2 h-4 w-4" />
                        Collaborate
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/chat" legacyBehavior passHref>
                      <NavigationMenuLink className=" hover:text-gray-300 flex  items-center">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Chat
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/challenge" legacyBehavior passHref>
                      <NavigationMenuLink className=" hover:text-gray-300 flex  items-center">
                      <ScrollText className="mr-2 h-4 w-4" />
                        Challenges
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  
                  <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="/user/profile">
                    <div className="flex items-center justify-center hover:text-gray-700">
                      <Avatar className="bg-white">
                        <AvatarImage
                          src={
                            formattedUser[0]?.image ||
                            "/path/to/default-avatar.png"
                          }
                          alt={formattedUser[0]?.name || "User"}
                        />
                        <AvatarFallback>
                          {formattedUser[0]?.name?.charAt(0) || "U"}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent className=" border-none">
                  <p className="">Profile</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
 
                  <NavigationMenuItem>
                      <NavigationMenuLink className=" hover:text-gray-300 flex  items-center">
                        {/* <MessageSquare className="mr-2 h-4 w-4" />
                      Logout */}
                        <button
                          type="submit"
                          className=" text-white rounded-full  px-2 py-2 transition duration-200"
                        >
                          Logout
                          {/* <RiLogoutCircleRLine /> */}
                        </button>
                      </NavigationMenuLink>
                  
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </form>
          )}
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
      </div>
    </header>
  );
}

