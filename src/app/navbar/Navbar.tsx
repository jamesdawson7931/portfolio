import "./styles/navbar.scss";
import {
  faCommentDots,
  faDiagramProject,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Option from "./Option.tsx";

export default function Navbar() {
  return (
    <nav id="navbar">
      <Option route={"/projects"} icon={faDiagramProject} />
      <Option route={"/aboutme"} icon={faUser} />
      <Option route={"/getintouch"} icon={faCommentDots} />
    </nav>
  );
}
