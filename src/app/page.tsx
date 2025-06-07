import ProjectCard from '@/components/ProjectCard';
import VisualDesignGallery from '@/components/VisualDesignGallery';
import UxDesignGallery from '@/components/UxDesignGallery';
import { Project } from '@/types/project';
import projectsData from '@/data/projects.json';

const projects: Project[] = projectsData.projects;

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 title">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <UxDesignGallery />
        <VisualDesignGallery />

        

        <div className="text-center text-gray-500 mt-12">
          The above representations are some of the projects I’ve worked on. Feel free to contact me to see more. 😄
        <br />👉 rakotosonsata@gmail.com
        </div>
      </div>
    </main>
  );
}
