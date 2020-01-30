import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logout extends Component {
    render() {
        return (
            <div className="Home" >
                <ul className="homepage">
                <li><Link to='/login'>logout</Link></li> 
               </ul>
            </div>
        )
    }
}
export default Logout;