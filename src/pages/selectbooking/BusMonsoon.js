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
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setRouteId(routeData))
    dispatch(getTripByRouteId(routeData))
  }, [route_id]);



  useEffect(() => {
    if(routeData.startDate === undefined){
      history.push('/busdetail')
    }
  }, [routeData]);

  const onClickTrain = (id) => {
    console.log("object");
    dispatch(setTripData(trips[trips.findIndex(x => x._id == id)]))
    console.log(trips.findIndex(x => x._id == id));
    history.push("/busconfirmation");
  };

  const onClickChange = (item) => {
    history.push("/busdetail");
    console.log("item.trip_name",item.trip_name)
  };
  const onClickBack = () => {
    history.push("/busdetail");
  }
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
                  {`${routeData?.startDate?.toLocaleDateString("en-US", { day: 'numeric' })} `}
                  {`${routeData?.startDate?.toLocaleDateString("en-US", { month: 'short' })} `}
                </Form.Label>
              </Col>
            </Row>
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
                                  <FaArrowLeft style={{marginLeft:'-75px'}} onClick={onClickBack} />

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
                    {`${routeData?.startDate?.toLocaleDateString("en-US", { month: 'long' })} `}
                  </div>
                </Form.Label>
              </div>
            </Col>
          </div>
          <div >
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
                                <div className="train-seatsmobile  d-flex justify-content-center flex-column" onClick={() => onClickTrain(item._id)} >
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
                   <Button className="locationpass-btn" onClick={() => onClickTrain(item._id)} >
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
