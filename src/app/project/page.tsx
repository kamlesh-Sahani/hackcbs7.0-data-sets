
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Project from "@/components/projects/Project";
async function MainProject() {
  const session = await auth();
  if (!session) {
    redirect("/login");
    return null;
  }
  return (
    <>
      <Project />
    </>
  );
}

export default MainProject;
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