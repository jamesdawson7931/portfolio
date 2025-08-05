import "./styles/projectMenu.scss";
import { previews } from "../projectData/projectPreviews.ts";
import PreviewCard from "./PreviewCard.tsx";
import Title from "./Title";

interface ProjectMenuProps {
  selectedProject: string;
  onSelect: (selectedProjectId: string) => void;
}

export default function ProjectMenu({
  selectedProject,
  onSelect,
}: ProjectMenuProps) {
  return (
    <div className="project-menu">
      <Title />
      {previews.map((preview) => (
        <PreviewCard
          {...preview}
          description={preview.shortIntro}
          key={preview.id}
          isSelected={selectedProject === preview.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
