export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  videoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  preview?: string;
} 