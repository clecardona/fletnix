//NPM Packages
import { NavLink, useHistory } from "react-router-dom";

//Local Files

import face from "assets/icns/face.png";
import droparrow from "assets/icns/droparrow.svg";
import { useAuth } from "state/AuthProvider";
import SearchBar from "./SearchBar";

export default function Actions() {
  // Global state
  const { user, setLoggedIn } = useAuth();
  const history = useHistory();

  return (
    <div className="actions">
      <SearchBar />

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
