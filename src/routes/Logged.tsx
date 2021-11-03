//@ts-nocheck
import { Route } from "react-router-dom";

// Project files
import { useAuth } from "state/AuthProvider";
import Home from "components/Home";
import Login from "components/AuthPages/Login";
import SignUp from "components/AuthPages/Signup";
import HeaderMenu from "components/shared/HeaderMenu";
import Admin from "components/AdminPages/Admin";

export default function Logged() {
  const { user } = useAuth();

  return (
    <>
      <HeaderMenu />
      <Route exact path="/" component={Home} />
      <Route component={Login} path="/login" />
      <Route component={SignUp} path="/signup" />
      {user.role === "admin" && <Route component={Admin} path="/admin" />}
    </>
  );
}
