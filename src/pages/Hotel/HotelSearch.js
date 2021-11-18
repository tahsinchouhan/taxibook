import React, { useState, useEffect } from "react";
import { Button, Row, Col, Form, Container, Modal } from "react-bootstrap";
import calendar from "../../assets/img/calendar.png";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";
import ticket from "../../assets/ticketpage.svg";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { useDispatch } from "react-redux";
import { getBookHotel } from "../../redux/actions";
import { API_PATH } from "../../Path/Path";
import hotel from "../../assets/img/hotel.png";
import { FaSearchLocation, FaTrash, FaPlusCircle } from "react-icons/fa";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";
import { ToastContainer, toast } from "react-toastify";
import AvField from "availity-reactstrap-validation/lib/AvField";
import moment from "moment";
import { DatePicker, Menu, Dropdown as ANTDropdown } from "antd";

function HotelSearch() {
  const history = useHistory();
  const [myOptions, setMyOptions] = useState([]);

  var nextDay = new Date();
  nextDay.setDate(new Date().getDate() + 1);
  var nextDay2 = new Date();
  nextDay2.setDate(new Date().getDate() + 2);
  const [startDate, setStartDate] = useState(nextDay);

  const [endDate, setEndDate] = useState(nextDay2);
  const [location, setLocation] = useState([]);
  const [sendlocation, setSendlocation] = useState("Jagdalpur");
  const [geolocation, setGeolocation] = useState([]);
  const [noOfGuest, setNoOfGuest] = useState(2);
  const [noOfRoom, setNoOfRoom] = useState(1);
  const [show, setShow] = useState(false);
  const [enterlocation, setEnterlocation] = useState('');
  const { RangePicker } = DatePicker;

  function disabledDate(current) {
    return current && current <= moment().endOf("day");
  }
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dateFormat = "YYYY-MM-DD";

  const [roomState, setRoomState] = useState([
    {
      room: 1,
      guest: 2,
    },
  ]);
  const getDataFromAPI = (name) => {
    setEnterlocation(name)
    setMyOptions([]);
    fetch(`${API_PATH}/api/v2/hotelregistration/search?address=${name}`)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res.data);
        for (var i = 0; i < res.data.length; i++) {
          let str = `${res.data[i].hotel_name},${res.data[i]?.full_address?.city}`;
          console.log({str})
          myOptions.push(str);
        }
        setMyOptions(myOptions);
      });
  };

  const getCurrentLocation = async () => {
    await window.navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
      setGeolocation(pos.coords);
      const { latitude, longitude } = pos.coords;
      axios
        .post(API_PATH + `/api/v2/hotelregistration`, {
          lat: latitude,
          long: longitude,
        })
        .then((res) => {
          console.log("response", res.data.data);
          for (var i = 0; i < res.data.data.length; i++) {
            let str = `${res.data.data[i].hotel_name},${res.data.data[i].full_address.city}`;
            myOptions.push(str);
          }
          setMyOptions(myOptions);
          setLocation(res.data.data);
        })
        .catch((e) => console.log(e));
    });
  };
  const [showLocationError, setshowLocationError] = useState(false);
  const onDmTicketShow = () => {
    // toast("Wow so easy!");
    console.log({ sendlocation });
    let city = "";
    console.log(sendlocation, startDate, endDate, noOfRoom, noOfGuest);
    if (
      sendlocation === undefined ||
      sendlocation === "" ||
      sendlocation === " "
    ) {
      if(enterlocation==''|| enterlocation===undefined){
        city = "Jagdalpur";
      }else{
        city=enterlocation;
      }
      
      console.log({ city });
    } else {
      city = sendlocation?.split(",")[1];
      // setshowLocationError(true);
    }
    setshowLocationError(false);
    dispatch(
      getBookHotel({
        sendlocation: city,
        startDate,
        endDate,
        noOfRoom,
        noOfGuest,
        roomStateData: roomState,
      })
    );
    history.push("/hotellist");
    // if (
    // sendlocation === undefined ||
    // sendlocation === "" ||
    // sendlocation === " "
    // ) {
    //   setshowLocationError(true);
    // } else {

    // }
  };
  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      style={{
        border: "none",
        background: "transparent",
        fontSize: "25px",
        color: "green",
        fontWeight: 900,
      }}
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));

  const getLocation = () => {
    axios
      .post(API_PATH + `/api/v2/hotelregistration`, geolocation)
      .then((res) => {
        setLocation(res.data.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getLocation();
  }, []);
  const chnageDate = (datee) => {
    console.log({ datee });
    setStartDate(datee[0]._d);
    setEndDate(datee[1]._d);
  };

  const addMenu = () => {
    let noofg = 0;
    let noofr;
    roomState.map((curElem, index) => (noofg += curElem.guest));
    setNoOfRoom(roomState.length);
    setNoOfGuest(noofg);
  };
  const guestRoom = (act, room_id) => {
    let guestRoomObj = roomState;
    console.log({ act });
    console.log({ room_id });
    if (act === "mainAdd" && noOfGuest > 0 && noOfRoom > 0) {
      guestRoomObj.push({ room: room_id, guest: 2 });
    } else if (act === "delete" && noOfGuest > 0 && noOfRoom > 0) {
      let guestRoomObj1 = guestRoomObj.filter((elem, ind) => ind !== room_id);
      guestRoomObj = guestRoomObj1;
    } else if (act === "+" && guestRoomObj[room_id].guest < 4) {
      guestRoomObj[room_id].guest = guestRoomObj[room_id].guest + 1;
    } else if (act === "-" && guestRoomObj[room_id].guest > 1) {
      guestRoomObj[room_id].guest = guestRoomObj[room_id].guest - 1;
    }
    addMenu();
    setRoomState(guestRoomObj);
    console.log(noOfRoom, noOfGuest);
  };
  useEffect(() => {
    setRoomState(roomState);
    addMenu();
  }, [roomState]);
  const menu = (
    <Menu>
      <Menu.Item disabled>
        <b>Room</b> <b style={{float:"right"}}>Guest</b>
      </Menu.Item>
      <div className="addMenu">
        {roomState.map((curElem, index) => (
          <Menu.Item key={index}>
            Room {curElem.room}{" "}
            <span style={{float:"right"}}>
            <button onClick={() => guestRoom("-", index)}>-</button>{" "}
            {curElem.guest}{" "}
            {curElem.guest === 3 ? (
              <button disabled>+</button>
            ) : (
              <button onClick={() => guestRoom("+", index)}>+</button>
            )}
             </span>
          </Menu.Item>
        ))}
      </div>
      <Menu.Item>
        <FaTrash
          title=" Delete Room "
          style={{ float: "left", marginRight: "120px" }}
          onClick={() => guestRoom("delete", roomState.length - 1)}
        />
        <span   title="Add Room "
          style={{ float: "right" }} onClick={() => guestRoom("mainAdd", roomState.length + 1)}>
        <FaPlusCircle
        />Add Room
          </span>

      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div>
        <Header />
        <div className="d-none d-md-block">
          <Container
            className="d-none d-md-block my-5"
            style={{ width: "70%" }}
          >
            <div className="select_div">
              <div className="row p-3" style={{ textAlign: "center" }}>
                <div className="col-xs-12  col-sm-12 col-md-12">
                  <div className="booking-div">
                    <div style={{ marginBottom: "15px" }}>
                      <img src={hotel} alt="logo" style={{ width: "60px" }} />
                    </div>
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "#FF4A68",
                        paddingTop: "50px",
                      }}
                    >
                      Hotel
                    </span>
                    <br />
                    <span style={{ fontSize: "14px", padding: "10px" }}>
                      Book Hotel Room Across City
                    </span>
                  </div>
                </div>
              </div>

              <Container
                style={{
                  width: "100%",
                  paddingTop: "28px",
                }}
              >
                <Row style={{ display: "flex", justifyContent: "center" }}>
                  {/* <Col xs={12} md={3} className="mt-2">
                    <Form.Group
                      className=""
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="dm-ticket">
                        Select Your Location
                      </Form.Label>
                      <Autocomplete
                       style={{
                        backgroundColor: "#f5f5f5",
                        border: 0,
                        padding: "10px",
                      }}
                        freeSolo
                        autoComplete
                        autoHighlight
                        onChange={(e) => {
                          setSendlocation(e.target.innerHTML.split(",")[1]);
                        }}
                        options={myOptions}
                        renderInput={(params) => (
                          <TextField
                            required="required"
                            {...params}
                            onKeyPress={(e) => getDataFromAPI(e.target.value)}
                            variant="outlined"
                            label="Search Area"
                          />
                        )}
                      />
                      <span
                        className="FaSearchLocation"
                        title="Near Me "
                        onClick={getCurrentLocation}
                      >
                        <FaSearchLocation />
                      </span>
                    </Form.Group>
                  </Col> */}
                  <Col xs={12} md={4} className="mt-2">
                    <Form.Group
                      className=""
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="dm-ticket">
                        Select Your Location
                      </Form.Label>
                      <Autocomplete
                        style={{
                          backgroundColor: "#f5f5f5",
                          border: 0,
                          padding: "0px",
                        }}
                        value={sendlocation}
                        freeSolo
                        autoComplete
                        autoHighlight
                        disableCloseOnSelect
                        onChange={(e) => {
                          setSendlocation(e.target.innerHTML);
                        }}
                        options={myOptions}
                        renderInput={(params) => (
                          <TextField
                            variant="standard"
                            required="required"
                            style={{ padding: "5px" }}
                            {...params}
                            onKeyPress={(e) => {getDataFromAPI(e.target.value)}}
                            placeholder="Search Area"
                            // InputProps={{ disableUnderline: true }}
                          />
                        )}
                      />
                      {showLocationError ? (
                        <p>
                          <small style={{ color: "red" }}>
                            Please select a destination from the list
                          </small>
                        </p>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={4} className="mt-2">
                    <Form.Group
                      className=""
                      controlId="exampleForm.ControlInput1"
                    >
                      <div>
                        <Form.Label className="dm-ticket">
                          Booking Date
                        </Form.Label>
                        <br />
                        <div>
                          <div
                            style={{
                              backgroundColor: "#f5f5f5",
                              padding: "5px",
                              paddingLeft: "20px",
                              display: "flex",
                            }}
                          >
                            <img
                              alt="logo"
                              className="location-userdatas-calendar"
                              src={calendar}
                              style={{
                                width: 25,
                                height: 25,
                                marginRight: "10px",
                              }}
                            />

                            <RangePicker
                              disabledDate={disabledDate}
                              onChange={(date) => chnageDate(date)}
                              minDate={new Date(new Date().getDate() + 1)}
                              defaultValue={[
                                moment(startDate, dateFormat),
                                moment(endDate, dateFormat),
                              ]}
                              style={{
                                backgroundColor: "transparent",
                                border: "0",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </Form.Group>
                  </Col>

                  {/* <Col xs={12} md={3} className="mt-2">
                    <Form.Group
                      className=""
                      controlId="exampleForm.ControlInput1"
                    >
                      <div>
                        <Form.Label className="dm-ticket">
                          Booking Date
                        </Form.Label>
                        <br />
                        <Col xs={12} md={3}>
                          <div
                            style={{
                              width: 180,
                              backgroundColor: "#f5f5f5",
                              padding: "5px",
                              paddingLeft: "20px",
                            }}
                          >
                            <img
                              alt="logo"
                              className="location-userdatas-calendar"
                              src={calendar}
                              style={{ width: 25, height: 25, marginTop: -8 }}
                            />
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              customInput={<ExampleCustomInput />}
                              minDate={new Date()}
                              dateFormat="dd MMM"
                            />
                          </div>
                        </Col>
                      </div>
                    </Form.Group>
                  </Col> */}

                  {/* <Col xs={12} md={3} className="mt-2">
                    <Form.Group
                      className=""
                      controlId="exampleForm.ControlInput1"
                    >
                      <div>
                        <Form.Label className="dm-ticket">End Date</Form.Label>
                        <br />
                        <Col xs={12} md={6}>
                          <div
                            style={{
                              width: 180,
                              backgroundColor: "#f5f5f5",
                              padding: "5px",
                              paddingLeft: "20px",
                            }}
                          >
                            <img
                              alt="logo"
                              className="location-userdatas-calendar"
                              src={calendar}
                              style={{ width: 25, height: 25, marginTop: -8 }}
                            />
                            <DatePicker
                              selected={endDate}
                              onChange={(date) => setEndDate(date)}
                              minDate={new Date()}
                              customInput={<ExampleCustomInput />}
                              dateFormat="dd MMM"
                            />
                          </div>
                        </Col>
                      </div>
                    </Form.Group>
                  </Col> */}
                  <Col xs={12} md={3} className="mt-2">
                    <Form.Group
                      className=""
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="dm-ticket">
                        Number Of Guests
                      </Form.Label>

                      <div
                        style={{
                          width: 180,
                          backgroundColor: "#f5f5f5",
                          padding: "5px",
                          paddingLeft: "20px",
                        }}
                      >
                        <ANTDropdown overlay={menu}>
                          <input // onChange={(e) => setEmail(e.target.value)}
                            // value={email}
                            name="guestRoom"
                            type="text"
                            className="position-relative"
                            placeholder={`${noOfRoom} Room ,${noOfGuest} guest`}
                            onClick={handleShow}
                            style={{
                              border: "none",
                              outline: "none",
                              width: 155,
                              backgroundColor: "#f5f5f5",
                              padding: "5px",
                              paddingLeft: "20px",
                            }}
                            readOnly
                          />
                        </ANTDropdown>{" "}
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
                <div
                  className="dmticket-btn"
                  style={{ textAlign: "center", marginTop: "70px" }}
                >
                  <Button
                    type="submit"
                    class="btn btn-success"
                    style={{
                      width: "200px",
                      textAlign: "center",
                      height: "52px",
                      borderRadius: "9px",
                      backgroundColor: "#0fa453",
                      border: "none",
                    }}
                    onClick={onDmTicketShow}
                  >
                    Search Now
                  </Button>
                </div>
              </Container>
            </div>
          </Container>
          <Footer />
        </div>
      </div>

      {/*mobile-view*/}
      <div fluid className="d-md-none">
        <div className="select_div">
          <div className="row p-3" style={{ textAlign: "center" }}>
            <div className="col-xs-12  col-sm-12 col-md-12">
              <div className="booking-div">
                <div style={{ marginBottom: "15px" }}>
                  <img src={ticket} alt="" />
                </div>
                <span
                  style={{
                    fontWeight: "bolder",
                    color: "#FF4A68",
                    paddingTop: "50px",
                  }}
                >
                  Hotel
                </span>
                <br />
                <span style={{ fontSize: "14px", padding: "10px" }}>
                  Book Hotel Room Across City
                </span>
              </div>
            </div>
          </div>

          <Container
            style={{ width: "80%", paddingTop: "28px", paddingBottom: 100 }}
          >
            <Row style={{ display: "flex", justifyContent: "center" }}>
              <Col
                xs={12}
                md={4}
                className="mt-2"
                style={{ marginBottom: "10px" }}
              >
                <Form.Group className="" controlId="exampleForm.ControlInput1">
                  <Form.Label className="dm-ticket">
                    Select Your Location
                  </Form.Label>
                  <Autocomplete
                    style={{
                      backgroundColor: "#f5f5f5",
                      border: 0,
                      padding: "0px",
                    }}
                    freeSolo
                    autoComplete
                    autoHighlight
                    onChange={(e) => {
                      console.log(e.target.innerHTML);
                      setSendlocation(e.target.innerHTML);
                    }}
                    value={sendlocation}
                    options={myOptions}
                    renderInput={(params) => (
                      <TextField
                        variant="standard"
                        required="required"
                        style={{ padding: "5px" }}
                        {...params}
                        onKeyPress={(e) => getDataFromAPI(e.target.value)}
                        placeholder="Search Area"
                        value="jagdalpur"
                        // blurOnSelect="touch"
                      />
                    )}
                  />
                  {/* <span
                    className="FaSearchLocation"
                    title="Near Me "
                    onClick={getCurrentLocation}
                  >
                    <FaSearchLocation />
                  </span> */}
                  {showLocationError ? (
                    <p>
                      <small style={{ color: "red" }}>
                        Please select a destination from the list
                      </small>
                    </p>
                  ) : (
                    ""
                  )}
                </Form.Group>
              </Col>

              <Col xs={12} md={4} className="mt-2">
                <Form.Group className="" controlId="exampleForm.ControlInput1">
                  <Row style={{ display: "flex", justifyContent: "center" }}>
                    <Col md={4}>
                      <div>
                        <Form.Label className="dm-ticket">
                          Booking Date
                        </Form.Label>
                        <br />
                        <div>
                          <div
                            style={{
                              backgroundColor: "#f5f5f5",
                              padding: "5px",
                              paddingLeft: "20px",
                              display: "flex",
                            }}
                          >
                            <img
                              alt="logo"
                              className="location-userdatas-calendar"
                              src={calendar}
                              style={{
                                width: 25,
                                height: 25,
                                marginRight: "10px",
                              }}
                            />
                            <RangePicker
                              disabledDate={disabledDate}
                              onChange={(date) => chnageDate(date)}
                              minDate={new Date()}
                              defaultValue={[
                                moment(startDate, dateFormat),
                                moment(endDate, dateFormat),
                              ]}
                              style={{
                                backgroundColor: "transparent",
                                border: "0",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Form.Group>
              </Col>

              <Col xs={12} md={4} className="mt-2">
                <Form.Group className="" controlId="exampleForm.ControlInput1">
                  <Form.Label className="dm-ticket">
                    Number Of Guests
                  </Form.Label>

                  <ANTDropdown overlay={menu}>
                    <input
                      id="inputState"
                      className="form-control pass_input"
                      placeholder="Choose Your Area"
                      name="guestRoom"
                      type="text"
                      placeholder={`${noOfRoom} Room ,${noOfGuest} guest`}
                      onClick={handleShow}
                      style={{
                        backgroundColor: "#f5f5f5",
                        border: 0,
                        padding: "10px",
                      }}
                      readOnly
                    />
                  </ANTDropdown>
                </Form.Group>
              </Col>
            </Row>
            <div
              className="dmticket-btn"
              style={{ textAlign: "center", marginTop: "70px" }}
            >
              <Button
                type="submit"
                class="btn btn-success"
                style={{
                  width: "100%",
                  textAlign: "center",
                  borderRadius: "0px",
                  backgroundColor: "#0fa453",
                  border: "none",
                  height: "86px",
                  position: "fixed",
                  bottom: "0",
                  left: "0",
                }}
                onClick={onDmTicketShow}
              >
                Search Now
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default HotelSearch;
