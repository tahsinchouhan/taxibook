import React from "react";
import { Button, Row, Col, Form, Container, Card } from "react-bootstrap";
import Salyimg from "../../assets/img/Saly-1.svg";
import Layer11 from "../../assets/img/hil.svg";
import Layer12 from "../../assets/img/adivash.svg";
import men1 from "../../assets/img/men.svg";
import doodle1 from "../../assets/img/doodle.png";
import "../../assets/css/saly.css";
import Inform from "./Inform";
import { NavLink, useHistory } from "react-router-dom";

function Saly() {
  const history = useHistory();
  const onButtonclick = () => {
    console.log("object");
    history.push("/select-booking");
  };
  return (
    <>
      <Container fluid style={{ padding: 0, margin: 0 }}>
        <Row className=" saly_div pt-5 w-100">
          <Col xs={12} md={6}>
            <div className="rocket-image">
              <img src={Salyimg} alt="saly" style={{ width: "100%" }} />
            </div>
          </Col>
          <Col xs={12} md={6} className="pt-5">
            <div className="p-5">
              <div className="explore">
                <h2 className="explore_div">Explore</h2>
                <p>Check out the best tourism destinations around Bastar</p>
              </div>
              <Row className="pt-5">
                <Col>
                  <Card className="saly_card">
                    <img
                      src={Layer11}
                      alt="saly"
                      style={{ width: "100%", borderRadius: "10px" }}
                    />
                  </Card>
                  <p className="saly-para"> Destinations 1</p>
                </Col>
                <Col>
                  <Card className="saly_card">
                    <img
                      src={Layer12}
                      alt="saly"
                      style={{ width: "100%", borderRadius: "10px" }}
                    />
                  </Card>
                  <p className="saly-para"> Destinations 2</p>
                </Col>
                <Col>
                  <Card className="saly_card">
                    <img
                      src={Layer11}
                      alt="saly"
                      style={{ width: "100%", borderRadius: "10px" }}
                    />
                  </Card>
                  <p className="saly-para"> Destinations 3</p>
                </Col>
                <Col>
                  <Card className="saly_card">
                    <img
                      src={Layer12}
                      alt="saly"
                      style={{ width: "100%", borderRadius: "10px" }}
                    />
                  </Card>
                  <p className="saly-para"> Destinations 4</p>
                </Col>
                <div className="pt-5">
                  <Button variant="" style={{ backgroundColor: "#58b839",color:"white" ,fontSize:"17px",fontWeight:"bolder"}}>
                    View all destinations
                  </Button>
                </div>
              </Row>
            </div>
          </Col>
        </Row>

        {/*Make-Booking*/}
        {/* <div style={{ height: "100px" }}></div> */}

        <div
          style={{ backgroundColor: "black", color: "white", height: "370px" }}
        >
          <div style={{ flexDirection: "row" }}>
            <Col>
              <div style={{ paddingTop: "100px", textAlign: "center" }}>
                <div className="bookings-div">
                  <h3>Bookings</h3>
                  <p>Book tickets for buses,cabs and DM Passees</p>
                </div>
                <Button
                  className="makebooking-btn"
                  style={{ backgroundColor: " #864BD8", color: "white" }}
                  onClick={onButtonclick}
                >
                  Make a Booking
                </Button>
              </div>
            </Col>
            <Col>
              {/* <div className="men-image">
                                <img src={men1} alt="" />
                            </div> */}
            </Col>
          </div>
        </div>

        {/*Tictets*/}
        <Container>
          <div className="ticket-div py-5">
            <Row>
              <Col sm={6} md={6}>
                <div>
                  <h3 className="ml-5">Tictets</h3>
                  <p>
                    View all part tickets and check out where you have visited
                  </p>
                </div>
              </Col>

              <Col sm={6} md={6}>
                <div className="viewbtn">
                  <Button
                    variant="danger"
                    style={{ cursor: "pointer", marginTop: "32px" }}
                  >
                    View your Tickets
                  </Button>
                </div>
              </Col>
            </Row>
            <div className="pt-4">
              <Container>
                <h4>Recent Tickets</h4>
                <Row>
                  <Col>
                    <img src={doodle1} />
                    <br />
                    <p>
                      Chitrakote
                      <br />
                      24 Feb
                    </p>
                  </Col>
                  <Col>
                    <img src={doodle1} />
                    <br />
                    <p>
                      Tamda Ghumar
                      <br />
                      24 Feb
                    </p>
                  </Col>
                  <Col>
                    <img src={doodle1} />
                    <br />
                    <p>
                      Nendi Ghumar
                      <br />
                      24 Feb
                    </p>
                  </Col>
                  <Col>
                    <img src={doodle1} />
                    <br />
                    <p>
                      Chitrakote
                      <br />
                      24 Feb
                    </p>
                  </Col>
                  <Col>
                    <img src={doodle1} />
                    <br />
                    <p>
                      Tamda Ghumar
                      <br />
                      24 Feb
                    </p>
                  </Col>
                  <Col>
                    <img src={doodle1} />
                    <br />
                    <p>
                      Nendi Ghumar
                      <br />
                      24 Feb
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Container>
      </Container>

      <Inform />
    </>
  );
}

export default Saly;
