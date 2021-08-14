import React, { useState, useEffect } from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import city from "../../assets/img/city.png";
// import calendar from "../../assets/img/calendar.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Pass from "./Pass";
// import BusPass from "./BusPass";
import { useHistory } from "react-router-dom";
// import Cab from "./Cab";
import bus from "../../assets/img/bus.png";
import cab from "../../assets/img/cab.png";
import ticket from "../../assets/img/ticket.png";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import calendar from "../../assets/img/calendar.png";

import { useDispatch, useSelector } from "react-redux";
import { setDmData } from "../../redux/actions";

function DmPass() {
  const history = useHistory();

  const dispatch = useDispatch()
  const { dmData } = useSelector(state => state.dmpassReducer)
  const { number_of_vehicals,number_of_travellers,duration_of_travel } = dmData

  useEffect(() => {
    console.log("dmData",dmData);
  }, [dmData])

  const onDmTicketShow = () => {
    console.log('hii')
    // toast("Wow so easy!");
    history.push('/travelticket')
    // history.push('/dmticket2')
  };
  return (
    <>
      <div>
        <Header />
        <Container className="d-none d-md-block my-5" style={{ width: "70%" }}>
          <div className="select_div">
            <div className="row p-3" style={{ textAlign: "center" }}>
              <div className="col-xs-12  col-sm-12 col-md-12">
                <div className="booking-div">
                  <div style={{ marginBottom: "15px" }}>
                    <img src={ticket} alt="" />
                  </div>
                  <span style={{ fontWeight: "bolder", fontSize: "15px", color: "#0fa453", paddingTop: "50px" }}>DM Pass</span><br />
                  <span style={{ fontWeight: "bolder", fontSize: "12px", padding: "10px" }}>
                    Get a pass for travellers, vehicles<br /> and duration of your travel
                  </span>
                </div>
              </div>
            </div>

            <Container style={{ width: "100%", paddingTop: "28px" }}>
              <Row>
                <Col xs={12} md={4} className="mt-2">
                  <Form.Group
                    className=""
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="dm-ticket" >Number of Vehicles</Form.Label>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <Form.Control
                        type="text"
                        className="dm-inputticket"
                        placeholder=" Vehicles..."
                        name="number_of_vehicals"
                        value={number_of_vehicals} onChange={(e)=>dispatch(setDmData("number_of_vehicals",e.target.value))}
                      />
                    </div>
                  </Form.Group>
                </Col>
                <Col xs={12} md={4} className="mt-2">
                  <Form.Group
                    className=""
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="dm-ticket">Number of Travellers</Form.Label>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <Form.Control
                        type="text"
                        className="dm-inputticket"
                        placeholder="Travellers..."
                        name="number_of_travellers"
                        value={number_of_travellers} onChange={(e)=>dispatch(setDmData("number_of_travellers",e.target.value))}
                      />
                    </div>
                  </Form.Group>
                </Col>
                <Col xs={12} md={4} className="mt-2">
                  <Form.Group
                    className=""
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="dm-ticket">Days of Travel</Form.Label>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <Form.Control
                        type="text"
                        className="dm-inputticket"
                        placeholder="Days of Travel.."
                        name="duration_of_travel"
                        value={duration_of_travel} onChange={(e)=>dispatch(setDmData("duration_of_travel",e.target.value))}
                      />
                    </div>
                  </Form.Group>
                </Col>
              </Row>
              <div className="dmticket-btn" style={{ textAlign: "center", marginTop: "70px" }}>
                <Button
                  type="submit"
                  class="btn btn-success"
                  style={{
                    width: "20%",
                    textAlign: "center",
                    height: "52px",
                    borderRadius: "9px",
                    backgroundColor: "#0fa453",
                    border: "none"
                  }}
                  onClick={onDmTicketShow}
                >
                  Continue
                </Button>
              </div>
            </Container>
          </div>
        </Container>
      </div>
    </>
  );
}

export default DmPass;