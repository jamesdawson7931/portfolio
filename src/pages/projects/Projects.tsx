import "./styles/projects.scss";
import { ProjectsDesktopVersion } from "./projectsDesktopVersion/ProjectsDesktopVersion.tsx";
import { ProjectsMobileVersion } from "./ProjectsMobileVersion.tsx";

export default function Projects() {
  return (
    <>
      <ProjectsDesktopVersion />
      <ProjectsMobileVersion />
    </>
  );
}
