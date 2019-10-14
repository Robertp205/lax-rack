import React, { Component } from "react";
import "./Form.css";
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      brand: "",
      name: "",
      used: Boolean,
      price: 0
    };
  }
  handleChange = async (e, key) => {
    console.log(this.state);

    this.setState({
      [key]: e.target.value
    });
  };

  addPost = ()=>{
    

 }

  render() {
    return (
      <div className="form-box">
        <div className="authimps">
          <h1>LAX RACK</h1>
          {/* NEED  */}
          <p>
            <select onChange={e => this.handleChange(e, e.target.value)}  className="dropdown" name='yeet' >
              <option> </option>
              <option  value="helmets">Helmets</option>
              <option value="shoulder_pads">Shoulder Pads</option>
              <option value="elbows">Elbow Guards</option>
              <option value="gloves">Gloves</option>
              <option value="heads">Heads</option>
              <option value="shafts">Shafts</option>
            </select>
          </p>
          <h3>Image Url</h3>
          <input
            placeholder="img"
            onChange={e => this.handleChange(e, "img")}
          />
          <h3>Brand:</h3>
          <input
            placeholder="Brand"
            onChange={e => this.handleChange(e, "brand")}
          />
          <h3>Name:</h3>
          <input
            placeholder="Name"
            onChange={e => this.handleChange(e, "name")}
          />
          {/* DROPDOWN FOR BOOLEAN AS WELL */}
          <h3>New or Used</h3>
          <p>
            <select onChange={e => this.handleChange(e, "used")}>
              <option value="new">New</option>
              <option value="used">Used</option>
            </select>
          </p>
          {/* <input
            placeholder="used"
            onChange={e => this.handleChange(e, "used")}
            
          /> */}
          <h3>Price</h3>
          <input
            placeholder="Price"
            onChange={e => this.handleChange(e, "price")}
          />
        </div>
        <div className="add-cancel-btn">
          <button>cancel</button>
          <button>Add</button>
        </div>
      </div>
    );
  }
}
