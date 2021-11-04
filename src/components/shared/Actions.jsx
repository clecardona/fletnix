//NPM Packages
import { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";

//Local Files
import loupe from "assets/img/loupe.png";
import face from "assets/icns/face.png";
import droparrow from "assets/icns/droparrow.svg";
import { useAuth } from "state/AuthProvider";

export default function Actions() {
  // Global state
  const { user, setLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  return (
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
          <p>{user.username}</p>
          {user.role === "admin" && <NavLink to="/admin">Editor</NavLink>}

          <button
            onClick={() => {
              setLoggedIn(false);
              history.push("/");
            }}
          >
            Sign out of Fletnix
          </button>
        </div>
      </div>
    </div>
  );
}
