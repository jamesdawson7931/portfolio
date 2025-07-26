import "./styles/page.scss";
import * as React from "react";

interface PageProps {
  children?: React.ReactNode;
}

export default function Page({ children }: PageProps) {
  return <div id={"page"}>{children}</div>;
}
