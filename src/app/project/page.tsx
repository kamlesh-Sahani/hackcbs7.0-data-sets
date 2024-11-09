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

function HomePage() {
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

export default HomePage;
