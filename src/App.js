import React,{Component} from 'react';
import './App.css'
import {BrowserRouter as Router,NavLink,Redirect,Prompt} from 'react-router-dom'
import Route from 'react-router-dom/Route';
import Detail from './components/detail';
import User from './components/user';
import SpecificUser from './components/specificUser';
import Home from './components/Home';


class App extends Component {
  state ={
    loggedIn : false
  }
  Login = () =>{
    this.setState(prevState=>({
      loggedIn:!prevState.loggedIn
    }))
  }
  render(){
    return (
      <Router>
        <div className="App">
         <ul className="headerUl">
              <NavLink className = "navlinkStyle" to="/" exact activeStyle={{color:'green'}}>Dashboard</NavLink>
              <NavLink className = "navlinkStyle" to="/home" exact activeStyle={{color:'green'}}>Home</NavLink>
              <NavLink className = "navlinkStyle"to="/detail/:id" exact activeStyle={{color:'green'}}>About</NavLink>
              <NavLink className = "navlinkStyle" to="/user/:username" exact activeStyle={{color:'green'}}>User</NavLink>
              <NavLink className = "navlinkStyle" to="/user/sara" exact activeStyle={{color:'green'}}>Specific User</NavLink>
          </ul>
          <Prompt when={!this.state.loggedIn} message={(location)=>{
              return location.pathname.startsWith('/user') ? 'Are you sure!': true
          }}/>
                  <Route path="/" exact strict render={()=>{
          return(
            <h1>Dashboard page</h1>
          )
        }}
         />
        <Route path="/home" exact strict component={Home}/>
        <Route path="/detail/:id" exact strict component={Detail}/>
        <Route path="/user/:username" exact strict render={({match})=>(
          this.state.loggedIn ? (<User match={match} />) :( <Redirect to="/"/>)
        )}/>
        <Route path="/user/sara" exact strict render={({match})=>(
          this.state.loggedIn ? (<SpecificUser match={match} />) :( <Redirect to="/"/>)
        )}/>
        <input className="loginButton" type="button" value={this.state.loggedIn ? "log out" : "log in"} onClick={this.Login} />

        </div>
      </Router>
      
    )
  }
}

export default App;