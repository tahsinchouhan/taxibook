import React, { useState } from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import "../../assets/css/buspass.css";
import { FaBus, FaCarAlt, FaSpinner, FaTicketAlt } from "react-icons/fa";
import bus from "../../assets/img/bus.png";
import { useHistory } from "react-router-dom";

import Footer from "../travesaly/Footer";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchStart, getOtp, setMobile, verifyOtp } from "../../redux/actions";
import { API_PATH } from "../../Path/Path";
import axios from "axios";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import Message from "../../components/Message";
import { AvForm, AvField } from "availity-reactstrap-validation";

function BusDetail() {
  const history = useHistory();
  const [otp, setOtp] = useState("");
  const { error, loading, message } = useSelector(
    (state) => state.commonReducer
  );
  const { user_data } = useSelector((state) => state.loginReducer);
  const { mobile } = useSelector((state) => state.busReducer);
  const [number, setNumber] = useState("")
  const dispatch = useDispatch();

  // const handleMobile = (e) => {
  //   console.log("object", e.target.value);
  //   let mob = e.target.value;
  //   // if (mob.length > 9) {
  //   //   // dispatch(getOtp(`91${e.target.value}`))
  //   //   fetchOtp(e.target.value);
  //   // }
  //   dispatch(setMobile(e.target.value));
  // };

  const fetchOtp = (mobile) => {
    // console.log("OTP:::::",mobile)
    dispatch(getOtp(`91${number}`));
  };

  const onClickMonsoon = () => {
    console.log("object", `91${mobile}`, otp);
    if (otp.length === 6) {
      dispatch(fetchStart());
      dispatch(verifyOtp(`91${number}`, otp));
    }

  };
  return (
    <>
      <Header />
      {loading ? <Loader /> : null}
      {message ? <Message msg={message} type="success" /> : null}
      {error ? <Message msg={error} type="error" /> : null}
      {user_data !== null ? <Redirect to="/busdetail" /> : null}
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
          <AvForm >
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
                    Enter mobile number
                  </Form.Label>
                  <AvField
                    style={{ height: "50px", fontSize: "12px" }}
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                    name="Mobile Number"
                    type="number"
                    className="bus_input"
                    errorMessage="Invalid Number"
                    placeholder="Enter mobile number"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "Enter your mobile number",
                      },
                      pattern: {
                        value: "^[0-9]",
                        errorMessage:
                          "Your Number only be 10 numbers"
                      },
                      maxLength: {
                        value: 10,
                        errorMessage: "Only 10 digit number"
                      }
                    }}
                  />

                </Form.Group>
                <Button
                      onClick={fetchOtp}
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          color: "#FF4A68",
                          float: "right",
                          fontSize: "12px",
                        }}
                        disabled={loading}
                      >
                      {loading ? <><FaSpinner style={{ marginRight: "5px" }} />Sending...</> : <>Send OTP</>} 
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
                  <AvField
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    name="OTP"
                    type="number"
                    style={{ height: "50px", fontSize: "12px" }}
                    className="bus_input"
                    errorMessage="Invalid Number"
                    placeholder="Enter the 6 digit OTP"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "Enter the 6 digit OTP",
                      },
                      pattern: {
                        value: "^[0-6]",
                        errorMessage:
                          "Your OTP only be 6 numbers"
                      },
                      maxLength: {
                        value: 6,
                        errorMessage: "Only 6 digit OTP"
                      }
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="location-btn my-5">
              <Button className="locationpass-btn" type="submit" onClick={onClickMonsoon}>
                Continue
              </Button>
            </div>
          </AvForm>
        </Container>

        <Footer />
      </div>

      {/*mobile-view*/}
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
          <AvForm >
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
                    Enter mobile number
                  </Form.Label>
                  <AvField
                    style={{ height: "50px", fontSize: "12px" }}
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                    style={{ fontSize: "12px" }}
                    name="Mobile Number"
                    type="number"
                    className="bus_input"
                    errorMessage="Invalid Number"
                    placeholder="Enter mobile number"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "Enter your mobile number",
                      },
                      pattern: {
                        value: "^[0-9]",
                        errorMessage:
                          "Your Number only be 10 numbers"
                      },
                      maxLength: {
                        value: 10,
                        errorMessage: "Only 10 digit number"
                      }
                    }}
                  />
                  {/* <Form.Control
                    type="text"
                    className="bus_input"
                    placeholder="Enter mobile number"
                    style={{ fontSize: "12px" }}
                    value={mobile}
                    onChange={(e) => dispatch(setMobile(e.target.value))}
                  /> */}
                  {/* <Button
                  
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
                  </Button> */}
                  <Button
                        onClick={fetchOtp}
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          color: "#FF4A68",
                          float: "right",
                          fontSize: "12px",
                        }}
                        disabled={loading}
                      >
                      {loading ? <><FaSpinner style={{ marginRight: "5px" }} />Sending...</> : <>Send OTP</>} 
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
                  <AvField
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    name="OTP"
                    type="number"
                    style={{ height: "50px", fontSize: "12px" }}
                    className="bus_input"
                    errorMessage="Invalid Number"
                    placeholder="Enter the 6 digit OTP"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "Enter the 6 digit OTP",
                      },
                      pattern: {
                        value: "^[0-6]",
                        errorMessage:
                          "Your OTP only be 6 numbers"
                      },
                      maxLength: {
                        value: 6,
                        errorMessage: "Only 6 digit OTP"
                      }
                    }}
                  />


                </Form.Group>
              </Col>
            </Row>
            <div >
              <Button
                style={{
                  width: "100%",
                  textAlign: "center",
                  height: "80px",
                  borderRadius: "0px",
                  backgroundColor: "#0fa453",
                  border: "none",
                  fontWeight: "600",
                  marginTop: 20
                }}
                onClick={onClickMonsoon}
              >
                Continue
              </Button>
            </div>
          </AvForm>
        </Container>

      </div>
    </>
  );
}

export default BusDetail;
