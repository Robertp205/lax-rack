import React, { Component } from "react";
import axios from "axios";

export default class Helmets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helmets: [],
      img: "",
      brand: "",
      name: "",
      used: Boolean,
      price: 0
    };
  }

      componentDidMount=()=>{

            axios.get('/api/helmets')
    
            .then(res =>{
    
                this.setState({
    
                    helmets: res.data
    
                })
    
            })
    
            .catch(err =>{
    
                console.log(err)
    
            })
    
        }

//   async componentDidMount() {
//     const helmets = await axios.get("/api/helmets");
    
//     this.setState({
//       helmets: helmets.data
//     });
//   }

  render() {
    const mappedHelmets = this.state.helmets.map(element => {
      return (
        <div key={element.id} deleteListing={this.deleteListing}>
          <p>Image: {element.img}</p>
          <p> Brand:: {element.brsnd}</p>
          <p> Name: {element.name}</p>
          <p> used: {element.used}</p>
          <p> Price: {element.price}</p>
          <button>Delete</button>
        </div>
      );
    });
    console.log('o2');
    return <div>{mappedHelmets}</div>;
  }
}
