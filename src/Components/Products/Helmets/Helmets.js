import React, { Component } from "react";
import axios from "axios";
import "./Helmets.css";

export default class Helmets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helmets: []
    };
  }

  componentDidMount = () => {

    this.getHelmets()
    // axios
    //   .get("/api/helmet")
    //   .then(res => {
    //     this.setState({
    //       helmets: res.data
    //     });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };
  getHelmets=()=>{
    axios.get('/api/helmet').then((response)=>{
      this.setState({
        helmets: response.data
      })
    }).catch(err =>{
      console.log(err)
  })
  }


  
  deleteHelmets = (id) => {
    axios.delete(`/api/helmet/${id}`).then(response =>{
      this.setState({
        helmets: response.data
      })
    })


    // axios.delete(`/api/helmet/${id}`)
    // .then(res=>{
    //   this.getHelmets()
    // }).catch(error=> {
    //   console.log('error');
      
    // })
    // // .then(response => {
    // //   this.setState({
    // //     helmets: response.data
    // //   });
    // //   console.log(response.data);
      
    
    };

  //   async componentDidMount() {
  //     const helmets = await axios.get("/api/helmets");

  //     this.setState({
  //       helmets: helmets.data
  //     });
  //   }

  render() {
    const mappedHelmets = this.state.helmets.map(element => {
      return (
        <div
          key={element.id}
          deleteHelmets={this.deleteHelmets}
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
            <button  onClick={()=> this.deleteHelmets(element.id)}>Delete</button>
          </div>
        </div>
      );
    });

    return <div className="yeet">{mappedHelmets}</div>;
  }
}
