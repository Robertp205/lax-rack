import React, { Component } from "react";
import axios from "axios";
import "./Elbows.css";

export default class Elbows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elbows: []
    };
  }

  componentDidMount = () => {
    axios
      .get("/api/elbows")
      .then(res => {
        this.setState({
          elbows: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteElbows = id => {
    axios.delete(`/api/elbows/${id}`).then(response => {
      this.setState({
        elbows: response.data
      });
    });
  };
  render() {
    const mappedElbows = this.state.elbows.map(element => {
      return (
        <div
          key={element.id}
          deleteElbows={this.deleteElbows}
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
    return <div>{mappedElbows}</div>;
  }
}
