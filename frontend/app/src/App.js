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
import Dashboard from './components/dashboard/dashboard';
import * as actions from './store/actions/auth';


class App extends Component {
  
  componentDidMount(){
    this.props.onTryAutoSignup();
  }

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
            <Route path="/DashBoard" component={Dashboard} {...this.props}/>
          </Switch>
        </Router>
        <Footer/>
      </React.Fragment>
        
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App); 