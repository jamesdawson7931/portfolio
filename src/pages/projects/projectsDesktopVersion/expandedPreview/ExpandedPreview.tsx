import "./styles/expandedPreview.scss";
import { previews } from "../projectData/projectPreviews.ts";
import Preview from "./Preview.tsx";

interface ExpandedPreviewProps {
  selectedProjectId: string;
}

export default function ExpandedPreview({
  selectedProjectId,
}: ExpandedPreviewProps) {
  const selectedPreview = previews.find(
    (preview) => preview.id === selectedProjectId,
  );
  return (
    <div className="expanded-preview">
      <Preview
        key={selectedPreview.id}
        {...selectedPreview}
        description={selectedPreview.longIntro}
        imageUrl={selectedPreview?.previewImage}
      />
    </div>
  );
}
