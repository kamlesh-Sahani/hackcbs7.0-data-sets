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

export default async function Navbar() {
  // const { setTheme } = useTheme();
  // const [search, setSearch] = useState("");
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
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search repositories..."
                className="pl-8 outline-none border-white shadow-none w-[400px]"
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}

              />
            </div>
          </div>
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

