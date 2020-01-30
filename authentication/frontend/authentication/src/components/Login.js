import React from 'react';
import { connect } from 'react-redux';
import * as action from '../store/actions/action';
import { Link, withRouter, Redirect } from 'react-router-dom';



class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: '',
            password: ''
        }
        this.login=this.login.bind(this);
    }

    

    login()
    {  
         this.props.onAuth(this.state.username, this.state.password);
        this.setState({
            username:'',
            password:''

        })
    }
    render(){
        return(
            <div className="align">
            <div className="Appname">
            <div className="sss">LogIn</div>
            <div className="login">
                <div>username : <input type='text' onChange={(event) => this.setState({username: event.target.value})}></input></div> 
               <div>password:<input type='password' onChange={(event) => this.setState({password: event.target.value})}></input></div> 
                <button onClick={this.login}>Login</button>
                <p><Link to='signup'>create a new account? </Link></p>
 =               <p><Link to='/index'> {this.props.token}</Link></p>
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
        onAuth: (username, password) => dispatch(action.authLogin(username, password))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Login));