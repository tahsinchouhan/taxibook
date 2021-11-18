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
import { FaSearchLocation, FaTrash, FaPlusCircle } from "react-icons/fa";
import moment from "moment";
import { DatePicker, Menu, Dropdown as ANTDropdown } from "antd";
import Searchbar from "./Searchbar";

function HotelList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { RangePicker } = DatePicker;
  const dateFormat = "YYYY-MM-DD";

  const [myOptions, setMyOptions] = useState([]);

  const {
    getHotelList: hotels,
    getStartData,
    isLoading,
  } = useSelector((state) => state.hotelReducer);
  console.log({ getStartData });
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
    getStartData?.sendlocation ? getStartData.sendlocation : "Jagdalpur"
  );
  const [geolocation, setGeolocation] = useState([]);
  const [noOfGuest, setNoOfGuest] = useState(2);
  const [noOfRoom, setNoOfRoom] = useState(1);
  const [enterlocation, setEnterlocation] = useState("");

  useEffect(() => {
    console.log(`getStartData`, getStartData);
    if (
      getStartData.length > 0 &&
      getStartData?.noOfRoom > 0 &&
      getStartData?.noOfGuest > 0
    ) {
      setNoOfRoom(getStartData.noOfRoom);
      setNoOfGuest(getStartData.noOfGuest);
    }
  }, [getStartData]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
    let noofr;
    console.log(roomState?.length);
    setNoOfRoom(roomState?.length);

    roomState?.map((curElem, index) => (noofg += curElem.guest));
    // setNoOfRoom(roomState?.length);
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
    } else if (act === "+") {
      guestRoomObj[room_id].guest = guestRoomObj[room_id].guest + 1;
    } else if (act === "-") {
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
      <Menu.Item>
        <b>Room</b> <b style={{ float: "right" }}>Guest</b>
      </Menu.Item>
      <div className="addMenu">
        {roomState?.map((curElem, index) => (
          <Menu.Item key={index}>
            Room {curElem.room}{" "}
            <span style={{ float: "right" }}>
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
        <span
          title="Add Room "
          style={{ float: "right" }}
          onClick={() => guestRoom("mainAdd", roomState.length + 1)}
        >
          <FaPlusCircle />
          Add Room
        </span>
      </Menu.Item>
    </Menu>
  );
  const getDataFromAPI = (name) => {
    setEnterlocation(name);
    setMyOptions([]);
    if (name === undefined) {
      name = "Jagdalpur";
    }
    fetch(`${API_PATH}/api/v2/hotelregistration/search?address=${name}`)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res.data);
        for (var i = 0; i < res.data.length; i++) {
          let str = `${res.data[i]?.hotel_name},${res.data[i]?.full_address?.city}`;
          myOptions.push(str);
        }
        setMyOptions(myOptions);
      });
  };

  const getLocation = () => {
    axios
      .post(API_PATH + `/api/v2/hotelregistration`, geolocation)
      .then((res) => {
        setLocation(res.data.data);
      })
      .catch((e) => console.log(e));
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
            let str = `${res.data?.data[i]?.hotel_name},${res.data?.data[i]?.full_address?.city}`;
            myOptions.push(str);
          }
          setMyOptions(myOptions);
          setLocation(res.data.data);
        })
        .catch((e) => console.log(e));
    });
  };
  const onDmTicketShow = () => {
    console.log({ sendlocation });
    let city = sendlocation;
    if (city === undefined) {
      if (enterlocation === "" || enterlocation === undefined) {
        city = "Jagdalpur";
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
      })
    );
    history.push("/hotellist");
  };
  useEffect(() => {
    getLocation();
  }, []);
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
    console.log({ datee });
    setStartDate(datee[0]._d);
    setEndDate(datee[1]._d);
  };
  return (
    <>
      <div>
        <Header />
        <Searchbar getStartData={getStartData} />
        <br />
        <hr />
        <br />

        <div className="d-none d-md-block">
          <h5 style={{ marginLeft: "10px" }}>
            Search Results - Hotels in {sendlocation}{" "}
          </h5>
          <div style={{ marginBottom: "200px" }}>
            <ListCard />
            {/* <ListCard /> */}
          </div>
          <Footer />
        </div>
        <div className="d-md-none">
          <h5 style={{ marginLeft: "10px" }}>
            Search Results - Hotels in {sendlocation}{" "}
          </h5>

          <ListCard
            sendlocation={sendlocation}
            startDate={startDate}
            endDate={endDate}
          />
          {/* <ListCard /> */}
        </div>
      </div>
    </>
  );
}

export default HotelList;
