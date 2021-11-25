import React, { useState, useEffect } from "react";
import Room from "../../assets/img/hotelRoom.jpeg";
import calendar from "../../assets/img/calendar.png";
import { useHistory } from "react-router-dom";
import { API_PATH } from "../../Path/Path";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { FaCheckCircle } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import hotelotherimage from "../../assets/img/hotelotherimage.jpg";
import { BiCheckCircle } from "react-icons/bi";

const Details = ({ hotelUniqid, detailsP }) => {
  console.log({ detailsP });
  const history = useHistory();
  const bookingPage = () => {
    history.push(`/hotelconfirmation/${hotelUniqid}`);
  };
  const { getStartData } = useSelector((state) => state.hotelReducer);
  const check_in = moment(getStartData.startDate).format("DD-MMM");
  const address1 = getStartData.sendlocation;
  const check_out = moment(getStartData.endDate).format("DD-MMM");
  console.log(detailsP, typeof detailsP);

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      {/* ===================== */}
      <div>
        <br />
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          partialVisible
          // itemClass="image-item"
          responsive={responsive}
        >
          <div className="Carousel-a">
            <img className="caraselImage" src={Room} alt="First slide" />{" "}
          </div>
          <div className="Carousel-a">
            <img
              className="caraselImage"
              src={hotelotherimage}
              alt="Second slide"
            />
          </div>
          <div className="Carousel-a">
            <img className="caraselImage" src={Room} alt="Second slide" />
          </div>
          <div className="Carousel-a">
            <img
              className="caraselImage"
              src={hotelotherimage}
              alt="Second slide"
            />
          </div>
        </Carousel>
      </div>

      {/* =============== */}
      {detailsP._id ? (
        <div
          className="hotel-confirm-div"
          style={{ width: "90%", margin: "0 auto" }}
        >
          <div className="hotel-details-1">
            <div
              className=""
              style={{
                padding: "10px 10px 10px 0",
                margin: "15px 15px 15px 0",
              }}
            >
              <h4 style={{ fontWeight: "bold", marginBottom: 0 }}>
                {detailsP?.hotel_id?.hotel_name}
              </h4>
              <p
                style={{
                  // color: "lightgray",
                  fontSize: "14px",
                  margin: 0,
                  padding: 0,
                }}
              >
                {`${detailsP?.hotel_id?.street}, ${detailsP?.hotel_id?.city}`}
              </p>
            </div>
            <div>
              {/* <h5 style={{ fontWeight: "bold", fontSize: "13px" }}>
                Amenities
              </h5>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {detailsP?.amenities?.includes("AC") ? (
                  <div className="amenities-div">
                    <BiCheckCircle style={{ fontSize: "20px" }} />{" "}
                    <h1 className="amenities-name">AC</h1>
                  </div>
                ) : (
                  ""
                )}
                {detailsP?.amenities?.includes("Freeze") ? (
                  <div className="amenities-div">
                    <img src={calendar} alt="" className="amenities-logo" />
                    <h1 className="amenities-name">Freeze</h1>
                  </div>
                ) : (
                  ""
                )}
                {detailsP?.amenities?.includes("Wifi") ? (
                  <div className="amenities-div">
                    <img src={calendar} alt="" className="amenities-logo" />
                    <h1 className="amenities-name">Wifi</h1>
                  </div>
                ) : (
                  ""
                )}
                {detailsP?.amenities?.includes("Geezer") ? (
                  <div className="amenities-div">
                    <img src={calendar} alt="" className="amenities-logo" />
                    <h1 className="amenities-name">Geezer</h1>
                  </div>
                ) : (
                  ""
                )}
                {detailsP?.amenities?.includes("CCTV") ? (
                  <div className="amenities-div">
                    <img src={calendar} alt="" className="amenities-logo" />
                    <h1 className="amenities-name">CCTV</h1>
                  </div>
                ) : (
                  ""
                )}
                <div className="amenities-div">
                  <h1
                    style={{
                      fontSize: "16px",
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: 0,
                      color: "green",
                      fontWeight: "bold",
                    }}
                  >
                   
                  </h1>
                </div>
              </div> */}
              <div>
                <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>
                  Choose Your Room
                </h2>
                <div className="choose-room-div">
                  <div
                    style={{
                      backgroundColor: "#F5F5F5",
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                      padding: "0 15px",
                    }}
                  >
                    ⭐️ Selected Category
                  </div>
                  <div
                    style={{
                      padding: "15px",
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid lightgray",
                    }}
                  >
                    <div style={{}}>
                      <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
                        Classic ({detailsP?.category})
                      </h1>
                      <p>Room Size : 1200 sqft</p>
                      <div style={{ display: "flex" }}>
                        {detailsP?.amenities?.includes("Geezer") ? (
                          <div
                            style={{
                              display: "flex",
                              width: 100,
                              height: 50,
                            }}
                          >
                            <img
                              src={calendar}
                              alt=""
                              style={{
                                margin: "0 10px",
                                width: "20px",
                                height: "20px",
                              }}
                            />
                            <h1
                              style={{
                                fontSize: "16px",
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: 0,
                              }}
                            >
                              Geezer
                            </h1>
                          </div>
                        ) : (
                          ""
                        )}
                        {detailsP?.amenities?.includes("AC") ? (
                          <div
                            style={{
                              display: "flex",
                              width: 100,
                              height: 50,
                            }}
                          >
                            <BiCheckCircle style={{ fontSize: "20px" }} />
                            <h1
                              style={{
                                fontSize: "16px",
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: 0,
                              }}
                            >
                              AC
                            </h1>
                          </div>
                        ) : (
                          ""
                        )}

                        {detailsP?.amenities?.includes("CCTV") ? (
                          <div
                            style={{
                              display: "flex",
                              width: 100,
                              height: 50,
                            }}
                          >
                            <img
                              src={calendar}
                              alt=""
                              style={{
                                margin: "0 10px",
                                width: "20px",
                                height: "20px",
                              }}
                            />
                            <h1
                              style={{
                                fontSize: "16px",
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: 0,
                              }}
                            >
                              CCTV
                            </h1>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div>
                      <img src={Room} alt="Room" className="room-mobile" />
                    </div>
                  </div>
                  <div
                    style={{
                      padding: 20,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ fontSize: "20px" }}>
                      <span style={{ fontWeight: "bold" }}>
                        {" "}
                        ₹ {detailsP?.price.base_price}
                      </span>{" "}
                      <span
                        style={{
                          fontSize: "16px",
                          textDecoration: "line-through",
                        }}
                      >
                        {" "}
                        ₹ {detailsP?.price.base_price}
                      </span>
                    </div>
                    <div
                      style={{
                        border: "1px solid lightgray",
                        height: "50px",
                        width: "200px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "bold",
                        fontSize: "18px",
                        borderRadius: "5px",
                      }}
                    >
                      <FaCheckCircle />
                     &nbsp; Selected
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ padding: "15px 0 " }}>
              <h2 style={{ fontWeight: "bold", fontSize: "24px" }}>
                Hotel Policy
              </h2>
              <div style={{}}>
                {" "}
                <span style={{ marginRight: "25px" }}>
                  {" "}
                  Check In : <strong> 12:00 PM</strong>
                </span>{" "}
                <span>
                  Check Out :<strong> 11:00 AM</strong>
                </span>{" "}
              </div>
              <br />
              <div>
                <ul style={{ color: "gray" }}>
                  <li>Couples are welcome</li>
                  <li>Guest can check In using any king of idetity proof</li>
                  <li>
                    As a complementry benifit you can stay in now insured by
                    Acko
                  </li>
                  <li>Hotel is served under trade name of Hotel Star</li>
                  <li>Always welcomes you</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="hotel-details-2">
            <div
              style={{
                border: "1px solid grey",
                padding: "15px",
                borderRadius: "8px",
                margin: "15px 0",
              }}
            >
              <div style={{ display: "flex" }}>
                <h1
                  style={{
                    margin: "0",
                    padding: "0",
                    fontSize: "25px",
                    fontWeight: "bold",
                    paddingRight: "10px",
                  }}
                >
                  ₹ {detailsP?.price.base_price}
                </h1>
                <h2
                  style={{
                    margin: "0",
                    padding: "0",
                    fontSize: "18px",
                    color: "gray",
                    paddingRight: "10px",
                    textDecoration: "line-through",
                  }}
                >
                  ₹ {detailsP?.price.base_price}
                </h2>
                <h3
                  style={{
                    margin: "0",
                    padding: "0",
                    fontSize: "16px",
                    color: "orange",
                  }}
                >
                  {" "}
                  {/* {Math.round((detailsP?.price.base_price-detailsP?.price.final_price)*100/detailsP?.price.base_price)}% 0ff */}
                  {Math.round(
                    ((detailsP?.price.base_price -
                      detailsP?.price.base_price) *
                      100) /
                      detailsP?.price.base_price
                  )}
                  % 0ff
                </h3>
              </div>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "lighter",
                  color: "gray",
                }}
              >
                inclusive of all taxes
              </span>
              <div
                style={{
                  display: "flex",
                  fontSize: "12px",
                  padding: "10px",
                  borderRadius: "5px",
                  margin: "20px 0",
                  boxShadow: "1px 1px 6px gray",
                  fontWeight: "bold",
                }}
              >
                <p style={{ margin: "0", padding: "0 4px" }}>
                  {`${check_in}-${check_out}`}{" "}
                </p>{" "}
                &nbsp; | &nbsp;
                <p style={{ margin: "0", padding: "0" }}> 1 Room, 2 Guests</p>
              </div>

              <div
                className=""
                style={{
                  borderBottom: "2px dashed gray",
                  paddingBottom: "10px",
                }}
              >
                <div
                  style={{
                    margin: "10px 0",
                    padding: "10px 5px 10px 15px",
                    borderRadius: "5px",
                    boxShadow: "1px 1px 6px gray",
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                >
                  Classic ({detailsP?.category})
                </div>
              </div>

              <div
                className="mt-1"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span style={{}}>Your Saving</span>
                <span style={{ fontWeight: "bold" }}>
                  ₹{" "}
                  {detailsP?.price?.base_price -
                    detailsP?.price?.base_price}
                </span>
              </div>
              <div
                className="mt-1"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span style={{}}>
                  Total Price
                  <br />
                  <span style={{ fontSize: "11px" }}>
                    (inclusive of all taxes)
                  </span>
                </span>
                <span style={{ fontWeight: "bold" }}>
                  ₹ {detailsP?.price?.base_price}
                </span>
              </div>

              <div>
                <div
                  onClick={bookingPage}
                  style={{
                    fontWeight: "bold",
                    color: "#fff",
                    padding: "10px",
                    backgroundColor: "#0fa453",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ padding: "0", margin: "0" }}>Continue To Book</p>
                </div>
                <div
                  style={{
                    fontWeight: "bold",
                    color: "#0fa453",
                    padding: "10px",

                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ padding: "0", margin: "0" }}>
                    ⚡️ 8 people booked this hotel today
                  </p>
                </div>
                <div style={{ color: "red", fontWeight: "bold" }}>
                  * Follow Safety Measures Advices at Hotel
                  <br />* By Proceeding, you are agree to our Guest Policy
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Details;
