import "./styles/otherInterests.scss";

import CaveIcon from "../../icons/cave.svg?react";
import DndIcon from "../../icons/dnd.svg?react";
import HikingIcon from "../../icons/hiking.svg?react";
import PaletteIcon from "../../icons/palette.svg?react";
import PianoIcon from "../../icons/piano.svg?react";

interface InterestProps {
  Icon: typeof CaveIcon;
  title: string;
}

function Interest({ title, Icon }: InterestProps) {
  return (
    <div className={"interest"}>
      <Icon className={"interest-icon"} />
      <p className={"interest-title"}>{title}</p>
    </div>
  );
}

export default function OtherInterests() {
  return (
    <div id={"about-me-other-interests"}>
      <h3 className={"title"}>Other Interests</h3>
      <div className={"icons"}>
        <Interest Icon={HikingIcon} title={"Hiking"} />
        <Interest Icon={DndIcon} title={"D&D"} />
        <Interest Icon={PaletteIcon} title={"Drawing"} />
        <Interest Icon={PianoIcon} title={"Piano"} />
        <Interest Icon={CaveIcon} title={"Caving"} />
      </div>
    </div>
  );
}
