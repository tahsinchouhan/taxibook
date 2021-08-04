
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import SelectBooking from './pages/selectbooking/SelectBooking'
import Pass from './pages/selectbooking/Pass'
import BusPass from './pages/BusPass';
import './assets/css/app.css'

function App() {

  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/select-booking' component={SelectBooking} />
            <Route exact path='/pass' component={Pass} />
            <Route exact path='/buspass' component={BusPass} />

          </Switch>
        </div>
      </Router>
    </>
  );

}

export default App;