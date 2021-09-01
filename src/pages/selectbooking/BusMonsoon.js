import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import Header from "../../components/Header";
import bus1 from "../../assets/img/bus.png";
import city1 from "../../assets/img/city.png";
import Footer from "../travesaly/Footer";
import { useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { API_PATH } from "../../Path/Path";
import { useDispatch, useSelector } from "react-redux";
import { getTripByRouteId, setRouteId, setTripData } from "../../redux/actions";

function BusMonsoon() {
  const history = useHistory();
  const [seats, setSeats] = useState([]);
  const { tripList: trips, route_id, routeData } = useSelector(state => state.busReducer)

  console.log("trips liSTTTTT", trips);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setRouteId(route_id))
    dispatch(getTripByRouteId(route_id))
  }, [route_id]);

  useEffect(() => {
    console.log("ddd", routeData);

    // seatAvailable();
  }, [routeData]);
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
    dispatch(setTripData(trips[trips.findIndex(x => x._id == id)]))
    // history.push("/boarding");
    console.log(trips.findIndex(x => x._id == id));
    history.push("/busconfirmation");
  };

  const onClickChange = () => {
    // console.log("object");
    history.push("/busdetail");
  };


  // const seatAvailable = () => {
  //   fetch("http://15.206.92.158/api/v1/trips/list", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log("on success", res.data);
  //       //  setSeats(res[0].seat_avilable)
  //     })
  //     .catch((error) => {
  //       console.log("on error", error);
  //     });
  // };



  return (
    <>
      <div className="d-none d-md-block">
        <Header />
        <div style={{ backgroundColor: "white", marginTop: "40px", paddingInline: "20%" }}>
          <Container className="mansoon-div">
            <Row>
              <Col md={8}>
                <h5
                  style={{
                    fontSize: "19px",
                    color: "#0FA453",
                    fontWeight: "bolder",
                  }}
                >
                  {`${routeData?.start?.name} to ${routeData?.end?.name} `}
                </h5>
                <span style={{ color: "black", fontWeight: "bolder" }} onClick={onClickChange}>
                  Change
                </span>
              </Col>
              <Col>
                <Form.Label
                  className=""
                  style={{
                    fontSize: "33px",
                    fontWeight: "bolder",
                    marginLeft: "4px",
                    color: "#a5a5a5",
                    float: "right",
                    paddingRight: "20px",
                  }}
                >
                  {/* 30 July  */}
                  {/* {`${routeData?.startDate?.toLocaleDateString("en-US", {  day: 'numeric', month: 'short'})} `} */}
                  {`${routeData?.startDate?.toLocaleDateString("en-US", { day: 'numeric' })} `}
                  {`${routeData?.startDate?.toLocaleDateString("en-US", { month: 'short' })} `}
                </Form.Label>
              </Col>
            </Row>
            {/* <Container>
              <div style={{ textAlign: "center" }}>
                <span
                  style={{
                    color: "black",
                    fontWeight: "bolder",
                    fontSize: "12px",
                  }}
                >
                  Available Promo Codes
                </span>
              </div>
              <Row>
                <Col className="mansoon-row">
                  <div style={{ textAlign: "center", paddingTop: "10px" }}>
                    <span className="mansoon-item">MONSOON15</span>
                    <br />
                    <span className="mansoon-per">15% off in July 2021</span>
                  </div>
                </Col>
                <Col className="mansoon-row">
                  <div style={{ textAlign: "center", paddingTop: "10px" }}>
                    <span className="mansoon-item">TRYNEW</span>
                    <br />
                    <span className="mansoon-per">
                      10% off your first booking
                    </span>
                  </div>
                </Col>
                <Col className="mansoon-row">
                  <div style={{ textAlign: "center", paddingTop: "10px" }}>
                    <span className="mansoon-item">MONSOON15</span>
                    <br />
                    <span className="mansoon-per">15% off in July 2021</span>
                  </div>
                </Col>
                <Col className="mansoon-row">
                  <div style={{ textAlign: "center", paddingTop: "10px" }}>
                    <span className="mansoon-item">TRYNEW</span>
                    <br />
                    <span className="mansoon-per">
                      10% off your first booking
                    </span>
                  </div>
                </Col>
              </Row>
            </Container>
            <hr /> */}
            {/* <Container onClick={onClickTrain}>
              <Row>
                <Col>
                  <div className="rajratan-train" style={{ float: "left" }}>
                    <div className="d-flex p-1">
                      <img src={bus1} alt="bus" style={{ height: "20px", paddingRight: "10px" }} />
                      <span style={{ fontWeight: "bolder", fontFamily: "sans-serif" }}>Raj Ratan Tours and Travels</span>
                    </div>
                    <span className="train-sleeper">Volvo Multi-Axle Sleeper A/C (2+1)</span>
                    <div>
                      <img src={city1} />
                      <span style={{ color: "grey", padding: "10px", fontFamily: "sans-serif" }}>2 Stops</span>
                      <span style={{ fontWeight: "bolder", fontFamily: "sans-serif" }}>21:45 - 9:50</span>
                      <span style={{ color: "grey", padding: "10px", fontFamily: "sans-serif" }}>12h 05m</span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex" style={{ float: "right", padding: "10px" }}>
                    <div className="pt-2">
                      <span style={{ color: "grey", fontFamily: "sans-serif", padding: "5px" }}>*per person</span><br />
                      <span style={{ fontWeight: "bolder", fontFamily: "sans-serif", padding: "5px" }}>₹ 1500</span>
                    </div>
                    <div className=" train-seats ">
                      <span style={{ fontSize: "12px", fontWeight: "bolder" }}>14</span><br />
                      <span style={{ fontSize: "12px", fontWeight: "bolder" }}>seats available</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container><hr /> */}
            {
              (trips?.length > 0)
                ?
                trips?.map((item, i) =>
                  <React.Fragment key={i}>
                    <Container onClick={() => onClickTrain(item._id)} style={{ cursor: "pointer" }} >
                      <Row>
                        <Col>
                          <div className="rajratan-train" style={{}}>
                            <div className="d-flex p-1">
                              <img src={bus1} alt="bus" style={{ height: "20px", paddingRight: "10px" }} />
                              <span style={{ fontWeight: "bolder", fontFamily: "sans-serif" }}>{item.trip_name}</span>
                            </div>
                            <span className="train-sleeper">Bus {routeData?.vehical?.number_of_seats} Seater</span>
                            <div>
                              <img src={city1} />
                              <span style={{ color: "grey", padding: "10px", fontFamily: "sans-serif" }}>
                                {/* 2 Stops */}
                              </span>
                              <span style={{ fontWeight: "bolder", fontFamily: "sans-serif" }}>{item?.departure_time} - {item?.estimated_time_of_arrival}</span>
                              <span style={{ color: "grey", padding: "10px", fontFamily: "sans-serif" }}>{item.duration_of_travel}</span>
                            </div>
                          </div>
                        </Col>
                        <Col>
                          <div className="d-flex" style={{ float: "right", padding: "10px" }}>
                            <div className="pt-2" style={{ float: "right" }}>
                              <span style={{ color: "grey", fontFamily: "sans-serif", padding: "5px" }}>*per person</span><br />
                              <span style={{ fontWeight: "bolder", fontFamily: "sans-serif", padding: "5px" }}>₹ {item?.ticket_price}</span>
                            </div>
                            <div className="train-seats d-flex justify-content-center flex-column" style={{ lineHeight: "12px", }}>
                              <span style={{ fontSize: "22px", lineHeight: "27px", fontWeight: "bolder", display: "block" }}> {item?.seat_avilable}</span>
                              <span style={{ fontSize: "12px" }}>seats available</span>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Container><hr />
                  </React.Fragment>
                )
                :
                null
            }
          </Container>
        </div>
        <Footer />
      </div>

      {/*mobile View*/}
      <div >
        <div fluid className="d-md-none">
          <div>
            <Col xs={12} className="p-0">
              <div className="">
                <div >
                  <h5
                    style={{
                      padding: "15px",
                      fontSize: "19px",
                      backgroundColor: "#0FA453",
                      fontWeight: "bolder",
                      color: "white",
                      textAlign: "center",
                      height: '75px'
                    }}
                  >
                    {/* Tatibandh, Boarding
                    <br />
                    to Chitrakote{" "} */}
                    {routeData?.start?.name}
                    <br />
                    {` to ${routeData?.end?.name} `}
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
                  <div style={{ margin: "30px" }}>
                    {/* 30 July */}
                    {`${routeData?.startDate?.toLocaleDateString("en-US", { day: 'numeric' })} `}
                    {`${routeData?.startDate?.toLocaleDateString("en-US", { month: 'short' })} `}
                  </div>
                </Form.Label>
              </div>
            </Col>
          </div>
          <div >
            {/* <Container sty={{ marginLeft: "10px" }}>
              <div>
                <span
                  style={{
                    color: "black",
                    fontWeight: "bolder",
                    fontSize: "12px",
                  }}
                >
                  Available Promo Codes
                </span>
              </div>
              <div style={{ overflow: "auto", width: "100%" }}>
                <Row>
                  <Col className="mansoon-row">
                    <div style={{ textAlign: "center", paddingTop: "10px" }}>
                      <span className="mansoon-item">MONSOON15</span>
                      <br />
                      <span className="mansoon-per">15% off in July 2021</span>
                    </div>
                  </Col>
                  <Col className="mansoon-row">
                    <div style={{ textAlign: "center", paddingTop: "10px" }}>
                      <span className="mansoon-item">TRYNEW</span>
                      <br />
                      <span className="mansoon-per">
                        10% off your first booking
                      </span>
                    </div>
                  </Col>
                  <Col className="mansoon-row">
                    <div style={{ textAlign: "center", paddingTop: "10px" }}>
                      <span className="mansoon-item">MONSOON15</span>
                      <br />
                      <span className="mansoon-per">15% off in July 2021</span>
                    </div>
                  </Col>
                  <Col className="mansoon-row">
                    <div style={{ textAlign: "center", paddingTop: "10px" }}>
                      <span className="mansoon-item">TRYNEW</span>
                      <br />
                      <span className="mansoon-per">
                        10% off your first booking
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            <hr /> */}
            {/* <Container>
              <Row>
                <Col>
                  <div className="rajratan-train" style={{ float: "" }} onClick={onClickTrain}>
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
                            padding: "10px",
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
                          fontSize: "12px",
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
                      }}
                    >
                      Volvo Multi-Axle Sleeper A/C (2+1)
                    </span>
                  </div>
                </Col>
                <Col style={{ float: "right" }}>
                  <Row>
                    <div
                      className=" ml-4"
                      style={{ float: "right", padding: "10px" }}
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
                        <div className=" train-seatsmobile ">
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
            </Container><hr /> */}
            {
              (trips?.length > 0)
                ?
                trips?.map((item, i) =>
                <>
                  <div key={i}>
                    <Container>
                      <Row>
                        <Col>
                          <div className="rajratan-train" style={{ float: "" }} >
                            <div style={{}}>
                              <img src={city1} />
                              <span
                                style={{
                                  color: "grey",
                                  padding: "10px",
                                  fontFamily: "sans-serif",
                                }}
                              >
                                {/* 2 Stops */}
                              </span>
                              <br />
                              <span
                                style={{
                                  fontWeight: "bolder",
                                  fontFamily: "sans-serif",
                                }}
                              >
                                {item?.departure_time} - {item?.estimated_time_of_arrival}
                              </span>
                              <br />
                              <div style={{ marginLeft: "-8px" }}>
                                <span
                                  style={{
                                    marginRight: "20px",
                                    color: "grey",
                                    padding: "10px",
                                    fontFamily: "sans-serif",
                                  }}
                                >
                                  {item?.duration_of_travel}
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
                                  fontSize: "12px",
                                  fontWeight: "bolder",
                                  fontFamily: "sans-serif",
                                }}
                              >
                                {item?.trip_name}
                              </span>
                            </div>
                            <span
                              className="train-sleeper"
                              style={{
                                whiteSpace: "nowrap",
                              }}
                            >
                              Bus {routeData?.vehical?.number_of_seats} Seater
                            </span>
                          </div>
                        </Col>
                        <Col style={{ float: "right" }}>
                          <Row style={{ float: "right" }}>
                            <div
                              className=" ml-4"
                              style={{ float: "right", padding: "10px" }}
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
                                      fontSize: "22px",
                                      fontWeight: "bolder",
                                      fontFamily: "sans-serif",
                                      padding: "5px",
                                    }}
                                  >
                                    ₹ {item?.ticket_price}
                                  </span>
                                </div>
                              </Col>
                              <Col xs={12} >
                                <div className="train-seatsmobile  d-flex justify-content-center flex-column">
                                  <span
                                    style={{ fontSize: "22px", fontWeight: "bolder" }}
                                  >
                                    {item?.seat_avilable}
                                  </span>
                                  <span
                                    style={{ fontSize: "12px" }}
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
                   <Button className="locationpass-btn"  onClick={() => onClickTrain(item._id)} >
                   Continue
                 </Button>
                 </>
                )
                :
                null
            }
          </div>
         
          {/* <Footer /> */}
        </div>
      </div>

    </>
  );
}

export default BusMonsoon;
