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
    this.getShafts();
  };
  getShafts = () => {
    axios
      .get("/api/shafts")
      .then(response => {
        this.setState({
          shafts: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteShafts = id => {
    axios.delete(`/api/shafts/${id}`).then(response => {
      this.getShafts();
    });
  };
  updateShafts = id => {
    let updatedShafts = {
      id: this.state.id,
      img: this.state.img,
      brand: this.state.brand,
      name: this.state.name,
      used: this.state.used,
      price: this.state.price
    };
    axios.put(`/api/shafts/${id}`, updatedShafts).then(res => {
      // this.props.updatedHelmet(res.data);
      this.handleToggle();
      this.getShafts();
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
            <button onClick={()=>this.deleteShafts(element.id)}>Delete</button>
          </div>
        </div>
      );
    });
    return <div>{mappedShafts}</div>;
  }
}
