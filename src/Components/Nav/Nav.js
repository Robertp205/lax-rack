import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  
  render() {
    return (
      <div className="navbar">
        <div className='words'>
          <Link to="/dashboard">
            <p>LAX RACK</p>
          </Link>
        </div>

        <div className="btn-box">
          <Link to="/new">
            <button className="btn">Form link</button>
          </Link>

          <Link  to='/'>
          <button className="btn">profile</button>
          </Link>

        </div>
      </div>
    );
  }
}
