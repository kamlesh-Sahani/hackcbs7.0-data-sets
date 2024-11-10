// Mock data for development
export const mockUsers = [
    {
      id: "1",
      name: "Sarah Chen",
      email: "sarah.chen@example.com",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    },
    {
      id: "2",
      name: "Michael Torres",
      email: "michael.t@example.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    },
    {
      id: "3",
      name: "Emma Wilson",
      email: "emma.w@example.com",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    },
  ];
  
  export const mockChats = [
    {
      id: "chat1",
      name: "Project Discussion",
      lastMessage: {
        content: "Let's schedule a meeting tomorrow",
        createdAt: "2024-01-20T10:30:00Z",
      },
      participants: [
        {
          user: mockUsers[0],
        },
        {
          user: mockUsers[1],
        },
      ],
    },
    {
      id: "chat2",
      name: "Team Chat",
      lastMessage: {
        content: "Great work everyone!",
        createdAt: "2024-01-20T09:15:00Z",
      },
      participants: [
        {
          user: mockUsers[2],
        },
        {
          user: mockUsers[0],
        },
      ],
    },
  ];
  
  export const mockMessages = {
    chat1: [
      {
        id: "msg1",
        content: "Hi there! How's the project going?",
        createdAt: "2024-01-20T10:00:00Z",
        sender: mockUsers[0],
      },
      {
        id: "msg2",
        content: "It's going well! I've completed the initial design",
        createdAt: "2024-01-20T10:15:00Z",
        sender: mockUsers[1],
      },
      {
        id: "msg3",
        content: "Let's schedule a meeting tomorrow",
        createdAt: "2024-01-20T10:30:00Z",
        sender: mockUsers[0],
      },
    ],
    chat2: [
      {
        id: "msg4",
        content: "Team, please review the latest updates",
        createdAt: "2024-01-20T09:00:00Z",
        sender: mockUsers[2],
      },
      {
        id: "msg5",
        content: "Looks perfect to me!",
        createdAt: "2024-01-20T09:10:00Z",
        sender: mockUsers[0],
      },
      {
        id: "msg6",
        content: "Great work everyone!",
        createdAt: "2024-01-20T09:15:00Z",
        sender: mockUsers[2],
      },
    ],
  };