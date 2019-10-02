import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export default class Auth extends Component {
  render() {
    return (
      <div className='auth-box'>
        <div className="auth-items">
          <p>Username:</p>
          <input />
          <p>Password:</p>
          <input />
        </div>
        <div className='auth-btn'>

          <Link to="/dashboard">
            <button>Login</button>
          </Link>
          <button>Register</button>
        </div>
      </div>
    );
  }
}
