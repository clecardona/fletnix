//NPM Packages
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

//Local files
import { useAuth } from "state/AuthProvider";
import fletnix from "assets/img/fletnix.png";
import loupe from "assets/img/loupe.png";
import face from "assets/icns/face.png";
import droparrow from "assets/icns/droparrow.svg";

export default function Header() {
  // Global state
  const { loggedIn, setLoggedIn, setUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

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
      <div className="actions">
        <div className={isOpen ? "searchbar-open" : "searchbar"}>
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src={loupe} alt="" />
          </button>
          {isOpen && <input type="text" placeholder="Titles" />}
        </div>

        <div className="dropdown">
          <img src={face} alt="" />
          <img className="drop-arrow" src={droparrow} alt="" />

          <div className="caret">
            <img src={droparrow} alt="" />
            <button
              onClick={() => {
                setLoggedIn(false);
              }}
            >
              Sign out of Fletnix
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
