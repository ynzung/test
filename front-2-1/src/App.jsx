import { Outlet } from "react-router-dom";
import "./App.css";
import ToggleBtn from "./components/ToggleBtn";
import { ThemeContext } from "styled-components";

function App() {
  return (
    <>
      <ThemeContext>
        <Outlet />
        <ToggleBtn />
      </ThemeContext>
    </>
  );
}

export default App;
