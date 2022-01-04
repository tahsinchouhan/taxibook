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
import { getTripByRouteId, setRouteId, setHtotelListData } from "../../redux/actions";
import Adventure1 from '../../assets/TravelBastar-desktop/Adventure1.png'
import axios from 'axios';


function HotelList() {
  const history = useHistory();
  const [seats, setSeats] = useState([]);
  const { hotelList: hotels, route_id, hotelDateData } = useSelector(state => state.hotelReducer)
  
  const dispatch = useDispatch()

  // useEffect(() => {
  // //  dispatch(setRouteId(hotelDateData))
  //  // dispatch(getTripByRouteId(hotelDateData))
  // }, [route_id]);

const getdata =()=>{

  axios.get(`${API_PATH}api/v2/room/list`)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log(error)
    })
}

  useEffect(() => {
    console.log(hotelDateData)
    getdata()
    if(hotelDateData.startDate === undefined){
  //   history.push('/hotelDetails')
    }
  }, [hotelDateData]);

  const onClickTrain = (id) => {
    console.log("object");
    dispatch(setHtotelListData(hotels[hotels.findIndex(x => x._id == id)]))
    console.log(hotels.findIndex(x => x._id == id));
    history.push("/busconfirmation");
  };

  const onClickChange = () => {
    history.push("/hotelDetails");
  };
  return (
    <>
      <div className="d-none d-md-block">
        <Header />
        <div style={{ backgroundColor: "white", marginTop: "40px", paddingInline: "20%" }}>
          <Container className="mansoon-div">
            <Row>
              <Col md={8}>
                <span style={{ color: "black", fontWeight: "bolder" }} onClick={onClickChange}>
                  Change
                </span>
              </Col>
            </Row>
            
                  <React.Fragment >
                    <Container  >
                      <Row>
                        <Col md={6}>
                          <div className="rajratan-train" style={{}}>
                            <div className="d-flex p-1">
                              <img src={Adventure1} alt="bus" style={{ height: "200px", paddingRight: "100px" }} />
                            </div>
                          </div>
                        </Col>
                        <Col>
                          <div className="d-flex" style={{ float: "left", paddingLeft: "35px" }}>
                            <div className="pt-2" style={{ float: "right" }}>
                              <h2 style={{ color: "grey", fontFamily: "sans-serif", padding: "5px" }}>Hotel taj</h2>
                              <small> Near Rajeev  Chowk ,Jagdalpur</small>
                              <span style={{ fontWeight: "bolder", fontFamily: "sans-serif", padding: "5px" }}>   ₹1000 *per Day</span>
                            </div>
                            
                          </div>
                        </Col>
                        <Button className="btn btn-primary">View Details</Button>
                            <Button>Book Now</Button>
                      </Row>
                    </Container><hr />
                  </React.Fragment>
               
          </Container>
        </div>
        <Footer />
      </div>
{/* =============================================================================================================================== */}
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
                    {hotelDateData?.start?.name}
                    <br />
                    {` to ${hotelDateData?.end?.name} `}
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
                    {`${hotelDateData?.startDate?.toLocaleDateString("en-US", { day: 'numeric' })} `}
                    {`${hotelDateData?.startDate?.toLocaleDateString("en-US", { month: 'long' })} `}
                  </div>
                </Form.Label>
              </div>
            </Col>
          </div>
          <div >
            {
              (hotels?.length > 0)
                ?
                hotels?.map((item, i) =>
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
                              Bus {hotelDateData?.vehical?.number_of_seats} Seater
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

export default HotelList;
