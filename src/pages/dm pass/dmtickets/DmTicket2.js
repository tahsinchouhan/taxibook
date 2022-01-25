import React, { useState, useEffect } from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { connect, useDispatch, useSelector } from "react-redux";
import { FaSpinner } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import { AvForm, AvField } from "availity-reactstrap-validation";
import "react-toastify/dist/ReactToastify.css";
import { Redirect, useHistory } from "react-router-dom";
import doodle from "../../../assets/img/doodle.png";
import ticket from "../../../assets/img/ticket.svg";
import Header from "../../../components/Header";
import Footer from "../../travesaly/Footer";
import { ToastContainer, toast } from "react-toastify";

import { getOtp, verifyOtp } from "../../../redux/login/actions";

// import { useDispatch, useSelector } from "react-redux";
import { fetchStart } from "../../../redux/actions";

function DmTicket2({ loading }) {
  const { user_data, send_otp_error, verify_otp_error } = useSelector(
    (state) => state.loginReducer
  );

  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch();
  const { dmData } = useSelector((state) => state.dmpassReducer);
  const { mobile } = dmData;

  const onDmTicketSecondShow = () => {
    if (user_data === null) {
      setShowSignUpModal(true);
      toast.error("USER not registered? Signup First");
    } else if (otp.length === 6) {
      setShowSignUpModal(false);
      dispatch(fetchStart());
      dispatch(verifyOtp(number, otp));
    }
  };

  const sendOtp = () => {
    if (user_data === null) {
      setShowSignUpModal(true);
      toast.error("USER not registered? Signup First");
    } else {
      setShowSignUpModal(false);
      console.log("object::::::::::::::", number);
      dispatch(getOtp(number));
    }
  };

  const submitHandler = () => {
    if (number.length === 6) {
      dispatch(verifyOtp(mobile, number));
    }
  };

  useEffect(() => {
    if (send_otp_error.code === 401) {
      toast.error("USER not registered? Signup First");
      setShowSignUpModal(true);
    }
  }, [send_otp_error]);

  useEffect(() => {
    if (verify_otp_error === "OTP verification failed!!") {
      toast.error("OTP verification failed!!");
    }
  }, [verify_otp_error]);

  return (
    <>
      <div>
        <ToastContainer limit={1} />
        <Header showSignUpModal={showSignUpModal} />

        {/* {user_data !== null ? <Redirect to="/dmticket" /> : null} */}

        <div className="d-none d-md-block">
          <Container
            className="d-none d-md-block my-5 mt-0"
            style={{ width: "70%" }}
          >
            <div className="select_div">
              <div className="row" style={{ textAlign: "center" }}>
                <div className="col-xs-12  col-sm-12 col-md-12">
                  <div className="booking-div">
                    <div style={{ marginBottom: "15px" }}>
                      <img src={ticket} alt="doodle" />
                    </div>

                    <h5
                      style={{
                        color: "#0fa453",
                        margin: "10px",
                        // color: "black",
                        fontWeight: "700",
                      }}
                    >
                      Travel Pass
                    </h5>
                    {/* <br /> */}
                    <span
                      style={{
                        fontWeight: "500",
                        padding: "10px",
                      }}
                    >
                      Get a pass for travellers, vehicles
                      <br /> and duration of your travel
                    </span>
                    <br />
                  </div>
                </div>
              </div>

              <Container style={{ width: "69%", paddingTop: "50px" }}>
                <AvForm onValidSubmit={onDmTicketSecondShow}>
                  <Row>
                    <Col xs={12} md={6} className="mt-2">
                      <Form.Label className="dm-ticket">
                        Enter mobile number
                      </Form.Label>

                      <AvField
                        onChange={(e) => setNumber(e.target.value)}
                        value={number}
                        name="Mobile Number"
                        type="number"
                        className="input-password dm-inputticket"
                        errorMessage="Invalid Number"
                        placeholder="Enter your mobile number"
                        validate={{
                          required: {
                            value: true,
                            errorMessage: "Enter your mobile number",
                          },
                          pattern: {
                            value: "^[0-9]",
                            errorMessage: "Your Number only be 10 numbers",
                          },
                          maxLength: {
                            value: 10,
                            errorMessage: "Only 10 digit number",
                          },
                        }}
                      />
                      <Button
                        onClick={sendOtp}
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          color: "#FF4A68",
                          float: "right",
                          fontSize: "12px",
                        }}
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <FaSpinner style={{ marginRight: "5px" }} />
                            Sending...
                          </>
                        ) : (
                          <>Send OTP</>
                        )}
                      </Button>
                    </Col>
                    <Col xs={12} md={6} className="mt-2">
                      <Form.Label className="dm-ticket">Enter OTP</Form.Label>
                      <AvField
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        name="OTP"
                        type="number"
                        className="input-password dm-inputticket"
                        errorMessage="Invalid Number"
                        placeholder="Enter the 6 digit OTP"
                        validate={{
                          required: {
                            value: true,
                            errorMessage: "Enter the 6 digit OTP",
                          },
                          pattern: {
                            value: "^[0-6]",
                            errorMessage: "Your OTP only be 6 numbers",
                          },
                          maxLength: {
                            value: 6,
                            errorMessage: "Only 6 digit OTP",
                          },
                        }}
                      />
                    </Col>
                  </Row>
                  <div
                    className="dmticket-btn"
                    style={{ textAlign: "center", marginTop: "70px" }}
                  >
                    <Button
                      type="submit"
                      class="btn btn-success"
                      style={{
                        width: "200px",
                        textAlign: "center",
                        height: "52px",
                        borderRadius: "9px",
                        backgroundColor: "#0fa453",
                        border: "none",
                      }}
                      // onClick={onDmTicketSecondShow}
                    >
                      Continue
                    </Button>
                  </div>
                </AvForm>
              </Container>
            </div>
          </Container>

          <Footer />
        </div>

        {/*mobile-view*/}
        <div fluid className="d-md-none">
          <AvForm onValidSubmit={onDmTicketSecondShow}>
            <Container className="my-5 mt-0" style={{ width: "" }}>
              <div className="select_div">
                <div className="row p-3" style={{ textAlign: "center" }}>
                  <div className="col-xs-12  col-sm-12 col-md-12">
                    <div className="booking-div">
                      <div style={{ marginBottom: "15px" }}>
                        <img
                          src={ticket}
                          alt="doodle"
                          style={{ height: "60px" }}
                        />
                      </div>

                      <h5
                        style={{
                          color: "#0fa453",
                          margin: "10px",
                          color: "black",
                          fontWeight: "700",
                        }}
                      >
                        Travel Pass
                      </h5>
                      <span
                        style={{
                          fontWeight: "500",
                          padding: "10px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <span> Get a pass for travellers, vehicles</span>
                        <br />
                        <span> and duration of your travel</span>
                      </span>
                    </div>
                  </div>
                </div>

                <Container style={{ paddingTop: "20px", paddingBottom: 150 }}>
                  <Row>
                    <Col xs={12} md={6} className="mt-2">
                      <Form.Group
                        className=""
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="dm-ticket">
                          Enter mobile number.
                        </Form.Label>

                        <AvField
                          onChange={(e) => setNumber(e.target.value)}
                          value={number}
                          name="Mobile Number"
                          type="number"
                          className="input-password dm-inputticket"
                          errorMessage="Invalid Number"
                          placeholder="Enter your mobile number"
                          validate={{
                            required: {
                              value: true,
                              errorMessage: "Enter your mobile number",
                            },
                            pattern: {
                              value: "^[0-9]",
                              errorMessage: "Your Number only be 10 numbers",
                            },
                            maxLength: {
                              value: 10,
                              errorMessage: "Only 10 digit number",
                            },
                          }}
                        />
                        <Button
                          onClick={sendOtp}
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            color: "#FF4A68",
                            float: "right",
                            fontSize: "12px",
                          }}
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <FaSpinner style={{ marginRight: "5px" }} />
                              Sending...
                            </>
                          ) : (
                            <>Send OTP</>
                          )}
                        </Button>
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6} className="mt-2">
                      <Form.Group
                        className=""
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="dm-ticket">Enter OTP</Form.Label>

                        <AvField
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          name="OTP"
                          type="number"
                          className="input-password dm-inputticket"
                          errorMessage="Invalid Number"
                          placeholder="Enter the 6 digit OTP"
                          validate={{
                            required: {
                              value: true,
                              errorMessage: "Enter the 6 digit OTP",
                            },
                            pattern: {
                              value: "^[0-6]",
                              errorMessage: "Your OTP only be 6 numbers",
                            },
                            maxLength: {
                              value: 6,
                              errorMessage: "Only 6 digit OTP",
                            },
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Container>
            <Button type="submit" className="locationpass-btn">
              Continue
            </Button>
          </AvForm>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({ loginReducer }) => {
  const { loading } = loginReducer;
  return { loading };
};

export default connect(mapStateToProps)(DmTicket2);
