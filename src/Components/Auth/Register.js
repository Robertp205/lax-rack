import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import "../../App.css"
import axios from 'axios'
import swal from 'sweetalert'
// import updateUser from '../../redux/reducer'
// import {connect} from 'react-redux'

export default class Register extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            email: '',
            password1: '',
            password2: ''
        }
    }

    async register() {
      const {email, username, password1, password2} = this.state
      if (password1 === password2) {
        const res = await axios.post('/auth/register', {username, email,  password: password2})
        this.props.updateUser(res.data.user)
        console.log(res.data.user);
        
        swal({icon: 'success', text: res.data.message})
      } else {
        swal({icon: 'error', text: `lol youre passwords are the different`})
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
        this.setState({email: ''})
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
            <p>Email:</p>
            <input type='email' onChange={e=> this.handleChange(e,'email')} />
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
              <button onClick={()=> this.register()}>Register</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}


// export default connect({updateUser})(Register)