import React, { useState, useEffect } from "react";
import Room from "../../assets/img/hotelRoom.jpeg";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import { FaCheckCircle } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import hotelotherimage from "../../assets/img/hotelotherimage.jpg";
import { BsPlusSquare, BsDashSquare } from "react-icons/bs";
import { DatePicker, Dropdown as ANTDropdown, Menu } from "antd";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { FaTrash, FaPlusCircle } from "react-icons/fa";

const Details = ({
  hotelUniqid,
  hotelDetail,
  detailsP,
  address,
  startDate,
  endDate,
  roomStateData,
}) => {
  const history = useHistory();

  const { RangePicker } = DatePicker;
  const dateFormat = "DD-MMM";
  function disabledDate(current) {
    return current && current < moment().endOf("day");
  }

  const [index, setIndex] = useState(0);
  const [detail, setDetail] = useState(null);
  const [dates, setDates] = useState([moment(startDate), moment(endDate)]);
  const [prices, setPrices] = useState({
    base: 0,
    offer: 0,
    final: 0,
    perDayBase: 0,
    perDayOffer: 0,
    perDayFinal: 0,
  });
  const [noOfGuest, setNoOfGuest] = useState(2);
  const [noOfRoom, setNoOfRoom] = useState(1);
  const [roomState, setRoomState] = useState(
    roomStateData?.length > 0
      ? roomStateData
      : [
          {
            room: 1,
            guest: 2,
          },
        ]
  );

  const totalDays = moment(endDate).diff(moment(startDate), "days");

  useEffect(() => {
    if (detailsP?.length) {
      setDetail(detailsP[0]);
    }
  }, [detailsP]);

  const { price, max_guest, number_of_rooms, price_per_person } = { ...detail };

  useEffect(() => {
    if (price) {
      setPrices({
        base: price?.base_price,
        offer: price?.offer_price,
        final: price?.final_price,
        perDayBase: price?.base_price / totalDays,
        perDayOffer: price?.offer_price / totalDays,
        perDayFinal: price?.final_price / totalDays,
      });
    }
  }, [price, totalDays]);

  useEffect(() => {
    const currentSelectedDays = dates[1].diff(dates[0], "days");
    const { base, perDayBase, perDayOffer, perDayFinal } = prices;
    let extraGuestsAmount = 0;
    if (noOfGuest - noOfRoom * 2 > 0)
      extraGuestsAmount =
        (noOfGuest - noOfRoom * 2) * price_per_person * currentSelectedDays;

    const newBasePrice =
      prices.perDayBase * currentSelectedDays + extraGuestsAmount;
    if (newBasePrice !== base)
      setPrices({
        ...prices,
        base: perDayBase * currentSelectedDays + extraGuestsAmount,
        offer: perDayOffer * currentSelectedDays + extraGuestsAmount,
        final: perDayFinal * currentSelectedDays + extraGuestsAmount,
      });
  }, [dates, totalDays, prices, noOfRoom, noOfGuest, price_per_person]);

  useEffect(() => {
    setNoOfRoom(roomState.length);
    setNoOfGuest(roomState.reduce((total, { guest }) => total + guest, 0));
  }, [roomState]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleDateChange = (dateArr) => {
    console.log(dateArr);
    setDates([...dateArr]);
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

  const updatePrice = (item) => {
    setDetail(item);
  };

  const bookingPage = (_id) => {
    history.push({
      pathname: `/hotelconfirmation/${_id}`,
      state: {
        amount: prices.final,
        guests: noOfGuest,
        rooms: noOfRoom,
        startDate: dates[0].toISOString(),
        endDate: dates[1].toISOString(),
      },
    });
  };

  const guestRoom = (act, room_id) => {
    let guestRoomObj = roomState;
    if (
      act === "mainAdd" &&
      noOfGuest > 0 &&
      noOfRoom > 0 &&
      noOfRoom < number_of_rooms
    ) {
      guestRoomObj.push({ room: room_id, guest: 2 });
    } else if (act === "delete" && noOfGuest > 0 && noOfRoom > 0) {
      let guestRoomObj1 = guestRoomObj.filter((elem, ind) => ind !== room_id);
      guestRoomObj = guestRoomObj1;
    } else if (act === "+" && guestRoomObj[room_id].guest < max_guest) {
      guestRoomObj[room_id].guest = guestRoomObj[room_id].guest + 1;
    } else if (act === "-" && guestRoomObj[room_id].guest > 1) {
      guestRoomObj[room_id].guest = guestRoomObj[room_id].guest - 1;
    }
    setRoomState([...guestRoomObj]);
  };

  const menu = (
    <Menu className="menuSearch">
      <Menu.Item>
        <b>Room</b> <b style={{ float: "right" }}>Guest</b>
        <hr />
      </Menu.Item>
      <div className="addMenu">
        {roomState?.map((curElem, index) => (
          <Menu.Item key={index}>
            Room {curElem.room}{" "}
            <span style={{ float: "right" }}>
              <span style={{ padding: "5px" }}>
                {" "}
                <BsDashSquare size={20} onClick={() => guestRoom("-", index)} />
              </span>{" "}
              <span style={{ fontWeight: "700" }}>{curElem.guest}</span>{" "}
              {curElem.guest === max_guest ? (
                <span style={{ padding: "5px" }}>
                  <BsPlusSquare size={20} color={"#737272"} />
                </span>
              ) : (
                <span style={{ padding: "5px" }}>
                  <BsPlusSquare
                    size={20}
                    onClick={() => guestRoom("+", index)}
                    style={{ height: "20px" }}
                  />
                </span>
              )}
            </span>
            <hr />
          </Menu.Item>
        ))}
      </div>
      <Menu.Item>
        {roomState.length > 1 ? (
          <FaTrash
            size={15}
            title="Delete Room "
            style={{ float: "left", marginLeft: "20px" }}
            onClick={() => guestRoom("delete", roomState.length - 1)}
          />
        ) : (
          ""
        )}
        {/*
          {noOfRoom < number_of_rooms ? (
            <span
            title="Add Room "
            style={{ float: "right" }}
            onClick={() => guestRoom("mainAdd", roomState.length + 1)}
            >
            <FaPlusCircle size={15} />
            &nbsp; Add Room
            </span>
            ) : null}
          */}
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      {/* ===================== */}
      <div>
        <br />
        {hotelDetail?.image?.length > 0 && (
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            responsive={responsive}
          >
            {hotelDetail?.image?.map((img, index) => {
              return (
                <div className="Carousel-a" key={index}>
                  <img className="caraselImage" src={img} alt="First slide" />
                </div>
              );
            })}
          </Carousel>
        )}

        {/* <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          partialVisible
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
        </Carousel> */}
      </div>

      {detailsP ? (
        <div
          className="hotel-confirm-div"
          style={{ width: "90%", margin: "0 auto" }}
        >
          <div className="hotel-details-1" style={{ marginTop: "2rem" }}>
            <Breadcrumb>
              <Breadcrumb.Item
                style={{ color: "#AF98F4" }}
                onClick={() => history.push("/")}
              >
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item
                style={{ color: "#AF98F4" }}
                onClick={() => history.push("/hotellist")}
              >
                Hotels
              </Breadcrumb.Item>
              <Breadcrumb.Item active>{hotelUniqid}</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className=""
              style={{
                padding: "10px 10px 10px 0",
                margin: "15px 15px 15px 0",
              }}
            >
              <h4 style={{ fontWeight: "bold", marginBottom: 0 }}>
                {hotelUniqid}
              </h4>
              <p style={{ fontSize: "14px", margin: 0, padding: 0 }}>
                {address}
              </p>
            </div>
            <div>
              <div>
                <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>
                  Choose Your Room
                </h2>
                {detailsP?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="choose-room-div"
                      style={{ marginBottom: "32px" }}
                    >
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
                            Classic ({item?.room_category_id?.name})
                          </h1>

                          <div className="row">
                            <div className="col-sm-12">
                              <h5>
                                <b>Amenities</b>
                              </h5>
                            </div>
                            {item?.amenities?.map((value, index) => (
                              <div className="col-sm-3" key={index}>
                                <strong>{value.name}</strong>
                              </div>
                            ))}
                          </div>
                        </div>
                        {item?.image.map((value, index) => (
                          <div key={index}>
                            <img
                              src={value}
                              alt="Room"
                              className="room-mobile"
                            />
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
                            }}
                          >
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
                            cursor: "pointer",
                          }}
                          onClick={() => updatePrice(item)}
                        >
                          {detail?._id === item._id ? (
                            <>
                              <FaCheckCircle />
                              &nbsp; Selected
                            </>
                          ) : (
                            "Select"
                          )}
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
                  }}
                >
                  {prices?.offer}
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
                  {prices?.base}
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
                  {Math.round(
                    ((prices?.base - prices?.final) / prices?.base) * 100
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
                  alignItems: "center",
                }}
              >
                <RangePicker
                  disabledDate={disabledDate}
                  onChange={handleDateChange}
                  minDate={new Date()}
                  defaultValue={dates}
                  style={{
                    backgroundColor: "transparent",
                    border: "0",
                    maxWidth: "50%",
                    boxShadow: "none",
                  }}
                  format={dateFormat}
                />{" "}
                |
                <ANTDropdown overlay={menu} trigger={["click"]}>
                  <p
                    style={{
                      backgroundColor: "transparent",
                      borderRadius: 0,
                      margin: 0,
                      border: 0,
                      outline: "none",
                      boxShadow: "none",
                      fontSize: 14,
                      fontWeight: "bold",
                      flexGrow: "1",
                      paddingLeft: 20,
                    }}
                  >{`${noOfRoom} Room, ${noOfGuest} Guest`}</p>
                </ANTDropdown>
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
                  Classic ({detail?.room_category_id?.name})
                </div>
              </div>

              {/*
                <div
                className="mt-1"
                style={{ display: "flex", justifyContent: "space-between" }}
                >
                <span style={{}}>Your Saving</span>
                <span style={{ fontWeight: "bold" }}>
                ₹ {prices?.base - prices?.offer}
                </span>
                </div>
              */}
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
                <span style={{ fontWeight: "bold" }}>₹ {prices?.offer}</span>
              </div>

              <div>
                <div
                  onClick={() => bookingPage(detail?._id)}
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
