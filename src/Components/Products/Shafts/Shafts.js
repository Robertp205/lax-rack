import React, { Component } from 'react'
import axios from 'axios'

export default class Shafts extends Component {
    constructor(props) {
        super(props);
        this.state = {
          shafts: [],
          
        };
        
        
      }
    
          componentDidMount=()=>{
    
                axios.get('/api/shafts')
                .then(res =>{
                    this.setState({
                        shafts: res.data
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
