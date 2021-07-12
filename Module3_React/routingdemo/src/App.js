
import React, { Component } from 'react';
import Header from "./Components/Header";
import Settings from './Components/Settings';
import HomePage from './Components/HomePage';
import {BrowserRouter as Router ,  Switch , Route} from "react-router-dom";

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <div className = "App">
          <Header></Header>

          <Switch>
          <Route path ="/" exact component = {HomePage}></Route>
          <Route path="/settings" exact component = {Settings}></Route>
          </Switch>
          
          
        </div>
      </Router>
     );
  }
}
 
export default App;
