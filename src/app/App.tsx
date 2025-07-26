import "./styles/app.scss";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar.tsx";

function App() {
  return (
    <div id={"app"}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
