//NPM Packages
import { NavLink } from "react-router-dom";

//Local files
import { useAuth } from "state/AuthProvider";
import fletnix from "assets/img/fletnix.png";

import Identificator from "./Identificator";

export default function Header() {
  // Global state
  const { loggedIn, setLoggedIn, setUser } = useAuth();

  return (
    <header className="header-menu">
      <div className="bloc">
        <NavLink to="/" className="home">
          <img src={fletnix} alt="Home" />
        </NavLink>

        <nav>
          <NavLink to="/" className="home">
            Home
          </NavLink>{" "}
          <NavLink to="/series" className="home">
            Series
          </NavLink>{" "}
          <NavLink to="/films" className="home">
            Films
          </NavLink>
          <NavLink to="/documentaries" className="home">
            Documentaries
          </NavLink>
        </nav>
      </div>
      <div className="actions">
        <div className="searchbar">Search</div>{" "}
        <button
          className="btn-orange"
          onClick={() => {
            setLoggedIn(false);
          }}
        >
          Logout
        </button>
      </div>
    </header>
  );
}
