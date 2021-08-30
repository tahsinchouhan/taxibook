import React, { useEffect, useState } from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import { connect } from "react-redux";
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
import ticket from "../../assets/ticketpage.svg";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
// import calendar from "../../assets/img/calendar.png";
import { Redirect } from "react-router-dom";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

import { useDispatch, useSelector } from "react-redux";
import { DmPassDetails, setDmData } from "../../redux/actions";
import userEvent from "@testing-library/user-event";

function DmPass({ DmPassDetails }) {
  const history = useHistory();
  const [vehicle, setVehicle] = useState("1")
  const [travellers, setTraveller] = useState("1")
  const [daysTravel, setDaysTravel] = useState("1")
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const dispatch = useDispatch()
  const { dmData } = useSelector(state => state.dmpassReducer)
  var { number_of_vehicals, number_of_travellers, duration_of_travel } = dmData
  const { error, loading, message } = useSelector(
    (state) => state.commonReducer
  );
  const { user_data } = useSelector((state) => state.loginReducer);
  console.log("user_data", user_data);

  useEffect(() => {
    let d = new Date();
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    dispatch(setDmData('start_date', `${ye}-${mo}-${da}`))
  }, [])

  useEffect(() => {
    console.log("dmData", dmData);
  }, [dmData])
  //  const data =[vehicle,travellers,daysTravel]
  const data = [
    {
      "Vehicle": vehicle,
      "DaysTravel":daysTravel,
      "Travellers": travellers,
    }
  ]
  const onDmTicketShow = () => {
    // console.log('Vehicle Data',vehicle)
    DmPassDetails({ data })
    history.push('/travelticket')

  };

  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      style={{ border: "none", background: "transparent", fontSize: "12px", color: "#a5a5a5" }}
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ))



  return (
    <>
      <div>
        <Header />
        {loading ? <Loader /> : null}
        {message ? <Message msg={message} type="success" /> : null}
        {error ? <Message msg={error} type="error" /> : null}
        {user_data !== null ? <Redirect to="/dmticket" /> : null}
        <div className="d-none d-md-block">
          <Container className="d-none d-md-block my-5" style={{ width: "70%" }}>
            <div className="select_div">
              <div className="row p-3" style={{ textAlign: "center" }}>
                <div className="col-xs-12  col-sm-12 col-md-12">
                  <div className="booking-div">
                    <div style={{ marginBottom: "15px" }}>
                      <img src={ticket} alt="logo" />
                    </div>
                    <span style={{ fontWeight: "bolder", color: "#0fa453", paddingTop: "50px" }}>Traveller Pass</span><br />
                    <span style={{ fontSize: "12px", padding: "10px" }}>
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
                      <select id="inputState" className="form-control pass_input" onChange={(e) => setVehicle(e.target.value)}>
                        <option selected>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={4} className="mt-2">
                    <Form.Group
                      className=""
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="dm-ticket">Number of Travellers</Form.Label>
                      {/* <div style={{ display: "flex", flexDirection: "row" }}>
                      <Form.Control
                        type="text"
                        className="dm-inputticket"
                        placeholder="Travellers..."
                        name="number_of_travellers"
                        value={number_of_travellers} onChange={(e)=>dispatch(setDmData("number_of_travellers",e.target.value))}
                      />
                    </div> */}
                      <select
                        id="inputState"
                        className="form-control pass_input"
                        // onChange={handleTravellerCount}
                        onChange={(e) => setTraveller(e.target.value)}
                      >
                        <option selected>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={4} className="mt-2">
                    <Form.Group
                      className=""
                      controlId="exampleForm.ControlInput1"
                    >
                      
                        <Form.Label className="dm-ticket">Days of Travel</Form.Label>
                      <select
                        id="inputState"
                        className="form-control pass_input"
                        onChange={(e)=>setDaysTravel(e.target.value)}
                      >
                        <option selected>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                      {/* <Row>
                        <Col xs={12} md={4}>
                          <div>
                            <Form.Label className="dm-ticket">Start Date</Form.Label>

                            <DatePicker
                              /// id={`start_date${i}`}
                              selected={startDate}
                              onChange={handleDate}
                              customInput={<ExampleCustomInput />}
                              dateFormat="dd/MM/yy"
                            //value={travellers[i].start_date}
                            />
                          </div>
                        </Col>
                        <Col xs={12} md={4}>
                          <div >
                            <Form.Label className="dm-ticket">End Date</Form.Label>
                            <DatePicker
                              //  id={`end_date${i}`}
                              selected={endDate}
                              onChange={handleDateTwo}
                              customInput={<ExampleCustomInput />}
                              dateFormat="dd/MM/yy"
                            //value={travellers[i].end_date}
                            />
                          </div>
                        </Col>



                      </Row> */}
                    </Form.Group>
                  </Col>
                </Row>
                <div className="dmticket-btn" style={{ textAlign: "center", marginTop: "70px" }}>
                  <Button
                    type="submit"
                    class="btn btn-success"
                    style={{
                      width: "200px",
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
          <Footer />
        </div>
      </div>


      {/*mobile-view*/}
      <div fluid className="d-md-none">
        <div className="select_div">
          <div className="row p-3" style={{ textAlign: "center" }}>
            <div className="col-xs-12  col-sm-12 col-md-12">
              <div className="booking-div">
                <div style={{ marginBottom: "15px" }}>
                  <img src={ticket} alt="" />
                </div>
                <span style={{ fontWeight: "bolder", color: "#0fa453", paddingTop: "50px" }}>Traveller Pass</span><br />
                <span style={{ fontSize: "12px", padding: "10px" }}>
                  Get a pass for travellers, vehicles<br /> and duration of your travel
                </span>
              </div>
            </div>
          </div>

          <Container style={{ width: "92%", paddingTop: "28px" }}>
            <Row>
              <Col xs={12} md={4} className="mt-2">
                <Form.Group
                  className=""
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="dm-ticket" >Number of Vehicles</Form.Label>
                  <select id="inputState" className="form-control pass_input">
                    <option selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} className="mt-2">
                <Form.Group
                  className=""
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="dm-ticket">Number of Travellers</Form.Label>
                  {/* <div style={{ display: "flex", flexDirection: "row" }}>
                      <Form.Control
                        type="text"
                        className="dm-inputticket"
                        placeholder="Travellers..."
                        name="number_of_travellers"
                        value={number_of_travellers} onChange={(e)=>dispatch(setDmData("number_of_travellers",e.target.value))}
                      />
                    </div> */}
                  <select
                    id="inputState"
                    className="form-control pass_input"
                  // onChange={handleTravellerCount}
                  >
                    <option selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} className="mt-2">
                <Form.Group
                  className=""
                  controlId="exampleForm.ControlInput1"
                >
                   <Form.Label className="dm-ticket">Days of Travel</Form.Label>
                      <select
                        id="inputState"
                        className="form-control pass_input"
                        onChange={(e)=>setDaysTravel(e.target.value)}
                      >
                        <option selected>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                  {/* <Row>
                    <Col xs={6} md={4}>
                      <div>
                        <Form.Label className="dm-ticket">Start Date</Form.Label>

                        <DatePicker
                          /// id={`start_date${i}`}
                          selected={startDate}
                          onChange={handleDate}
                          customInput={<ExampleCustomInput />}
                          dateFormat="dd/MM/yy"
                        //value={travellers[i].start_date}
                        />
                      </div>
                    </Col>
                    <Col xs={6} md={4}>
                      <div >
                        <Form.Label className="dm-ticket">End Date</Form.Label>
                        <DatePicker
                          //  id={`end_date${i}`}
                          selected={endDate}
                          onChange={handleDateTwo}
                          customInput={<ExampleCustomInput />}
                          dateFormat="dd/MM/yy"
                        //value={travellers[i].end_date}
                        />
                      </div>
                    </Col>



                   
                  </Row> */}

                </Form.Group>
              </Col>
            </Row>
             <div className="dmticket-btn" style={{ textAlign: "center", marginTop: "70px" }}>
                <Button
                  type="submit"
                  class="btn btn-success"
                  style={{
                    width: "185px",
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
        {/* <Button className="locationpass-btn" onClick={onDmTicketShow}>
          Continue
        </Button> */}
      </div>

    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  DmPassDetails: (data) => dispatch(DmPassDetails(data))
});

export default connect(
  null,
  mapDispatchToProps
)(DmPass);