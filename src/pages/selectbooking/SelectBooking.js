import React, { useState } from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import city from "../../assets/img/city.png";
import calendar from "../../assets/img/calendar.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Pass from "./Pass";
import BusPass from "./BusPass";
import { useHistory } from "react-router-dom";
import doodle from "../../assets/img/doodle.png";
import bus from "../../assets/img/bus.png";
import ticket from "../../assets/img/ticket.png";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";

function SelectBooking() {
  const [passTab, setPassTab] = useState(false);
  // const [Journey, setJourney] = useState(true);
  const [startDate, setStartDate] = useState(new Date());

  const [busjourney, setBusJourney] = useState(false);

  const [cabjourney, setCabJourney] = useState(false);
  const history = useHistory();

  const onPassClick = () => {
    setPassTab(true);
    // setJourney(true);
    // setBusJourney(false);
    // setCabJourney(false);
    console.log("object");
    history.push("/dmpass");
  };
  const onBusClick = () => {
    // setPassTab(false);
    // setJourney(false);
    setBusJourney(true);
    console.log("hiii");
    history.push("/buspass");
  };

  const onClickTicket = () => {
    // setBusJourney(false);
    // setPassTab(false);
    // setJourney(false);
    setCabJourney(true);
    console.log("hiii");
    history.push("/tickets");
  };

  return (
    <>
      <Header />
      <div className="d-none d-md-block">
        <div className="select_div">
          <div className="col-xs-12  col-sm-12 col-md-12">
            <div
              className="booking-div py-5 mt-5"
              style={{ textAlign: "center" }}
            >
              <span style={{ fontWeight: "bolder", fontSize: "20px" }}>
                What do you wish to book?
              </span>
            </div>
          </div>
        </div>
        <Container style={{width:"971px"}}>
          <div>
            <Row>
              <Col xs={12} md={4}>
                <div className="userdatas" onClick={onBusClick}>
                  <div>
                    <img
                      src={bus}
                      style={{ width: 39, height: 38.37, marginTop: "10px" }}
                    />
                  </div>
                  <div className="bus_secation">
                    <span className="booking_icon" style={{ color: "#FF4A68" }}>
                      Bus
                    </span>
                    <br />
                    <span>
                    Book bus ticket for your 
           <br />
           favourite spots
                    </span>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="userdatas" onClick={onClickTicket}>
                  <div>
                    <img
                      src={doodle}
                      style={{ width: 39, height: 33.37, marginTop: "10px" }}
                    />
                  </div>
                  <div className="bus_secation">
                    <span className="booking_icon" style={{ color: "#864BD8" }}>
                      Ticket
                    </span>
                    <br />
                    <span>
                      Registered ticket services for a<br />
                      personal travel experience
                    </span>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div className="userdatas" onClick={onPassClick}>
                  <div>
                    <img
                      src={ticket}
                      style={{ width: 39, height: 25.58, marginTop: "10px" }}
                    />
                  </div>
                  <div className="bus_secation">
                    <span className="booking_icon" style={{ color: "#0FA453" }}>
                      Travel Pass
                    </span>
                    <br />
                    <span>
                      Get a pass for travellers, vehicles
                      <br /> and duration of your travel
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        {passTab ? <Pass /> : null}
        {busjourney ? <BusPass /> : null}
        {cabjourney ? <doodle /> : null}
        {/* <Button className="locationpass-btn  mt-5" onClick={onBusClick}>
          Continue
        </Button> */}
        <div className="pt-5 mt-5">
          <Footer />
        </div>
      </div>
      {/*mobile*/}
      <div className="d-block d-md-none">
        <div className="select_div">
          <div className="row p-3" style={{ textAlign: "center" }}>
            <div className="col-xs-12  col-sm-12 col-md-12">
              <div className="booking-div">
                <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                  Select your booking
                </span>
              </div>
            </div>
          </div>

          <Container>
            <div>
              <Row>
                <Col xs={12} md={4}>
                  <div className="userdatas" onClick={onBusClick}>
                    <div>
                      <img
                        src={bus}
                        style={{ width: 30, height: 30, marginTop: "10px" }}
                      />
                    </div>
                    <div className="bus_secation">
                      <span
                        className="booking_icon"
                        style={{ color: "#FF4A68" }}
                      >
                        Bus
                      </span>
                      <br />
                      <span>
                      Book bus ticket for route 
           <br />
           Tamda Ghumar- Mendri 
           <br /> 
           Ghumar- Chitrakoot etc 
                      </span>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div className="userdatas" onClick={onClickTicket}>
                    <div>
                      <img
                        src={doodle}
                        style={{ width: 40, height: 40, marginTop: "10px" }}
                      />
                    </div>
                    <div className="bus_secation">
                      <span
                        className="booking_icon"
                        style={{ color: "#864BD8" }}
                      >
                        Ticket
                      </span>
                      <br />
                      <span>
                        Registered ticket services for a<br />
                        personal travel experience
                      </span>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div className="userdatas" onClick={onPassClick}>
                    <div>
                      <img
                        src={ticket}
                        style={{ width: 30, height: 30, marginTop: "10px" }}
                      />
                    </div>
                    <div className="bus_secation">
                      <span
                        className="booking_icon"
                        style={{ color: "#0FA453" }}
                      >
                        Travel Pass
                      </span>
                      <br />
                      <span>
                        Get a pass for travellers, vehicles
                        <br /> and duration of your travel
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          {/* {Journey ? ( */}
          <></>
          {/* ) : null} */}
          {passTab ? <Pass /> : null}
          {busjourney ? <BusPass /> : null}
          {cabjourney ? <doodle /> : null}
        </div>
        {/* <Button className="locationpass-btn" onClick={onBusClick}>
          Continue
        </Button> */}
      </div>
    </>
  );
}

export default SelectBooking;
