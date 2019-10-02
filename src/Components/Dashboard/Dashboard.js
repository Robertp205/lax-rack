import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Link to='/elbows'>
                    <h3>Elbows</h3>
                </Link>

                <Link to='gloves'>
                    <h3>Gloves</h3>
                </Link>

                <Link to='/heads'>
                    <h3>Heads</h3>
                </Link>

                <Link to='helmets'>
                    <h3>Helmets</h3>
                </Link>

                <Link to='/shafts'>
                    <h3>Shafts</h3>
                </Link>

                <Link to='/shoulder-pads'>
                    <h3>Shoulder Pads</h3>
                </Link>

            </div>
        )
    }
}
