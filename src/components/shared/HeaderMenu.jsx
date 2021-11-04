//NPM Packages
import { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";

//Local files
import { useAuth } from "state/AuthProvider";
import fletnix from "assets/img/fletnix.png";

import Actions from "./Actions";

export default function HeaderMenu() {
  // Local state
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  // Hook
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={scrollPosition === 0 ? "header-menu" : "header-menu black"}
    >
      <div className="bloc">
        <NavLink to="/" className="home">
          <img src={fletnix} alt="Home" />
        </NavLink>

        <nav>
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>
          <NavLink to="/series" className="nav-item">
            Series
          </NavLink>{" "}
          <NavLink to="/films" className="nav-item">
            Films
          </NavLink>
          <NavLink to="/documentaries" className="nav-item">
            Documentaries
          </NavLink>
        </nav>
      </div>
      <Actions />
    </header>
  );
}
