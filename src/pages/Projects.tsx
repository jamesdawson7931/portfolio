import { ProjectContext } from "../context/ProjectProvider.tsx";
import { useContext } from "react";

export default function Projects() {
  const projects = useContext(ProjectContext);
  return <div>projects</div>;
}
