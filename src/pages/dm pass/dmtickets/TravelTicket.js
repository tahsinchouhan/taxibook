import React, { useState } from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import ticket from "../../../assets/img/ticket.png";
import Header from "../../../components/Header";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import ButtonComponent from "../../../containers/Button";
import Footer from "../../travesaly/Footer";

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

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

function TravelTicket() {
  const [activeButton, setActiveButton] = useState(button_Data[0].name);
  const [data, setData] = useState();
  const history = useHistory();
  const onSideBtnClick = (e) => {
    const name = e.target.name;
    setActiveButton(name);
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
                  <span
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      color: "#0fa453",
                      paddingTop: "50px",
                    }}
                  >
                    DM Pass
                  </span>
                  <br />
                  <span
                    style={{
                      fontWeight: "bolder",
                      fontSize: "12px",
                      padding: "10px",
                    }}
                  >
                    Get a pass for travellers, vehicles
                    <br /> and duration of your travel
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Container style={{width:"50%",marginBottom:"40px"}}>
            <Row>
                <Col>
                <div style={{background: "#F8F8F8" ,width:"50%"}}>
                <div  style={{background: "#F8F8F8",width:"50%"}}>
                    <h2 style={{textAlign:"center"}}>1</h2>
                    <span>Vehicles</span><br/>
                   <div style={{background: "#F8F8F8"}}>
                   <Button
                    style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "#FF4A68",
                        float: "right",
                        fontSize: "12px",
                        float:"left"
                      }}
                    >Edit</Button>
                   </div>
                </div>
                </div>

                </Col>
                <Col>
                <div style={{background: "#F8F8F8"  ,width:"50%"}}>
                    <h2  style={{textAlign:"center"}}>4</h2>
                    <span>Vehicles</span><br/>
                    <Button
                    style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "#FF4A68",
                        float: "right",
                        fontSize: "12px",
                        float:"left"
                      }}
                    >Edit</Button>
                </div>
                </Col>
                <Col>
                <div  style={{background: "#F8F8F8" ,width:"50%"}}>
                    <h2  style={{textAlign:"center"}}>3</h2>
                    <span>Vehicles</span><br/>
                    <Button
                    style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "#FF4A68",
                        float: "right",
                        fontSize: "12px",
                        float:"left"
                      }}
                    >Edit</Button>
                </div>
                </Col>
            </Row>
        </Container>

        <Container style={{ width: "" }}>
          <Row>
            <Col>
              <div style={{ height: "411px", width: "50%", float: "right" }}>
                <label
                  style={{
                    fontSize: "14px",
                    marginBottom: "10px",
                    fontWeight: "500",
                    color: "black",
                  }}
                >
                  Vehicle Details
                </label>
                <div className="card" style={{ width: "" }}>
                  <div className="card-body">
                    <h6
                      className="card-title"
                      style={{ fontWeight: "600", fontSize: "12px" }}
                    >
                      Vehicle 1
                    </h6>
                    <p className="card-text">
                      <div className="form-group mt-4">
                        <label for="inputAddress" style={{ fontSize: "12px" }}>
                          Vehicle Number
                        </label>
                        <input
                          type="text"
                          className="form-control pass_input"
                          id="inputAddress"
                          placeholder="Enter the license plate number"
                          style={{
                            fontSize: "11px",
                            marginLeft: "-5px",
                            border: "none",
                          }}
                        />
                      </div>
                      <div className="form-group mt-4">
                        <label for="inputAddress" style={{ fontSize: "12px" }}>
                          Driver Name
                        </label>
                        <input
                          type="text"
                          className="form-control pass_input"
                          id="inputAddress"
                          placeholder="Enter the license plate number"
                          style={{
                            fontSize: "11px",
                            marginLeft: "-5px",
                            border: "none",
                          }}
                        />
                      </div>

                      <div className="form-row genderform pt-3 d-flex ">
                        <div className="col m-2 w-50">
                          <label
                            for="inputAddress"
                            style={{ fontSize: "12px" }}
                          >
                            Gender
                          </label>
                          <div className="d-flex pt-2">
                            <ButtonComponent
                              style={{
                                width: "50%",
                                whiteSpace: "nowrap",
                                fontSize: "12px",
                              }}
                              data={button_Data}
                              activeButton={activeButton}
                              trigerOnClickEmpSideBtn={onSideBtnClick}
                            />
                          </div>
                        </div>
                        <div className="col m-2 w-50">
                          <label
                            for="inputAddress"
                            style={{ fontSize: "12px" }}
                          >
                            Age
                          </label>
                          <br />
                          <input
                            type="text"
                            className="form-control pass_input w-70 pt-2"
                            placeholder="Enter Age"
                            style={{
                              width: "110px",
                              marginLeft: "-5px",
                              fontSize: "12px",
                              whiteSpace: "nowrap",
                              height: "33px",
                              border: "none",
                            }}
                          />
                        </div>
                      </div>

                      <div className="form-group mt-4 pt-2">
                        <label for="inputAddress" style={{ fontSize: "12px" }}>
                          Aadhar Card Number{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control pass_input"
                          id="inputAddress"
                          placeholder=" Enter 12 digit Aadhar Card Number"
                          style={{
                            fontSize: "11px",
                            marginLeft: "-5px",
                            border: "none",
                          }}
                        />
                      </div>
                    </p>
                  </div>
                </div>
                <div style={{marginTop:"23px",textAlign:"center"}}>
                  <Button
                  type="submit"
                  class="btn btn-success"
                  style={{
                    width: "55%",
                    textAlign: "center",
                    height: "50px",
                    borderRadius: "9px",
                    backgroundColor: "#0fa453",
                    border: "none",
                    fontWeight:"600"
                  }}
                  >Add Vehicle</Button>
                </div>
              </div>
            </Col>
            <Col>
              <div style={{ height: "411px", width: "50%" }}>
                <label
                  style={{
                    fontSize: "14px",
                    marginBottom: "10px",
                    fontWeight: "500",
                    color: "black",
                  }}
                >
                  Vehicle Details
                </label>
                <div className="card" style={{ width: "" }}>
                  <div className="card-body">
                    <h6
                      className="card-title"
                      style={{ fontWeight: "600", fontSize: "12px" }}
                    >
                      Vehicle 1
                    </h6>
                    <p className="card-text">
                      <div className="form-group mt-4">
                        <label for="inputAddress" style={{ fontSize: "12px" }}>
                          Vehicle Number
                        </label>
                        <input
                          type="text"
                          className="form-control pass_input"
                          id="inputAddress"
                          placeholder="Enter the license plate number"
                          style={{
                            fontSize: "11px",
                            marginLeft: "-5px",
                            border: "none",
                          }}
                        />
                      </div>
                      <div className="form-group mt-4">
                        <label for="inputAddress" style={{ fontSize: "12px" }}>
                          Driver Name
                        </label>
                        <input
                          type="text"
                          className="form-control pass_input"
                          id="inputAddress"
                          placeholder="Enter the license plate number"
                          style={{
                            fontSize: "11px",
                            marginLeft: "-5px",
                            border: "none",
                          }}
                        />
                      </div>

                      <div className="form-row genderform pt-3 d-flex ">
                        <div className="col m-2 w-50">
                          <label
                            for="inputAddress"
                            style={{ fontSize: "12px" }}
                          >
                            Gender
                          </label>
                          <div className="d-flex pt-2">
                            <ButtonComponent
                              style={{
                                width: "50%",
                                whiteSpace: "nowrap",
                                fontSize: "12px",
                              }}
                              data={button_Data}
                              activeButton={activeButton}
                              trigerOnClickEmpSideBtn={onSideBtnClick}
                            />
                          </div>
                        </div>
                        <div className="col m-2 w-50">
                          <label
                            for="inputAddress"
                            style={{ fontSize: "12px" }}
                          >
                            Age
                          </label>
                          <br />
                          <input
                            type="text"
                            className="form-control pass_input w-70 pt-2"
                            placeholder="Enter Age"
                            style={{
                              width: "110px",
                              marginLeft: "-5px",
                              fontSize: "12px",
                              whiteSpace: "nowrap",
                              height: "33px",
                              border: "none",
                            }}
                          />
                        </div>
                      </div>

                      <div className="form-group mt-4 pt-2">
                        <label for="inputAddress" style={{ fontSize: "12px" }}>
                          Aadhar Card Number{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control pass_input"
                          id="inputAddress"
                          placeholder=" Enter 12 digit Aadhar Card Number"
                          style={{
                            fontSize: "11px",
                            marginLeft: "-5px",
                            border: "none",
                          }}
                        />
                      </div>
                    </p>
                  </div>
                </div>
                <div style={{marginTop:"23px",textAlign:"center"}}>
                  <Button
                   type="submit"
                   class="btn btn-success"
                   style={{
                     width: "55%",
                     textAlign: "center",
                     height: "50px",
                     borderRadius: "9px",
                     backgroundColor: "#0fa453",
                     border: "none",
                     fontWeight:"600"
                   }}
                  >Add Passenger</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div style={{height:"100px"}}></div>
        <div style={{marginTop:"23px",textAlign:"center"}}>
                  <Button
                   type="submit"
                   class="btn btn-success"
                   style={{
                     width: "25%",
                     textAlign: "center",
                     height: "100px",
                     borderRadius: "",
                     backgroundColor: "#0fa453",
                     border: "none",
                     fontWeight:"600"
                   }}
                  >Back your Pass</Button>
                </div>
        
        <div style={{height:"100px"}}></div>
        <Footer/>
      </div>
    </>
  );
}

export default TravelTicket;
