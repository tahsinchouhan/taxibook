import React, { useState ,useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import bus1 from "../../assets/img/bus.png";
import hotel from "../../assets/img/hotel.png";
import city1 from "../../assets/img/city.png";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Room from "../../assets/img/hotelRoom.jpeg";
import { Carousel } from 'antd';
import hotelotherimage from "../../assets/img/hotelotherimage.jpg";


function ListCard(props) {
  // console.log({props})
  const history = useHistory();
  const { getHotelList: hotels,getStartData ,isLoading} = useSelector((state) => state.hotelReducer);
  const viewDetails = (HotelId) => {
    history.push(`/hotelDetails/${HotelId}`);
  };
  const bookNow = (HotelId) => {
    history.push(`/hotelconfirmation/${HotelId}`);
  };
  return (
    <>
   <div> {`${isLoading?"Loading.....":""}`}</div> 
   {hotels?.length>0?'':<center><label className="text-danger">Hotel Service is available in Jagdalpur City Only. </label></center>}
      {hotels?.map((item, index) => {
        return (
        <div className="d-none d-md-block" key={index}>
          <div
            style={{
              backgroundColor: "white",
              // paddingInline: "10%",
              maxWidth: "900px",
              margin: "40px auto",
            }}
          >
            <Container className="mansoon-div">
              <Row style={{ paddingBottom: "20px" }}>
                <Col md={8}>
                  <h3
                    className="fontweight"
                    style={{
                      fontSize: "19px",
                      color: "#0FA453",
                      fontWeight: 900,
                    }}
                  >
                    {item?.full_address?.street}, {item?.full_address?.city} C.G
                  </h3>
                  <span
                    style={{
                      color: "black",
                      fontWeight: 900,
                      fontSize: "17px",
                    }}
                    onClick={()=>{history.push('/hotelsearch')}}
                  >
                    Change
                  </span>
                </Col>
                <Col>
                  <Form.Label
                    className=""
                    style={{
                      fontSize: "33px",
                      fontWeight: 900,
                      marginLeft: "4px",
                      color: "#a5a5a5",
                      float: "right",
                      paddingRight: "20px",
                    }}
                  >
                  </Form.Label>
                </Col>
              </Row>

              <React.Fragment>
                <Container style={{ cursor: "pointer" }}>
                  <Row>

                    <Col md={3}>
                    <Carousel autoplay>
                      <div>
                      <img
                        src={item?.room_data?.image!==''?Room:Room}
                        alt="room img"
                        style={{
                          width: "190px",
                          height: "110px",
                          marginTop: "10px",
                          marginRight: "25px",
                        }}
                      />
                       </div>
                       <div>
                      <img
                        src={item?.room_data?.image!==''?hotelotherimage:hotelotherimage}
                        alt="room img"
                        style={{
                          width: "190px",
                          height: "110px",
                          marginTop: "10px",
                          marginRight: "25px",
                        }}
                      />
                       </div>
                      </Carousel>
                    </Col>

                    <Col>
                      <div className="rajratan-train" style={{}}>
                        <div className="d-flex p-1">
                          <img
                            src={hotel}
                            alt="hotel"
                            style={{ height: "20px", paddingRight: "10px" }}
                          />
                          <span
                            style={{
                              fontWeight: "bolder",
                              fontFamily: "sans-serif",
                            }}
                          >
                           {item?.hotel_name}
                          </span>
                        </div>
                        <span className="train-sleeper">
                          {item?.full_address?.street}, {item?.full_address?.city} C.G
                        </span>
                        <div style={{ display: "flex" }}>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              color: "grey",
                              padding: "10px",
                              fontSize: "12px",
                              fontFamily: "sans-serif",
                            }}
                          >
                            <img
                              alt="img"
                              src={city1}
                              style={{ marginRight: "6px" }}
                            />
                            Free Wifi
                          </span>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              color: "grey",
                              padding: "10px",
                              fontSize: "12px",
                              fontFamily: "sans-serif",
                            }}
                          >
                            <img
                              alt="img"
                              src={city1}
                              style={{ marginRight: "6px" }}
                            />
                            AC
                          </span>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              color: "grey",
                              padding: "10px",
                              fontSize: "12px",
                              fontFamily: "sans-serif",
                            }}
                          >
                            <img
                              alt="img"
                              src={city1}
                              style={{ marginRight: "6px" }}
                            />
                            TV
                          </span>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              color: "#0FA453",
                              padding: "10px",
                              fontSize: "10px",
                              fontFamily: "sans-serif",
                            }}
                          >
                            View More
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="d-flex" style={{}}>
                        <div
                          className="pt-2"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "end",
                            paddingRight: "30px",
                          }}
                        >
                          <span
                            style={{
                              color: "grey",
                              fontFamily: "sans-serif",
                              fontSize: "15px",
                            }}
                          >
                            *per person
                          </span>
                          <span
                            style={{
                              fontWeight: "bolder",
                              fontFamily: "sans-serif",
                              fontSize: "20px",
                            }}
                          >
                            ₹ {item?.room_data?.price?.actual_price}
                          </span>
                        </div>
                        <div
                          className=" d-flex justify-content-center flex-column"
                          style={{
                            lineHeight: "12px",
                          }}
                        >
                          <span
                            className="train-seats  d-flex justify-content-center "
                            onClick={()=>bookNow(item.room_data._id)}
                            style={{
                              fontSize: "15px",
                              fontWeight: 700,
                              width: "118px",
                              height: "34px",
                              alignItems: "center",
                              marginBottom: "10px",
                            }}
                          >
                            Book Now
                          </span>
                          <span
                            onClick={()=>viewDetails(item.room_data._id)}
                            className=" d-flex justify-content-center"
                            style={{
                              fontSize: "15px",
                              fontWeight: 700,
                              width: "118px",
                              height: "34px",
                              alignItems: "center",
                              border: "1px solid #0FA453",
                              borderRadius: "4px",
                              color: "#0FA453",
                            }}
                          >
                            View Details
                          </span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
                <hr />
              </React.Fragment>
            </Container>
          </div>
        </div>
        )
      })}

      {/*mobile View*/}
      <div>
        <div fluid className="d-md-none">
          <div></div>
          <div>
            
            {hotels.map((item, index) => {
        return (
         <>
              <div>
                <Container style={{ paddingTop: "40px" }}>
                  <Row>
                    <Col style={{ display: "flex", justifyContent: "center" }}>
                      <img
                        src={Room}
                        alt="room img"
                        style={{
                          width: "300px",
                          height: "180px",
                          margin: "10px 0",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <div>
                      <div
                        className="rajratan-train"
                        // style={{ border: "2px solid black" }}
                      >
                        <div style={{ display: "flex" }}>
                          <div>
                            <img
                              src={hotel}
                              alt="hotel"
                              style={{ paddingRight: "10px",height: "20px" }}
                            />
                          </div>
                          <div>
                            <span
                              style={{
                                fontWeight: "bolder",
                                fontSize: "20px",
                                fontFamily: "sans-serif",
                              }}
                            >
                             {item.hotel_name}

                            </span>
                            <br />
                            <span
                              style={{
                                color: "grey",

                                fontFamily: "sans-serif",
                              }}
                            >
                          {item?.full_address?.street}, {item?.full_address?.city} C.G
                            </span>
                          </div>
                        </div>
                        <div style={{ display: "flex" }}>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              color: "grey",
                              padding: "20px",
                              fontSize: "16px",
                              fontFamily: "sans-serif",
                            }}
                          >
                            <img
                              alt="img"
                              src={city1}
                              style={{ marginRight: "10px" }}
                            />
                            Free Wifi
                          </span>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              color: "grey",
                              padding: "20px",
                              fontSize: "16px",
                              fontFamily: "sans-serif",
                            }}
                          >
                            <img
                              alt="img"
                              src={city1}
                              style={{ marginRight: "10px" }}
                            />
                            AC
                          </span>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              color: "grey",
                              padding: "20px",
                              fontSize: "16px",
                              fontFamily: "sans-serif",
                            }}
                          >
                            <img
                              alt="img"
                              src={city1}
                              style={{ marginRight: "10px" }}
                            />
                            TV
                          </span>
                        </div>
                        <div>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              color: "#0FA453",
                              padding: "10px",
                              fontSize: "16px",
                            }}
                          >
                            View More
                          </span>
                        </div>
                      </div>
                    </div>
                    <Col style={{}}>
                      <Row style={{}}>
                        <div
                          className=" ml-4"
                          style={{ float: "right", padding: "10px" }}
                        >
                          <Col xs={12}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "flex-end",
                                flexDirection: "column",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "18px",
                                  color: "grey",
                                  fontFamily: "sans-serif",
                                }}
                              >
                                *per person
                              </span>

                              <span
                                style={{
                                  fontSize: "25px",
                                  fontWeight: "bolder",
                                  fontFamily: "sans-serif",
                                }}
                              >
                                ₹ {item?.room_data?.price?.actual_price}
                              </span>
                            </div>
                          </Col>

                          <div
                            className=" d-flex "
                            style={{
                              lineHeight: "12px",
                              marginTop: "20px",
                              justifyContent: "space-evenly",
                            }}
                          >
                            <span
                              className="train-seats  d-flex justify-content-center "
                              onClick={()=>bookNow(item.room_data._id)}
                              style={{
                                fontSize: "15px",
                                fontWeight: 700,
                                width: "150px",
                                height: "49px",
                                alignItems: "center",
                              }}
                            >
                              Book Now
                            </span>
                            <span
                              className=" d-flex justify-content-center"
                              onClick={()=>viewDetails(item.room_data._id)}
                              style={{
                                fontSize: "15px",
                                fontWeight: 700,
                                width: "150px",
                                height: "50px",
                                alignItems: "center",
                                border: "1px solid #0FA453",
                                borderRadius: "4px",
                                color: "#0FA453",
                              }}
                            >
                              View Details
                            </span>
                          </div>
                        </div>
                      </Row>
                      <hr />
                    </Col>
                  </Row>
                </Container>
              </div>
              </>
        )
            })
          }
          </div>
          </div>
          </div>
    </>
  );
}

export default ListCard;
