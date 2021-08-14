import React, { useState } from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/css/buspass.css";
import { FaBus, FaCarAlt, FaTicketAlt } from "react-icons/fa";
import bus from "../../assets/img/bus.png";
import calendar from "../../assets/img/calendar.png";
import { useHistory } from "react-router-dom";

import ButtonComponent from "../../containers/Button";
import Footer from "../travesaly/Footer";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getOtp, setMobile } from "../../redux/actions";
import { API_PATH } from "../../Path/Path";
import axios from "axios";

function BusDetail() {
  const history = useHistory();
    const[otp,setOtp]=useState('');
  const { mobile } = useSelector(state => state.busReducer)

  const dispatch = useDispatch()

  const handleMobile = (e) => {
    console.log("object", e.target.value);
    let mob = e.target.value;
    if (mob.length > 9) {
      dispatch(getOtp(`91${e.target.value}`))
    }
    dispatch(setMobile(e.target.value))
  }
  const onClickMonsoon = () => {
    console.log("object");
    axios.post(`${API_PATH}/api/v1/customer/verifyotp`, {
          mobile,
          registrationMobileOTP:otp
      })
        .then((response) => response)
        .then((json) => json);
    
    // history.push('/busdetail')
    // history.push('/busmonsoon')
  }
  return (
    <>
      <Header />
      <div className="d-none d-md-block">
        <div style={{ textAlign: "center", margin: "50px" }}>
          <div style={{ margin: "10px" }}>
            <img src={bus} alt="bus" />
            <h5 style={{ margin: "10px", color: "#FF4A68" }}>Bus</h5>
          </div>
          <span>
            Find buses that will take you to <br />
            your favourite destinations
          </span>
        </div>
        <Container style={{ width: "70%" }}>
          <Row className="row justify-content-center">
            <Col xs={12} md={4} className="">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label
                  className="formbus"
                  style={{
                    fontSize: "12px",
                    fontWeight: "bolder",
                    marginLeft: "4px",
                    color: "black",
                  }}
                >
                  Enter Mobile no.
                </Form.Label>
                <Form.Control
                  type="text"
                  className="bus_input"
                  placeholder="Enter Mobile No"
                  style={{ height: "50px", fontSize: "12px" }}
                  value={mobile}
                  onChange={handleMobile}
                />
              </Form.Group>
              <Button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#FF4A68",
                  float: "right",
                  fontSize: "12px",
                }}
              >
                Sent OTP
              </Button>
            </Col>
            <Col xs={12} md={4} className="">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label
                  className="formbus"
                  style={{
                    fontSize: "12px",
                    fontWeight: "bolder",
                    marginLeft: "4px",
                    color: "black",
                  }}
                >
                  Enter OTP
                </Form.Label>

                <Form.Control
                  type="text"
                  className="bus_input"
                  placeholder="Enter the 6 digit OTP"
                  style={{ height: "50px", fontSize: "12px" }}
                />
              </Form.Group>
            </Col>
          </Row>
        </Container>
        <div className="location-btn">
          <Button className="locationpass-btn" onClick={onClickMonsoon}>Continue</Button>
        </div>
        <Footer />
      </div>

      <div fluid className="d-md-none">
        <div style={{ textAlign: "center", margin: "50px" }}>
          <div style={{ margin: "10px" }}>
            <img src={bus} alt="bus" />
            <h5 style={{ margin: "10px", color: "#FF4A68" }}>Bus</h5>
          </div>
          <span style={{ fontSize: "12px", fontWeight: "bold" }}>
            Find buses that will take you to <br />
            your favourite destinations
          </span>
        </div>
        <Container>
          <Row className="row justify-content-center">
            <Col xs={12} md={4} className="" style={{ width: "100%" }}>
              <Form.Group
                className="formbus"
                style={{ fontWeight: "bolder" }}
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label
                  className="formselect"
                  style={{
                    fontSize: "12px",
                    fontWeight: "bolder",
                    marginLeft: "4px",
                    color: "black",
                  }}
                >
                  Enter Mobile no.
                </Form.Label>
                <Form.Control
                  type="text"
                  className="bus_input"
                  placeholder="Enter Mobile No"
                  style={{ fontSize: "12px" }}
                  value={mobile}
                  onChange={(e) => dispatch(setMobile(e.target.value))}
                />
                <Button
                  style={{
                    marginTop: "0px",
                    color: "#FF4A68",
                    backgroundColor: "transparent",
                    border: "none",
                    float: "right",
                    fontSize: "12px",
                  }}
                >
                  Sent OTP
                </Button>
              </Form.Group>
            </Col>
            <Col xs={12} md={4} className="" style={{ width: "100%" }}>
              <Form.Group
                className="formbus"
                style={{ fontWeight: "bolder" }}
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label
                  className="formselect"
                  style={{
                    fontSize: "12px",
                    fontWeight: "bolder",
                    marginLeft: "4px",
                    color: "black",
                  }}
                >
                  Enter OTP
                </Form.Label>
                <Form.Control
                  type="text"
                  className="bus_input"
                  placeholder="Enter OTP"
                  style={{ fontSize: "12px" }}
                  value={otp} onChange={(e)=>setOtp(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
        </Container>
        <Button className="locationpass-btn" onClick={onClickMonsoon}>Continue</Button>
      </div>

    </>
  );
}

export default BusDetail;