import "./styles/getInTouchSent.scss";
import Page from "./Page.tsx";

export default function GetInTouchSent() {
  return (
    <Page className={"get-in-touch-sent-page"}>
      <div className={"content"}>
        <h1 className={"title"}>Thanks for your message!</h1>
        <article className={"message"}>
          I’ll get back to you as soon as possible! I appreciate you taking the
          time to visit my site.
        </article>
      </div>
    </Page>
  );
}
