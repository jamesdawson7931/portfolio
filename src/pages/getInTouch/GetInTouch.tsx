import "./styles/getInTouch.scss";
import Page from "../Page.tsx";
import Title from "./Title.tsx";
import Details from "./Details.tsx";
import Message from "./Message.tsx";

export default function GetInTouch() {
  return (
    <Page className={"get-in-touch-page"}>
      <div className={"content"}>
        <div className={"top-container"}>
          <Title />
          <Details />
        </div>
        <Message />
      </div>
    </Page>
  );
}
