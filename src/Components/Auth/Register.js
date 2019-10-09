import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import "../../App.css"

export default class Register extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password1: '',
            password2: ''
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
        this.setState({password1: ''})
        this.setState({password2:''})
    }
  render() {
    return (
      <div className="register-page">
        <div className="reg-box">
          <h1>Register User</h1>
          <div className="auth-items">
            <p>Username:</p>
            <input onChange={e=> this.handleChange(e,'username')} />
            <p>Password:</p>
            <input type='password' onChange={e=> this.handleChange(e,'password1')} />
            <p> Re-enter Password:</p>
            <input type='password' onChange={e=> this.handleChange(e,'password2')} />
          </div>
          <div className="auth-btn">
              <Link to='/'>
            <button onClick={()=> this.resetState()}>Back</button>
              </Link>
            <Link to="/dashboard">
              <button>Register</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
