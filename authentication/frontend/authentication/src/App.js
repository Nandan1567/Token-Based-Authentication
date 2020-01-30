import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/signup';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/home';
import Index from './components';



class Main extends Component
{
  render(){
    return(
      <div className="homepage">
        <h5>Home page</h5>
      </div>
    )
  }
  }

class App extends Component {
  render() {
    return (
      <div>
         <Router>
      <Home/>
      <div className="App">
          <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup}/>
        <Route path='/index' component={Index}/>
        </Switch>
        </div>
        </Router>
       
      </div>
    
    );
  }
}

export default App;
