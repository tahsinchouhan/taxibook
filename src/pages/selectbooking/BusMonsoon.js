import React, { useState } from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import Header from "../../components/Header";
import bus1 from "../../assets/img/bus.png";
import city1 from "../../assets/img/city.png";
import Footer from "../travesaly/Footer";
import { useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import RatanCard from "./RatanCard";

function BusMonsoon() {
  const history = useHistory();
  // const [trips, setTrips] = useState([]);
  const {tripList:trips,route_id} = useSelector(state => state.busReducer)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setRouteId(route_id))
    dispatch(getTripByRouteId(route_id))
  }, [route_id]);

  useEffect(() => {
    console.log("rd", trips);
  }, [trips]);

  // const getTrips = () => {
  //   fetch(API_PATH + `/api/v1/trips/list`)
  //     .then((response) => response.json())
  //     .then((res) => {
  //       console.log(res.data);
  //       setTrips(res.data);
  //     })
  //     .catch((e) => console.log(e));
  // };

  const onClickTrain = (id) => {
    console.log("object");
    history.push("/raipur");
  };

  const onClickRaipur = () => {
    console.log("object");
    history.push("/booking");
  };

  return (
    <>
      <div className="d-none d-md-block">
        <Header />
        <div style={{ backgroundColor: "white", marginTop: "40px" }}>
          <Container className="mansoon-div">
            <Row>
              <Col>
                <h5
                  style={{
                    fontSize: "19px",
                    color: "#0FA453",
                    fontWeight: "bolder",
                  }}
                >
                  Tatibandh, Boarding to Chitrakote{" "}
                </h5>
                <span style={{ color: "black", fontWeight: "bolder" }}>
                  Change
                </span>
              </Col>
              <Col>
                <Form.Label
                  className=""
                  style={{
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
            <Container>
              <Row>
                <Col className="mansoon-row">
                  <div style={{ textAlign: "center", paddingTop: "10px" }}>
                    <span className="mansoon-item">MONSOON15</span>
                    <br />
                    <span
                      className="mansoon-per"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      15% off in July 2021
                    </span>
                  </div>
                </Col>
                <Col className="mansoon-row">
                  <div style={{ textAlign: "center", paddingTop: "10px" }}>
                    <span className="mansoon-item">TRYNEW</span>
                    <br />
                    <span
                      className="mansoon-per"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      10% off your first booking
                    </span>
                  </div>
                </Col>
                <Col className="mansoon-row">
                  <div style={{ textAlign: "center", paddingTop: "10px" }}>
                    <span className="mansoon-item">MONSOON15</span>
                    <br />
                    <span
                      className="mansoon-per"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      15% off in July 2021
                    </span>
                  </div>
                </Col>
                <Col className="mansoon-row">
                  <div style={{ textAlign: "center", paddingTop: "10px" }}>
                    <span className="mansoon-item">TRYNEW</span>
                    <br />
                    <span
                      className="mansoon-per"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      10% off your first booking
                    </span>
                  </div>
                </Col>
              </Row>
            </Container>
            <hr />
            {/* <Container onClick={onClickTrain}>
              <Row>
                <Col>
                  <div className="rajratan-train" style={{ float: "left" }}>
                    <div className="d-flex p-1">
                      <img
                        src={bus1}
                        alt="bus"
                        style={{ height: "20px", paddingRight: "10px" }}
                      />
                      <span
                        style={{
                          fontWeight: "bolder",
                          fontFamily: "sans-serif",
                        }}
                      >
                        Raj Ratan Tours and Travels
                      </span>
                    </div>
                    <span className="train-sleeper">
                      Volvo Multi-Axle Sleeper A/C (2+1)
                    </span>
                    <div>
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
                      <span
                        style={{
                          fontWeight: "bolder",
                          fontFamily: "sans-serif",
                        }}
                      >
                        21:45 - 9:50
                      </span>
                      <span
                        style={{
                          color: "grey",
                          padding: "10px",
                          fontFamily: "sans-serif",
                        }}
                      >
                        12h 05m
                      </span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="d-flex"
                    style={{ float: "right", padding: "10px" }}
                  >
                    <div className="pt-2">
                      <span
                        style={{
                          color: "grey",
                          fontFamily: "sans-serif",
                          padding: "5px",
                        }}
                      >
                        *per person
                      </span>
                      <br />
                      <span
                        style={{
                          fontWeight: "bolder",
                          fontFamily: "sans-serif",
                          padding: "5px",
                        }}
                      >
                        ₹ 1500
                      </span>
                    </div>
                    <div className=" train-seats ">
                      <span style={{ fontSize: "12px", fontWeight: "bolder" }}>
                        14
                      </span>
                      <br />
                      <span style={{ fontSize: "12px", fontWeight: "bolder" }}>
                        seats available
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <hr />
          </Container>
        </div>
        <Footer />
      </div>

      {/*mobile View*/}
      <div>
        <div fluid className="d-md-none">
          <Row>
            <Col xs={12}>
              <div className="">
                <div>
                  <h5
                    style={{
                      paddingTop: "15px",
                      fontSize: "19px",
                      backgroundColor: "#0FA453",
                      fontWeight: "bolder",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    Tatibandh, Raipur
                    <br />
                    to Chitrakote
                  </h5>
                </div>
              </div>
            </Col>
            <Col xs={12}>
              <div style={{ textAlign: "center", paddingTop: "10px" }}>
                <Form.Label
                  className=""
                  style={{
                    fontSize: "20px",
                    fontWeight: "bolder",
                    marginLeft: "4px",
                    color: "grey",
                    paddingRight: "20px",
                  }}
                >
                  <div style={{ margin: "30px" }}>30 July</div>
                </Form.Label>
              </div>
            </Col>
          </Row>
          <div style={{ marginLeft: "15px" }}>


{/*             
            <div className="d-flex">
               <div className="d-flex">
              <RatanCard/>
              <RatanCard/>
              </div>
            </div> */}

            <Container sty={{ marginLeft: "10px" }}>              
             <div style={{overflow:"auto",width:"100%"}}>
             <Row>
                <Col  className="mansoon-row">
                  <div style={{ textAlign: "center", paddingTop: "10px" }}>
                    <span className="mansoon-item">MONSOON15</span>
                    <br />
                    <span className="mansoon-per"  style={{whiteSpace:"nowrap"}} >15% off in July 2021</span>
                   
                  </div>
                </Col>
                <Col className="mansoon-row">
                  <div style={{ textAlign: "center", paddingTop: "10px" }}>
                    <span className="mansoon-item">TRYNEW</span>
                    <br />
                    <span className="mansoon-per"  style={{whiteSpace:"nowrap"}}>
                      10% off your first booking
                    </span>
                  </div>
                </Col>
                </Row>
                <Row>
                <Col className="mansoon-row">
                  <div style={{ textAlign: "center", paddingTop: "10px" }}>
                    <span className="mansoon-item">MONSOON15</span>
                    <br />
                    <span className="mansoon-per" style={{whiteSpace:"nowrap"}}>15% off in July 2021</span>
                  </div>
                </Col>
                <Col className="mansoon-row">
                  <div style={{ textAlign: "center", paddingTop: "10px" }}>
                    <span className="mansoon-item">TRYNEW</span>
                    <br />
                    <span className="mansoon-per"  style={{whiteSpace:"nowrap"}}>
                      10% off your first booking
                    </span>
                  </div>
                </Col>
              </Row>
             </div>
            </Container>

            <hr />
             <Container onClick={onClickTrain}>
              <Row>
                <Col xs={4} sm={4} md={6}>
                  <div className="rajratan-train" style={{ float: "",margin:"4px"}} onClick={onClickTrain}>
                    <div style={{}}>
                     <div className="d-flex" style={{marginBottom:"-10px"}}>
                     <img src={city1} style={{marginRight:"10px"}} />
                      <span
                        style={{
                          color: "grey",
                          // padding: "10px",
                          fontFamily: "sans-serif",
                          whiteSpace: "nowrap",
                        }}
                      >
                        2 Stops
                      </span>
                     </div>
                      <br />
                      <span
                        style={{
                          fontWeight: "bolder",
                          fontFamily: "sans-serif",
                        }}
                      >
                        21:45 - 9:50
                      </span>
                      <br />
                      <div style={{marginLeft:"-8px"}}>
                      <span
                        style={{
                            marginRight:"20px",
                          color: "grey",
                          paddingLeft: "10px",
                          fontFamily: "sans-serif",
                          whiteSpace: "nowrap",
                        }}
                      >
                        12h 05m
                      </span>
                      </div>
                    </div>
                    <div className="d-flex pt-3">
                      <img
                        src={bus1}
                        alt="bus"
                        style={{ height: "20px", paddingRight: "10px", }}
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
                      fontSize:"12px"
                      }}
                    >
                      Volvo Multi-Axle Sleeper A/C (2+1)
                    </span>
                  </div>
                </Col>
                <Col xs={4} sm={4} md={6} style={{ float: "right"}}>
                  <Row>
                    <div
                      className=" ml-4"
                      style={{ float: "right", padding: "15px",marginLeft:"123px", }}
                    >
                      <Col xs={12}>
                        <div className="">
                          <span
                            style={{
                              fontSize: "15px",
                              color: "grey",
                              fontFamily: "sans-serif",
                              padding: "5px",
                            }}
                          >
                            *per person
                          </span>
                          <br />
                          <span
                            style={{
                              fontSize: "25px",
                              fontWeight: "bolder",
                              fontFamily: "sans-serif",
                              padding: "5px",
                            }}
                          >
                            ₹ 1500
                          </span>
                        </div>
                      </Col>
                      <Col xs={12} >
                        <div className=" train-seatsmobile " style={{width:"74px"}}>
                          <span
                            style={{ fontSize: "12px", fontWeight: "bolder" }}
                          >
                            14
                          </span>
                          <br />
                          <span
                            style={{ fontSize: "12px", fontWeight: "bolder" }}
                          >
                            seats available
                          </span>
                        </div>
                      </Col>
                    </div>
                  </Row>
                </Col>
              </Row>
            </Container>

            <hr />
          </div>
        </div>
      </div>
      {/* <Button onClick={onClickDate}>date</Button> */}
    </>
  );
}

export default BusMonsoon;
