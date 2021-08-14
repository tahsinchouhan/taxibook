import React, { useState, useEffect } from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import ticket from "../../../assets/img/ticket.png";
import Header from "../../../components/Header";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import ButtonComponent from "../../../containers/Button";
import Footer from "../../travesaly/Footer";

import { useDispatch, useSelector } from "react-redux";
import { Paper } from "@material-ui/core";
import { createDmPass } from "../../../redux/actions";

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

  const dispatch = useDispatch()
  const { dmData } = useSelector(state => state.dmpassReducer)
  const { number_of_vehicals, number_of_travellers, duration_of_travel } = dmData

  useEffect(() => {
    console.log("dmData", dmData);
  }, [dmData])

  const onSideBtnClick = (e) => {
    const name = e.target.name;
    setActiveButton(name);
  };

  const onDmByeClick = () => {
    console.log("object", { ...dmData, basic_details: travellers, vehical_details: vehicles });
    dispatch(createDmPass({ ...dmData, basic_details: travellers, vehical_details: vehicles }))
    history.push("/dm_congratulate");
  };

  const [travellers, setTravellers] = useState([{
    name: '',
    gender: '',
    age: '',
    aadhar: '',
  }])
  const handleTraveller = (val, lbl, i) => {
    setTravellers([...travellers].map((obj, key) => {
      if (key === i) {
        return {
          ...obj,
          [lbl]: val
        }
      } else {
        return obj
      }

    }))
  }

  const [vehicles, setVehicles] = useState([{
    vehicle_number: '',
    name: '',
    gender: '',
    age: '',
    aadhar: '',
  }])
  const handleVehicle = (val, lbl, i) => {
    setVehicles([...vehicles].map((obj, key) => {
      if (key === i) {
        return {
          ...obj,
          [lbl]: val
        }
      } else {
        return obj
      }
    }))
  }

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

        <Container
          style={{ width: "", marginBottom: "40px" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "centers" }}>
            <div style={{ width: "" }}>
              <Row>
                <Col style={{ background: "#F8F8F8", width: "px", margin: "10px" }}>
                  <div style={{}}>
                    <div style={{ padding: "10px" }}>
                      <h2 style={{ textAlign: "center", fontSize: "17px", fontWeight: "700" }}>{number_of_vehicals}</h2>
                      <span style={{ fontSize: "12px", fontWeight: "700", color: "gray" }}>Vehicles</span><br />
                      <div style={{ background: "#F8F8F8" }}>
                        <Button
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            color: "#FF4A68",
                            float: "right",
                            fontSize: "11px",
                            float: "left",
                            fontWeight: "700"
                          }}
                        >Edit</Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col style={{ background: "#F8F8F8", margin: "10px" }}>
                  <div style={{ background: "#F8F8F8", padding: "10px" }}>
                    <h2 style={{ textAlign: "center", fontSize: "17px", fontWeight: "700" }}>{number_of_travellers}</h2>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "gray" }}>Travellers</span><br />
                    <Button
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "#FF4A68",
                        float: "right",
                        fontSize: "11px",
                        float: "left",
                        fontWeight: "700"
                      }}
                    >Edit</Button>
                  </div>
                </Col>
                <Col style={{ background: "#F8F8F8", margin: "10px" }}>
                  <div style={{ background: "#F8F8F8", padding: "10px" }}>
                    <h2 style={{ textAlign: "center", fontSize: "17px", fontWeight: "700" }}>{duration_of_travel}</h2>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "gray" }}>Days</span><br />
                    <Button
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "#FF4A68",
                        float: "right",
                        fontSize: "11px",
                        float: "left",
                        fontWeight: "700"
                      }}
                    >Edit</Button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>

        <Container style={{ width: "" }}>
          <Row>
            <Col>
              <div style={{ width: "50%", float: "right" }}>
                <label
                  style={{
                    fontSize: "14px",
                    // marginBottom: "10px",
                    fontWeight: "500",
                    color: "black",
                  }}
                >
                  Vehicle Details
                </label>
                {/* <div className="card" style={{ width: "" }}>
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
                </div> */}
                <div className="traveller_div" style={{ marginTop: "1rem", justifyContent: "flex-start" }}>
                  {
                    vehicles?.map((item, i) => (
                      <Paper key={i} className="traveller__card p-3">
                        <div className="traveller__card_body" className="py-0">
                          <h5 className="traveller__card_title" style={{ fontSize: "12px" }}>Vehicle {i + 1}</h5>
                          <p className="traveller__card_text">
                            <div className="form-group pt-3">
                              <label className="mb-1" for={`vehicle_number${i}`}>Vehicle Number</label>
                              <input
                                type="text"
                                className="form-control pass_input"
                                id={`vehicle_number${i}`}
                                placeholder="Enter the license plate number"
                                style={{ fontSize: "11px", marginLeft: "-5px" }}
                                name="vehicle_number" onChange={(e) => handleVehicle(e.target.value, e.target.name, i)} value={vehicles[i].vehicle_number}
                              />
                            </div>
                            <div className="form-group pt-3">
                              <label className="mb-1" for={`name${i}`}>Driver Name</label>
                              <input
                                type="text"
                                className="form-control pass_input"
                                id={`name${i}`}
                                placeholder="Enter Driver Name"
                                style={{ fontSize: "11px", marginLeft: "-5px" }}
                                name="name" onChange={(e) => handleVehicle(e.target.value, e.target.name, i)} value={vehicles[i].name}
                              />
                            </div>

                            <div className="form-row genderform pt-3 d-flex ">
                              <div className="col m-2 w-50">
                                <label className="mb-1" for={`gender${i}`}>Gender</label>
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
                              <div className="form-group col m-2 w-50">
                                <label className="mb-1" for={`age${i}`}>Age</label>
                                <input
                                  type="text"
                                  className="form-control pass_input w-70 pt-2"
                                  placeholder="Enter Age"
                                  id={`age${i}`}
                                  style={{
                                    width: "110px",
                                    marginLeft: "-5px",
                                    fontSize: "12px",
                                    whiteSpace: "nowrap",
                                    height: "33px",
                                  }}
                                  // name="age" onChange={handleChange} value={age}
                                  name="age" onChange={(e) => handleVehicle(e.target.value, e.target.name, i)} value={vehicles[i].age}
                                />
                              </div>
                            </div>

                            <div className="form-group mt-1 pt-3">
                              <label className="mb-1" for={`aadhaar${i}`}>
                                Aadhar Card Number{" "}
                              </label>
                              <input
                                type="text"
                                className="form-control pass_input"
                                id={`aadhar${i}`}
                                placeholder=" Enter 12 digit Aadhar Card Number"
                                style={{ fontSize: "11px", marginLeft: "-5px" }}
                                // name="aadhar" onChange={handleChange} value={aadhar}
                                name="aadhar" onChange={(e) => handleVehicle(e.target.value, e.target.name, i)} value={vehicles[i].aadhar}
                              />
                            </div>
                          </p>
                        </div>
                      </Paper>
                    ))
                  }
                </div>
                <div style={{ marginTop: "23px", textAlign: "center" }}>
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
                      fontWeight: "600",
                    }}
                    onClick={() => setVehicles([...vehicles, {
                      vehicle_number: '',
                      name: '',
                      gender: '',
                      age: '',
                      aadhar: '',
                    }])}
                  >
                    Add Vehicle
                  </Button>
                </div>
              </div>
            </Col>
            <Col>
              <div style={{ width: "50%" }}>
                <label
                  style={{
                    fontSize: "14px",
                    // marginBottom: "10px",
                    fontWeight: "500",
                    color: "black",
                  }}
                >
                  Travellers Details
                </label>
                {/* <div className="card" style={{ width: "" }}>
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
                </div> */}

                <div className="traveller_div" style={{ marginTop: "1rem", justifyContent: "flex-start" }}>
                  {
                    travellers?.map((item, i) => (
                      <Paper key={i} className="traveller__card p-3" style={{ minHeight: "364px" }}>
                        <div className="traveller__card_body" className="py-0">
                          <h5 className="traveller__card_title" style={{ fontSize: "12px" }}>Travellers {i + 1}</h5>
                          <p className="traveller__card_text">
                            <div className="form-group pt-3">
                              <label className="mb-3" for={`name${i}`}>Name</label>
                              <input
                                type="text"
                                className="form-control pass_input"
                                id={`name${i}`}
                                placeholder="Enter Traveller Name"
                                style={{ fontSize: "11px", marginLeft: "-5px" }}
                                name="name" onChange={(e) => handleTraveller(e.target.value, e.target.name, i)} value={travellers[i].name}
                              />
                            </div>

                            <div className="form-row genderform pt-3 d-flex ">
                              <div className="col m-2 w-50">
                                <label className="mb-3" for={`gender${i}`}>Gender</label>
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
                              <div className="form-group col m-2 w-50">
                                <label className="mb-3" for={`age${i}`}>Age</label>
                                <input
                                  type="text"
                                  className="form-control pass_input w-70 pt-2"
                                  placeholder="Enter Age"
                                  id={`age${i}`}
                                  style={{
                                    width: "110px",
                                    marginLeft: "-5px",
                                    fontSize: "12px",
                                    whiteSpace: "nowrap",
                                    height: "33px",
                                  }}
                                  name="age" onChange={(e) => handleTraveller(e.target.value, e.target.name, i)} value={travellers[i].age}
                                />
                              </div>
                            </div>

                            <div className="form-group mt-1 pt-3">
                              <label className="mb-3" for={`aadhaar${i}`}>
                                Aadhar Card Number{" "}
                              </label>
                              <input
                                type="text"
                                className="form-control pass_input"
                                id={`aadhar${i}`}
                                placeholder=" Enter 12 digit Aadhar Card Number"
                                style={{ fontSize: "11px", marginLeft: "-5px" }}
                                name="aadhar" onChange={(e) => handleTraveller(e.target.value, e.target.name, i)} value={travellers[i].aadhar}
                              />
                            </div>
                          </p>
                        </div>
                      </Paper>
                    ))
                  }
                </div>
                <div style={{ marginTop: "23px", textAlign: "center" }}>
                  <Button
                    // type="submit"
                    class="btn btn-success"
                    style={{
                      width: "55%",
                      textAlign: "center",
                      height: "50px",
                      borderRadius: "9px",
                      backgroundColor: "#0fa453",
                      border: "none",
                      fontWeight: "600",
                    }}
                    onClick={() => setTravellers([...travellers, {
                      name: '',
                      gender: '',
                      age: '',
                      aadhar: '',
                    }])}
                  >
                    Add Traveller
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
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
              fontWeight: "600",
            }}
            onClick={onDmByeClick}
          >
            Back your Pass
          </Button>
        </div>

        <div style={{ height: "100px" }}></div>
        <Footer />
      </div>
    </>
  );
}

export default TravelTicket;