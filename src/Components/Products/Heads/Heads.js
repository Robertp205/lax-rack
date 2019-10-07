import React, { Component } from 'react'
import axios from 'axios'

export default class Heads extends Component {
    constructor(props) {
        super(props);
        this.state = {
          heads: [],
          
        };
        
        
      }
    
          componentDidMount=()=>{
    
                axios.get('/api/heads')
                .then(res =>{
                    this.setState({
                        heads: res.data
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
