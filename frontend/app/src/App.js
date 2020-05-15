import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from './components/Navbar/Navigation';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Home from "./components/Home/Home";
import Courses from './components/Courses/Courses';


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
          </Switch>
        </Router>
        <Footer/>
      </React.Fragment>
        
    );
  }
}


export default App;