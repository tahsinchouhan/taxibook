import React from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";

import Header from "../../../components/Header";
import Footer from "../../travesaly/Footer";
import { useHistory } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import mobile from "../../../assets/img/mobile.png";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function DmCongratulate() {
  const history = useHistory();
  // const { data: apiData, tripData,booking_id } = useSelector(state => state.busReducer)
  // const goHome = () => {
  //   history.push("/");
  // };
  const dispatch = useDispatch();
  const { dmData } = useSelector((state) => state.dmpassReducer);
  const { dmpass_id } = dmData;
  return (
    <>
      <div className="d-none d-md-block">
        <Header />
        <Container style={{ width: "70%", paddingTop: "20px" }}>
          <Row>
            <Col>
              <div style={{ marginTop: "15px" }}>
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
                  {/* <div>
                    <Button
                      className="btn btn-success"
                      style={{
                        width: "186px",
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
                          fontSize: "30px",
                        }}
                      />
                      <span> Whatsapp Link</span>
                    </Button>
                  </div> */}

                  {/* <div>
                   <Button style={{
                    width: "186px",
                    textAlign: "center",
                    height: "52px",
                    borderRadius: "9px",
                    backgroundColor: "",
                    fontWeight:"bold",
                    marginBottom:"20px"
                  }} 
                   >Download E-ticket</Button>
                   </div> */}

                  <div>
                    {/* <Button
                      onClick={() => history.push("/")}
                      style={{
                        width: "186px",
                        textAlign: "center",
                        height: "52px",
                        borderRadius: "9px",
                        borderColor: "#864BD8",
                        backgroundColor: "#864BD8",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Back to Home
                    </Button> */}
                    <Link to="/">Back to Home</Link>
                  </div>
                  <div>
                    <Button
                      style={{
                        width: "186px",
                        textAlign: "center",
                        height: "52px",
                        borderRadius: "9px",
                        borderColor: " #FF4A68",
                        backgroundColor: " #FF4A68",
                        fontWeight: "bold",
                        marginTop: "20px",
                      }}
                    >
                      <Link
                        to={`/dm-detail/${dmpass_id}`}
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        View Ticket
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>

      {/*mobile-view*/}
      <div fluid className="d-md-none">
        <div>
          <h5
            style={{
              paddingTop: "23px",
              fontSize: "18px",
              backgroundColor: "#0FA453",
              fontWeight: "bolder",
              color: "white",
              textAlign: "center",
              height: "70px",
            }}
          >
            Pass Booked
          </h5>
        </div>
        <Container style={{ width: "" }}>
          <div>
            <div style={{ textAlign: "center", marginTop: "15px" }}>
              <span style={{ fontWeight: "bolder" }}>CONGRATULATIONS!</span>
              <br />
              <span style={{ color: "black", fontSize: "13px" }}>
                Your Passes are ready
              </span>
            </div>
            <Col xs={12} md={6} >
              <div style={{ marginTop: "" }}>
                <img
                  src={mobile}
                  alt=""
                  style={{ width: "100%", height: "" }}
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div style={{ marginBottom: "20px", textAlign: "center" }}>
                <h3 style={{ fontWeight: "bolder" }}>Transaction ID</h3>
                <span style={{ color: "black", marginBottom: "50px" }}>
                  {dmpass_id}
                </span>
              </div>
              <div style={{ textAlign: "center" }}>
                {/* <div>
                    <Button
                      className="btn btn-success"
                      style={{
                        width: "186px",
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
                          fontSize: "30px",
                        }}
                      />
                      <span> Whatsapp Link</span>
                    </Button>
                  </div> */}
                {/* <div>
                    <Button
                      style={{
                        width: "186px",
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
                  </div> */}

                {/* <div>
                   <Button style={{
                    width: "186px",
                    textAlign: "center",
                    height: "52px",
                    borderRadius: "9px",
                    backgroundColor: "",
                    fontWeight:"bold",
                    marginBottom:"20px"
                  }} 
                   >Sent by Email</Button>
                   </div> */}

                {/* <div> */}
                  <Button
                    style={{
                      // width: "186px",
                      textAlign: "center",
                      borderColor: " #FF4A68",
                      backgroundColor: " #FF4A68",
                      fontWeight: "bold",
                      height: "86px",
                      borderRadius:"0",
                      position:"fixed",
                      width:"100%",
                      bottom:"0",
                      left:"0"
                    }}
                  >
                    <Link
                      to={`/dm-detail/${dmpass_id}`}
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      View Ticket
                    </Link>
                  </Button>
                {/* </div> */}
                <div>
                  {/* <Button
                    onClick={() => history.push("/")}
                    style={{
                      width: "186px",
                      textAlign: "center",
                      height: "52px",
                      borderRadius: "9px",
                      borderColor: "#864BD8",
                      backgroundColor: "#864BD8",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    Back to Home
                  </Button> */}
                    <Link to="/">Back to Home</Link>
                </div>
              </div>
            </Col>
          </div>
        </Container>
      </div>
    </>
  );
}

export default DmCongratulate;
