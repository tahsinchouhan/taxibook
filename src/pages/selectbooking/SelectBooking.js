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
import Cab from "./Cab";
import bus from "../../assets/img/bus.png";
import cab from "../../assets/img/cab.png";
import ticket from "../../assets/img/ticket.png";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";

function SelectBooking() {
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
      <Header />
      <Container className="d-none d-md-block my-5">
        <div className="select_div">
          <div className="row p-3" style={{ textAlign: "center" }}>
            <div className="col-xs-12  col-sm-12 col-md-12">
              <div className="booking-div">
                <span style={{ fontWeight: "bolder", fontSize: "40px" }}>
                  Select your booking
                </span>
              </div>
            </div>
          </div>
          <Container>
            <Row className="user-icon">
              <div
                className="icon-item"
              >
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
                    src={cab}
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
              </div>
            </Row>
          </Container>
          {Journey ? (
            <>
              <Container>
                <Row>
                  <Col xs={2} md={2}></Col>
                  <Col xs={12} md={3} className="mt-2">
                    <Form.Group
                      className="userdatas"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="formselect">From</Form.Label>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <img src={city} style={{ width: 20, height: 20 }} />
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
                      className="userdatas"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="formselect">To</Form.Label>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <img src={city} style={{ width: 20, height: 20 }} />
                        <Form.Control
                          type="text"
                          className="user_input"
                          placeholder="Enter Source"
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={2} className="mt-2">
                    <Form.Group
                      className="userdatas"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="formselect">
                        Journey Date
                      </Form.Label>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <img src={calendar} style={{ width: 20, height: 20 }} />
                        <DatePicker
                          className="col-sm-10 user_input"
                          style={{ marginLeft: "50px" }}
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col xs={2} md={2}></Col>
                  <Col xs={2} md={2}></Col>
                </Row>
                <div className="text-center">
                  <Button
                    type="submit"
                    class="btn btn-success"
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
                    <Col xs={12} md={3}>
                      <div className="fromtocontainer">
                        <Form.Group
                          className="userDate"
                          controlId="exampleForm.ControlInput1"
                          style={{ borderBottom: "2px solid #8888" }}
                        >
                          <span className="formselect">From</span>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <img src={city} style={{ width: 20, height: 20 }} />
                            <Form.Control
                              type="text"
                              className="user_input"
                              placeholder="Enter Source"
                            />
                          </div>
                        </Form.Group>
                        <Form.Group
                          className="userDate"
                          controlId="exampleForm.ControlInput1"
                        >
                          <span className="formselect">To</span>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <img src={city} style={{ width: 20, height: 20 }} />
                            <Form.Control
                              type="text"
                              className="user_input"
                              placeholder="Enter Source"
                            />
                          </div>
                        </Form.Group>
                      </div>
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
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <img src={calendar} style={{ width: 20, height: 20 }} />
                        <DatePicker
                          className="col-sm-10 user_input"
                          style={{ marginLeft: "50px" }}
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col xs={2} md={2}></Col>
                  <Col xs={2} md={2}></Col>
                </Row>
                <div className="text-center">
                  <Button
                    type="submit"
                    class="btn btn-success"
                    style={{
                      width: "60%",
                      textAlign: "center",
                      height: "48px",
                      borderRadius: "9px",
                      backgroundColor: "#0fa453",
                      marginBottom: "40px",
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
      <Footer />
    </>
  );
}

export default SelectBooking;
