import { createContext, type ReactNode, useState } from "react";
import projectsData, { type Project } from "../projects/projects.ts";

export const ProjectContext = createContext<Project[]>(projectsData);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [projects] = useState<Project[]>(projectsData);

  return (
    <ProjectContext.Provider value={projects}>
      {children}
    </ProjectContext.Provider>
  );
}
