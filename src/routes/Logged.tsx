//@ts-nocheck
import { Route } from "react-router-dom";

// Project files
import { useAuth } from "state/AuthProvider";
import Home from "components/Home";
import Login from "components/AuthPages/Login";
import SignUp from "components/AuthPages/Signup";
import Header from "components/shared/Header";
import Course from "components/CoursePage/Course";
import Playlist from "components/PlaylistPage/Playlist";
import Profile from "components/ProfilePage/Profile";
import Toolbar from "components/shared/Toolbar";

export default function Logged() {
  const { user } = useAuth();

  return (
    <>
      <Header />
      {/*  <Toolbar /> */}
      <Route exact path="/" component={Home} />
      <Route component={Login} path="/login" />
      <Route component={SignUp} path="/signup" />
      <Route component={Course} path="/courses/:courseID" />
      <Route component={Playlist} path="/playlist/:courseID" />
      <Route component={Profile} path="/profile/:userID" />
    </>
  );
}
