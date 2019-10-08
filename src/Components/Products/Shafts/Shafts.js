import React, { Component } from "react";
import axios from "axios";
import './Shafts.css'

export default class Shafts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shafts: []
    };
  }

  componentDidMount = () => {
    axios
      .get("/api/shafts")
      .then(res => {
        this.setState({
          shafts: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteShafts = id => {
    axios.delete(`/api/shafts/${id}`).then(response => {
      this.setState({
        shafts: response.data
      });
    });
  };

  render() {
    const mappedShafts = this.state.shafts.map(element => {
      return (
        <div
          key={element.id}
          deleteShafts={this.deleteShafts}
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
            <button>Delete</button>
          </div>
        </div>
      );
    });
    return <div>{mappedShafts}</div>;
  }
}
