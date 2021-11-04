//NPM Packages
import { NavLink } from "react-router-dom";

//Local files
import fletnix from "assets/img/fletnix.png";

export default function Header() {
  return (
    <header>
      <NavLink to="/" className="home">
        <img src={fletnix} alt="Home" />
      </NavLink>
    </header>
  );
}
