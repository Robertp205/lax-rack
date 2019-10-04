import React, { Component } from "react";
import axios from "axios";
import './Helmets.css'

export default class Helmets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helmets: [],
      
    };
    console.log(this.state);
    
  }

      componentDidMount=()=>{

            axios.get('/api/helmet')
    
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
    const mappedHelmets = this.state.helmets.map(helmet => {
      return (
        <div key={helmet.id} deleteListing={this.deleteListing} className='boxes'>
          <div className='img-box'>
          <img src={helmet.img} alt={helmet.img} />

          </div>
          <div className='in-box'>
          <p> Brand: {helmet.brand}</p>
          <p> Name: {helmet.name}</p>
          <p> used: {helmet.used}</p>
          <p> Price: {helmet.price}</p>

          <button>Delete</button>
          </div>
        </div>
      );
    });
    
    return <div className='yeet' >{mappedHelmets}</div>;
  }
}
