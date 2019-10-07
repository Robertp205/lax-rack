import React, { Component } from 'react'
import axios from 'axios'

export default class Elbows extends Component {
    constructor(props) {
        super(props);
        this.state = {
          elbows: [],
          
        };
        
        
      }
    
          componentDidMount=()=>{
    
                axios.get('/api/elbows')
                .then(res =>{
                    this.setState({
                        elbows: res.data
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
