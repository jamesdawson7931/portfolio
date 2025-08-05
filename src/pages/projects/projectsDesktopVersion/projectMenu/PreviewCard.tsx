import "./styles/previewCard.scss";
import cn from "classnames";

interface PreviewCardProps {
  id: string;
  title: string;
  dateCreated: string;
  description: string;
  isSelected: boolean;
  onSelect: (selectedProjectId: string) => void;
}

export default function PreviewCard({
  id,
  title,
  dateCreated,
  description,
  onSelect,
  isSelected,
}: PreviewCardProps) {
  const selectedClass = isSelected ? "selected" : "";

  return (
    <div
      className={cn("preview-card", selectedClass)}
      onClick={() => onSelect(id)}
    >
      <h3 className={"title"}>{title}</h3>
      <p className={"date-created"}>{dateCreated}</p>
      <article className="description">{description}</article>
    </div>
  );
}
