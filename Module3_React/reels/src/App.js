import React, { useContext, useEffect } from "react";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Feeds from "./Components/Feeds";
import Profile from "./Components/Profile";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { AuthContext, AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header></Header>

          <Switch>
            <Route path="/login" component={Login} exact></Route>
            <Route path="/signup" component={Signup} exact></Route>
            <PrivateRoute path="/" comp={Feeds}></PrivateRoute>
            <PrivateRoute path="/profile" comp={Profile}></PrivateRoute>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

function PrivateRoute(props) {
  let { comp: Component, path } = props;
  //feeds??? loggedIn and path="/"
  let { currentUser } = useContext(AuthContext);
  //console.log(value);

  return currentUser ? (
    <Route {...props} path={path} component={Component}></Route>
  ) : (
    <Redirect to="/login"></Redirect>
  );
}

export default App;
