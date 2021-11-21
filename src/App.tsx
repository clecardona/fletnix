//@ts-nocheck
//NPM Packages
import { useState, useCallback, useEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

//Local Files
import "styles/base.sass";
import { useAuth } from "state/AuthProvider";
import { getDocument } from "scripts/fireStore";
import Logged from "routes/Logged";
import Unlogged from "routes/Unlogged";
import { BoxError, Spinner } from "components/shared/FetchItems";

export default function App() {
  // Global state
  const { loggedIn, setLoggedIn, setUser } = useAuth();

  //Local state
  const [status, setStatus] = useState(0); // 0 loading, 1 ready, 2 error

  // Methods
  const fetchUser = useCallback(
    async (path) => {
      const uid = localStorage.getItem("uid");
      if (uid) {
        const user = await getDocument(path, uid);
        setUser(user);
        setLoggedIn(true);
      }
      setStatus(1);
    },
    [setUser, setLoggedIn]
  );

  useEffect(() => fetchUser("users"), [fetchUser]);

  /**
   * Code consistency and architecture -10
   * You are doing 2 styles of fetch in the same project:
   * The first: uses status = 0, 1, 2 (used here)
   * The second: has loading, data, error. (used in Home.jsx)
   *
   * Both handle calling the same database, yet they have 2 ways of working.
   * A recruiter will see this and reject your project because feels like you have copied
   * and pasted from different stackoverflow posts instead of you coding your own code.
   *
   * The solution for this is to analyze both approaches and use 1 style, meaning one of the 2 approaches needs to be refactored to behave like the other.
   */
  return (
    <div className="App">
      {status === 0 && <Spinner />}
      {status === 2 && <BoxError />}
      {/* Try to make a component called Browser so all your JSX are 1 line each */}
      {status === 1 && (
        <BrowserRouter>
          <Switch>{loggedIn ? <Logged /> : <Unlogged />}</Switch>
        </BrowserRouter>
      )}
    </div>
  );
}
