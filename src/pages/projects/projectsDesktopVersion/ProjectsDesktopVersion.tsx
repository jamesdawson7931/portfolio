import Page from "../../Page.tsx";
import { useContext } from "react";
import { ProjectContext } from "../../../context/ProjectProvider.tsx";
import ProjectMenu from "./ProjectMenu.tsx";
import ExpandedPreview from "./ExpandedPreview.tsx";

export function ProjectsDesktopVersion() {
  const { projects, selectedProject, setSelectedProject } =
    useContext(ProjectContext);
  console.log(selectedProject);

  return (
    <Page className={"projects-desktop-version-page"}>
      <ProjectMenu />
      <ExpandedPreview />
    </Page>
  );
}
