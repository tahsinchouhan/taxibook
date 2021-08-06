import React, { useState } from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import { FaBus, FaCarAlt, FaTicketAlt, FaCity } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Pass from "./Pass";
import BusPass from "./BusPass";
import { useHistory } from "react-router-dom";
import Cab from "./Cab";

// import home1 from '../assets/img/home1.svg'

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
              <Col xs={4} md={4} className="icon-item">
                <FaTicketAlt
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
              <Col xs={4} md={4} className="icon-item">
                <FaBus
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
              <Col xs={4} md={4} className="icon-item">
                <FaCarAlt
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
                  <Col xs={12} md={4}>
                    <Form.Group
                      className="mb-3 userDate pl-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="formselect">From</Form.Label>
                      <div>
                        {/* <FaCity  style={{color:"black"}} /> */}
                        <Form.Control
                          type="text"
                          className="user_input"
                          placeholder="Enter Source"
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={4}>
                    <Form.Group
                      className="mb-3 userDate"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="formselect">From</Form.Label>
                      <Form.Control
                        type="text"
                        className="user_input"
                        placeholder="Enter Source"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={4}>
                    <Form.Group
                      className="mb-3 userdata"
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
    </>
  );
}

export default SelectBooking;
