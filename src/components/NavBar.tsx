import { useState } from "react";
import logo from "../assets/home/logo.png";
import "../styles/componets/navbar.css";

type Props = {};

function NavBar({}: Props) {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  return (
    <div className="container-header">
      <img className="logo" src={logo} alt="logo" />
      <nav className="navbar">
        <ul className="list">
          <button className="button-navbar" onClick={() => setActiveButton(0)}>
            00 HOME
            <span
              className={activeButton === 0 ? "underline active" : "underline"}
            ></span>
          </button>
          <button className="button-navbar" onClick={() => setActiveButton(1)}>
            01 DESTINATION
            <span
              className={activeButton === 1 ? "underline active" : "underline"}
            ></span>
          </button>
          <button className="button-navbar" onClick={() => setActiveButton(2)}>
            02 CREW
            <span
              className={activeButton === 2 ? "underline active" : "underline"}
            ></span>
          </button>
          <button className="button-navbar" onClick={() => setActiveButton(3)}>
            03 TECHNOLOGY
            <span
              className={activeButton === 3 ? "underline active" : "underline"}
            ></span>
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
