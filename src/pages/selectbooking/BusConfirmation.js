import React, { useState } from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// import Button from '@material-ui/core/Button';
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import ButtonComponent from "../../containers/Button";

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
function BusConfirmation() {
  const [activeButton, setActiveButton] = useState(button_Data[0].name);
  const [data, setData] = useState();
  const history = useHistory();
  const onSideBtnClick = (e) => {
    const name = e.target.name;
    setActiveButton(name);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const classes = useStyles();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const onCheckout=()=>{
    console.log("object");
    history.push("/checkoutpage");
  };
  //   const history = useHistory();

  // const handleClick=()=>{
  //   console.log('heeee')
  //   history.push("/ buscard");
  // }

  return (
    <>
      <div className="d-none d-md-block">
        <Header />
        <Container
          style={{ width: "70%", paddingTop: "40px", marginBottom: "70px" }}
        >
          <h3
            style={{
              fontSize: "19px",
              color: "#0FA453",
              fontWeight: "bolder",
            }}
          >
            Confirmation
          </h3>

          <Row>
            <Col xs={12} md={6}>
              <div style={{ width: "89%" }}>
                <span
                  style={{
                    color: "black",
                    fontFamily: "sans-serif",
                  }}
                >
                  Boarding from
                </span>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#FF4A68",
                    float: "right",
                    fontSize: "12px",
                  }}
                >
                  Change
                </button>
              </div>

              <div
                className=" select-train mt-2 d-flex"
                style={{ width: "89%" }}
              >
                <Form className="d-flex">
                  {["radio"].map((type) => (
                    <div
                      key={`inline-${type}`}
                      className="mb-3"
                      style={{ margin: "10px", marginLeft: "10px" }}
                    >
                      <Form.Check
                        inline
                        label=""
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                    </div>
                  ))}

                  <span
                    style={{
                      marginTop: "10px",
                      marginRight: "10px",
                      color: "black",
                      fontWeight: "bolder",
                      fontFamily: "sans-serif",
                    }}
                  >
                    19:45
                  </span>
                </Form>
                <div className="d-flex">
                  <span
                    style={{
                      margin: "10px",
                      whiteSpace: "nowrap",
                      fontSize: "12px",
                      fontWeight: "bolder",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Raj Ratan Travels, Borivali East,
                    <br />
                    Devipada Subway
                  </span>
                </div>
              </div>
            </Col>
            <Col>
              <div style={{ width: "89%" }}>
                <span
                  style={{
                    color: "black",
                    fontFamily: "sans-serif",
                  }}
                >
                  Dropoff At
                </span>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#FF4A68",
                    float: "right",
                    fontSize: "12px",
                  }}
                >
                  Change
                </button>
              </div>

              <div
                className=" select-train mt-2 d-flex"
                style={{ width: "89%" }}
              >
                <Form className="d-flex">
                  {["radio"].map((type) => (
                    <div
                      key={`inline-${type}`}
                      className="mb-3"
                      style={{ margin: "10px", marginLeft: "10px" }}
                    >
                      <Form.Check
                        inline
                        label=""
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                    </div>
                  ))}

                  <span
                    style={{
                      marginTop: "10px",
                      marginRight: "10px",
                      color: "black",
                      fontWeight: "bolder",
                      fontFamily: "sans-serif",
                    }}
                  >
                    19:45
                  </span>
                </Form>
                <div className="d-flex">
                  <span
                    style={{
                      margin: "10px",
                      whiteSpace: "nowrap",
                      fontSize: "12px",
                      fontWeight: "bolder",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Raj Ratan Travels, Borivali East,
                    <br />
                    Devipada Subway
                  </span>
                </div>
              </div>
            </Col>
          </Row>

          <div className="passenger_div">
            <Popper
              open={open}
              anchorEl={anchorEl}
              placement={placement}
              transition
            >
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <Typography className={classes.typography}>
                      <div className="card-body">
                        <h5 className="card-title">Passengers 1</h5>
                        <p className="card-text">
                          <div className="form-group mt-4">
                            <label for="inputAddress">Name</label>
                            <input
                              type="text"
                              className="form-control pass_input"
                              id="inputAddress"
                              placeholder="Enter passenger name"
                              style={{ fontSize: "11px", marginLeft: "-5px" }}
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
                                  width: "110px",
                                  marginLeft: "-5px",
                                  fontSize: "12px",
                                  whiteSpace: "nowrap",
                                  height: "33px",
                                }}
                              />
                            </div>
                          </div>

                          <div className="form-group mt-4 pt-2">
                            <label for="inputAddress">
                              Aadhar Card Number{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control pass_input"
                              id="inputAddress"
                              placeholder=" Enter 12 digit Aadhar Card Number"
                              style={{ fontSize: "11px", marginLeft: "-5px" }}
                            />
                          </div>
                        </p>
                      </div>
                    </Typography>
                  </Paper>
                </Fade>
              )}
            </Popper>

            <div style={{ textAlign: "center", margin: "55px" }}>
              <Button
                style={{
                  backgroundColor: "#0FA453",
                  color: "white",
                  width: "29%",
                  height: "51px",
                  border: "none",
                  borderRadius: "15px",
                }}
                onClick={handleClick("top-start")}
              >
                Add Passengers
              </Button>
            </div>
          </div>
        </Container>
        <div>
          <div style={{display: 'flex',flexDirection: 'row'}}>
            <Col style={{ backgroundColor: "#E5E5E5", textAlign: "center", height: "86px", }}>
              <div style={{ backgroundColor: "#E5E5E5", textAlign: "center", height: "86px" }}>
               
               <div style={{padding:""}}>
               <span style={{ fontSize: "15px", lineHeight: "21px",color:"grey" }}>
                  Total Amount (*Exclusive of Taxes)
                </span>
                <br />
               <span
                  style={{
                    fontSize: "33px",
                    fontWeight: "bolder",
                    lineHeight: "40px",
                    fontSize:" 24px",
                  }}
                >
                 
                  ₹ 1500
                </span>
               </div>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  backgroundColor: "#0FA453",
                  color: "white",
                  textAlign: "center",
                  height: "86px",
                }}
              >
               <div style={{paddingTop:"30px"}}>
               <span
                  style={{
                    fontSize: "21px",
                    fontWeight: "bolder",
                    lineHeight: "25px",
                  }}
                  onClick={onCheckout}
                >
                  CHECKOUT
                </span>
               </div>
              </div>
            </Col>
          </div>
        </div>
        <Footer />
      </div>

      {/*mobile-view*/}

      <div className="d-md-none">
        <div
          className="tatibandh d-flex"
          style={{
            height: "85px",
            backgroundColor: "#0FA453",
            color: "white",
          }}
        >
          <div
            style={{
              marginRight: "62px",
              paddingTop: " 20px",
              fontSize: " 24px",
              marginLeft: "20px",
            }}
          >
            <FaArrowLeft />
          </div>
          <div>
            <h5
              style={{
                paddingTop: "29px",
                fontSize: "17px",
                backgroundColor: "#0FA453",
                fontWeight: "bolder",
                color: "white",
                textAlign: "center",
              }}
            >
              Select Dropoff Point
            </h5>
          </div>
        </div>

        <Container
          style={{ width: "90%", paddingTop: "40px", marginBottom: "70px" }}
        >
          <h3
            style={{
              fontSize: "19px",
              color: "#0FA453",
              fontWeight: "bolder",
            }}
          >
            Confirmation
          </h3>

          <Row>
            <Col xs={12}>
              <div style={{ width: "89%" }}>
                <span
                  style={{
                    color: "black",
                    fontFamily: "sans-serif",
                  }}
                >
                  Boarding from
                </span>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#FF4A68",
                    float: "right",
                    fontSize: "12px",
                  }}
                >
                  Change
                </button>
              </div>
              <div className=" select-train mt-2 d-flex">
                <Form className="d-flex">
                  {["radio"].map((type) => (
                    <div
                      key={`inline-${type}`}
                      className="mb-3"
                      style={{ margin: "10px", marginLeft: "10px" }}
                    >
                      <Form.Check
                        inline
                        label=""
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                    </div>
                  ))}

                  <span
                    style={{
                      marginTop: "10px",
                      marginRight: "10px",
                      color: "black",
                      fontWeight: "bolder",
                      fontFamily: "sans-serif",
                    }}
                  >
                    19:45
                  </span>
                </Form>
                <div className="d-flex">
                  <span
                    style={{
                      margin: "10px",
                      whiteSpace: "nowrap",
                      fontSize: "12px",
                      fontWeight: "bolder",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Raj Ratan Travels, Borivali East,
                    <br />
                    Devipada Subway
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={12}>
              <div style={{ width: "89%" }}>
                <span
                  style={{
                    color: "black",
                    fontFamily: "sans-serif",
                  }}
                >
                  Dropoff At
                </span>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#FF4A68",
                    float: "right",
                    fontSize: "12px",
                  }}
                >
                  Change
                </button>
              </div>
              <div className=" select-train mt-2 d-flex">
                <Form className="d-flex">
                  {["radio"].map((type) => (
                    <div
                      key={`inline-${type}`}
                      className="mb-3"
                      style={{ margin: "10px", marginLeft: "10px" }}
                    >
                      <Form.Check
                        inline
                        label=""
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                    </div>
                  ))}

                  <span
                    style={{
                      marginTop: "10px",
                      marginRight: "10px",
                      color: "black",
                      fontWeight: "bolder",
                      fontFamily: "sans-serif",
                    }}
                  >
                    19:45
                  </span>
                </Form>
                <div className="d-flex">
                  <span
                    style={{
                      margin: "10px",
                      whiteSpace: "nowrap",
                      fontSize: "12px",
                      fontWeight: "bolder",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Raj Ratan Travels, Borivali East,
                    <br />
                    Devipada Subway
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          {/* <Row>
            <Col xs={12}>
              <div className=" select-train mt-2 d-flex">
                <Form className="d-flex">
                  {["radio"].map((type) => (
                    <div
                      key={`inline-${type}`}
                      className="mb-3"
                      style={{ margin: "10px", marginLeft: "10px" }}
                    >
                      <Form.Check
                        inline
                        label=""
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                    </div>
                  ))}

                  <span
                    style={{
                      marginTop: "10px",
                      marginRight: "10px",
                      color: "black",
                      fontWeight: "bolder",
                      fontFamily: "sans-serif",
                    }}
                  >
                    19:45
                  </span>
                </Form>
                <div className="d-flex">
                  <span
                    style={{
                      margin: "10px",
                      whiteSpace: "nowrap",
                      fontSize: "12px",
                      fontWeight: "bolder",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Raj Ratan Travels, Borivali East,
                    <br />
                    Devipada Subway
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={12}>
              <div className=" select-train mt-2 d-flex">
                <Form className="d-flex">
                  {["radio"].map((type) => (
                    <div
                      key={`inline-${type}`}
                      className="mb-3"
                      style={{ margin: "10px", marginLeft: "10px" }}
                    >
                      <Form.Check
                        inline
                        label=""
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                    </div>
                  ))}

                  <span
                    style={{
                      marginTop: "10px",
                      marginRight: "10px",
                      color: "black",
                      fontWeight: "bolder",
                      fontFamily: "sans-serif",
                    }}
                  >
                    19:45
                  </span>
                </Form>
                <div className="d-flex">
                  <span
                    style={{
                      margin: "10px",
                      whiteSpace: "nowrap",
                      fontSize: "12px",
                      fontWeight: "bolder",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Raj Ratan Travels, Borivali East,
                    <br />
                    Devipada Subway
                  </span>
                </div>
              </div>
            </Col>
          </Row> */}
        </Container>
        <div style={{ textAlign: "center" }}>
          <Button
            style={{
              backgroundColor: "#0FA453",
              color: "white",
              width: "100%",
              height: "51px",
              border: "none",
              borderRadius: "15px",
            }}
          >
            Add Passengers
          </Button>
        </div>
      </div>
    </>
  );
}

export default BusConfirmation;
