// // // // "use client";

// // // // import { useEffect, useState } from "react";
// // // // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// // // // interface Message {
// // // //   id: string;
// // // //   content: string;
// // // //   createdAt: string;
// // // //   sender: {
// // // //     id: string;
// // // //     name: string;
// // // //     avatar: string;
// // // //   };
// // // // }

// // // // interface MessageListProps {
// // // //   chatId: string;
// // // // }

// // // // export default function MessageList({ chatId }: MessageListProps) {
// // // //   const [messages, setMessages] = useState<Message[]>([]);

// // // //   useEffect(() => {
// // // //     const fetchMessages = async () => {
// // // //       try {
// // // //         const response = await fetch(`/api/messages?chatId=${chatId}`);
// // // //         const data = await response.json();
// // // //         setMessages(data);
// // // //       } catch (error) {
// // // //         console.error("Failed to fetch messages:", error);
// // // //       }
// // // //     };

// // // //     fetchMessages();
// // // //   }, [chatId]);

// // // //   return (
// // // //     <div className="space-y-4">
// // // //       {messages.map((message) => (
// // // //         <div
// // // //           key={message.id}
// // // //           className={`flex items-start space-x-2 ${
// // // //             message.sender.id === "current-user-id" // Replace with actual user ID
// // // //               ? "flex-row-reverse space-x-reverse"
// // // //               : ""
// // // //           }`}
// // // //         >
// // // //           <Avatar className="h-8 w-8">
// // // //             <AvatarImage src={message.sender.avatar} />
// // // //             <AvatarFallback>{message.sender.name.charAt(0)}</AvatarFallback>
// // // //           </Avatar>
// // // //           <div
// // // //             className={`rounded-lg p-3 max-w-[70%] ${
// // // //               message.sender.id === "current-user-id"
// // // //                 ? "bg-primary text-primary-foreground"
// // // //                 : "bg-muted"
// // // //             }`}
// // // //           >
// // // //             <p className="text-sm">{message.content}</p>
// // // //             <span className="text-xs text-muted-foreground block mt-1">
// // // //               {new Date(message.createdAt).toLocaleTimeString()}
// // // //             </span>
// // // //           </div>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // }
// // // "use client"
// // // import { useEffect, useState } from "react";
// // // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// // // import { mockMessages } from "@/lib/ChatData";

// // // interface Message {
// // //   id: string;
// // //   content: string;
// // //   createdAt: string;
// // //   sender: {
// // //     id: string;
// // //     name: string;
// // //     avatar: string;
// // //   };
// // // }

// // // interface MessageListProps {
// // //   chatId: string;
// // // }

// // // export default function MessageList({ chatId }: MessageListProps) {
// // //   const [messages, setMessages] = useState<Message[]>([]);

// // //   useEffect(() => {
// // //     // Simulate API call with mock data
// // //     setMessages(mockMessages[chatId as keyof typeof mockMessages] || []);
// // //   }, [chatId]);

// // //   return (
// // //     <div className="space-y-4">
// // //       {messages.map((message) => (
// // //         <div
// // //           key={message.id}
// // //           className={`flex items-start space-x-2 ${
// // //             message.sender.id === "1" // Using Sarah Chen as current user
// // //               ? "flex-row-reverse space-x-reverse"
// // //               : ""
// // //           }`}
// // //         >
// // //           <Avatar className="h-8 w-8">
// // //             <AvatarImage src={message.sender.avatar} />
// // //             <AvatarFallback>{message.sender.name.charAt(0)}</AvatarFallback>
// // //           </Avatar>
// // //           <div
// // //             className={`rounded-lg p-3 max-w-[70%] ${
// // //               message.sender.id === "1"
// // //                 ? "bg-primary text-primary-foreground"
// // //                 : "bg-muted"
// // //             }`}
// // //           >
// // //             <p className="text-sm">{message.content}</p>
// // //             <span className="text-xs text-muted-foreground block mt-1">
// // //               {new Date(message.createdAt).toLocaleTimeString()}
// // //             </span>
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // }

// // "use client";
// // import { useState, useEffect } from "react";
// // import { ScrollArea } from "@/components/ui/scroll-area";
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// // interface Message {
// //   id: string;
// //   content: string;
// //   createdAt: string;
// //   sender: {
// //     id: string;
// //     name: string;
// //     avatar: string;
// //   };
// // }

// // interface MessageListProps {
// //   chatId: string;
// // }

// // export default function MessageList({ chatId }: MessageListProps) {
// //   const [messages, setMessages] = useState<Message[]>([]);

// //   useEffect(() => {
// //     // Load messages from localStorage
// //     const savedMessages = JSON.parse(localStorage.getItem(chatId) || "[]");
// //     setMessages(savedMessages);
// //   }, [chatId]);

// //   const handleSendMessage = (content: string) => {
// //     const newMessage = {
// //       id: `msg-${Date.now()}`,
// //       content,
// //       createdAt: new Date().toISOString(),
// //       sender: { id: "1", name: "User 1", avatar: "avatar-1.jpg" },
// //     };

// //     const updatedMessages = [...messages, newMessage];
// //     setMessages(updatedMessages);

// //     // Save to localStorage
// //     localStorage.setItem(chatId, JSON.stringify(updatedMessages));
// //   };

// //   return (
// //     <div className="space-y-4">
// //       {messages.map((message) => (
// //         <div
// //           key={message.id}
// //           className={`flex items-start space-x-2 ${
// //             message.sender.id === "1" ? "flex-row-reverse space-x-reverse" : ""
// //           }`}
// //         >
// //           <Avatar className="h-8 w-8">
// //             <AvatarImage src={message.sender.avatar} />
// //             <AvatarFallback>{message.sender.name.charAt(0)}</AvatarFallback>
// //           </Avatar>
// //           <div
// //             className={`rounded-lg p-3 max-w-[70%] ${
// //               message.sender.id === "1" ? "bg-primary text-primary-foreground" : "bg-muted"
// //             }`}
// //           >
// //             <p className="text-sm">{message.content}</p>
// //             <span className="text-xs text-muted-foreground block mt-1">
// //               {new Date(message.createdAt).toLocaleTimeString()}
// //             </span>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }
// "use client"
// import { useEffect } from "react";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// interface Message {
//   id: string;
//   content: string;
//   createdAt: string;
//   sender: {
//     id: string;
//     name: string;
//     avatar: string;
//   };
// }

// interface MessageListProps {
//   chatId: string;
//   messages: Message[];
// }

// export default function MessageList({ chatId, messages }: MessageListProps) {
//   useEffect(() => {
//     // Load messages from localStorage for the given chatId
//     const savedMessages = JSON.parse(localStorage.getItem(chatId) || "[]");
//     if (savedMessages) {
//       // You could update the local messages state here if necessary
//     }
//   }, [chatId]);

//   return (
//     <div className="space-y-4">
//       {messages.map((message) => (
//         <div
//           key={message.id}
//           className={`flex items-start space-x-2 ${message.sender.id === "1" ? "flex-row-reverse space-x-reverse" : ""}`}
//         >
//           <Avatar className="h-8 w-8">
//             <AvatarImage src={message.sender.avatar} />
//             <AvatarFallback>{message.sender.name.charAt(0)}</AvatarFallback>
//           </Avatar>
//           <div
//             className={`rounded-lg p-3 max-w-[70%] ${
//               message.sender.id === "1" ? "bg-primary text-primary-foreground" : "bg-muted"
//             }`}
//           >
//             <p className="text-sm">{message.content}</p>
//             <span className="text-xs text-muted-foreground block mt-1">
//               {new Date(message.createdAt).toLocaleTimeString()}
//             </span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
"use client"
import { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
  id: string;
  content: string;
  createdAt: string;
  sender: {
    id: string;
    name: string;
    avatar: string;
  };
}

interface MessageListProps {
  chatId: string;
  messages: Message[];
  currentUser: {
    id: string;
    name: string;
    avatar: string;
  };
}

export default function MessageList({ chatId, messages, currentUser }: MessageListProps) {
  useEffect(() => {
    // Messages are already loaded in state, no need to load them again from localStorage
  }, [chatId]);

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex items-start space-x-2 ${message.sender.id === currentUser.id ? "flex-row-reverse space-x-reverse" : ""}`}
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={message.sender.avatar} />
            <AvatarFallback>{message.sender.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div
            className={`rounded-lg p-3 max-w-[70%] ${
              message.sender.id === currentUser.id ? "bg-primary text-primary-foreground" : "bg-muted"
            }`}
          >
            <p className="text-sm">{message.content}</p>
            <span className="text-xs text-muted-foreground block mt-1">
              {new Date(message.createdAt).toLocaleTimeString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
