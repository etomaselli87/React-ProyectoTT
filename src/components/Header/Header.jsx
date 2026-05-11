import { Link } from "react-router-dom";
import logo from "../../assets/LOGO_Matrika.png";
import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to={"/"}>
            <img src={logo} />
            <span>MATRIKA</span>
        </Link>
      </div>
      <Nav />
    </header>
  );
};