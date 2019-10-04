import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="product-boxes">
        <div className="elbow-box">
          <Link to="/elbows">
            <h3>Elbows</h3>
          </Link>
        </div>
        <div className="glove-box">
          <Link to="gloves">
            <h3>Gloves</h3>
          </Link>
        </div>
        <div className="head-box">
          <Link to="/heads">
            <h3>Heads</h3>
          </Link>
        </div>
        <div className="helm-box">
          <Link to="helmets">
            <h3>Helmets</h3>
          </Link>
        </div>
        <div className="shaft-box">
          <Link to="/shafts">
            <h3>Shafts</h3>
          </Link>
        </div>

        <div className="pads-box">
          <Link to="/shoulder-pads">
            <h3>Shoulder Pads</h3>
          </Link>
        </div>
      </div>
    );
  }
}
