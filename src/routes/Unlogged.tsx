//@ts-nocheck
import { Route } from "react-router-dom";

// Project files
import Login from "components/AuthPages/Login";
import SignUp from "components/AuthPages/Signup";
import Recover from "components/AuthPages/Recover";

export default function Unlogged() {
  return (
    <>
      <Route component={Login} exact path="/" />
      <Route component={SignUp} path="/signup" />
      <Route component={Recover} path="/recover" />
    </>
  );
}
