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
    this.getGloves();
  };
  getGloves = () => {
    axios
      .get("/api/gloves")
      .then(response => {
        this.setState({
          hgloves: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteGloves = id => {
    axios.delete(`/api/gloves/${id}`).then(response => {
      this.getGloves();
    });
  };
  updateGloves = id => {
    let updatedGloves = {
      id: this.state.id,
      img: this.state.img,
      brand: this.state.brand,
      name: this.state.name,
      used: this.state.used,
      price: this.state.price
    };
    axios.put(`/api/gloves/${id}`, updatedGloves).then(res => {
      // this.props.updatedHelmet(res.data);
      this.handleToggle();
      this.getGloves();
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
            <button onClick={()=>this.deleteGloves(element.id)}>Delete</button>
          </div>
        </div>
      );
    });
    return <div>{mappedGloves}</div>;
  }
}
