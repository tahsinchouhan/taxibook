import React, { useState}  from "react";
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


function DmPass() {
  const history = useHistory();

  const onDmTicketShow = () => {
    console.log('hii')
      // toast("Wow so easy!");
      history.push('/dmticket2')
  };
  return (
    <>
      <div>
        <Header />
        <Container className="d-none d-md-block my-5" style={{width:"70%"}}>
          <div className="select_div">
            <div className="row p-3" style={{ textAlign: "center" }}>
              <div className="col-xs-12  col-sm-12 col-md-12">
                <div className="booking-div">
                  <div style={{marginBottom:"15px"}}>
                    <img src={ticket} alt=""/>
                  </div>
                  <span style={{ fontWeight: "bolder", fontSize: "15px",color:"#0fa453",paddingTop:"50px" }}>DM Pass</span><br/>
                  <span style={{ fontWeight: "bolder", fontSize: "12px",padding:"10px" }}>
                  Get a pass for travellers, vehicles<br/> and duration of your travel
                  </span>
                </div>
              </div>
            </div>

            <Container style={{width:"100%",paddingTop:"28px"}}>
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
                      />
                    </div>
                  </Form.Group>
                </Col>
               
              </Row>
              <div className="dmticket-btn" style={{textAlign:"center",marginTop:"70px"}}>
                <Button
                  type="submit"
                  class="btn btn-success"
                  style={{
                    width: "20%",
                    textAlign: "center",
                    height: "52px",
                    borderRadius: "9px",
                    backgroundColor: "#0fa453",
                    border:"none"
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
