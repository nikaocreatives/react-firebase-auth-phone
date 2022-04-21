import React from "react";
import { auth } from "./utils/firebase";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Mainpage = () => {
  const logout = () => {
    auth.signOut();
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <h3>Welcome {auth.currentUser.phoneNumber}</h3>
              <h3>{auth.currentUser.uid}</h3>
              <button style={{ marginLeft: "20px" }} onClick={logout}>
                Logout
              </button>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/profile">
            <h1>Profile</h1>
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Mainpage;
