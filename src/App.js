import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Destination from "./pages/Destination";
import Packages from "./pages/Packages";

import EventsAndActivities from "./pages/plan/EventsAndActivities";
import PlanHomeStays from "./pages/plan/Plan";
import PlanTaxis from "./pages/plan/PlanTaxis";
import PlanTourGuides from "./pages/plan/PlanTourGuides";
import PlanTourPackages from "./pages/plan/PlanTourPackages";

import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/app.css";
import SelectBooking from "./pages/selectbooking/SelectBooking";

import "./assets/css/mediaQuery.css";
import CabOperator from "./Footer/CabOperator";
import CovidResponse from "./Footer/CovidResponse";
import RegistrationGuide from "./Footer/RegistrationGuide";
import TourOperator from "./Footer/TourOperator";
import SteperDmpass from "./pages/booking/tickets/SteperDmpass";
import TicketCheckOut from "./pages/booking/tickets/TicketCheckOut";
import Tickets1 from "./pages/booking/tickets/Tickets1";
import TicketsSraech from "./pages/booking/tickets/TicketsSreach";
import DmCongratulate from "./pages/dm pass/dmtickets/DmCongratulate";
import DmDetail from "./pages/dm pass/dmtickets/DmDetail";
import BookingConformation from "./pages/explore/BookingConfirmation";
import BookingDetails from "./pages/explore/BookingDetails";
import BookingPayment from "./pages/explore/BookingPayement";
import CheckOutBook from "./pages/explore/checkoutBooking";
import Interest from "./pages/explore/Interest";
import PackagesDetails from "./pages/explore/PackagesDetails";
import CheckoutPage from "./pages/selectbooking/CheckoutPage";
import CongratulationPage from "./pages/selectbooking/CongratulationPage";
import RatanCard from "./pages/selectbooking/RatanCard";
import AddForm from "./pages/VenderOrgAdd/AddForm";
import AddHotel from "./pages/VenderOrgAdd/AddHotel";

import Payment from "./pages/selectbooking/Payment";

import hPayment from "./pages/selectbooking/hPayment";
// import DmTicket from './pages/dm pass/dmtickets/DmTicket';

import BusTicketDetail from "./pages/selectbooking/BusTicketDetail";
import PackageTicketDetail from "./pages/selectbooking/PackageTicketDetail";
import AddInfluencer from "./pages/VenderOrgAdd/AddInfluencer";
import AddTaxi from "./pages/VenderOrgAdd/AddTaxi";
import AddTravelAgent from "./pages/VenderOrgAdd/AddTravelAgent";
import Registration from "./pages/VenderOrgAdd/Registration";

/// imports Hotel Details
import "./assets/css/hotellist.css";

import CabConfirmation from "./pages/Cab/CabConfirmation";
import CabList from "./pages/Cab/CabList";
import Cab from "./pages/Cab/CabSearch";

function App() {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route path="/bookingdetail" component={BookingDetails} />
            <Route
              path="/bookingconfirmation"
              component={BookingConformation}
            />
            <Route path="/checkoutbooking" component={CheckOutBook} />
            <Route path="/bookpayement" component={BookingPayment} />
            <Route path="/packages_details/:name" component={PackagesDetails} />
            <Route path="/covidresponse" component={CovidResponse} />
            <Route path="/tour-operator" component={TourOperator} />
            <Route path="/cab-operator" component={CabOperator} />
            <Route path="/registrationguide" component={RegistrationGuide} />
            <Route path="/registration" component={Registration} />
            <Route exact path="/populardestinations" component={Destination} />
            <Route exact path="/curatedexperiences" component={Packages} />

            <Route exact path="/select-booking" component={SelectBooking} />
            <Route exact path="/plan" component={PlanHomeStays} />
            <Route exact path="/planTourGuides" component={PlanTourGuides} />
            <Route
              exact
              path="/planTourPackages"
              component={PlanTourPackages}
            />
            <Route exact path="/planTaxis" component={PlanTaxis} />
            <Route exact path="/" component={PlanTaxis} />

            <Route
              exact
              path="/bastarEventsAndActivities"
              component={EventsAndActivities}
            />

            <Route exact path="/add-form" component={AddForm} />
            <Route exact path="/add-hotel" component={AddHotel} />
            <Route exact path="/add-taxi" component={AddTaxi} />
            <Route exact path="/add-travel-agent" component={AddTravelAgent} />
            <Route exact path="/add-influencer" component={AddInfluencer} />
            <Route
              exact
              path="/CongratulationPage"
              component={CongratulationPage}
            />
            <Route exact path="/ratancard" component={RatanCard} />
            <Route exact path="/dm-detail/:id" component={DmDetail} />
            <Route exact path="/bus-detail/:id" component={BusTicketDetail} />
            <Route
              exact
              path="/packages-detail/:id"
              component={PackageTicketDetail}
            />
            <Route exact path="/dm_congratulate" component={DmCongratulate} />
            <Route exact path="/tickets_sraech" component={TicketsSraech} />
            <Route exact path="/tickets" component={Tickets1} />
            <Route exact path="/steper_dmpass" component={SteperDmpass} />
            <Route exact path="/ ticket_checkout" component={TicketCheckOut} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/hpayment" component={hPayment} />
            <Route exact path="/interest" component={Interest} />
            {/* For Hotel Details */}

            <Route exact path="/cabconfirmation" component={CabConfirmation} />
            <Route exact path="/checkoutpage" component={CheckoutPage} />
            <Route exact path="/cab" component={Cab} />
            <Route exact path="/cablist" component={CabList} />
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;
