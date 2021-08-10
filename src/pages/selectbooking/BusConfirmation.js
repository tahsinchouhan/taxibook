import React from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { FaArrowLeft } from "react-icons/fa";

function BusConfirmation() {
  return (
    <>
      <div className="d-none d-md-block">
      <Header />
        <Container style={{width:"70%",paddingTop:"40px",marginBottom:"70px"}}>
          <h3 style={{
                    fontSize: "19px",
                    color: "#0FA453",
                    fontWeight: "bolder",
                  }}>Confirmation</h3>

          <Row>
            <Col>
              <div style={{width:"89%"}}>
                <span  style={{
                         color: "black",                       
                        fontFamily: "sans-serif",
                      }}
                      >Boarding from</span>
                <button 
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#FF4A68",
                  float: "right",
                  fontSize: "12px",
                }}>Change</button>
              </div>
            </Col>
            <Col>
              <div style={{width:"89%"}}>
                <span style={{
                         color: "black",                        
                        fontFamily: "sans-serif",
                      }}
                >Dropoff At</span>
                <button style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#FF4A68",
                  float: "right",
                  fontSize: "12px",}}>Change</button>
              </div>
            </Col>
          </Row>
          <Row >
          <Col xs={12} md={6}>
                <div className=" select-train mt-2 d-flex" style={{width:"89%"}}>
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
                <div className=" select-train mt-2 d-flex" style={{width:"89%"}}>
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
          <div style={{textAlign:"center",margin:"55px"}}>
              <Button style=
              {{backgroundColor:"#0FA453",color:"white",width:"26%",height:"51px",border:"none",borderRadius:"15px"}}>Add Passengers</Button>
          </div>
        </Container>
        <Footer />
      </div>

{/*mobile-view*/}

<div  fluid className="d-md-none">

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
                marginLeft: "-7px",
              }}
            >
             Select Dropoff Point
            </h5>
          </div>
        </div>
   
        <Container style={{width:"90%",paddingTop:"40px",marginBottom:"70px"}}>
          <h3 style={{
                    fontSize: "19px",
                    color: "#0FA453",
                    fontWeight: "bolder",
                  }}>Confirmation</h3>

          <Row>
            <Col>
              <div style={{width:"89%"}}>
                <span  style={{
                         color: "black",                       
                        fontFamily: "sans-serif",
                      }}
                      >Boarding from</span>
                <button 
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#FF4A68",
                  float: "right",
                  fontSize: "12px",
                }}>Change</button>
              </div>
            </Col>
            <Col>
              <div style={{width:"89%"}}>
                <span style={{
                         color: "black",                        
                        fontFamily: "sans-serif",
                      }}
                >Dropoff At</span>
                <button style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#FF4A68",
                  float: "right",
                  fontSize: "12px",}}>Change</button>
              </div>
            </Col>
          </Row>
          <Row >
          <Col xs={12}>
                <div className=" select-train mt-2 d-flex" >
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
          <div style={{textAlign:"center",margin:"55px"}}>
              <Button style=
              {{backgroundColor:"#0FA453",color:"white",width:"100%",height:"51px",border:"none",borderRadius:"15px"}}>Add Passengers</Button>
          </div>
        </Container>
      
      </div>

</>
  );
}

export default BusConfirmation;
