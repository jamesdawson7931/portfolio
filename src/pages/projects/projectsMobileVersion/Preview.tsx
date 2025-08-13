import "./styles/preview.scss";
import type { ProjectPreview } from "../projectsDesktopVersion/projectData/projectPreviews.ts";
import { Link } from "react-router-dom";
import cn from "classnames";

interface PreviewProps extends ProjectPreview {
  isSelected: boolean;
  onClick: (id: string) => void;
}

export function Preview({
  title,
  shortIntro,
  longIntro,
  previewImage,
  dateCreated,
  isSelected,
  id,
    onClick,
}: PreviewProps) {
  const selectedClass = isSelected ? "selected" : "";
  return (
    <div className={cn("preview", selectedClass)} onClick={() => onClick(id)}>
      <div className={cn("preview-card", selectedClass)}>
        <h3 className={"title"}>{title}</h3>
        <p className={"date-created"}>{dateCreated}</p>
        <article className={"short-intro"}>{shortIntro}</article>
      </div>
      <div className={cn("full-preview", selectedClass)} >
        <img src={previewImage} alt={title} className={"preview-image"} />
        <article className={"long-intro"}>{longIntro}</article>
        <Link className="read-on-button" to={id}>
          Read on
        </Link>
      </div>
    </div>
  );
}
