import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Navigationbar from "./components/Navigationbar";

const App = () => {
  return (
    <div className="app">
      <Navigationbar />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
