import { createContext, type ReactNode, useState } from "react";
import projectsData, { type Project } from "../projects/projects.ts";

interface ProjectContextProps {
  projects: Project[];
  selectedProject?: string;
  setSelectedProject: (projectTitle: string) => void;
}

const initialContextState: ProjectContextProps = {
  projects: projectsData,
  setSelectedProject: () => {},
};

export const ProjectContext =
  createContext<ProjectContextProps>(initialContextState);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [projects] = useState<Project[]>(projectsData);
  const [selectedProject, setSelectedProject] = useState<string>(
    projects[0]?.title,
  );

  return (
    <ProjectContext.Provider
      value={{ projects, selectedProject, setSelectedProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
