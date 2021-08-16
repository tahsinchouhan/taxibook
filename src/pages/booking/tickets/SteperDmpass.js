import React, { useState } from "react";
import { Container, Row, Button, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavLink, useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ButtonComponent from "../../../containers/Button";
import { Stepper } from "react-form-stepper";
//import Locations from "../../dm pass/Locations";
//import TicketsConfirm from "../../../pages/booking/tickets/TicketsConfirm";
import Cards from "../../dm pass/Cards";
import Header from "../../../components/Header";
import mobile from "../../../assets/img/mobile.png";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "../../travesaly/Footer";
import { useDispatch, useSelector } from "react-redux";

const button_Data = [
  {
    name: "Male",
    value: "Male",
  },
  {
    name: "Female",
    value: "Female",
  },
];

function SteperDmpass(shows, ...props) {
  const [show, setShow] = useState(0);
  const [activeButton, setActiveButton] = useState(button_Data[0].name);
  // const [data, setData] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  const { dmData } = useSelector((state) => state.dmpassReducer);
  const { dmpass_id } = dmData;
  const onSideBtnClick = (e) => {
    const name = e.target.name;
    setActiveButton(name);
  };

  const onDmPassClick = () => {
    console.log("object");
    setShow(1);
  };

  const onLocationsClick = () => {
    console.log("object");
    setShow(2);
    return shows;
    // history.push("/locations");
  };
  const onTicketCheckClick = () => {
    console.log("object");
    //history.push("./ ticket_checkout");
    setShow(3);
  };
  const onClickBack = () => {
    console.log("object");
    history.push("./travelticket");
    // setShow(3);
  };
  return (
    <>
      <div className="d-none d-md-block">
        <Header />
      </div>
      <div className="dmpass-div d-md-none">
        <Container className="dm-kangervilla">
          <FaArrowLeft className="kanger-arrow" onClick={onClickBack}/>
          <div className="kangervilla">
            <span className="kanger-valley">
              Tickets for Kanger Valley
              <br />
              30th July, 2021
            </span>
          </div>
        </Container>
      </div>

      <Container>
        <Stepper
          steps={[
            { label: "DM Pass" },
            { label: "Locations" },
            { label: "Confirm" },
            { label: "Checkout" },
          ]}
          activeStep={show}
        />
      </Container>
      {show == 0 ? (
        <div>
          <Container className="dmpass-form mt-5">
            <Row className="dmpassData">
              <h3 style={{ fontWeight: "bolder", textAlign: "center" }}>
                Book your DM Pass
              </h3>
              <form>
                <div className="form-row"></div>
                <div className="form-group mt-4">
                  <label for="inputAddress">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control pass_input"
                    id="inputAddress"
                    placeholder="Enter mobile number"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group mt-4 ">
                    <label for="inputState">Number of Travellers</label>
                    <select id="inputState" className="form-control pass_input">
                      <option selected>1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                  <div className="form-group mt-4 ">
                    <label for="inputState">Days of Travel</label>
                    <select id="inputState" className="form-control pass_input">
                      <option selected>1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                  <div className="form-group mt-4 ">
                    <label for="inputState">Number of Vehicles</label>
                    <select id="inputState" className="form-control pass_input">
                      <option selected>1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                </div>
                <div className="traveller-detail">
                  <label for="inputAddress" style={{ paddingTop: "30px" }}>
                    Vehicle Details
                  </label>
                  <div className="card w-100">
                    <div className="card-body">
                      <h5 className="card-title">Vehicle 1</h5>
                      <p className="card-text">
                        <div className="form-group mt-4">
                          <label for="inputAddress">Name</label>
                          <input
                            type="text"
                            className="form-control pass_input"
                            id="inputAddress"
                            placeholder="Enter passenger name"
                            style={{ fontSize: "11px" }}
                          />
                        </div>

                        <div className="form-row genderform pt-3 d-flex ">
                          <div className="col m-2 w-50">
                            <label for="inputAddress">Gender</label>
                            <div className="d-flex pt-2">
                              <ButtonComponent
                                style={{
                                  width: "50%",
                                  fontSize: "11px",
                                  whiteSpace: "nowrap",
                                }}
                                data={button_Data}
                                activeButton={activeButton}
                                trigerOnClickEmpSideBtn={onSideBtnClick}
                              />
                            </div>
                          </div>
                          <div className="col m-2 w-50">
                            <label for="inputAddress">Age</label>
                            <br />
                            <input
                              type="text"
                              className="form-control pass_input w-70 pt-2"
                              placeholder="Enter Age"
                              style={{
                                fontSize: "12px",
                                whiteSpace: "nowrap",
                                height: "33px",
                              }}
                            />
                          </div>
                        </div>

                        <div className="form-group mt-4 pt-2">
                          <label for="inputAddress">Aadhar Card Number </label>
                          <input
                            type="text"
                            className="form-control pass_input"
                            id="inputAddress"
                            placeholder=" Enter 12 digit Aadhar Card Number"
                            style={{ fontSize: "11px" }}
                          />
                        </div>
                      </p>
                      <Link
                        className="btn"
                        style={{ backgroundColor: "#0FA453", color: "white" }}
                      >
                        Add Vehicle
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="traveller-detail">
                  <label for="inputAddress" style={{ paddingTop: "30px" }}>
                    Traveller Details
                  </label>
                  <div className="card w-100">
                    <div className="card-body">
                      <h5 className="card-title">Traveller 1</h5>
                      <p className="card-text">
                        <div className="form-group mt-4">
                          <label for="inputAddress">Name</label>
                          <input
                            type="text"
                            className="form-control pass_input"
                            id="inputAddress"
                            placeholder="Enter passenger name"
                            style={{ fontSize: "11px" }}
                          />
                        </div>

                        <div className="form-row genderform pt-3 d-flex ">
                          <div className="col m-2 w-50">
                            <label for="inputAddress">Gender</label>
                            <div className="d-flex pt-2">
                              <ButtonComponent
                                style={{
                                  width: "50%",
                                  fontSize: "11px",
                                  whiteSpace: "nowrap",
                                }}
                                data={button_Data}
                                activeButton={activeButton}
                                trigerOnClickEmpSideBtn={onSideBtnClick}
                              />
                            </div>
                          </div>
                          <div className="col m-2 w-50">
                            <label for="inputAddress">Age</label>
                            <br />
                            <input
                              type="text"
                              className="form-control pass_input w-70 pt-2"
                              placeholder="Enter Age"
                              style={{
                                fontSize: "12px",
                                whiteSpace: "nowrap",
                                height: "33px",
                              }}
                            />
                          </div>
                        </div>

                        <div className="form-group mt-4 pt-2">
                          <label for="inputAddress">Aadhar Card Number </label>
                          <input
                            type="text"
                            className="form-control pass_input"
                            id="inputAddress"
                            placeholder=" Enter 12 digit Aadhar Card Number"
                            style={{ fontSize: "11px" }}
                          />
                        </div>
                      </p>
                      <Link
                        className="btn"
                        style={{ backgroundColor: "#0FA453", color: "#FFFFFF" }}
                      >
                        Add Passenger
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </Row>
          </Container>
          <Button className="locationpass-btn" onClick={onDmPassClick}>
            Save Continue
          </Button>
        </div>
      ) : show == 1 ? (
        <div>
          <Container className="dmpass-form mt-2">
            <Row className="dmpassData">
              <h3 style={{ fontWeight: "bolder", textAlign: "center" }}>
                Select Locations
              </h3>

              <div
                className="location_pass d-flex"
                style={{
                  border: "1px solid #888",
                  backgroundColor: " #F8F8F8",
                  marginBottom: "15px",
                  borderRadius: 5,
                }}
              >
                <Form.Check
                  type="radio"
                  label="Chitrakote"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  style={{ margin: "8px", color: "black", fontWeight: "600" }}
                />
              </div>
              <div
                className="location_pass d-flex"
                style={{
                  border: "1px solid #888",
                  backgroundColor: " #F8F8F8",
                  borderRadius: 5,
                }}
              >
                <Form.Check
                  type="radio"
                  label="Tirathgarh"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  style={{ margin: "8px", color: "black", fontWeight: "600" }}
                />
              </div>
            </Row>
            <div className="card-Caintainer">
              <Cards parname="Car Parking" rate="20" />
              <Cards parname="Bus Parking" rate="40" />
              <Cards parname="Bike Parking" rate="10" />

              <Cards parname="Trekking" rate="100" />
              <Cards parname="Boating" rate="20" />
              <Cards parname="Sightseeing" rate="40" />
            </div>
          </Container>
          <div className=" d-none d-md-block">
            <div className="locatione-title">
              <Col md={6}>
                <div className="location-amount">
                  <span className="location-total">Total Amount</span>
                  <span className="location-rs">₹ 150</span>
                </div>
              </Col>
              <Col md={6}>
                <div className="">
                  <div
                    className=""
                    style={{
                      textAlign: " center",
                      fontSize: " 20px",
                      fontWeight: " 600",
                      color: "white",
                      padding: " 15px",
                      backgroundColor: "#0FA453",
                    }}
                    onClick={onLocationsClick}
                  >
                    Save Continue
                  </div>
                </div>
              </Col>
            </div>
            {/* <Button className="locationpass-btn" onClick={onLocationsClick}>
              Save Continue
            </Button> */}
          </div>
          <div>
            <div className="d-md-none">
              <Col xs={12} md={6}>
                <div className="location-amount">
                  <span className="location-total">Total Amount</span>
                  <span className="location-rs">₹ 150</span>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="">
                  <div
                    className=""
                    style={{
                      textAlign: " center",
                      fontSize: " 20px",
                      fontWeight: " 600",
                      color: "white",
                      padding: " 15px",
                      backgroundColor: "#0FA453",
                    }}
                    onClick={onLocationsClick}
                  >
                    Save Continue
                  </div>
                </div>
              </Col>
            </div>
          </div>
        </div>
      ) : show == 2 ? (
        <>
          <div>
            <Container>
              <h3 style={{ textAlign: "center" }}>Confirm your Details</h3>
              <div className="confirm-main">
                <div
                  className="confirm_div"
                  style={{
                    textAlign: "center",
                    backgroundColor: "#F8F8F8",
                    marginBottom: "10px",
                  }}
                >
                  <Row>
                    <Col xs={6} md={6}>
                      <span className="confirm-title">Tirathgarh</span>
                    </Col>
                    <Col xs={6} md={6}>
                      <span
                        style={{
                          color: "#FF4A68",
                          fontSize: "15px",
                          fontWeight: "600",
                        }}
                      >
                        Change
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={6}>
                      <span className="confirm_part">Car Parking x 2</span>
                    </Col>
                    <Col xs={6} md={6}>
                      <span className="confirm_part">40 </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={6}>
                      <span className="confirm_part">Trekking x 5</span>
                    </Col>
                    <Col xs={6} md={6}>
                      <span className="confirm_part"> 500</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={6}>
                      <span className="confirm_part"> Boating x 5 </span>
                    </Col>
                    <Col xs={6} md={6}>
                      <span className="confirm_part">100</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={6}>
                      <span className="confirm_part">Sightseeing x 6</span>
                    </Col>
                    <Col xs={6} md={6}>
                      <span className="confirm_part">240</span>
                    </Col>
                  </Row>
                </div>
              </div>
              <div
                className="confirm_div"
                style={{
                  textAlign: "center",
                  backgroundColor: "#F8F8F8",
                  marginBottom: "10px",
                }}
              >
                <Row>
                  <Col xs={6} md={6}>
                    <span className="confirm-title">Tamdaghumar</span>
                  </Col>
                  <Col xs={6} md={6}>
                    <span
                      style={{
                        color: "#FF4A68",
                        fontSize: "15px",
                        fontWeight: "600",
                      }}
                    >
                      Change
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} md={6}>
                    <span className="confirm_part">Car Parking x 2</span>
                  </Col>
                  <Col xs={6} md={6}>
                    <span className="confirm_part">40 </span>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} md={6}>
                    <span className="confirm_part">Trekking x 5</span>
                  </Col>
                  <Col xs={6} md={6}>
                    <span className="confirm_part"> 500</span>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} md={6}>
                    <span className="confirm_part"> Boating x 5 </span>
                  </Col>
                  <Col xs={6} md={6}>
                    <span className="confirm_part">100</span>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} md={6}>
                    <span className="confirm_part">Sightseeing x 6</span>
                  </Col>
                  <Col xs={6} md={6}>
                    <span className="confirm_part">240</span>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          <Button className="locationpass-btn" onClick={onTicketCheckClick}>
            Save Continue
          </Button>
        </>
      ) : (
        <>
          <div className="d-none d-md-block">
            <Container style={{ width: "70%", paddingTop: "20px" }}>
              <Row>
                <Col>
                  <div style={{ marginTop: "-50px" }}>
                    <img src={mobile} alt="" style={{ height: "500px" }} />
                  </div>
                </Col>
                <Col>
                  <div style={{ paddingTop: "60px" }}>
                    <div style={{ marginBottom: "20px" }}>
                      <h3 style={{ fontWeight: "bolder" }}>CONGRATULATIONS!</h3>
                      <span style={{ color: "black" }}>
                        Your booking has been confirmed
                      </span>

                      <h3 style={{ fontWeight: "bolder" }}>Order ID</h3>
                      <span style={{ color: "black", marginBottom: "50px" }}>
                        {dmpass_id}
                      </span>
                    </div>
                    <div>
                      <div>
                        <Button
                          className="btn btn-success"
                          style={{
                            width: "200px",
                            textAlign: "center",
                            height: "52px",
                            borderRadius: "9px",
                            backgroundColor: "#0fa453",
                            fontWeight: "bold",
                            marginBottom: "20px",
                          }}
                        >
                          <FaWhatsapp
                            style={{
                              fontWeight: "bold",
                              marginLeft: "-23px",
                              fontSize: "30px",
                            }}
                          />
                          <span> Whatsapp Link</span>
                        </Button>
                      </div>
                      <div>
                        <Button
                          style={{
                            width: "208px",
                            textAlign: "center",
                            height: "52px",
                            borderRadius: "9px",
                            backgroundColor: " #FF4A68",
                            fontWeight: "bold",
                            marginBottom: "20px",
                          }}
                        >
                          Download E-ticket
                        </Button>
                      </div>

                      <div>
                        <Button
                          style={{
                            width: "186px",
                            textAlign: "center",
                            height: "52px",
                            borderRadius: "9px",
                            backgroundColor: "#864BD8",
                            fontWeight: "bold",
                            marginBottom: "20px",
                          }}
                        >
                          Back to Home
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <Footer />
          </div>

          <div className="d-md-none">
            <Container style={{ width: "", paddingTop: "20px" }}>
              <Row>
                <Col>
                  <div style={{ marginBottom: "20px", textAlign: "center" }}>
                    <h3 style={{ fontWeight: "bolder" }}>CONGRATULATIONS!</h3>
                    <span style={{ color: "black" }}>
                      Your booking has been confirmed
                    </span>
                  </div>
                </Col>
                <Col>
                  <div style={{ marginTop: "", textAlign: "center" }}>
                    <img src={mobile} alt="" style={{ height: "350px" }} />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div style={{ marginBottom: "20px", paddingTop: "-10px" }}>
                    <h3
                      style={{
                        fontWeight: "bolder",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        marginBottom: "10px",
                      }}
                    >
                      Transaction ID
                    </h3>
                    <span style={{ color: "black", marginBottom: "50px" }}>
                      {dmpass_id}
                    </span>
                  </div>
                </Col>
                <Col>
                  <div style={{ textAlign: "center" }}>
                    <div>
                      <Button
                        className="btn btn-success"
                        style={{
                          width: "200px",
                          textAlign: "center",
                          height: "52px",
                          borderRadius: "9px",
                          backgroundColor: "#0fa453",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        <FaWhatsapp
                          style={{
                            fontWeight: "bold",
                            // marginLeft: "-23px",
                            fontSize: "30px",
                          }}
                        />
                        <span> Whatsapp Link</span>
                      </Button>
                    </div>
                    <div>
                      <Button
                        style={{
                          width: "208px",
                          textAlign: "center",
                          height: "52px",
                          borderRadius: "9px",
                          backgroundColor: " #FF4A68",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        Download E-ticket
                      </Button>
                    </div>

                    <div>
                      <Button
                        style={{
                          width: "186px",
                          textAlign: "center",
                          height: "52px",
                          borderRadius: "9px",
                          backgroundColor: "#864BD8",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        Back to Home
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      )}
    </>
  );
}

export default SteperDmpass;
