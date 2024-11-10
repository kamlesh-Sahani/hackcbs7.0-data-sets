// "use client";

// import { useEffect, useState } from "react";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// interface ChatListProps {
//   onSelectChat: (chatId: string) => void;
//   selectedChat: string | null;
// }

// interface Chat {
//   id: string;
//   name: string;
//   lastMessage?: {
//     content: string;
//     createdAt: string;
//   };
//   participants: {
//     user: {
//       name: string;
//       avatar: string;
//     };
//   }[];
// }

// export default function ChatList({ onSelectChat, selectedChat }: ChatListProps) {
//   const [chats, setChats] = useState<Chat[]>([]);

//   useEffect(() => {
//     const fetchChats = async () => {
//       try {
//         const response = await fetch("/api/chats?userId=current-user-id"); // Replace with actual user ID
//         const data = await response.json();
//         setChats(data);
//       } catch (error) {
//       }
//     };

//     fetchChats();
//   }, []);

//   return (
//     <ScrollArea className="h-[calc(80vh-8rem)]">
//       <div className="space-y-2">
//         {chats.map((chat) => (
//           <div
//             key={chat.id}
//             className={`p-3 rounded-lg cursor-pointer hover:bg-accent transition-colors ${
//               selectedChat === chat.id ? "bg-accent" : ""
//             }`}
//             onClick={() => onSelectChat(chat.id)}
//           >
//             <div className="flex items-center space-x-4">
//               <Avatar>
//                 <AvatarImage src={chat.participants[0]?.user.avatar} />
//                 <AvatarFallback>
//                   {chat.participants[0]?.user.name.charAt(0)}
//                 </AvatarFallback>
//               </Avatar>
//               <div className="flex-1 space-y-1">
//                 <div className="flex items-center justify-between">
//                   <p className="font-medium">{chat.name || chat.participants[0]?.user.name}</p>
//                   {chat.lastMessage && (
//                     <span className="text-xs text-muted-foreground">
//                       {new Date(chat.lastMessage.createdAt).toLocaleTimeString()}
//                     </span>
//                   )}
//                 </div>
//                 {chat.lastMessage && (
//                   <p className="text-sm text-muted-foreground truncate">
//                     {chat.lastMessage.content}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </ScrollArea>
//   );
// }
"use client"
import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockChats } from "@/lib/ChatData";
interface ChatListProps {
  onSelectChat: (chatId: string) => void;
  selectedChat: string | null;
}

interface Chat {
  id: string;
  name: string;
  lastMessage?: {
    content: string;
    createdAt: string;
  };
  participants: {
    user: {
      name: string;
      avatar: string;
    };
  }[];
}

export default function ChatList({ onSelectChat, selectedChat }: ChatListProps) {
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    // Simulate API call with mock data
    setChats(mockChats);
  }, []);

  return (
    <ScrollArea className="h-[calc(80vh-8rem)]">
      <div className="space-y-2">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`p-3 rounded-lg cursor-pointer hover:bg-accent transition-colors ${
              selectedChat === chat.id ? "bg-accent" : ""
            }`}
            onClick={() => onSelectChat(chat.id)}
          >
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={chat.participants[0]?.user.avatar} />
                <AvatarFallback>
                  {chat.participants[0]?.user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{chat.name || chat.participants[0]?.user.name}</p>
                  {chat.lastMessage && (
                    <span className="text-xs text-muted-foreground">
                      {new Date(chat.lastMessage.createdAt).toLocaleTimeString()}
                    </span>
                  )}
                </div>
                {chat.lastMessage && (
                  <p className="text-sm text-muted-foreground truncate">
                    {chat.lastMessage.content}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}