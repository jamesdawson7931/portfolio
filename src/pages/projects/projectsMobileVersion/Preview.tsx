import "./styles/preview.scss";
import type { ProjectPreview } from "../projectsDesktopVersion/projectData/projectPreviews.ts";
import { Link } from "react-router-dom";

interface PreviewProps extends ProjectPreview {
  isSelected: boolean;
}

export function Preview({
  title,
  shortIntro,
  longIntro,
  previewImage,
  dateCreated,
  isSelected,
  id,
}: PreviewProps) {
  return (
    <div className={"preview"}>
      <div className={"preview-card"}>
        <h3 className={"title"}>{title}</h3>
        <p className={"date-created"}>{dateCreated}</p>
        <article className={"short-intro"}>{shortIntro}</article>
      </div>
      <div className={"full-preview"}>
        <img src={previewImage} alt={title} className={"preview-image"} />
        <article className={"long-intro"}>{longIntro}</article>
        <Link className="read-on-button" to={id}>
          Read on
        </Link>
      </div>
    </div>
  );
}
