import React, { useState, useEffect } from "react";
import { Button, Row, Col, Form, Container, Modal } from "react-bootstrap";
import calendar from "../../assets/img/calendar.png";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";
import ticket from "../../assets/ticketpage.svg";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import ListCard from "./ListCard";
import { useDispatch, useSelector } from "react-redux";
import { getBookHotel } from "../../redux/actions";
import { API_PATH } from "../../Path/Path";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";
import { FaTrash, FaPlusCircle } from "react-icons/fa";
import { BsPlusSquare, BsDashSquare } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";
import moment from "moment";
import {
  DatePicker,
  Menu,
  Dropdown as ANTDropdown,
  Slider,
  Checkbox,
} from "antd";
import Searchbar from "./Searchbar";
import { DownOutlined } from "@ant-design/icons";

function HotelList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { RangePicker } = DatePicker;
  const dateFormat = "YYYY-MM-DD";

  const [myOptions, setMyOptions] = useState([]);
  // const dispatch = useDispatch();

  const {
    getHotelList: hotels,
    getStartData,
    isLoading,
  } = useSelector((state) => state.hotelReducer);
  const [startDate, setStartDate] = useState(
    getStartData.startDate ? getStartData.startDate : new Date()
  );
  var nextDay = new Date();
  nextDay.setDate(new Date().getDate() + 1);
  const [endDate, setEndDate] = useState(
    getStartData.endDate ? getStartData.endDate : nextDay
  );
  const [location, setLocation] = useState([]);
  const [sendlocation, setSendlocation] = useState(
    getStartData?.sendlocation ? getStartData.sendlocation : "jagdalpur"
  );
  const [geolocation, setGeolocation] = useState([]);
  const [noOfGuest, setNoOfGuest] = useState(2);
  const [noOfRoom, setNoOfRoom] = useState(1);
  const [enterlocation, setEnterlocation] = useState("");
  const [rangeValue, setRangeValue] = useState([500, 4500]);
  const [amentiesData, setAmentiesData] = useState([]);
  const [selectedAmeneties, setSelectedAmeneties] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_PATH}/api/v2/room/amenitie/list`)
      .then(({ data }) => setAmentiesData(data?.data || []));
  }, []);

  useEffect(() => {
    axios
      .get(`${API_PATH}/api/v2/hotelregistration/category/list`)
      .then(({ data }) => setCategoryData(data?.data || []));
  }, []);

  const handleAmenetiesClick = (e) => {
    let ameneties = selectedAmeneties;
    if (selectedAmeneties.includes(e.target.id))
      ameneties = ameneties.filter((a) => a !== e.target.id);
    else ameneties.push(e.target.id);
    setSelectedAmeneties([...ameneties]);
  };

  const handleCategoriesClick = (e) => {
    // let categories = selectedCategories;
    // if (selectedCategories?.includes(e.target.id))
    //   categories = categories.filter((a) => a !== e.target.id);
    // else categories.push(e.target.id);
    setSelectedCategories(e.target.id);
  };

  useEffect(() => {
    if (
      getStartData.length > 0 &&
      getStartData?.noOfRoom > 0 &&
      getStartData?.noOfGuest > 0
    ) {
      setNoOfRoom(getStartData.noOfRoom);
      setNoOfGuest(getStartData.noOfGuest);
    }
  }, [getStartData]);

  const [roomState, setRoomState] = useState(
    getStartData?.roomStateData?.length > 0
      ? getStartData?.roomStateData
      : [
          {
            room: 1,
            guest: 2,
          },
        ]
  );

  const addMenu = () => {
    let noofg = 0;
    setNoOfRoom(roomState?.length);

    roomState?.map((curElem) => (noofg += curElem.guest));
    // setNoOfRoom(roomState?.length);
    setNoOfGuest(noofg);
  };
  const guestRoom = (act, room_id) => {
    //   let guestRoomObj = roomState;
    //   console.log({ act });
    //   console.log({ room_id });
    //   if (act === "mainAdd" && noOfGuest > 0 && noOfRoom > 0) {
    //     guestRoomObj.push({ room: room_id, guest: 2 });
    //   } else if (act === "delete" && noOfGuest > 0 && noOfRoom > 0) {
    //     let guestRoomObj1 = guestRoomObj.filter((elem, ind) => ind !== room_id);
    //     guestRoomObj = guestRoomObj1;
    //   } else if (act === "+") {
    //     guestRoomObj[room_id].guest = guestRoomObj[room_id].guest + 1;
    //   } else if (act === "-") {
    //     guestRoomObj[room_id].guest = guestRoomObj[room_id].guest - 1;
    //   }
    //   addMenu();
    //   setRoomState(guestRoomObj);
    //   console.log(noOfRoom, noOfGuest);
    // };
    let guestRoomObj = roomState;
    // console.log({ act });
    // console.log({ room_id });
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
  };

  useEffect(() => {
    setRoomState(roomState);
    addMenu();
  }, [roomState]);

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
              {curElem.guest === 3 ? (
                // <button disabled>+</button>
                <span style={{ padding: "5px" }}>
                  <BsPlusSquare size={20} color={"#737272"} />
                </span>
              ) : (
                <span style={{ padding: "5px" }}>
                  {" "}
                  <BsPlusSquare
                    size={20}
                    onClick={() => guestRoom("+", index)}
                    style={{ height: "20px" }}
                  />
                </span>
                // <button
                //  onClick={() => guestRoom("+", index)}
                // >+</button>
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
        <span
          title="Add Room "
          style={{ float: "right" }}
          onClick={() => guestRoom("mainAdd", roomState.length + 1)}
        >
          <FaPlusCircle size={15} />
          &nbsp; Add Room
        </span>
      </Menu.Item>
    </Menu>
  );
  const price = (
    <Menu className="priceMenu">
      <div>
        <Slider
          range={{ draggableTrack: false }}
          defaultValue={[500, 4500]}
          tooltip={false}
          min={500}
          max={4500}
          onChange={(e) => {
            setRangeValue(e);
          }}
        />
        <span>
          ₹<b>{rangeValue?.[0]}</b>&nbsp;&nbsp;-&nbsp;&nbsp; ₹
          <b>{rangeValue?.[1]}</b>
        </span>
      </div>
    </Menu>
  );
  const Aminities = (
    <Menu className="aminitiesMenu">
      <div style={{ marginLeft: "20px" }}>
        {amentiesData?.map((amenity) => (
          <>
            <Checkbox
              style={{ marginTop: "10px" }}
              onClick={handleAmenetiesClick}
              id={amenity?._id}
              checked={selectedAmeneties?.includes(amenity?._id)}
            >
              <span className="p-2">{amenity?.name}</span>
            </Checkbox>
            <br />
          </>
        ))}
      </div>
    </Menu>
  );
  const Categories = (
    <Menu className="aminitiesMenu">
      <div style={{ marginLeft: "20px" }}>
        {categoryData?.map((category) => (
          <>
            <Checkbox
              style={{ marginTop: "10px" }}
              onClick={handleCategoriesClick}
              id={category?._id}
              checked={selectedCategories === category?._id}
            >
              <span className="p-2">{category?.name}</span>
            </Checkbox>
            <br />
          </>
        ))}
      </div>
    </Menu>
  );
  const getDataFromAPI = (name) => {
    setEnterlocation(name);
    setMyOptions([]);
    if (name === undefined) {
      name = "jagdalpur";
    }
    fetch(`${API_PATH}/api/v2/hotelregistration/search?address=${name}`)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        const data = [];
        for (var i = 0; i < res.data.length; i++) {
          let str = `${res.data[i]?.hotel_name},${res.data[i]?.city}`;
          data.push(str);
        }
        setMyOptions([...data]);
      });
  };

  const onDmTicketShow = () => {
    let city = sendlocation;

    if (city === undefined) {
      if (enterlocation === "" || enterlocation === undefined) {
        city = "jagdalpur";
      } else {
        city = enterlocation;
      }
    }
    setSendlocation(city);

    dispatch(
      getBookHotel({
        sendlocation: city,
        startDate,
        endDate,
        noOfRoom,
        noOfGuest,
        roomStateData: roomState,
        filter: true,
        ameneties: selectedAmeneties,
        category: selectedCategories,
        minPrice: rangeValue[0],
        maxPrice: rangeValue[1],
      })
    );
    // history.push("/hotellist");
  };

  // useEffect(() => {
  //   onDmTicketShow();
  // }, [selectedCategories, selectedAmeneties, rangeValue]);

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

  function disabledDate(current) {
    return current && current < moment().endOf("day");
  }
  const chnageDate = (datee) => {
    setStartDate(datee[0]._d);
    setEndDate(datee[1]._d);
  };

  useEffect(() => {
    dispatch(
      getBookHotel({
        sendlocation: sendlocation,
        startDate,
        endDate,
        noOfRoom,
        noOfGuest,
        roomStateData: roomState,
        filter: false,
      })
    );
  }, []);
  // const Pricemenu = (
  //   <Menu>
  //     <Menu.Item>

  //         1st menu item

  //     </Menu.Item>
  //   </Menu>
  // );
  // const Aminitiesmenu = (
  //   <Menu>
  //     <Menu.Item>

  //         1st menu item

  //     </Menu.Item>
  //   </Menu>
  // );

  return (
    <>
      <div>
        <Header />
        <div className="d-none d-md-block">
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "10px",
              marginRight: "20px",
            }}
          >
            <Col xs={12} md={4} xl={2} className="mt-2">
              <Form.Group className="" controlId="exampleForm.ControlInput1">
                <Form.Label className="dm-ticket">
                  Select Your Location
                </Form.Label>
                <Autocomplete
                  underlineStyle={{ display: "none" }}
                  style={{
                    backgroundColor: "#f5f5f5",
                    border: 0,
                    padding: "0px",
                  }}
                  freeSolo
                  value={sendlocation}
                  autoComplete
                  autoHighlight
                  onChange={(e) => {
                    setSendlocation(e.target.innerHTML.split(",")[1]);
                  }}
                  options={myOptions}
                  renderInput={(params) => (
                    <TextField
                      variant="standard"
                      required="required"
                      style={{ padding: "5px" }}
                      {...params}
                      onKeyPress={(e) => getDataFromAPI(e.target.value)}
                      placeholder="Search Area"
                      // InputProps={{ disableUnderline: true }}
                    />
                  )}
                />
              </Form.Group>
            </Col>
            {/* <Form.Group className="" controlId="exampleForm.ControlInput1">
              <Form.Label className="dm-ticket">
                Select Your Location
              </Form.Label>
              <Autocomplete
                style={{ width: 200 }}
                freeSolo
                autoComplete
                autoHighlight
                onChange={(e) => {
                  setSendlocation(e.target.innerHTML.split(",")[1]);
                }}
                options={myOptions}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    value={sendlocation ? sendlocation : "ddd"}
                    onKeyPress={(e) => getDataFromAPI(e.target.value)}
                    variant="outlined"
                    label="Search Area"
                  />
                )}
              />
            </Form.Group> */}

            <Col xs={12} md={3} className="mt-2">
              <Form.Group className="" controlId="exampleForm.ControlInput1">
                <div>
                  <Form.Label className="dm-ticket">Booking Date</Form.Label>
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
              </Form.Group>
            </Col>
            <Col xs={12} md={3} className="mt-2">
              <Form.Group className="" controlId="exampleForm.ControlInput1">
                <div>
                  <Form.Label className="dm-ticket">
                    Number Of Guests
                  </Form.Label>
                  <ANTDropdown
                    overlay={menu}
                    trigger={["click"]}
                    // style={{ width: "100px" }}
                  >
                    <input // onChange={(e) => setEmail(e.target.value)}
                      // value={email}
                      name="guestRoom"
                      type="text"
                      id="inputState"
                      className="form-control pass_input"
                      placeholder={`${noOfRoom} Room ,${noOfGuest} guest`}
                      // onClick={handleShow}
                      style={{
                        backgroundColor: "#f5f5f5",
                        borderRadius: 0,
                        height: "40px",
                        // padding: "10px",
                        // position:"absolute"
                      }}
                      // readOnly
                    />
                  </ANTDropdown>
                </div>
              </Form.Group>
            </Col>
            <Col
              md={2}
              // className=""
              style={{
                display: "flex",
                justifyContent: "center",
                // alignItems: "flex-end",
                marginTop: "45px",
              }}
            >
              <div
                className="dmticket-btn"
                //   style={{ textAlign: "center" }}
              >
                <Button
                  type="submit"
                  // class="btn btn-success"
                  style={{
                    width: "138px",
                    textAlign: "center",
                    height: "40px",
                    borderRadius: "5px",
                    backgroundColor: "#0fa453",
                    border: "none",
                  }}
                  onClick={onDmTicketShow}
                >
                  Search Now
                </Button>
              </div>
            </Col>
          </Row>
          <br />
          <hr />

          <div style={{ marginBottom: "200px" }} className="row">
            <div
              className="col-sm-2"
              style={{
                borderRight: "1px solid",
                // textAlign: "center",
              }}
            >
              <div style={{ marginLeft: "20px", flexDirection: "row" }}>
                <b className="h4" style={{ fontWeight: "bold" }}>
                  Filters
                </b>
                <span
                  style={{
                    color: "red",
                    float: "right",
                    fontSize: "14px",
                    fontWeight: "700",
                    marginTop: "5px",
                  }}
                >
                  Clear All
                </span>
              </div>

              <span
                style={{
                  marginLeft: "20px",
                  marginTop: "10px",
                  fontSize: "14px",
                }}
              >
                <b>Price</b>
              </span>
              <div style={{ textAlign: "center", marginLeft: "15px" }}>
                <Slider
                  range={{ draggableTrack: false }}
                  defaultValue={[500, 4500]}
                  tooltip={false}
                  min={500}
                  max={4500}
                  onChange={(e) => {
                    setRangeValue(e);
                    console.log(e);
                  }}
                />
                <span>
                  ₹<b>{rangeValue?.[0]}</b>&nbsp;&nbsp;-&nbsp;&nbsp; ₹
                  <b>{rangeValue?.[1]}</b>
                </span>
                <hr />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <h6>
                  <b>Aminities</b>
                </h6>
                <div style={{ marginLeft: "20px" }}>
                  {amentiesData?.map((amenity) => (
                    <>
                      <Checkbox
                        style={{ marginTop: "10px" }}
                        onClick={handleAmenetiesClick}
                        id={amenity?._id}
                        checked={selectedAmeneties?.includes(amenity?._id)}
                      >
                        <span className="p-2">{amenity?.name}</span>
                      </Checkbox>
                      <br />
                    </>
                  ))}
                </div>
                {/* <span style={{clear:"both"}}></span> */}
              </div>

              <hr />

              <div style={{ marginLeft: "20px" }}>
                <h6>
                  <b>Categories</b>
                </h6>
                <div style={{ marginLeft: "20px" }}>
                  {categoryData?.map((category) => (
                    <>
                      <Checkbox
                        style={{ marginTop: "10px" }}
                        onClick={handleCategoriesClick}
                        id={category?._id}
                        checked={selectedCategories === category?._id}
                      >
                        <span className="p-2">{category?.name}</span>
                      </Checkbox>
                      <br />
                    </>
                  ))}
                </div>
                {/* <span style={{clear:"both"}}></span> */}
              </div>
            </div>
            <div className="col-sm-10">
              <ListCard
                sendlocation={sendlocation}
                startDate={startDate}
                endDate={endDate}
              />
            </div>
          </div>
          <Footer />
        </div>

        {/* Mobile View */}

        <div className="d-md-none">
          <Searchbar getStartData={getStartData} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              fontFamily: "poppins",
              marginBottom: "-40px",
            }}
          >
            <p style={{ marginLeft: "10px", color: "#0FA453" }}>
              <b
                style={{
                  borderRight: "2px solid #0FA453",
                  paddingRight: "5px",
                }}
              >
                {" "}
                <GiSettingsKnobs /> Filters
              </b>
            </p>
            <p style={{ marginLeft: "10px" }}>
              <ANTDropdown overlay={price}>
                <p
                  style={{
                    boxShadow: "0px 0px 5px -2px",
                    padding: "3px 0px 3px 10px",
                    borderRadius: "4px",
                    height: "30px",
                    width: "75px",
                  }}
                >
                  Prices <DownOutlined style={{ color: "#0FA453" }} />
                </p>
              </ANTDropdown>
            </p>
            <p style={{ marginLeft: "10px" }}>
              <ANTDropdown overlay={Aminities}>
                <p
                  style={{
                    boxShadow: "0px 0px 5px -2px",
                    padding: "3px 0px 3px 10px",
                    borderRadius: "4px",
                    height: "30px",
                    width: "90px",
                  }}
                >
                  Aminities <DownOutlined style={{ color: "#0FA453" }} />
                </p>
              </ANTDropdown>
            </p>
            <p style={{ marginLeft: "10px" }}>
              <ANTDropdown overlay={Categories}>
                <p
                  style={{
                    boxShadow: "0px 0px 5px -2px",
                    padding: "3px 0px 3px 10px",
                    borderRadius: "4px",
                    height: "30px",
                    width: "90px",
                  }}
                >
                  Categories <DownOutlined style={{ color: "#0FA453" }} />
                </p>
              </ANTDropdown>
            </p>
          </div>
          <hr />{" "}
          <ListCard
            sendlocation={sendlocation}
            startDate={startDate}
            endDate={endDate}
          />
        </div>
      </div>
    </>
  );
}

export default HotelList;
