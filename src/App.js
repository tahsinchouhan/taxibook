
import React from 'react';
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Destination from './pages/Destination';
import SelectBooking from './pages/selectbooking/SelectBooking'
import Pass from './pages/selectbooking/Pass'
import BusPass from './pages/selectbooking/BusPass';
import './assets/css/app.css'
import Search from './pages/travesaly/Search';
import Explore from './pages/explore/Explore';
import booking from './pages/booking/Booking';
import DmPass from './pages/dmpass/DmPass';

function App() {

  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/explore' component={Explore} />
            <Route exact path='/booking' component={BusPass} />
            <Route exact path='/populardestinations' component={Destination} />
            <Route exact path='/curatedexperiences' component={Packages} />
            <Route exact path='/select-booking' component={SelectBooking} />
            <Route exact path='/dmpass' component={DmPass} />
            <Route exact path='/pass' component={Pass} />
            <Route exact path='/buspass' component={BusPass} />
            <Route exact path='/search' component={Search}/>
          </Switch>
        </div>
      </Router>
    </>
  );

}

export default App;