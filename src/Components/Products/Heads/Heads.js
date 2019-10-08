import React, { Component } from "react";
import axios from "axios";
import './Heads.css'

export default class Heads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heads: []
    };
  }

  componentDidMount = () => {
    axios
      .get("/api/heads")
      .then(res => {
        this.setState({
          heads: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteHeads = id => {
    axios.delete(`/api/heads/${id}`).then(response => {
      this.setState({
        heads: response.data
      });
    });
  };
  render() {
    const mappedHeads = this.state.heads.map(element => {
        return (
          <div
            key={element.id}
            deleteHeads={this.deleteHeads}
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
              <button onClick={()=>this.deleteHeads(element.id)}>Delete</button>
            </div>
          </div>
        );
      });
    return (
        <div>{mappedHeads}</div>
    )
  }
}
