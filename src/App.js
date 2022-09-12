import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import MiniDrawer from "./components/menuItems/MenuItems";
import { Route, Routes } from "react-router-dom";
import Lecture from "./components/lecture/Lecture";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <MiniDrawer />
    </div>
  );
}

export default App;
