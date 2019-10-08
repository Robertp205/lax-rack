import React, { Component } from "react";
import axios from "axios";

export default class Gloves extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gloves: []
    };
  }

  componentDidMount = () => {
    axios
      .get("/api/gloves")
      .then(res => {
        this.setState({
          gloves: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteGloves = id => {
    axios.delete(`/api/gloves/${id}`).then(response => {
      this.setState({
        gloves: response.data
      });
    });
  };
  render() {
    const mappedGloves = this.state.gloves.map(element => {
      return (
        <div
          key={element.id}
          deleteGloves={this.deleteGloves}
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
    return <div>{mappedGloves}</div>;
  }
}
