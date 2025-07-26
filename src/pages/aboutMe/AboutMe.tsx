import Page from "../Page.tsx";
import "./styles/aboutMe.scss";
import Title from "./Title.tsx";
import Intro from "./Intro.tsx";
import WorkHistory from "./WorkHistory.tsx";
import Technologies from "./Technologies.tsx";

export default function AboutMe() {
  return (
    <Page>
      <div className={"content"}>
        <div className="column">
          <Title />
          <Intro />
          <WorkHistory />
        </div>
        <div className="column">
          <Technologies />
        </div>
      </div>
    </Page>
  );
}
