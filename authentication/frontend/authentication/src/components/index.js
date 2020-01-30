import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Logout from './logout';

class Index extends Component {
    render() {
        return (
            <div>
                <Link to='/login'>logout</Link>
                <h1>Succussfully login....!</h1>
            </div>
        )
    }
}
export default Index;