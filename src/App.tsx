import "./App.scss";
import Navigationbar from "./components/Navigationbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Navigationbar />
      <Outlet />
    </div>
  );
};

export default App;
