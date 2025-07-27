import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface OptionProps {
  route: string;
  icon: IconDefinition;
  onClick?: () => void;
}

export default function Option({ route, icon, onClick }: OptionProps) {
  return (
    <Link to={route} className={"option"} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
}
