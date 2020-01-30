import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="Home" >
                <ul className="homepage">
                <li> <Link to ="/">Home</Link></li>
                <li> <Link to='/signup'>signup</Link> </li>
                <li><Link to='/login'>login</Link></li> 
               </ul>
            </div>
        )
    }
}
export default Home;