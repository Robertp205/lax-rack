import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default class Login extends Component {
  constructor(){
    super()
    this.state = {
        username: '',
        password: ''
    }
}

handleChange = async (e, key) => {
    console.log(this.state);

    this.setState({
      [key]: e.target.value
    });
  };

resetState = ()=> {
    console.log('hit')
    this.setState({username: ''})
    this.setState({password: ''})
    
}
  render() {
    return (
      <div className='auth-box'>
        <h1>LAX RACK</h1>
        <div className="auth-items">
          <p>Username:</p>
          <input onChange={e=> this.handleChange(e, 'username')} />
          <p>Password:</p>
          <input type='password' onChange={e=> this.handleChange(e, 'password')} />
        </div>
        <div className='auth-btn'>

          <Link to="/dashboard">
            <button>Login</button>
          </Link>
          <Link to="/register">
          <button>Register</button>
          </Link>
        </div>
      </div>
    );
  }
}
