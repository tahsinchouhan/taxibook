import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import loadingGif from "../../assets/img/balls_loading.gif";
import { BsShopWindow } from "react-icons/bs";
// import bus1 from "../../assets/img/bus.png";
// import hotel from "../../assets/img/hotel.png";
// import city1 from "../../assets/img/city.png";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Room from "../../assets/img/hotelRoom.jpeg";
// import { Carousel } from "antd";
import axios from "axios";
import { API_PATH } from "../../Path/Path";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FiWifi } from "react-icons/fi";
import { BiCheckCircle } from "react-icons/bi";
import { FaTv } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

function ListCard(dates, props) {

  const history = useHistory();
  const {
    getHotelList: hotels,
    getStartData,
    isLoading,
  } = useSelector((state) => state.hotelReducer);
  
  const viewDetails = (item) => {
    // axios.post(API_PATH + `/api/v2/room/hotel`, {
    //   hotel_id:item._id,
    //   check_in:moment(getStartData.startDate).format("YYYY-MM-DD"),
    //   check_out:moment(getStartData.endDate).format("YYYY-MM-DD"),
    //   guests:getStartData.noOfGuest,
    //   no_of_room:getStartData.noOfRoom
    // })
    // .then((response) => {
    //   console.log('Room Available', response)
    //   history.push({
    //     pathname: `/hotelDetails/${item.hotel_name}/${dates.startDate}/${dates.endDate}`,
    //     state: { detail: item },
    //   });
    // })
    // .catch(err => alert('Room Not Available') );
      history.push({
        pathname: `/hotelDetails/${item.hotel_name}/${dates.startDate}/${dates.endDate}`,
        state: { detail: item },
      });
  };

  const bookNow = (HotelId) => {
    history.push(`/hotelconfirmation/${HotelId}`);
  };
  const [view, setView] = useState(false);
  const animities = hotels?.map((item, index) => {
  });

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <img src={loadingGif} alt="Loading..." height="150px" />
        </div>
      ) : (
        <></>
      )}

      {hotels?.length > 0 ? (
        <div>
          {" "}
          <h5
            style={{
              marginLeft: "12px",
              fontFamily: "poppins",
              fontWeight: "bolder",
            }}
          >
            {hotels?.length} Hotels in{" "}
            {getStartData?.sendlocation === undefined
              ? "jagdalpur"
              : getStartData?.sendlocation}{" "}
          </h5>
        </div>
      ) : (
        <center>
          <label className="text-danger">
            Hotel Service is available in Jagdalpur City Only.{" "}
          </label>
        </center>
      )}

      {hotels?.map((item, index) => {
        return (
          <div
            className="d-none d-md-block p-0"
            style={{ float: "left" }}
            key={index}
          >
            <div
              style={{
                backgroundColor: "white",
                // paddingInline: "10%",
                // maxWidth: "900",
                // margin: "40px auto",
              }}
            >
              <div className="p-0">
                {/* <Row style={{ paddingBottom: "20px" }}>
                  <Col md={12}>
                    {/* <h3
                      className="fontweight"
                      style={{
                        fontSize: "19px",
                        color: "#0FA453",
                        fontWeight: 900,
                      }}
                    >
                      {item?.full_address?.street}, {item?.full_address?.city}{" "}
                      C.G
                    </h3> */}
                {/* <span
                      style={{
                        color: "black",
                        fontWeight: 900,
                        fontSize: "17px",
                      }}
                      onClick={() => {
                        history.push("/hotelsearch");
                      }}
                    >
                      Change
                    </span> */}
                {/* </Col>
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
                    ></Form.Label>
                  </Col>
                </Row> */}

                <React.Fragment>
                  <Container style={{ cursor: "pointer" }}>
                    <Row>
                      <div md={4} className="col-sm-4 m-0 p-0">
                        <Carousel
                          showThumbs={false}
                          autoPlay={true}
                          infiniteLoop={true} 
                          interval="4000"
                          // renderIndicator={(onClickHandler, isSelected, index, label)=>{
                          //   const defStyle = { marginLeft: 20, color: "white", cursor: "pointer" };
                          //   const style = isSelected ? { ...defStyle, color: "red" } : { ...defStyle };
                          //   return (
                          //     <span
                          //       style={style}
                          //       onClick={onClickHandler}
                          //       onKeyDown={onClickHandler}
                          //       value={index}
                          //       key={index}
                          //       role="button"
                          //       tabIndex={0}
                          //       aria-label={`${label} ${index + 1}`}
                          //     >
                          //       {"cust " + index}
                          //     </span>
                          //   );
                          // }}
                        >
                        {
                          item.image.length > 0 ? item.image.map((img,idx)=><div key={idx}>
                            <img
                              src={img}
                              alt="room img"
                              style={{
                                width: "500px",
                                height: "253px",
                                marginTop: "10px",
                                // marginRight: "25px",
                              }}
                            />
                          </div>) : <div>
                            <img
                              src={
                                item?.room_data?.image !== ""
                                  ? item?.room_data?.image[0]
                                  : item?.room_data?.image[0]
                              }
                              alt="room img"
                              style={{
                                width: "500px",
                                height: "250px",
                                marginTop: "10px",
                                // marginRight: "25px",
                              }}
                            />
                          </div>
                        }                                                 
                        </Carousel>                        
                      </div>
                      <div
                        className="col-sm-1 p-0"
                        style={{ marginLeft: "2px", marginRight: "-20px", marginTop:'10px' }}
                      >
                      {
                        item.image.length > 0 ? item.image.map((img,idx)=><img key={idx}
                          src={img}
                          alt="room img"
                          style={{
                            width: "70px",
                            height: "50px",
                          }}
                        />) : <img 
                          src={item?.room_data?.image !== "" ? item?.room_data?.image[0]: item?.room_data?.image[0]}
                          alt="room img"
                          style={{
                            width: "70px",
                            height: "50px",
                            marginTop: "10px",
                          }}
                        />
                      }
                      </div>
                      <div md={5} className="col-sm-6 p-0 m-0">
                        <div className="rajratan-train" style={{}}>
                          <div className="d-flex p-1">
                            <h3
                              style={{
                                fontWeight: "bolder",
                                fontFamily: "poppins",
                                fontSize: "24px",
                                marginTop: "3px",
                              }}
                            >
                              {item?.hotel_name}
                            </h3>
                          </div>

                          <span
                            style={{ fontFamily: "poppins", fontSize: "85" }}
                          >
                            <span style={{ fontSize: "14px" }}>
                              &nbsp;{item.address}
                            </span>{" "}
                            <br />
                            <span>
                              <HiOutlineLocationMarker
                                style={{ color: "red", fontSize: "20px" }}
                              />
                              <b>{item.city}</b>
                            </span>
                          </span>
                          <div style={{ display: "flex" }}>
                            {item?.amenities_id?.find((ame) => ame.name === "FreeWifi") ? (
                              <span
                                style={{
                                  display: "flex",
                                  color: "grey",
                                  paddingTop: "10px",
                                  fontSize: "12px",
                                  fontFamily: "sans-serif",
                                }}
                              >
                                &nbsp;&nbsp;{" "}
                                <FiWifi style={{ fontSize: "20px" }} />
                                &nbsp; Free Wifi
                              </span>
                            ) : (
                              ""
                            )}
                            {item?.amenities_id?.find((ame) => ame.name === "Window") ? (
                              <span
                                style={{
                                  display: "flex",
                                  color: "grey",
                                  paddingTop: "10px",
                                  fontSize: "12px",
                                  fontFamily: "sans-serif",
                                }}
                              >
                                &nbsp; &nbsp;{" "}
                                <BsShopWindow style={{ fontSize: "20px" }} />
                                &nbsp; Window
                              </span>
                            ) : (
                              ""
                            )}
                            {item?.amenities_id?.find((ame) => ame.name === "Cooler") ? (
                              <span
                                style={{
                                  display: "flex",
                                  color: "grey",
                                  paddingTop: "10px",
                                  fontSize: "12px",
                                  fontFamily: "sans-serif",
                                }}
                              >
                                &nbsp; &nbsp;{" "}
                                <BsShopWindow style={{ fontSize: "20px" }} />
                                &nbsp; Cooler
                              </span>
                            ) : (
                              ""
                            )}

                            {item?.amenities_id?.find((ame) => ame.name === "AC") ? (
                              <span
                                style={{
                                  display: "flex",
                                  color: "grey",
                                  paddingTop: "10px",
                                  fontSize: "12px",
                                  fontFamily: "sans-serif",
                                }}
                              >
                                &nbsp;&nbsp;{" "}
                                <BiCheckCircle style={{ fontSize: "20px" }} />
                                &nbsp; AC
                              </span>
                            ) : (
                              ""
                            )}
                            {item?.amenities_id?.find((ame) => ame.name === "Kitchen") ? (
                              <span
                                style={{
                                  display: "flex",
                                  color: "grey",
                                  paddingTop: "10px",
                                  fontSize: "12px",
                                  fontFamily: "sans-serif",
                                }}
                              >
                                &nbsp;&nbsp;{" "}
                                <BiCheckCircle style={{ fontSize: "20px" }} />
                                &nbsp; Kitchen
                              </span>
                            ) : (
                              ""
                            )}
                            {item?.amenities_id?.find((ame) => ame.name === "TV") ? (
                              <span
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  color: "grey",
                                  paddingTop: "10px",
                                  fontSize: "12px",
                                  fontFamily: "sans-serif",
                                }}
                              >
                                &nbsp;&nbsp;{" "}
                                <FaTv style={{ fontSize: "20px" }} />
                                &nbsp; TV
                              </span>
                            ) : (
                              ""
                            )}

                            <span
                              style={{
                                display: "flex",
                                alignItems: "center",
                                color: "#0FA453",
                                padding: "13px",
                                fontSize: "10px",
                                fontFamily: "sans-serif",
                              }}
                              onClick={() => viewDetails(item)}
                            >
                              View More
                            </span>
                          </div>
                        </div>
                        <br />
                        <br />
                        <div className="row" style={{ marginTop: "20px" }}>
                          <div className=" col-sm-4 pt-2">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                lineHeight: "10px",
                              }}
                            >
                              <span
                                style={{
                                  fontWeight: "700",
                                  color: "red",
                                  fontSize: "24px",
                                }}
                              >
                                ₹{item?.price?.final_price}
                              </span>
                              <span
                                style={{
                                  fontWeight: "500",
                                  textDecoration: "line-through",
                                  fontSize: "16px",
                                  marginLeft: "10px",
                                  color: "#6d787d",
                                }}
                              >
                                <strike>
                                  {" "}
                                  ₹{item?.price?.offer_price}
                                </strike>{" "}
                              </span>
                              <span
                                style={{
                                  fontWeight: "600",
                                  fontSize: "14px",
                                  color: "#F5A623",
                                  marginLeft: "10px",
                                }}
                              >
                                {parseInt(
                                  ((item?.price?.base_price -
                                    item?.price?.final_price) /
                                    item?.price?.base_price) *
                                    100
                                )}
                                %off
                              </span>
                              <br />
                              <br />
                            </div>
                            <div className="col-sm-12">
                              <span
                                style={{
                                  color: "grey",
                                  fontFamily: "sans-serif",
                                  fontSize: "15px",
                                }}
                              >
                                per room per night
                              </span>
                            </div>
                          </div>
                          <div
                            className="col-sm-6 d-flex justify-content-center flex-row"
                            style={{ float: "right"}}
                          >
                            <div
                              onClick={() => viewDetails(item)}
                              className=" d-flex justify-content-center"
                              style={{
                                fontSize: "15px",
                                fontWeight: 700,
                                width: "118px",
                                height: "40px",
                                alignItems: "center",
                                border: "1px solid #0FA453",
                                color: "#0FA453",
                                marginRight: "20px",
                              }}
                            >
                              View Details
                            </div>
                            <div
                              className="train-seats  d-flex justify-content-center "
                              onClick={() => bookNow(item.room_data._id)}
                              style={{
                                fontSize: "15px",
                                fontWeight: 700,
                                width: "118px",
                                height: "40px",
                                alignItems: "center",
                                marginBottom: "10px",
                                backgroundColor: "#0FA453",
                                color: "white",
                              }}
                            >
                              Book Now
                            </div>
                          </div>
                        </div>
                      </div>
                    </Row>
                  </Container>
                  <hr />
                </React.Fragment>
              </div>
            </div>
          </div>
        );
      })}

      {/*mobile View*/}
      <div>
        <div fluid className="d-md-none">
          <div>
            {hotels.map((item, index) => {
              return (
                <>
                  <div key={index}>
                    <Container>
                      <Row>
                        <Col>
                          <img
                            src={item.image[0]}
                            // src={Room}
                            alt="room img"
                            style={{
                              width: "330px",
                              height: "180px",
                              margin: "10px 0",
                            }}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Row className="row d-flex">
                          <Col
                            xs={6}
                            // className="rajratan-train col-xs-6"
                            // style={{ border: "2px solid black" }}
                          >
                            <div style={{ display: "flex" }}>
                              <div>
                                {/* <img
                                  src={hotel}
                                  alt="hotel"
                                  style={{
                                    paddingRight: "10px",
                                    height: "20px",
                                  }}
                                /> */}
                              </div>
                              <div>
                                <span
                                  style={{
                                    fontWeight: "bolder",
                                    fontSize: "15px",
                                    fontFamily: "sans-serif",
                                  }}
                                >
                                  {item.hotel_name}
                                </span>
                                <br />
                                <span style={{ marginLeft: "-2px" }}>
                                  <HiOutlineLocationMarker
                                    style={{ color: "red" }}
                                  />
                                  <b style={{ fontSize: "12px" }}>
                                    {" "}
                                    {item.city}
                                  </b>
                                  <br />
                                </span>
                                <span
                                  style={{
                                    color: "grey",
                                    fontSize: "12px",
                                  }}
                                >
                                  {/* &nbsp;... */}
                                  {!view ? (
                                    <>
                                      {" "}
                                      {item.address.substring(0, 30)}...{" "}
                                      <span
                                        onClick={() => setView(!view)}
                                        style={{ color: "red" }}
                                      >
                                        View more
                                      </span>
                                    </>
                                  ) : (
                                    <>
                                      {item.address}{" "}
                                      <span
                                        onClick={() => setView(!view)}
                                        style={{ color: "red" }}
                                      >
                                        View Less
                                      </span>{" "}
                                    </>
                                  )}
                                </span>
                              </div>
                            </div>

                            <div style={{ display: "flex" }}>
                              {item?.amenities_id?.includes("FreeWifi") ? (
                                <span
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    color: "grey",                                    
                                    fontSize: "10px",                                    
                                  }}
                                >
                                  <FiWifi /> &nbsp;Free Wifi
                                </span>
                              ) : ("")}

                              {item?.amenities_id?.includes("AC") ? (
                                <span
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    color: "grey",
                                    fontSize: "12px",
                                    fontFamily: "sans-serif",
                                  }}
                                >
                                  <BiCheckCircle style={{ fontSize: "15px" }} />
                                  &nbsp;AC
                                </span>
                              ) : ( "" )}
                              {item?.amenities_id?.includes("TV") ? (
                                <span
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    color: "grey",
                                    // padding: "20px",
                                    fontSize: "16px",
                                    fontFamily: "sans-serif",
                                  }}
                                >
                                  <FaTv style={{ fontSize: "20px" }} />
                                  &nbsp;TV
                                </span>
                              ) : ( "" )}
                              {item?.amenities_id?.includes("Cooler") ? (
                                <span
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    color: "grey",
                                    fontSize: "16px",
                                    fontFamily: "sans-serif",
                                  }}
                                >
                                  &nbsp; &nbsp;{" "}
                                  <BsShopWindow style={{ fontSize: "20px" }} />
                                  &nbsp; Cooler
                                </span>
                              ) : ( "" )}
                              {/* <small
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  color: "#0FA453",
                                  padding: "10px",
                                  // fontSize: "16px",
                                }}
                                onClick={() => viewDetails(item.room_data._id)}
                              >
                                View More
                              </small> */}
                            </div>
                          </Col>

                          <Col
                            xs={6}
                            // className="m-0 p-0 col-xs-6"
                            // style={{ float: "right", padding: "10px" }}
                          >
                            {/* <Container> */}
                            <Row>
                              <div>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    float: "right",
                                  }}
                                >
                                  <span
                                    style={{
                                      fontWeight: "600",
                                      fontSize: "10px",
                                      color: "#F5A623",
                                      marginLeft: "auto",
                                    }}
                                  >
                                    {parseInt(
                                      ((item?.price?.base_price -
                                        item?.price?.final_price) /
                                        item?.price?.base_price) *
                                        100
                                    )}
                                    %off
                                  </span>
                                  <span>
                                    <strike
                                      style={{
                                        float: "right",
                                        color: "grey",
                                        fontFamily: "sans-serif",
                                        fontSize: "14px",
                                      }}
                                    >
                                      ₹{item?.price?.base_price}
                                    </strike>{" "}
                                  </span>
                                  <span
                                    style={{
                                      fontWeight: "700",
                                      color: "red",
                                      fontSize: "16px",
                                      float: "right",
                                      marginLeft: "auto",
                                    }}
                                  >
                                    ₹ {item?.price?.final_price}
                                  </span>
                                  <span
                                    style={{
                                      fontSize: "12px",
                                      color: "grey",
                                      fontFamily: "sans-serif",
                                      float: "right",
                                      display: "flex",
                                    }}
                                  >
                                    per room per night
                                  </span>
                                </div>
                              </div>
                            </Row>
                          </Col>
                        </Row>

                        <div
                          className=" d-flex "
                          style={{
                            lineHeight: "12px",
                            marginTop: "12px",
                            marginBottom: "12px",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <span
                            className=" d-flex justify-content-center"
                            onClick={() => viewDetails(item)}
                            style={{
                              fontSize: "15px",
                              fontWeight: 700,
                              width: "150px",
                              height: "40px",
                              alignItems: "center",
                              border: "1px solid #0FA453",
                              borderRadius: "4px",
                              color: "#0FA453",
                            }}
                          >
                            View Details
                          </span>
                          <span
                            className="train-seats  d-flex justify-content-center "
                            onClick={() => bookNow(item._id)}
                            style={{
                              fontSize: "15px",
                              fontWeight: 700,
                              width: "150px",
                              height: "40px",
                              alignItems: "center",
                            }}
                          >
                            Book Now
                          </span>
                        </div>
                        {/* <br />
                        <hr /> */}
                      </Row>
                    </Container>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListCard;
