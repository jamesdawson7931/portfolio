import "./styles/navbar.scss";
import {
  faCommentDots,
  faDiagramProject,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Option from "./Option.tsx";
import MenuBurgerIcon from "../../icons/menu-burger.svg?react";
import { useState } from "react";
import cn from "classnames";

export default function Navbar() {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  function openMobileNavbar() {
    setShowMobileNavbar(true);
  }
  function closeMobileNavbar() {
    setShowMobileNavbar(false);
  }

  return (
    <>
      <button
        className={cn("menu-burger", showMobileNavbar ? "hide" : "")}
        onClick={openMobileNavbar}
      >
        <MenuBurgerIcon />
      </button>
      <div
        className={cn("screen-overlay", showMobileNavbar ? "" : "hide")}
        onClick={closeMobileNavbar}
      />
      <nav id="navbar" className={showMobileNavbar ? "" : "hide"}>
        <Option
          route={"/projects"}
          icon={faDiagramProject}
          onClick={closeMobileNavbar}
        />
        <Option route={"/aboutme"} icon={faUser} onClick={closeMobileNavbar} />
        <Option
          route={"/getintouch"}
          icon={faCommentDots}
          onClick={closeMobileNavbar}
        />
      </nav>
    </>
  );
}
