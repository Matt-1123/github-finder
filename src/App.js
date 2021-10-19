import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users.js";
import User from "./components/users/User.js";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";

import GithubState from "./context/github/GithubState";

import "./App.css";

const App = () => {
  const [alert, setAlert] = useState(null);

  // Set alert
  const showAlert = (message, type) => {
    setAlert({ message, type });

    setTimeout(() => setAlert(null), 5000);
  };

  return (
    // Wrap entire app in GithubState Provider
    <GithubState>
      {/* Wrap Router around entire app so that all nested components have access 
      to this Router component*/}
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            {/* Switch ensures only one route is shown at a time, i.e. prevents multiple pages from accidentally showing */}
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              {/* Note: :login represents the parameter at the end of the URL in the browser
              e.g. /user/matt-1123 */}
              {/* uses match.path for its path prop and then dynamically changes the UI. */}
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
