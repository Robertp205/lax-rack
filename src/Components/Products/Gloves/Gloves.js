import React, { Component } from 'react'
import axios from 'axios'

export default class Gloves extends Component {
    constructor(props) {
        super(props);
        this.state = {
          gloves: [],
          
        };
        
        
      }
    
          componentDidMount=()=>{
    
                axios.get('/api/gloves')
                .then(res =>{
                    this.setState({
                        gloves: res.data
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
