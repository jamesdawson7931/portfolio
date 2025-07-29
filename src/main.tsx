import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import App from "./app/App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutMe from "./pages/aboutMe/AboutMe.tsx";
import GetInTouch from "./pages/getInTouch/GetInTouch.tsx";
import Projects from "./pages/projects/Projects.tsx";
import GetInTouchSent from "./pages/GetInTouchSent.tsx";
import { ProjectProvider } from "./context/ProjectProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <AboutMe /> },
      { path: "/aboutme", element: <AboutMe /> },
      { path: "/getintouch", element: <GetInTouch /> },
      { path: "/getintouch/sent", element: <GetInTouchSent /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProjectProvider>
      <RouterProvider router={router} />
    </ProjectProvider>
  </StrictMode>,
);
