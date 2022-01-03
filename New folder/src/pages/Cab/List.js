import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Collapse } from "antd";

import Car from "../../assets/img/car.jpeg";

import { useHistory } from "react-router-dom";
import Cab from "../../assets/img/cab.png";
import CabDetails from "./CabDetails";

const List = () => {
  const history = useHistory();

  const onClick = () => {
    history.push("/cabconfirmation");
  };
  const { Panel } = Collapse;

  return (
    <div>
      <div className="d-none d-md-block">
        <div
          style={{
            backgroundColor: "white",
            width: "85%",
            maxWidth: "1040px",
            margin: "40px auto",
          }}
        >
          <Container className="mansoon-div">
            <React.Fragment>
              <Container style={{ cursor: "pointer" }}>
                <Row>
                  <Col md={3}>
                    <img
                      src={Car}
                      alt="Car img"
                      style={{
                        width: "220px",
                        height: "120px",
                        marginTop: "10px",

                        marginRight: "25px",
                      }}
                    />
                  </Col>

                  <Col>
                    <div className="rajratan-train" style={{}}>
                      <div className="d-flex p-1">
                        <img
                          src={Cab}
                          alt="bus"
                          style={{ height: "20px", paddingRight: "10px" }}
                        />
                        <span
                          style={{
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                            fontSize: "18px",
                          }}
                        >
                          Toyota Or Etios
                        </span>
                      </div>
                      <span
                        className="train-sleeper"
                        style={{ color: "black" }}
                      >
                        Includes Toll State Tax and Gst
                      </span>
                      <br />
                      <span className="train-sleeper">
                        Top Rated Cabs and Chauffeurs
                      </span>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="d-flex" style={{}}>
                      <div
                        className="pt-2"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "end",
                          paddingRight: "30px",
                        }}
                      >
                        <span style={{ fontWeight: "bold" }}>Upto 350 km</span>
                        <span
                          style={{
                            color: "grey",
                            fontFamily: "sans-serif",
                            fontSize: "16px",
                            textDecoration: "line-through",
                          }}
                        >
                          ₹ 1800
                        </span>
                        <span
                          style={{
                            fontWeight: "bolder",
                            fontFamily: "sans-serif",
                            fontSize: "20px",
                          }}
                        >
                          ₹ 800
                        </span>
                      </div>
                      <div
                        className=" d-flex justify-content-center flex-column"
                        style={{
                          lineHeight: "16px",
                        }}
                      >
                        <span
                          className="train-seats  d-flex justify-content-center "
                          onClick={onClick}
                          style={{
                            fontSize: "15px",
                            fontWeight: 700,
                            width: "118px",
                            height: "34px",
                            alignItems: "center",
                            marginBottom: "10px",
                          }}
                        >
                          Book Now
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="d-none d-md-block">
                  <Collapse
                    style={{ backgroundColor: "transparent", border: "0px" }}
                  >
                    <Panel
                      header={
                        <div
                          style={{
                            border: "1px solid green",
                            padding: "10px",
                            width: "80px",
                            borderRadius: "5px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {" "}
                          Details{" "}
                        </div>
                      }
                      key="1"
                    >
                      <CabDetails />
                    </Panel>
                  </Collapse>
                </Row>
              </Container>
            </React.Fragment>
          </Container>
        </div>
      </div>

      {/*mobile View*/}
      <div>
        <div fluid className="d-md-none">
          <div>
            <>
              <div>
                <Container style={{ paddingTop: "20px" }}>
                  <Row>
                    <Col style={{ display: "flex", justifyContent: "center" }}>
                      <img
                        src={Car}
                        alt="Car img"
                        style={{
                          width: "93%",
                          height: "180px",
                          margin: "10px 0",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <div>
                      <div className="rajratan-train">
                        <div style={{ display: "flex" }}>
                          <div>
                            <img
                              src={Cab}
                              alt="hotel"
                              style={{ padding: "0 10px" }}
                            />
                          </div>
                          <div>
                            <span
                              style={{
                                fontWeight: "bold",
                                fontSize: "18px",
                                fontFamily: "sans-serif",
                              }}
                            >
                              Toyota Or Etios
                            </span>
                            <br />
                            <span
                              style={{
                                color: "black",
                                fontSize: "16px",
                                fontFamily: "sans-serif",
                              }}
                            >
                              Includes Toll State Tax and Gst
                            </span>
                            <br />
                            <span
                              style={{
                                color: "grey",
                                fontSize: "16px",
                                fontFamily: "sans-serif",
                              }}
                            >
                              Top Rated Cabs and Chauffeurs
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Col>
                      <Row>
                        <div
                          className=" ml-4"
                          style={{
                            float: "right",
                            padding: "0 10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              padding: "10 20px",
                            }}
                          >
                            <div>
                              <span
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  fontWeight: "bold",
                                  padding: "0 10px",
                                  fontSize: "16px",
                                  marginTop: "10px",
                                }}
                              >
                                Upto 350 km
                              </span>
                            </div>

                            <div
                              style={{
                                display: "flex",
                                alignItems: "flex-end",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "20px",
                                  color: "grey",
                                  fontFamily: "sans-serif",
                                  textDecoration: "line-through",
                                  paddingRight: "10px",
                                }}
                              >
                                ₹ 1800
                              </span>

                              <span
                                style={{
                                  fontSize: "22px",
                                  fontWeight: "bolder",
                                  fontFamily: "sans-serif",
                                }}
                              >
                                ₹ 1500
                              </span>
                            </div>
                          </div>
                          <div
                            className=" d-flex "
                            style={{
                              lineHeight: "16px",
                              marginTop: "20px",

                              padding: "0 20px",
                            }}
                          >
                            <span
                              className="train-seats  d-flex justify-content-center "
                              onClick={onClick}
                              style={{
                                fontSize: "15px",
                                fontWeight: 700,
                                width: "160px",
                                height: "49px",
                                alignItems: "center",
                              }}
                            >
                              Book Now
                            </span>
                          </div>
                        </div>
                      </Row>
                    </Col>
                  </Row>
                </Container>
                <hr />
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
