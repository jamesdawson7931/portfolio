import "./styles/preview.scss";
import { Link } from "react-router-dom";

interface PreviewProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default function Preview({
  id,
  title,
  description,
  imageUrl,
}: PreviewProps) {
  return (
    <div className={"preview"}>
      <img alt={title} src={imageUrl} className={"preview-image"} />
      <article className="description">{description}</article>
      <Link className="read-on-button" to={id}>
        Read on
      </Link>
    </div>
  );
}
