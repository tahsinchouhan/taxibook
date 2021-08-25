import React, { useState } from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";
import doodle from "../../../assets/img/doodle.png";
import ticket from "../../../assets/img/ticket.png";
import Header from "../../../components/Header";
import Footer from "../../travesaly/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setDmData } from "../../../redux/actions";

function DmTicket2() {
    const history = useHistory();

    const dispatch = useDispatch()
    const { dmData } = useSelector(state => state.dmpassReducer)
    const { mobile } = dmData
  const onDmTicketSecondShow = () => {
    console.log("hii");
    history.push('/dmticket')
    // history.push('/travelticket')
  };
  return (
    <>
      <div>
        <Header />
        <div className="d-none d-md-block">
        <Container className="d-none d-md-block my-5" style={{ width: "70%" }}>
          <div className="select_div">
            <div className="row" style={{ textAlign: "center" }}>
              <div className="col-xs-12  col-sm-12 col-md-12">
                <div className="booking-div">
                  <div style={{ marginBottom: "15px" }}>
                    {/* <img src={ticket} alt="" style={{ height: "100px"}}/> */}
                    <img src={doodle} alt="doodle" style={{ height: "100px" }} />
                  </div>
                  {/* <span
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      color: "#0fa453",
                      paddingTop: "50px",
                    }}
                  >
                    Traveller Pass
                  </span> */}
                  <h5 style={{ color: "#0fa453", margin: "10px", color: "black", fontWeight: "700" }}>
                    Traveller Pass
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
                  </span><br />
                </div>
              </div>
            </div>

            <Container style={{ width: "69%", paddingTop: "50px" }}>
              <Row>
                <Col xs={12} md={6} className="mt-2">
                  <Form.Group
                    className=""
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="dm-ticket">
                      Enter Mobile no.
                    </Form.Label>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <Form.Control
                        type="text"
                        className="dm-inputticket"
                        placeholder=" Enter your mobile number"
                        name="mobile"
                        value={mobile} onChange={(e)=>dispatch(setDmData("mobile",e.target.value))}
                      />
                    </div>
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
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} className="mt-2">
                  <Form.Group
                    className=""
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="dm-ticket">Enter OTP</Form.Label>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <Form.Control
                        type="text"
                        className="dm-inputticket"
                        placeholder=" Enter the 6 digit OTP"
                      />
                    </div>
                  </Form.Group>
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
                  onClick={onDmTicketSecondShow}
                >
                  Continue
                </Button>
              </div>
            </Container>
          </div>
        </Container>
        <Footer />
        </div>
        
{/*mobile-view*/}
        <div  fluid className="d-md-none">
        <Container className="my-5" style={{ width: "" }}>
          <div className="select_div">
            <div className="row p-3" style={{ textAlign: "center" }}>
              <div className="col-xs-12  col-sm-12 col-md-12">
                <div className="booking-div">
                  <div style={{ marginBottom: "15px" }}>
                    <img src={doodle} alt="doodle" style={{ height: "100px" }} />
                  </div>
                  {/* <span
                    style={{
                      fontWeight: "600",
                      fontSize: "15px",
                      color: "#0fa453",
                      paddingTop: "50px",
                    }}
                  >
                    Traveller Pass
                  </span> */}
                  <h5 style={{ color: "#0fa453", margin: "10px", color: "black", fontWeight: "700" }}>
                    Traveller Pass
                  </h5>
                  <span
                    style={{
                      fontWeight: "500",
                      padding: "10px",
                      whiteSpace:'nowrap'
                    }}
                  >
                   <span> Get a pass for travellers, vehicles</span>
                    <br/><span> and duration of your travel</span> 
                  </span>
                </div>
              </div>
            </div>

            <Container style={{ width: "", paddingTop: "20px" }}>
              <Row>
                <Col xs={12} md={6} className="mt-2">
                  <Form.Group
                    className=""
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="dm-ticket">
                      Enter Mobile no.
                    </Form.Label>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <Form.Control
                        type="text"
                        className="dm-inputticket"
                        placeholder=" Enter your mobile number"
                        name="mobile"
                        value={mobile} onChange={(e)=>dispatch(setDmData("mobile",e.target.value))}
                      />
                    </div>
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
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} className="mt-2">
                  <Form.Group
                    className=""
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="dm-ticket">Enter OTP</Form.Label>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <Form.Control
                        type="text"
                        className="dm-inputticket"
                        placeholder=" Enter the 6 digit OTP"
                      />
                    </div>
                  </Form.Group>
                </Col>
              </Row>
              {/* <div
                className="dmticket-btn"
                style={{ textAlign: "center", marginTop: "70px" }}
              >
                <Button
                  type="submit"
                  class="btn btn-success"
                  style={{
                    width: "",
                    textAlign: "center",
                    height: "52px",
                    borderRadius: "9px",
                    backgroundColor: "#0fa453",
                    border: "none",
                  }}
                  onClick={onDmTicketSecondShow}
                >
                  Continue
                </Button>
              </div> */}
            </Container>
          </div>
        </Container>
        <Button className="locationpass-btn" onClick={onDmTicketSecondShow}>
          Continue
        </Button>
        </div>
      </div>
    </>
  );
}

export default DmTicket2;
