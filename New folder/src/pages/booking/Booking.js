import React, { useState } from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import { FaBus, FaCarAlt, FaTicketAlt, FaCity } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Pass from "../selectbooking/Pass";
import BusPass from "../selectbooking/BusPass";
import { useHistory } from "react-router-dom";
import Cab from "../selectbooking/Cab";
import bus from "../../assets/img/bus.png";
import cab from "../../assets/img/cab.png";
import ticket from "../../assets/img/ticket.png";

// import home1 from '../assets/img/home1.svg'

function Booking() {
  const [passTab, setPassTab] = useState(false);
  const [Journey, setJourney] = useState(true);
  const [busjourney, setBusJourney] = useState(false);
  const [cabjourney, setCabJourney] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const history = useHistory();

  const onPassClick = () => {
    setPassTab(true);
    setJourney(false);
    setBusJourney(false);
    setCabJourney(false);
    console.log("object");
    // history.push('/pass')
  };
  const onBusClick = () => {
    setPassTab(false);
    setJourney(false);
    setBusJourney(true);
    console.log("hiii");
    // history.push('/buspass')
  };

  const onCabClick = () => {
    setBusJourney(false);
    setPassTab(false);
    setJourney(false);
    setCabJourney(true);
    console.log("hiii");
    // history.push('/buspass')
  };

  return (
    <>
      {/* <Container>
        <div className="select_div">
          <div className="row p-3" style={{ textAlign: "center" }}>
            <div className="col-xs-12  col-sm-12 col-md-12">
              <img src={logo} alt="bastar" style={{ width: "20%" }} />
              <div className="booking-div">
                <h1>Select your booking</h1>
              </div>
            </div>
          </div>
          <Container>
            <Row className="user-icon">
              <Col xs={4} md={3} className="icon-item">
                <img src={ticket} alt="ticket"
                  className={passTab ? "pass-color" : "default-color"}
                  onClick={onPassClick}
                />
                <br />
                <span
                  onClick={onPassClick}
                  className={passTab ? "pass-color" : "default-color"}
                >
                  Pass
                </span>
              </Col>
              <Col xs={4} md={3} className="icon-item">
                <img src={bus} 
                  className={busjourney ? "bus-color" : "default-color"}
                  onClick={onBusClick}
                />
                <br />
                <span
                  onClick={onBusClick}
                  className={busjourney ? "bus-color" : "default-color"}
                >
                  {" "}
                  Bus
                </span>
              </Col>
              <Col xs={4} md={3} className="icon-item">
                <img src={cab} 
                  className={cabjourney ? "cab-color" : "default-color"}
                  onClick={onCabClick}
                />
                <br />
                <span
                  onClick={onCabClick}
                  className={cabjourney ? "cab-color" : "default-color"}
                >
                  Cab
                </span>
              </Col>
            </Row>
          </Container>
          {Journey ? (
            <>
              <Container>
                <Row>
                  <Col  xs={2} md={2}></Col>
                  <Col xs={12} md={3} className="mt-2" >
                    <Form.Group
                      className="  userDate "
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="formselect">From</Form.Label>
                      <div>
                        <Form.Control
                          type="text"
                          className="user_input"
                          placeholder="Enter Source"
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={3} className="mt-2">
                    <Form.Group
                      className=" userDate"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="formselect">To</Form.Label>
                      <Form.Control
                        type="text"
                        className="user_input"
                        placeholder="Enter Source"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={2} className="mt-2">
                    <Form.Group
                      className="userdata"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="formselect">
                        Journey Date
                      </Form.Label>
                      <DatePicker
                        className="col-sm-10 user_input"
                        style={{ marginLeft: "50px" }}
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </Form.Group>
                  </Col>
                  <Col  xs={2} md={2}></Col>
                  <Col  xs={2} md={2}></Col>
                </Row>
                <div className="text-center">
                  <Button
                    type="submit"
                    className = "btn btn-success"
                    style={{
                      width: "19%",
                      textAlign: "center",
                      height: "48px",
                      borderRadius: "9px",
                      backgroundColor: "#0fa453",
                    }}
                  >
                    Proceed
                  </Button>
                </div>
              </Container> 
            </>
          ) : null}
          {passTab ? <Pass /> : null}
          {busjourney ? <BusPass /> : null}
          {cabjourney ? <Cab /> : null}
        </div>
      </Container> */}

      {/*mobile*/}

      <Container>
        <div className="select_div">
          <div className="row p-3" style={{ textAlign: "center" }}>
            <div className="col-xs-12  col-sm-12 col-md-12">
              <img src={logo} alt="bastar" style={{ width: "20%" }} />
              <div className="booking-div">
                <h1>Select your booking</h1>
              </div>
            </div>
          </div>
          <Container>
            <Row className="user-icon">
              <Col xs={4} md={3} className="icon-item">
                <img
                  src={ticket}
                  alt="ticket"
                  className={passTab ? "pass-color" : "default-color"}
                  onClick={onPassClick}
                />
                <br />
                <span
                  onClick={onPassClick}
                  className={passTab ? "pass-color" : "default-color"}
                >
                  Pass
                </span>
              </Col>
              <Col xs={4} md={3} className="icon-item">
                <img
                  src={cab}
                  className={busjourney ? "bus-color" : "default-color"}
                  onClick={onBusClick}
                />
                <br />
                <span
                  onClick={onBusClick}
                  className={busjourney ? "bus-color" : "default-color"}
                >
                  Bus
                </span>
              </Col>
              <Col xs={4} md={3} className="icon-item">
                <img
                  src={bus}
                  className={cabjourney ? "cab-color" : "default-color"}
                  onClick={onCabClick}
                />
                <br />
                <span
                  onClick={onCabClick}
                  className={cabjourney ? "cab-color" : "default-color"}
                >
                  Cab
                </span>
              </Col>
            </Row>
          </Container>
          {Journey ? (
            <>
              <Container>
                <Row>
                  <Col xs={2} md={2}></Col>
                  <div
                    className="d-flex"
                    style={{ borderBlockColor: "#9b98981c" }}
                  >
                    <Col xs={12} md={3} className="">
                      <Form.Group
                        style={{ borderBottom: "1px solid grey" }}
                        className="  userDate "
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="formselect">From</Form.Label>
                        <div>
                          <Form.Control
                            type="text"
                            className="user_input"
                            placeholder="Enter Source"
                          />
                        </div>
                      </Form.Group>
                      {/* </Col>
                  <Col xs={12} md={3} className=""> */}
                      <Form.Group
                        className=" userDate"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="formselect">To</Form.Label>
                        <Form.Control
                          type="text"
                          className="user_input"
                          placeholder="Enter Source"
                        />
                      </Form.Group>
                    </Col>
                  </div>
                  <Col xs={12} md={2} className="mt-2">
                    <Form.Group
                      className="userdata"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="formselect">
                        Journey Date
                      </Form.Label>
                      <DatePicker
                        className="col-sm-10 user_input"
                        style={{ marginLeft: "50px" }}
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={2} md={2}></Col>
                  <Col xs={2} md={2}></Col>
                </Row>
                <div className="text-center" style={{ marginTop: "50px" }}>
                  <Button
                    type="submit"
                    className = "btn btn-success"
                    style={{
                      marginTop: "30px",
                      width: "60%",
                      textAlign: "center",
                      height: "48px",
                      borderRadius: "9px",
                      backgroundColor: "#0fa453",
                    }}
                  >
                    Proceed
                  </Button>
                </div>
              </Container>
            </>
          ) : null}
          {passTab ? <Pass /> : null}
          {busjourney ? <BusPass /> : null}
          {cabjourney ? <Cab /> : null}
        </div>
      </Container>
    </>
  );
}

export default Booking;
