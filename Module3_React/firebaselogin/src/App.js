import Signup from "./MyComponents/Signup";
import React from "react";
import PrivateRoute from "./MyComponents/PrivateRoute";
import { Container } from "react-bootstrap";
import Dashboard from "./MyComponents/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from "./MyComponents/Login";
import ForgotPassword from "./MyComponents/ForgotPassword";
import UpdateProfile from "./MyComponents/UpdateProfile";

function App() {
  return (
    
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path = "/" component={Dashboard}></PrivateRoute>
                <PrivateRoute  path = "/update-profile" component={UpdateProfile}></PrivateRoute>
                <Route path = "/signup" component={Signup}></Route>
                <Route path = "/login" component={Login}></Route>
                <Route path = "/forgot-password" component={ForgotPassword}></Route>
              </Switch>
            </AuthProvider>
          </Router>
          
        </div>
      </Container>
    
  );
}

export default App;
