import "./styles/projectsMobileVersion.scss";
import Page from "../../Page.tsx";
import Title from "./Title.tsx";
import { previews } from "../projectsDesktopVersion/projectData/projectPreviews.ts";
import { Preview } from "./Preview.tsx";
import {useState} from "react";

const previewIds = previews.map((preview) => preview.id);

export function ProjectsMobileVersion() {
    const [selectedProject, setSelectedProject] = useState(previewIds[0]);

  return (
    <Page className={"projects-mobile-version-page"}>
      <Title />
      {previews.map((preview) => (
        <Preview isSelected={selectedProject === preview.id} {...preview} onClick={setSelectedProject}/>
      ))}
    </Page>
  );
}
