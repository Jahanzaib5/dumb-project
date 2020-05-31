import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from './components/Navbar/Navigation';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Home from "./components/Home/Home";
import Courses from './components/Courses/Courses';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import {connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Aboutus" component={AboutUs}/>
            <Route path="/Courses" component={Courses}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Register" component={Register}/>
          </Switch>
        </Router>
        <Footer/>
      </React.Fragment>
        
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token
  }
}


export default connect(mapStateToProps)(App); 