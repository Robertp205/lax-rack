import React, { Component } from 'react'
import axios from 'axios'

export default class ShoulderPads extends Component {
    constructor(props) {
        super(props);
        this.state = {
          shoulder_pads: [],
          
        };
        
        
      }
    
          componentDidMount=()=>{
    
                axios.get('/api/shoulders')
                .then(res =>{
                    this.setState({
                        shoulders: res.data
                    })
                })
                .catch(err =>{
                    console.log(err)
                })
        
            }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
