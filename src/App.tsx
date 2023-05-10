import "./App.scss";
import Footer from "./components/Footer";
import Navigationbar from "./components/Navigationbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Navigationbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
