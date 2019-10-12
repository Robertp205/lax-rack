import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import {updateUser} from '../../redux/reducer'
import {connect} from 'react-redux'
import swal from "sweetalert";
import axios from 'axios'

// import {updateUser} from '../../ducks/reducer'

// import {connect} from 'react-redux'



class Login extends Component {
  constructor(){
    super()
    this.state = {
        username: '',
        password: ''
    }
}

login = async ()=>{
  const {username, password} = this.state
  if(username === '' || password === ''){
    return swal({icon:'error', text: 'please fill all input boxes'})
  }
  const res = await axios.post('/auth/login', {username, password})
  if(res.data.user){
    this.props.updateUser(res.data.user)
    console.log(res.data.user);
    this.props.history.push('/dashboard')
    
  }
  swal(res.data.message)
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
          <input value={this.state.username} onChange={e=> this.handleChange(e, 'username')} />
          <p>Password:</p>
          <input value={this.state.password} type='password' onChange={e=> this.handleChange(e, 'password')} />
        </div>
        <div className='btn-yeet'>

          
            <button className='auth-btn' onClick={this.login}>Login</button>
          
          <Link to="/register">
          <button className='auth-btn'>Register</button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  const {user} = state
  return {user}
}

export default connect(
  mapStateToProps,
  {updateUser})(Login)