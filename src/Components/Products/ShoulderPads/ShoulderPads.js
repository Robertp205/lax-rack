import React, { Component } from "react";
import axios from "axios";
import "./ShoulderPads.css";

export default class ShoulderPads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoulder_pads: []
    };
  }

  componentDidMount = () => {
    this.getShoulders();
  };
  getShoulders = () => {
    axios
      .get("/api/shoulders")
      .then(response => {
        this.setState({
          shoulder_pads: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteShoulders = id => {
    axios.delete(`/api/shoulders/${id}`).then(response => {
      this.getShoulders();
    });
  };
  render() {
    const mappedShoulders = this.state.shoulder_pads.map(element => {
      return (
        <div
          key={element.id}
          deleteShoulders={this.deleteShoulders}
          className="boxes"
        >
          <div className="img-box">
            <img src={element.img} alt={element.img} />
          </div>
          <div className="in-box">
            <p> Brand: {element.brand}</p>
            <p> Name: {element.name}</p>
            <p> used: {element.used}</p>
            <p> Price: {element.price}</p>

            <button>Update</button>
            <button onClick={() => this.deleteShoulders(element.id)}>Delete</button>
          </div>
        </div>
      );
    });
    return <div>{mappedShoulders}</div>;
  }
}
