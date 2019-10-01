import React, { Component } from 'react'
import './App.css';
import Auth from './Components/Auth/Auth';
import Nav from './Components/Nav/Nav';
import Form from './Components/Form/Form';
import Dashboard from './Components/Dashboard/Dashboard';


export default class App extends Component {
  render() {
    return (
      <div>
        <Auth/>
        <Nav/>
        <Form/>
        <Dashboard/>
      </div>
    )
  }
}
