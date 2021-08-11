
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
import Explores from './pages/explore/Explores';
import DestinationDetails from './pages/explore/DestinationDetails';
import PackagesDetails from './pages/explore/PackagesDetails'
import DmPass from './pages/dm pass/DmPass';
import Locations from './pages/dm pass/Locations';
import BusDetail from './pages/selectbooking/BusDetail';
import BusMonsoon from './pages/selectbooking/BusMonsoon';
import Raipur from './pages/selectbooking/Raipur';
import BusDropoff from './pages/selectbooking/BusDropoff';
import BusConfirmation from './pages/selectbooking/BusConfirmation';
import BusCard from './pages/selectbooking/BusCard';
import CheckoutPage from './pages/selectbooking/CheckoutPage';
import CongratulationPage from './pages/selectbooking/CongratulationPage';

function App() {

  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/explores' component={Explores} />
            <Route path="/destination_details/:name" component={DestinationDetails}/>
            <Route path="/packages_details/:name" component={PackagesDetails}/>
            <Route exact path='/booking' component={BusPass} />
            <Route exact path='/populardestinations' component={Destination} />
            <Route exact path='/curatedexperiences' component={Packages} />
            <Route exact path='/select-booking' component={SelectBooking} />
            <Route exact path='/dmpass' component={DmPass} />
            <Route exact path='/pass' component={Pass} />
            <Route exact path='/buspass' component={BusPass} />
            <Route exact path='/search' component={Search}/>
            <Route exact path='/locations' component={Locations}/>
            <Route exact path='/busdetail' component={BusDetail}/>
            <Route exact path='/busmonsoon' component={BusMonsoon}/>
            <Route exact path='/raipur' component={Raipur}/>
            <Route exact path='/busdropoff' component={BusDropoff}/>
            <Route exact path='/busconfirmation' component={BusConfirmation}/>
            <Route exact path='/ buscard' component={BusCard}/>
            <Route exact path='/checkoutpage' component={CheckoutPage}/>
            <Route exact path='/CongratulationPage'component={CongratulationPage}/>


          </Switch>
        </div>
      </Router>
    </>
  );

}

export default App;