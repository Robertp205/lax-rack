import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import {NavLink} from 'react-router-dom'





const linkStyle = {
    color: 'yellow'
    
};

export default class Nav extends Component {
  
  render() {
    return (
      <div className="navbar">
        <div className='words'>
        <NavLink style={linkStyle} exact to='/dashboard' activeClassName="active">
            <p>LAX RACK</p>
          </NavLink>
        </div>

        <div className="btn-box">
          <Link to="/new">
            <button className="btn">Form link</button>
          </Link>

          <Link  to='/'>
          <button className="btn">Logout</button>
          </Link>

        </div>
      </div>
    );
  }
}
