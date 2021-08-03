// import './App.css';
// import Home from "./pages/Home";
// import {BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
// import SelectBooking from './pages/selectbooking/SelectBooking';
// import Test from './pages/selectbooking/Test';

// function App() {
//   return (
//     <>
//     <Home />
//     <Router>  
//     <Switch>          
//         <Route  path="/SelectBooking" component={SelectBooking} />
//         <Route  path="/Test" component={Test} />           
//         <Redirect to="/" />      
//       </Switch>
//       </Router> 
//     </>
//   );
// }

// export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import SelectBooking from './pages/selectbooking/SelectBooking'
import Pass from './pages/selectbooking/Pass'
// import About from './components/About';
// import Contact from './components/Contact';
<Route exact path='/select-booking' component={SelectBooking } />  

class App extends Component {
  render() {
    return (
    <Router>
        <div>          
          <Switch>
              {/* <Route exact path='/' component={Home} />   */}
              <Route exact path='/select-booking' component={SelectBooking } />  
              <Route exact path='/pass' component={Pass } />  
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;