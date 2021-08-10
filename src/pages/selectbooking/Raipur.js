import React,{ useState } from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";



function Raipur() {

    const onClickTrain = () => {
        console.log("object");
        history.push("/raipur");
      };

  return (
    <>
      <div>
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
              marginLeft: "35px",
            }}
          >
            <FaArrowLeft  onClick={}/>
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
                marginLeft: "-7px",
              }}
            >
              Select Boarding Point
            </h5>
          </div>
        </div>
        <Container>
            <span>Boarding from</span>
            <h3>Tatibandh, Raipur</h3>
            <span>30 July, 2021</span>
        </Container>
        <Container>
          <Row>
            <Col xs={12}>
              <div className=" select-train d-flex">
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
              <div className=" select-train d-flex">
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
              <div className=" select-train d-flex">
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
              <div className=" select-train d-flex">
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
              <div className=" select-train d-flex">
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
              <div className=" select-train d-flex">
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
            {/* <Col xs={12}>hiii</Col>
            <Col xs={12}>hiii</Col> */}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Raipur;
