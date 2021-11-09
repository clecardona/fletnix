//NPM Packages
import { NavLink } from "react-router-dom";
import { FC } from "react";

//Local files
import fletnix from "assets/img/fletnix.png";

const Header: FC = () => {
  return (
    <header id="header">
      <NavLink to="/" className="home">
        <img src={fletnix} alt="Home" />
      </NavLink>
    </header>
  );
};
export default Header;
