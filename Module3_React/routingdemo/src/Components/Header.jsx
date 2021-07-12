import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    state = {  }
    render() { 
        return ( <div className = "header">
            <ul>
                <li>
                   <Link to ="/">Home</Link>
                </li>
                <li>
                <Link to ="/settings">Settings</Link>
                </li>
            </ul>
        </div> );
    }
}
 
export default Header;