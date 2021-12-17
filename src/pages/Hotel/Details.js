import React, { useState, useEffect } from "react";
import Room from "../../assets/img/hotelRoom.jpeg";
import calendar from "../../assets/img/calendar.png";
import { useHistory } from "react-router-dom";
import { API_PATH } from "../../Path/Path";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { FaCheckCircle } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import hotelotherimage from "../../assets/img/hotelotherimage.jpg";
import { BiCheckCircle } from "react-icons/bi";
// import { AiOutlineCamera } from "react-icons/Ai";

const Details = ({ hotelUniqid, detailsP }) => {
  const history = useHistory();

  const { getStartData } = useSelector((state) => state.hotelReducer);
  const check_in = moment(getStartData.startDate).format("DD-MMM");
  const address1 = getStartData.sendlocation;
  const check_out = moment(getStartData.endDate).format("DD-MMM");
  // console.log(detailsP, typeof detailsP);
  // const firstData = detailsP[0].room_list[0];
  
  const [index, setIndex] = useState(0);
  const [detail, setDetail] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    
  }, []);

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

  const updatePrice =(item)=>{
    setDetail(prev => [
      ...prev, 
      item
    ]);
    console.log(detail)
  }


  const bookingPage = (_id) => {
    history.push(`/hotelconfirmation/${_id}`);
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
      {detailsP ? (
        <div
          className="hotel-confirm-div"
          style={{ width: "90%", margin: "0 auto" }}
        >
          <div className="hotel-details-1">
            <div
              className=""
              style={{padding: "10px 10px 10px 0",margin: "15px 15px 15px 0"}}>
              <h4 style={{ fontWeight: "bold", marginBottom: 0 }}>{detailsP[0]?.hotel_name}</h4>
              <p style={{fontSize: "14px", margin: 0, padding: 0}}>{`${detailsP[0]?.street}, ${detailsP[0]?.city}`}</p>
            </div>
            <div>
              <div>
                <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>Choose Your Room</h2>
                {detailsP[0]?.room_list?.map((item, index) => {
                  return (
                    <div key={index} className="choose-room-div" style={{ marginBottom:"32px"}}>
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
                        <div>
                          <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
                            Classic ({item?.room_category_id.name})
                          </h1>

                        <div className="row">
                          <div className="col-sm-12"><h5><b>Amenities</b></h5></div>
                          {item?.amenities.map((value,index)=>(
                            <div className="col-sm-3" key={index}>
                              <strong>{value.name}</strong>
                            </div>
                          ))}
                        </div>

                          {/* <div style={{ display: "flex" }}>
                            {item?.amenities?.some(word => word.name === 'Geezer') ? (
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
                            ) : ( "" )}
                            {item?.amenities?.some(word => word.name === 'AC') ? (
                              <div
                                style={{
                                  display: "flex",
                                  width: 100,
                                  height: 50,
                                }}
                              > 
                              { console.log('ac There is Available') }
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
                            ) : ("")}

                            {item?.amenities?.some(word => word.name === 'CCTVCameras') ? (
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
                            ) : ("")}

                            {item?.amenities?.some(word => word.name === 'FreeWifi') ? (
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
                                  Free Wifi
                                </h1>
                              </div>
                            ) : ("")}
                          </div> */}
                        </div>
                        {item?.image.map((value, index)=>(
                        <div key={index}>
                          <img src={value} alt="Room" className="room-mobile" />
                        </div>
                        ))}
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
                            ₹ {item?.price.offer_price}
                          </span>{" "}
                          <span
                            style={{
                              fontSize: "16px",
                              textDecoration: "line-through",
                            }}>
                            ₹ {item?.price.base_price}
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
                            cursor:'pointer'
                          }}
                          onClick={()=>updatePrice(item)}>
                          <FaCheckCircle />
                          &nbsp; Selected
                        </div>
                      </div>
                    </div>
                  );
                })}

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
                  }}>
                 {/* ₹ {detailsP[0]?.room_list[0]?.price?.base_price ? detail?.price?.base_price : ""  } */}
                  ₹ {detailsP[0]?.room_list[0]?.price?.offer_price} 
                  {/* ₹ {detail?.price?.base_price} */}
                </h1>
                <h2
                  style={{
                    margin: "0",
                    padding: "0",
                    fontSize: "18px",
                    color: "gray",
                    paddingRight: "10px",
                    textDecoration: "line-through",
                  }}>
                  ₹ {detailsP[0]?.room_list[0]?.price?.base_price} 
                  {/* ₹ {detail?.price?.base_price} */}
                </h2>
                <h3
                  style={{
                    margin: "0",
                    padding: "0",
                    fontSize: "16px",
                    color: "orange",
                  }}>
                  {" "}
                  {Math.round(
                      ((detailsP[0]?.room_list[0]?.price?.base_price -
                        detailsP[0]?.room_list[0]?.price?.final_price) /
                        detailsP[0]?.room_list[0]?.price?.base_price) *
                        100
                    )}
                  % 0ff
                </h3>
              </div>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "lighter",
                  color: "gray",
                }}>
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
                }}>
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
                  Classic ({detailsP[0]?.room_list[0]?.room_category_id?.name})
                </div>
              </div>

              <div
                className="mt-1"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span style={{}}>Your Saving</span>
                <span style={{ fontWeight: "bold" }}>
                  ₹ {detailsP[0]?.room_list[0]?.price?.base_price - detailsP[0]?.room_list[0]?.price?.offer_price}
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
                  ₹ {detailsP[0]?.room_list[0]?.price?.final_price}
                </span>
              </div>

              <div>
                <div
                  onClick={()=>bookingPage(detail?._id)}
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
