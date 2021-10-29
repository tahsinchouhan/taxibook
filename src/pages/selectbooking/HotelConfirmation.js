import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ButtonComponent from "../../containers/Button";
import "../../assets/css/busconfirmation.css";
import { AvField, AvForm } from "availity-reactstrap-validation";

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

function HotelConfirmation() {
  const history = useHistory();

  const onCheckout = () => {
    // history.push("/checkoutpage");
  };

  const onClickBack = () => {
    history.push("/hotellist");
  };

  return (
    <>
      <div className="d-none d-md-block">
        <Header />
        <AvForm>
          <Container
            style={{ width: "60%", paddingTop: "40px", marginBottom: "70px" }}
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
                <div style={{ width: "100%" }}>
                  <span
                    style={{
                      color: "black",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Boarding from
                  </span>
                </div>

                <div
                  className=" select-train mt-2 d-flex align-items-center"
                  style={{ width: "100%" }}
                >
                  <Form className="d-flex">
                    {["radio"].map((type) => (
                      <div
                        key={`inline-${type}`}
                        className="mb-3"
                        style={{ margin: "10px", marginLeft: "10px" }}
                      ></div>
                    ))}

                    <span
                      style={{
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
                <div style={{ width: "100%" }}>
                  <span
                    style={{
                      color: "black",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Dropoff At
                  </span>
                </div>

                <div
                  className=" select-train mt-2 d-flex align-items-center"
                  style={{ width: "100%" }}
                >
                  <Form className="d-flex">
                    {["radio"].map((type) => (
                      <div
                        key={`inline-${type}`}
                        className="mb-3"
                        style={{ margin: "10px", marginLeft: "10px" }}
                      ></div>
                    ))}

                    <span
                      style={{
                        marginRight: "10px",
                        color: "black",
                        fontWeight: "bolder",
                        fontFamily: "sans-serif",
                      }}
                    >
                      20:00
                    </span>
                  </Form>
                  <div className="d-flex">
                    <span
                      style={{
                        margin: "10px",
                        whiteSpace: "nowrap",
                        fontSize: "12px",
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

            <div className="">
              <div className="traveller_div">
                <Paper className="traveller__card">
                  <div className="traveller__card_body py-0">
                    <div>
                      <h5
                        className="traveller__card_title"
                        style={{ fontSize: "12px", float: "left" }}
                      >
                        Passenger {+1}
                      </h5>

                      <button
                        className="btn"
                        style={{
                          float: "right",
                          position: "relative",
                          top: "-10px",
                        }}
                      >
                        X
                      </button>
                    </div>

                    <p
                      className="traveller__card_text"
                      style={{ clear: "both" }}
                    >
                      <div className="form-group mt-0">
                        <label className="mb-1" for={`name$`}>
                          Name
                        </label>
                        <AvField
                          type="text"
                          className="form-control pass_input"
                          placeholder="Enter Passenger Name"
                          style={{
                            fontSize: "11px",
                            marginLeft: "-5px",
                            padding: "10px",
                          }}
                          name="name"
                          validate={{
                            required: {
                              value: true,
                              errorMessage: "Enter Traveller Name",
                            },
                          }}
                        />
                      </div>

                      <div className="form-row genderform pt-3 d-flex ">
                        <div
                          className="col m-2 w-50"
                          style={{ marginRight: "5px" }}
                        >
                          <label className="mb-1" for={`gender`}>
                            Gender
                          </label>
                          <div className="d-flex pt-2">
                            <ButtonComponent
                              style={{
                                width: "50%",
                                fontSize: "11px",
                                whiteSpace: "nowrap",
                              }}
                              data={button_Data}
                            />
                          </div>
                        </div>
                        <div className="form-group col m-2 w-50">
                          <label className="mb-1" for={`age`}>
                            Age
                          </label>

                          <AvField
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
                            name="age"
                            validate={{
                              required: {
                                value: true,
                                errorMessage: "Enter Age",
                              },
                            }}
                          />
                        </div>
                      </div>

                      <div className="form-group mt-1 pt-2">
                        <label className="mb-1" for={`aadhaar`}>
                          Adhaar Number
                        </label>
                        <AvField
                          type="text"
                          className="form-control pass_input"
                          id={`adhaar`}
                          placeholder="Enter 12 digit Adhaar Number"
                          style={{ fontSize: "11px", marginLeft: "-5px" }}
                          name="adhaar"
                          maxlength="12"
                          validate={{
                            required: {
                              value: true,
                              errorMessage: "Your Adhar Card Number Required",
                            },
                            pattern: {
                              value: "(?=.{12})",
                              errorMessage: "Enter 12 digit Adhaar Card Number",
                            },
                          }}
                        />
                      </div>
                    </p>
                  </div>
                </Paper>
              </div>

              <div style={{ textAlign: "center", margin: "55px" }}>
                <Button
                  type="button"
                  style={{
                    backgroundColor: "#0FA453",
                    color: "white",
                    width: "29%",
                    height: "51px",
                    border: "none",
                    borderRadius: "15px",
                  }}
                >
                  Add Traveller
                </Button>
              </div>
            </div>
          </Container>

          <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Col
                style={{
                  backgroundColor: "#E5E5E5",
                  textAlign: "center",
                  height: "86px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#E5E5E5",
                    textAlign: "center",
                    height: "86px",
                  }}
                >
                  <div style={{ padding: "" }}>
                    <span
                      style={{
                        fontSize: "15px",
                        lineHeight: "21px",
                        color: "grey",
                      }}
                    >
                      Total Amount (*Exclusive of Taxes)
                    </span>
                    <br />
                    <span
                      style={{
                        fontSize: "33px",
                        fontWeight: "bolder",
                        lineHeight: "40px",
                      }}
                    >
                      ₹ 5000
                    </span>
                  </div>
                </div>
              </Col>
              <Col>
                <Button
                  type="submit"
                  className="w-100"
                  style={{
                    borderColor: "#0FA453",
                    backgroundColor: "#0FA453",
                    color: "white",
                    textAlign: "center",
                    height: "86px",
                  }}
                  // onClick={onCheckout}
                >
                  <div>
                    <span
                      style={{
                        fontSize: "21px",
                        fontWeight: "bolder",
                        lineHeight: "25px",
                      }}
                      // onClick={onCheckout}
                    >
                      CONTINUE
                    </span>
                  </div>
                </Button>
              </Col>
            </div>
          </div>
        </AvForm>
        <Footer />
      </div>

      {/*mobile-view*/}

      <div className="d-md-none">
        <AvForm onValidSubmit={onCheckout}>
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
              <FaArrowLeft onClick={onClickBack} />
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
                Confirmation
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
                </div>
                <div className=" select-train mt-2 d-flex">
                  <Form className="d-flex">
                    {["radio"].map((type) => (
                      <div
                        key={`inline-${type}`}
                        className="mb-3"
                        style={{ margin: "10px", marginLeft: "10px" }}
                      >
                        {/* <Form.Check
                        inline
                        label=""
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      /> */}
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
                      {/* {tripData?.departure_time} */}
                      20:00 AM
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
                      {/* {tripData?.route?.start?.name} */}
                      Jagdalpur
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
                </div>
                <div className=" select-train mt-2 d-flex">
                  <Form className="d-flex">
                    {["radio"].map((type) => (
                      <div
                        key={`inline-${type}`}
                        className="mb-3"
                        style={{ margin: "10px", marginLeft: "10px" }}
                      ></div>
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
                      {/* {tripData?.estimated_time_of_arrival} */}
                      20:00 AM
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
                      {/* {tripData?.route?.end?.name} */}
                      Bastar
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <div className="traveller_div">
            <Paper className="traveller__card" style={{ marginBottom: "15px" }}>
              <div className="traveller__card_body" className="py-0">
                <div>
                  <h5
                    className="traveller__card_title"
                    style={{
                      fontSize: "12px",
                      marginBottom: "15px",
                      float: "left",
                    }}
                  >
                    Travellers {+1}
                  </h5>
                  <button
                    className="btn"
                    style={{
                      float: "right",
                      position: "relative",
                      top: "-10px",
                    }}
                  >
                    X
                  </button>
                </div>
                <p className="traveller__card_text" style={{ clear: "both" }}>
                  <div className="form-group mt-0">
                    <label className="mb-1" for={`name`}>
                      Name
                    </label>
                    <AvField
                      type="text"
                      className="form-control pass_input"
                      // id={`name${i}`}
                      placeholder="Enter Traveller Name"
                      style={{ fontSize: "11px", marginLeft: "-5px" }}
                      name="name"
                      // onChange={(e) =>
                      //   handleTraveller(e.target.value, e.target.name, i)
                      // }
                      // value={travellers[i].name}
                      validate={{
                        required: {
                          value: true,
                          errorMessage: "Enter Traveller Name",
                        },
                      }}
                    />
                  </div>

                  <div className="form-row genderform pt-3 d-flex ">
                    <div className="col m-2 w-50">
                      <label className="mb-1" for={`gender`}>
                        Gender
                      </label>
                      <div className="d-flex pt-2">
                        <ButtonComponent
                          style={{
                            width: "50%",
                            fontSize: "11px",
                            whiteSpace: "nowrap",
                          }}
                          data={button_Data}
                          // activeButton={activeButton}
                          // trigerOnClickEmpSideBtn={onSideBtnClick}
                          // trigerOnClickEmpSideBtn={(e) =>
                          //   handleTraveller(e.target.name, "gender", )
                          // }
                          // activeButton={travellers[i].gender}
                        />
                      </div>
                    </div>
                    <div className="form-group col m-2 w-50">
                      <label className="mb-1" for={`age`}>
                        Age
                      </label>
                      <AvField
                        type="text"
                        className="form-control pass_input w-70 pt-2"
                        placeholder="Enter Age"
                        // id={`age${i}`}
                        style={{
                          width: "110px",
                          marginLeft: "-5px",
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          height: "33px",
                        }}
                        name="age"
                        // onChange={(e) =>
                        //   handleTraveller(e.target.value, e.target.name, i)
                        // }
                        // value={travellers[i].age}
                        validate={{
                          required: {
                            value: true,
                            errorMessage: "Enter Age",
                          },
                        }}
                      />
                    </div>
                  </div>

                  <div className="form-group mt-1 pt-2">
                    <label className="mb-1" for={`aadhaar`}>
                      Adhaar Card Number{" "}
                    </label>
                    <AvField
                      type="text"
                      className="form-control pass_input"
                      // id={`adhaar${i}`}
                      placeholder="Enter 12 digit Adhaar Card Number"
                      style={{
                        fontSize: "11px",
                        marginLeft: "-5px",
                        marginTop: "7px",
                      }}
                      name="adhaar"
                      // onChange={(e) =>
                      //   handleTraveller(e.target.value, e.target.name, i)
                      // }
                      maxlength="12"
                      // value={travellers[i].adhaar}
                      validate={{
                        required: {
                          value: true,
                          errorMessage: "Your Adhar Card Number Required",
                        },
                        pattern: {
                          value: "(?=.{12})",
                          errorMessage: "Enter 12 digit Adhaar Card Number",
                        },
                      }}
                    />
                  </div>
                </p>
              </div>
            </Paper>
          </div>
          <div style={{ textAlign: "center", paddingBottom: "200px" }}>
            <Button
              type="button"
              style={{
                backgroundColor: "#0FA453",
                color: "white",
                width: "50%",
                height: "51px",
                border: "none",
                borderRadius: "15px",
                marginTop: "40px",
              }}
            >
              Add Traveller
            </Button>
          </div>

          <div>
            <div
              style={{
                display: "flex",
                marginTop: "50px",
                flexDirection: "row",
                width: "50%",
                position: "fixed",
                bottom: "0px",
              }}
            >
              <Col
                xs={12}
                md={6}
                style={{
                  backgroundColor: "#E5E5E5",
                  textAlign: "center",
                  height: "86px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#E5E5E5",
                    textAlign: "center",
                    height: "86px",
                  }}
                >
                  <div style={{ padding: "" }}>
                    <span
                      style={{
                        fontSize: "13px",
                        lineHeight: "21px",
                        color: "grey",
                      }}
                    >
                      Total Amount (*Exclusive of Taxes)
                    </span>
                    <br />
                    <span
                      style={{
                        fontSize: "33px",
                        fontWeight: "bolder",
                        lineHeight: "40px",
                        fontSize: " 24px",
                      }}
                    >
                      ₹ 5000
                    </span>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <Button
                  type="submit"
                  className="w-100"
                  style={{
                    borderColor: "#0FA453",
                    backgroundColor: "#0FA453",
                    color: "white",
                    textAlign: "center",
                    height: "86px",
                  }}
                  // onClick={onCheckout}
                >
                  <div>
                    <span
                      style={{
                        fontSize: "21px",
                        fontWeight: "bolder",
                        lineHeight: "25px",
                      }}
                      // onClick={onCheckout}
                    >
                      CONTINUE
                    </span>
                  </div>
                </Button>
              </Col>
            </div>
          </div>
        </AvForm>
      </div>
    </>
  );
}

export default HotelConfirmation;
