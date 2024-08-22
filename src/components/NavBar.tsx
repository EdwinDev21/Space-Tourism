import logo from "../assets/home/logo.png";
import "../styles/componets/navbar.css";

type Props = {};

function NavBar({}: Props) {
  return (
    <div className="container-header">
      <img className="logo" src={logo} alt="logo" />
      <nav className="navbar">
        <ul className="list">
          <li>00 HOME</li>
          <li>01 DESTINATION</li>
          <li>02 CREW</li>
          <li>03 TECHNOLOGY</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
