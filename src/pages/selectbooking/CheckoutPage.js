import React from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import bus1 from "../../assets/img/bus.png";
import city1 from "../../assets/img/city.png";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { useHistory } from "react-router-dom";

function CheckoutPage() {
  const history = useHistory();

  const onCongratsClick=()=>{
      console.log("object");
      history.push("/CongratulationPage");
    };
  return (
      <>
    <div>
      <Header />
      <div>
      <Container className="" style={{ width: "42%",paddingTop:"50px" }}>
        <h5
          style={{
            fontSize: "19px",
            color: "#0FA453",
            fontWeight: "bolder",
            marginLeft:"25px",
          }}
        >
          Checkout
        </h5>
        <Row>
          <Col>
            <div style={{ marginLeft:"25px",}}>
              <div className="p-2">
                <span
                  style={{
                    color: "black",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  Destination
                </span>
                <br />
                <span
                  style={{
                    fontSize: "19px",
                    fontWeight: "bolder",
                    color: "black",
                  }}
                >
                  Chitrakote, Bastar
                </span>
                <br />
                <span
                  style={{
                    color: "black",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  31 July, 2021
                </span>
              </div>
              <div className="p-2">
                <span
                  style={{
                    color: "black",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  Total Amount
                </span>
                <br />
                <span
                  style={{
                    fontSize: "19px",
                    fontWeight: "bolder",
                    color: "#FF4A68",
                  }}
                >
                  ₹ 3000
                </span>
                <br />
                <span
                  style={{
                    color: "black",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  *Excluding taxes
                </span>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <span
                style={{
                  color: "black",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Travel Details
              </span>
              <div>
                <div
                  className="rajratan-train p-2"
                  style={{ float: "", backgroundColor: "#F8F8F8" }}
                >
                  <div style={{}}>
                    <img src={city1} />
                    <span
                      style={{
                        color: "grey",
                        padding: "10px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      2 Stops
                    </span>
                    <br />
                    <span
                      style={{
                        fontWeight: "bolder",
                        fontFamily: "sans-serif",
                        fontSize: "13px",
                      }}
                    >
                      21:45 - 9:50
                    </span>
                    <br />
                    <div style={{ marginLeft: "-8px" }}>
                      <span
                        style={{
                          marginRight: "20px",
                          color: "grey",
                          padding: "12px",
                          fontFamily: "sans-serif",
                        }}
                      >
                        12h 05m
                      </span>
                    </div>
                  </div>
                  <div className="d-flex p-1">
                    <img
                      src={bus1}
                      alt="bus"
                      style={{ height: "20px", paddingRight: "10px" }}
                    />
                    <span
                      style={{
                        whiteSpace: "nowrap",
                        fontSize: "13px",
                        fontWeight: "bolder",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Raj Ratan Tours and Travels
                    </span>
                  </div>
                  <span
                    className="train-sleeper"
                    style={{
                      whiteSpace: "nowrap",
                      fontSize: "13px",
                    }}
                  >
                    Volvo Multi-Axle Sleeper A/C (2+1)
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="" style={{ width: "42%",paddingTop:"20px" }}>
        <Row>
        <span style={{
                        fontWeight: "bolder",
                        fontFamily: "sans-serif",
                        fontSize: "16px",
                        color:"black",
                        marginLeft:"25px",
                      }}
        >Passenger Details</span>
          <Col>
            <div className="check-passenger" style={{marginLeft:"25px",}}>            
              <div style={{textAlign:"center",padding:"10px"}}>
                <span style={{
                        fontWeight: "bolder",
                        fontFamily: "sans-serif",
                        fontSize: "13px",
                        color:"black",
                      }}
                >Rajesh Sharma</span> <br/>
                    <span>Male, 25</span> <br/>
                    <span> Adhaar: 1298 2954 1926</span>
                    <div className="p-3">
                        <Button  className="checout-btn">EDIT</Button>
                    </div>
              </div>
            </div>
          </Col>
          <Col>
          <div className="check-passenger" style={{marginLeft:"15px",}}>
              {/* <span>Passenger Details</span> */}
              <div style={{textAlign:"center",padding:"10px"}}>
                <span  style={{
                        fontWeight: "bolder",
                        fontFamily: "sans-serif",
                        fontSize: "13px",
                        color:"black",
                      }}
                >Sunita Sharma</span>  <br/>
                    <span>Female, 22</span> <br/>
                    <span> Adhaar: 1298 2954 1926</span>
                    <div className="p-3">
                        <Button className="checout-btn">EDIT</Button>
                    </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
      <div style={{height:"250px"}}>
      </div>
      <div className="check-payment"style={{background: "#0FA453"}} onClick={onCongratsClick}>
          <div className="checkout-payment"
          style={{
            position: "absolute",
            lineHeight: "25px",
            fontSize: "21px",
            textAlign: "center",
            paddingTop:" 32px",
            fontWeight: "bolder",            
        color:" #FFFFFF",
        marginLeft:"577px"
          }}
          >
          MAKE PAYMENT
          </div>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default CheckoutPage;
