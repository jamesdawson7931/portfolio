import "./styles/page.scss";
import * as React from "react";

interface PageProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Page({ children, className }: PageProps) {
  return (
    <div id={"page"} className={className}>
      {children}
    </div>
  );
}
