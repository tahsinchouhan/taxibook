import React, { useState } from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";

function Boarding() {
  const history = useHistory();

  const onClickBoarding = () => {
    console.log("object");
    history.push("/busmonsoon");
  };
  const onBusDropoff = () => {
    console.log("object");
    history.push("/busdropoff");
  };

  return (
    <>
      <div fluid className="d-none d-md-block">
        <Header />
        <Container style={{ width: "70%", paddingTop: "40px", marginBottom: "70px" }}>
          <Container>
            <Row>
              <Col>
                <h6
                  style={{
                    fontSize: "19px",
                    color: "#0FA453",
                    fontWeight: "bolder",
                  }}
                >
                  Select Boarding Point
                </h6>
                <div>
                  <span style={{ color: "black", fontSize: "15px" }}>
                    Boarding from
                  </span>
                  <h5 style={{ color: "black", fontWeight: "bolder" }}>Tatibandh, Boarding</h5>
                </div>
              </Col>
              <Col>
                <Form.Label
                  className=""
                  style={{
                    paddingTop: "20px",
                    fontSize: "20px",
                    fontWeight: "bolder",
                    marginLeft: "4px",
                    color: "grey",
                    float: "right",
                    paddingRight: "20px",
                  }}
                >
                  30 July
                </Form.Label>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <div className=" select-train mt-2 d-flex" onClick={onBusDropoff}>
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
              <Col xs={12} md={6}>
                <div className=" select-train mt-2 d-flex" onClick={onBusDropoff}>
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
              <Col xs={12} md={6}>
                <div className=" select-train mt-2 d-flex" onClick={onBusDropoff}>
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
              <Col xs={12} md={6}>
                <div className=" select-train mt-2 d-flex" onClick={onBusDropoff}>
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
              <Col xs={12} md={6}>
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
              <Col xs={12} md={6}>
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

              <Col xs={12} md={6}>
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
              <Col xs={12} md={6}>
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
              <Col xs={12} md={6}>
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
              <Col xs={12} md={6}>
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
              <Col xs={12} md={6}>
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
              <Col xs={12} md={6}>
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
          </Container>
        </Container>
        <Footer />
      </div>


      {/*mobile view*/}
      <div fluid className="d-md-none">
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
            <FaArrowLeft onClick={onClickBoarding} />
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
        <Container style={{ width: "95%" }}>
          <Container>
            <div style={{ textAlign: "center", margin: "30px" }}>
              <span style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>Boarding from</span>
              <h3 style={{ fontFamily: "sans-serif", fontWeight: "bolder" }}>Tatibandh, Boarding</h3>
              <span style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>30 July, 2021</span>
            </div>
          </Container>
          <Container>
            <Row>
              <Col xs={12}>
                <div className=" select-train mt-2 d-flex" onClick={onBusDropoff}>
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
                <div className=" select-train mt-2 d-flex" onClick={onBusDropoff}>
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
                <div className=" select-train mt-2 d-flex" onClick={onBusDropoff}>
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
                <div className=" select-train mt-2 d-flex" onClick={onBusDropoff}>
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

            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
}

export default Boarding;
