import "./styles/option.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface OptionProps {
  route: string;
  icon: IconDefinition;
}

export default function Option({ route, icon }: OptionProps) {
  return (
    <Link to={route} className={"option"}>
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
}
