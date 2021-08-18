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
      <Container className="d-none d-md-block my-5">
        <div className="select_div">
          <div className="row p-3" style={{ textAlign: "center" }}>
            <div className="col-xs-12  col-sm-12 col-md-12">
              <div className="booking-div">
                <span style={{ fontWeight: "bolder", fontSize: "40px" }}>
                What do you wish to book?
                </span>
              </div>
            </div>
          </div>
          <Container>
            {/* <Row className="user-icon">
              <div className="icon-item">             

                <span className="tab-icons">
                  <img
                    src={bus}
                    className={busjourney ? "bus-color" : "default-color"}
                    onClick={onBusClick}
                  />
                  <div
                    onClick={onBusClick}
                    className={busjourney ? "bus-color" : "default-color"}
                  >
                    Bus
                  </div>
                </span>

                <span className="tab-icons">
                  <img
                    src={doodle}
                    className={cabjourney ? "cab-color" : "default-color"}
                    onClick={onCabClick}
                  />
                  <div
                    onClick={onCabClick}
                    className={cabjourney ? "cab-color" : "default-color"}
                  >
                    Cab
                  </div>
                </span>
                <span className="tab-icons">
                  <img
                    src={ticket}
                    alt="ticket"
                    className={passTab ? "pass-color" : "default-color"}
                    onClick={onPassClick}
                  />
                  <div
                    onClick={onPassClick}
                    className={passTab ? "pass-color" : "default-color"}
                  >
                    Pass
                  </div>
                </span>
                
              </div>
            </Row> */}
          </Container>
          <Container>
            <div>
              <Row>
              <Col xs={12} md={4}>
                <div   className="userdatas" onClick={ onBusClick } >
                  <div>
                  <img src={bus} style={{ width:30, height:30,marginTop:"10px" }} />
                  </div>
                  <div className="bus_secation">
                    <span className="booking_icon"  style={{color:"#FF4A68"}}>Bus</span><br/>
                    <span>Find buses that will take you to your<br/>favourite destinations</span>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4}>
              <div   className="userdatas" onClick={onClickTicket}>
                  <div>
                  <img src={doodle} style={{ width: 50, height:40,marginTop:"10px" }} />
                  </div>
                  <div className="bus_secation">
                    <span className="booking_icon" style={{color:"#864BD8"}}>Ticket</span><br/>
                    <span>Registered ticket services for a<br/>personal travel experience</span>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4}>
              <div   className="userdatas" onClick={ onPassClick} >
                  <div>
                  <img src={ticket} style={{ width:30, height:30,marginTop:"10px" }} />
                  </div>
                  <div className="bus_secation">
                    <span className="booking_icon" style={{color:"#0FA453"}}>DmPass</span><br/>
                    <span>Get a pass for travellers, vehicles<br/> and duration of your travel</span>
                  </div>
                </div>
              </Col>
              </Row>              
            </div>
          </Container>         
          {passTab ? <Pass /> : null}
          {busjourney ? <BusPass /> : null}
          {cabjourney ? <doodle/> : null}
        </div>
      </Container>

      {/*mobile*/}
     <Container className="d-block d-md-none">
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
                <div   className="userdatas" onClick={ onBusClick } >
                  <div>
                  <img src={bus} style={{ width:30, height:30,marginTop:"10px" }} />
                  </div>
                  <div className="bus_secation">
                    <span className="booking_icon"  style={{color:"#FF4A68"}}>Bus</span><br/>
                    <span>Find buses that will take you to your<br/>favourite destinations</span>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4}>
              <div   className="userdatas" onClick={onClickTicket}>
                  <div>
                  <img src={doodle} style={{ width:40, height:40,marginTop:"10px" }} />
                  </div>
                  <div className="bus_secation">
                    <span className="booking_icon" style={{color:"#864BD8"}}>Ticket</span><br/>
                    <span>Registered ticket services for a<br/>personal travel experience</span>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4}>
              <div   className="userdatas" onClick={ onPassClick} >
                  <div>
                  <img src={ticket} style={{ width:30, height:30,marginTop:"10px" }} />
                  </div>
                  <div className="bus_secation">
                    <span className="booking_icon" style={{color:"#0FA453"}}>DmPass</span><br/>
                    <span>Get a pass for travellers, vehicles<br/> and duration of your travel</span>
                  </div>
                </div>
              </Col>
              </Row>              
            </div>
          </Container>
          {/* {Journey ? ( */}
          <>
           
          </>
          {/* ) : null} */}
          {passTab ? <Pass /> : null}
          {busjourney ? <BusPass /> : null}
          {cabjourney ? <doodle /> : null}
        </div>
      </Container>
      <Button className="locationpass-btn" onClick={onBusClick}>
          Continue
        </Button>
    </>
  );
}

export default SelectBooking;
