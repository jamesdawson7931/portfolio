import "./styles/projectsDesktopVersion.scss";
import Page from "../../Page.tsx";
import ProjectMenu from "./projectMenu/ProjectMenu.tsx";
import ExpandedPreview from "./expandedPreview/ExpandedPreview.tsx";
import { previews } from "./projectData/projectPreviews.ts";
import { useState } from "react";

const previewIds = previews.map((preview) => preview.id);

export function ProjectsDesktopVersion() {
  const [selectedProject, setSelectedProject] = useState(previewIds[0]);

  return (
    <Page className={"projects-desktop-version-page"}>
      <ProjectMenu
        selectedProject={selectedProject}
        onSelect={(selectedProjectId) => setSelectedProject(selectedProjectId)}
      />
      <ExpandedPreview selectedProjectId={selectedProject} />
    </Page>
  );
}
