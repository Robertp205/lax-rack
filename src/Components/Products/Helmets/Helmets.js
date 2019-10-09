import React, { Component } from "react";
import axios from "axios";
import "./Helmets.css";

export default class Helmets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helmets: []
    };
  }

  componentDidMount = () => {
    this.getHelmets();
  };
  getHelmets = () => {
    axios
      .get("/api/helmet")
      .then(response => {
        this.setState({
          helmets: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteHelmets = id => {
    axios.delete(`/api/helmet/${id}`).then(response => {
      this.getHelmets();
    });
  };

  render() {
    const mappedHelmets = this.state.helmets.map(element => {
      return (
        <div
          key={element.id}
          deleteHelmets={this.deleteHelmets}
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
            <button onClick={() => this.deleteHelmets(element.id)}>
              Delete
            </button>
          </div>
        </div>
      );
    });

    return <div className="yeet">{mappedHelmets}</div>;
  }
}
