import React, { Component } from "react";
import axios from "axios";
import "./Helmets.css";

export default class Helmets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helmets: [],
      id: 0,
      edit: false,
      img: "",
      brand: "",
      name: "",
      used: Boolean,
      price: 0
    };
  }

  handleToggle = () => {
    this.setState({ edit: !this.state.edit });
  };
  updateHelmets = id => {
    let updatedHelmet = {
      id: this.state.id,
      img: this.state.img,
      brand: this.state.brand,
      name: this.state.name,
      used: this.state.used,
      price: this.state.price
    };
    axios.put(`/api/helmet/${id}`, updatedHelmet).then(res => {
      // this.props.updatedHelmet(res.data);
      this.handleToggle();
      this.getHelmets();
    });
  };

  handleChange = async (e, key) => {
    console.log(this.state);

    this.setState({
      [key]: e.target.value
    });
  };

  // handleInput = val => {
  //   this.setState({
  //     editBrand: val,
  //     editName: val,
  //     editUsed: val,
  //     editPrice: val,
  //     editImg: val
  //   });
  // };
  handleChange = async (e, key) => {
    console.log(this.state);

    this.setState({
      [key]: e.target.value
    });
  };
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
        <div>
          {!this.state.edit ? (
            <div
              key={element.id}
              deleteHelmets={this.deleteHelmets}
              updateHelmets={this.updateHelmets}
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

                <button onClick={() => this.deleteHelmets(element.id)}>
                  Delete
                </button>
                <button onClick={this.handleToggle}>update</button>

                {/* <button onClick={() => this.deleteHelmets(element.id)}>
              Delete
            </button>
            <button onClick={()=> this.updateHelmets()}>update</button> */}
              </div>
            </div>
          ) : (
            <div>
              <div>
                <h3>Image Url</h3>
                <input
                  placeholder="img"
                  onChange={e => this.handleChange(e, "img")}
                  // onChange={() => this.handleInput(this.state.editImg)}
                />
                <h3>Brand:</h3>
                <input
                  placeholder="Brand"
                  onChange={e => this.handleChange(e, "brand")}
                  // onChange={() => this.handleInput(this.state.editBrand)}
                />
                <h3>Name:</h3>
                <input
                  placeholder="Name"
                  onChange={e => this.handleChange(e, "name")}
                  // onChange={() => this.handleInput(this.state.editName)}
                />
                {/* DROPDOWN FOR BOOLEAN AS WELL */}
                <h3>New or Used</h3>
                <input
                  placeholder="used"
                  onChange={e => this.handleChange(e, "used")}
                  // onChange={() => this.handleInput(this.state.editUsed)}
                />
                <h3>Price</h3>
                <input
                  placeholder="Price"
                  onChange={e => this.handleChange(e, "price")}
                  // onChange={() => this.handleInput(this.state.editPrice)}
                />
                <button onClick={() => this.updateHelmets(element.id)}>
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      );
    });

    return <div className="yeet">{mappedHelmets}</div>;
  }
}
