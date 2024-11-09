export const userData = {
    id: "1",
    username: "johndoe",
    email: "john@example.com",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Full-stack developer passionate about building scalable web applications. Experienced in React, Node.js, and cloud technologies.",
    location: "San Francisco, CA",
    joinedDate: "2023-01-15",
    socialLinks: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "Next.js",
      "MongoDB",
      "AWS",
      "Docker",
      "GraphQL",
      "Tailwind CSS",
      "Git",
    ],
    deployments: generateDummyDeployments(),
    stats: {
      monthlyDeployments: {
        "2024-03": 8,
        "2024-02": 6,
        "2024-01": 7,
        "2023-12": 5,
        "2023-11": 9,
        "2023-10": 4,
        "2023-09": 6,
        "2023-08": 8,
        "2023-07": 5,
        "2023-06": 7,
        "2023-05": 6,
        "2023-04": 4,
      },
      weeklyTotal: 3,
      yearlyTotal: 75,
    }
  };
  
  function generateDummyDeployments() {
    const deployments = [];
    const now = new Date();
    const projectNames = [
      'E-commerce Platform',
      'Blog Engine',
      'Analytics Dashboard',
      'Chat Application',
      'Task Manager',
      'Portfolio Website',
      'Weather App',
      'Recipe Finder',
      'Social Media Clone',
      'File Sharing System'
    ];
  
    // Generate deployments for the past year
    for (let i = 0; i < 50; i++) {
      const randomDays = Math.floor(Math.random() * 365);
      const deployDate = new Date(now.getTime() - (randomDays * 24 * 60 * 60 * 1000));
      
      deployments.push({
        projectName: projectNames[Math.floor(Math.random() * projectNames.length)],
        deployedAt: deployDate,
        status: Math.random() > 0.1 ? 'success' : 'failed',
        url: `https://project-${i}.example.com`,
      });
    }
  
    // Sort deployments by date (newest first)
    return deployments.sort((a, b) => b.deployedAt.getTime() - a.deployedAt.getTime());
  }