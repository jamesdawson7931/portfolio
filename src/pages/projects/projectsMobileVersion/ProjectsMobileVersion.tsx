import "./styles/projectsMobileVersion.scss";
import Page from "../../Page.tsx";
import Title from "./Title.tsx";
import { previews } from "../projectsDesktopVersion/projectData/projectPreviews.ts";
import { Preview } from "./Preview.tsx";

export function ProjectsMobileVersion() {
  return (
    <Page className={"projects-mobile-version-page"}>
      <Title />
      {previews.map((preview) => (
        <Preview isSelected={false} {...preview} />
      ))}
    </Page>
  );
}
