import "./styles/technologies.scss";
import ReactIcon from "../../icons/react.svg?react";
import FirebaseIcon from "../../icons/firebase.svg?react";
import ViteIcon from "../../icons/vite.svg?react";
import FigmaIcon from "../../icons/figma.svg?react";
import ExpressIcon from "../../icons/express.svg?react";
import StripeIcon from "../../icons/stripe.svg?react";
import GitIcon from "../../icons/git.svg?react";
import WallabyIcon from "../../icons/wallaby.svg?react";
import MuiIcon from "../../icons/mui.svg?react";
import SassIcon from "../../icons/sass.svg?react";
import JestIcon from "../../icons/jest.svg?react";

interface TechnologyProps {
  Icon: typeof ReactIcon;
  title: string;
}

function Technology({ title, Icon }: TechnologyProps) {
  return (
    <div className={"technology"}>
      <Icon className={"technology-icon"} />
      <p className={"technology-title"}>{title}</p>
    </div>
  );
}

export default function Technologies() {
  return (
    <div id={"about-me-technologies"}>
      <h3 className={"title"}>Technologies</h3>
      <div className={"icons"}>
        <Technology Icon={ReactIcon} title={"React"} />
        <Technology Icon={FirebaseIcon} title={"Firebase"} />
        <Technology Icon={ViteIcon} title={"Vite"} />
        <Technology Icon={FigmaIcon} title={"Figma"} />
        <Technology Icon={ExpressIcon} title={"Express"} />
        <Technology Icon={StripeIcon} title={"Stripe"} />
        <Technology Icon={GitIcon} title={"Git"} />
        <Technology Icon={WallabyIcon} title={"Wallaby"} />
        <Technology Icon={MuiIcon} title={"Mui"} />
        <Technology Icon={SassIcon} title={"Sass"} />
        <Technology Icon={JestIcon} title={"Jest"} />
      </div>
    </div>
  );
}
