"use client"
import ProjectCard from "@/components/ProjectCard";
import { useEffect, useState } from "react";
import axios from "axios";


function Project() {

  const [projects, setPorjects] = useState<any>();

  useEffect(() => {
    (
      async function () {
        const { data } = await axios.get("api/projects/all");
        console.log(data);
        setPorjects(data);
      }
    )();
  }, [])

  return (
    <div className="p-10 flex-1">
      <main className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-6">Your Pojects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects && projects.map((project: any) => (
            <ProjectCard
              url={project._id}
              key={project._id}
              name={project.repoName || project.name}
              description={project.description}
              stars={project.stars}
              updatedAt={project.updatedAt}
            />
          ))}
        </div>
      </main>


    </div>
  );
}

export default Project;


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