import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";

function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="min-h-screen bg-page">
      <header className="text-white flex justify-between items-center px-6 pt-6">
        <Link to="/">
          <img
            src="images/logo.svg"
            alt=""
            className="h-10 w-10 cursor-pointer"
          />
        </Link>
        <img
          src="images/icon-hamburger.svg"
          alt=""
          className="w-6 h-5"
          onClick={() => setShowNav(true)}
        />
        <MainNav onClick={() => setShowNav(false)} show={showNav} />
      </header>
      <Outlet />
    </div>
  );
}

export default App;
