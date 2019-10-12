import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Dashboard.css'

export default class Dashboard extends Component {
  render() {
    return (
      <div className="product-boxes">
        <div className="product-boxes1">

          <Link to="/elbows">
        <div className="product-box">
            <h3>Elbow Guards</h3>
        </div>
          </Link>
          <Link to="gloves">
        <div className="product-box">
            <h3>Gloves</h3>
        </div>
          </Link>
          <Link to="/heads">
        <div className="product-box">
            <h3>Heads</h3>
        </div>
          </Link>
        </div>
        
        <div className="product-boxes1">

          <Link to="helmets">
        <div className="product-box">


            <h3>Helmets</h3>
        </div>
          </Link>
          <Link to="/shafts">
        <div className="product-box">
            <h3>Shafts</h3>
        </div>
          </Link>

          <Link to="/shoulder-pads">
        <div className="product-box">
            <h3>Shoulder Pads</h3>
        </div>
          </Link>
        </div>
      </div>
    );
  }
}
