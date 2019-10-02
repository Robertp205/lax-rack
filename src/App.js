import React, { Component } from 'react'
import './App.css';
import Nav from './Components/Nav/Nav';

import router from './utils/router'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Nav/>
        {router}
        
      </div>
    )
  }
}
