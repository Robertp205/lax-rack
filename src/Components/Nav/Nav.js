import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import {NavLink} from 'react-router-dom'
import axios from "axios";
import swal from "sweetalert";
import {updateUser} from '../../redux/reducer'
import {connect} from 'react-redux'






const linkStyle = {
    color: 'yellow'
    
};

class Nav extends Component {
  

  logout= async ()=>{
    const res = await axios.delete('/auth/logout')
    this.props.updateUser(null)
    swal(res.data.message)
  }
  
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
          <button  onClick={this.logout} className="btn">Logout</button>
          </Link>

        </div>
      </div>
    );
  }
}

function mapStateToProps (state){
  const {user} = state
  return {user}
}

export default connect(
  mapStateToProps,
  {updateUser}
)(Nav)
