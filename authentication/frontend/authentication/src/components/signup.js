import React from 'react';
import { connect } from 'react-redux';
import * as action from '../store/actions/action';
import { Link } from 'react-router-dom';

class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: '',
            email:'',
            password1: '',
            password2:''
                }
    }
    render(){
        return(
          <div className="align">
            
            <div className="Appname">
            <div className="name"> 
            <div className="sss">SignUp</div>
            <div className="SignIn">
             <div> username:  <input type='text' onChange={(event) => this.setState({username: event.target.value})}></input></div>
              <div>email: <input type='text' onChange={(event) => this.setState({email: event.target.value})}></input></div> 
                <div>password:<input type='password' onChange={(event) => this.setState({password1: event.target.value})}></input></div>
              <div>confirm  password:<input type='password' onChange={(event) => this.setState({password2: event.target.value})}></input></div>
                <button onClick={() => this.props.onAuth(this.state.username,this.state.email, this.state.password1,this.state.password2)}>signup</button>
                <p><Link to='/index'>{this.props.token}</Link></p>
            </div>
            </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        error: state.error,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username,email, password1,password2) => dispatch(action.authSignup(username, email,password1,password2))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Signup);