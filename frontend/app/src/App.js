import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from './components/Navbar/Navigation';
import AboutUs from './components/AboutUs/AboutUs';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation/>
        <Router>
          <Switch>
            <Route path="/Aboutus" component={AboutUs}/>
          </Switch>
        </Router>
      </React.Fragment>
        
    );
  }
}


export default App;