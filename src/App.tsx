import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navigationbar from "./components/Navigationbar";

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
