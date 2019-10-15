import React, { Component } from 'react'
import './App.css';
import Nav from './Components/Nav/Nav';
import {withRouter} from 'react-router-dom'
import './reset.css'

import router from './utils/router'

class App extends Component {

  render() {
    const navigation = this.props.location.pathname
    let comp

    if(navigation === '/' || navigation === '/register' ){
      comp = null
    } else {comp = <Nav/>}

    return (
      <div className='app'>
        {comp}
        {router}
        
      </div>
    )
  }
}

export default withRouter(App)
