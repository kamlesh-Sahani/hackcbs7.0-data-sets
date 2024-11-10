"use client"
import ProjectCard from "@/components/ProjectCard";
const projects = [
  {
    name: "Project One",
    description:
      "A description of the project goes here. This can be a short summary or details about what the project does.",
    language: "JavaScript",
    stars: 45,
    forks: 10,
    updated: "3 days ago",
    url: "3289432",
  },
  {
    name: "Project Two",
    description:
      "This is another project description. It can include features, goals, or any relevant info about the repository.",
    language: "Python",
    stars: 80,
    forks: 25,
    updated: "1 week ago",
    url: "53455#",
  },
  {
    name: "Project Three",
    description:
      "This is a third example of a project description. You can add more details about the features and functionalities.",
    language: "Ruby",
    stars: 120,
    forks: 60,
    updated: "2 weeks ago",
    url: "43554353#",
  },
];

 function Project() {

  return (
    <div className="p-10 flex-1">
      <main className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-6">Your Pojects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
            key={index}
            url={project.url}
            name={project.name}
            description={project.description}
            stars={project.stars}
            updated={project.updated}
            language={project.language}
            />
          ))}
        </div>
      </main>

      
    </div>
  );
}

export default Project;
// import { Metadata } from 'next';
// import ProjectList from '@/components/projects/ProjectList';
// import UploadProject from '@/components/projects/UploadProject';

// export const metadata: Metadata = {
//   title: 'Projects | Dashboard',
//   description: 'Upload and manage your code projects',
// };

// export default function ProjectsPage() {
//   return (
//     <div className="min-h-screen bg-background">
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-8">Projects</h1>
//         <div className="grid gap-8">
//           <UploadProject />
//           <ProjectList />
//         </div>
//       </div>
//     </div>
//   );
// }