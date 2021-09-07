import React, { useEffect, useState } from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import { connect } from "react-redux";
import calendar from "../../assets/img/calendar.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";
import ticket from "../../assets/ticketpage.svg";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { Redirect } from "react-router-dom";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { DmPassDetails, setDmData } from "../../redux/actions";
import * as moment from "moment";

function DmPass({ DmPassDetails }) {
  const history = useHistory();
  const [vehicle, setVehicle] = useState("0")
  const [travellers, setTraveller] = useState("1")
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [errors, setErrors] = useState('');

  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

  useEffect(() => {
    console.log("dmData", dmData);
  }, [startDate, endDate])
  const data = [
    {
      "Vehicle": vehicle,
      "DaysTravel": moment(endDate).format("YYYYMMDD")-moment(startDate).format("YYYYMMDD") + 1,
      "Travellers": travellers,
    }
  ]
  const onDmTicketShow = () => {
      DmPassDetails({ data })
      history.push('/travelticket')
  };

  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      style={{ border: "none", background: "transparent", fontSize: "25px", color: "#a5a5a5" }}
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
                    <span style={{ fontWeight: "bolder", color: "#0fa453", paddingTop: "50px" }}>Travel Pass</span><br />
                    <span style={{ fontSize: "12px", padding: "10px" }}>
                      Get a pass for travellers, vehicles<br /> and duration of your travel
                    </span>
                  </div>
                </div>
              </div>

              <Container style={{ width: "100%", paddingTop: "28px" }}>
                <Row>
                  <Col xs={12} md={3} className="mt-2">
                    <Form.Group
                      className=""
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="dm-ticket" >Number of Vehicles</Form.Label>
                      <select id="inputState" className="form-control pass_input" onChange={(e) => setVehicle(e.target.value)}>
                        <option selected>0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={3} className="mt-2">
                    <Form.Group
                      className=""
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="dm-ticket">Number of Travellers</Form.Label>
                      <select
                        id="inputState"
                        className="form-control pass_input"
                        // onChange={handleTravellerCount}
                        onChange={(e) => setTraveller(e.target.value)}
                      >
                        <option value="1" selected>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={3} className="mt-2">
                    <Form.Group
                      className=""
                      controlId="exampleForm.ControlInput1"
                    >
                      <div>
                      <Form.Label className="dm-ticket">Start Date</Form.Label><br />
                        <Col xs={12} md={6}>
                          <div style={{width: 200}}>
                            <img
                              className="location-userdatas-calendar"
                              src={calendar}
                              style={{ width: 25, height: 25, marginTop: -8 }}
                            />
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              customInput={<ExampleCustomInput />}
                              minDate={new Date()}
                              dateFormat="dd MMM"
                            />
                          </div>
                        </Col>
                        </div>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={3} className="mt-2">
                  <Form.Group
                      className=""
                      controlId="exampleForm.ControlInput1"
                    >
                      <div>
                      <Form.Label className="dm-ticket">End Date</Form.Label><br />
                        <Col xs={12} md={6}>
                          <div style={{width: 200}}>
                            <img
                              className="location-userdatas-calendar"
                              src={calendar}
                              style={{ width: 25, height: 25, marginTop: -8 }}
                            />

                            <DatePicker
                              selected={endDate}
                              onChange={(date) => setEndDate(date)}
                              customInput={<ExampleCustomInput />}
                              minDate={new Date()}
                              dateFormat="dd MMM"
                            />
                          </div>
                        </Col>
                        </div>
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
                <span style={{ fontWeight: "bolder", color: "#0fa453", paddingTop: "50px" }}>Travel Pass</span><br />
                <span style={{ fontSize: "12px", padding: "10px" }}>
                  Get a pass for travellers, vehicles<br /> and duration of your travel
                </span>
              </div>
            </div>
          </div>

          <Container style={{ width: "92%", paddingTop: "28px", paddingBottom: 100 }}>
            <Row>
              <Col xs={12} md={4} className="mt-2">
                <Form.Group
                  className=""
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="dm-ticket" >Number of Vehicles</Form.Label>
                  <select id="inputState" className="form-control pass_input" onChange={(e) => setVehicle(e.target.value)}>
                    <option selected>0</option>
                    <option>1</option>
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
                  <select
                    id="inputState"
                    className="form-control pass_input"
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
                 
                  <Row>
                    <Col xs={6} md={4}>
                      <div>
                        <Form.Label className="dm-ticket">Start Date</Form.Label><br/>

                        <img
                          className="location-userdatas-calendar"
                          src={calendar}
                          style={{ width: 25, height: 30,marginTop: -10 }}
                        />
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          customInput={<ExampleCustomInput />}
                          dateFormat="dd MMM"
                          minDate={new Date()}
                        />
                      </div>
                    </Col>
                    <Col xs={6} md={4}>
                      <div >
                        <Form.Label className="dm-ticket">End Date</Form.Label><br/>
                        <img
                          className="location-userdatas-calendar"
                          src={calendar}
                          style={{ width: 25, height: 30,marginTop: -10 }}
                        />
                        <DatePicker
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          customInput={<ExampleCustomInput />}
                          dateFormat="dd MMM"
                          minDate={new Date()}
                        />
                      </div>
                    </Col>
                  </Row>

                </Form.Group>
              </Col>
            </Row>
            <div className="dmticket-btn" style={{ textAlign: "center", marginTop: "70px" }}>
              <Button
                type="submit"
                class="btn btn-success"
                style={{
                  width: "100%",
                  textAlign: "center",
                  borderRadius: "0px",
                  backgroundColor: "#0fa453",
                  border: "none",
                  height: "86px",
                  position: "fixed",
                  width: "100%",
                  bottom: "0",
                  left: "0"
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