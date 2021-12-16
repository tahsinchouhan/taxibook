import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import Header from "../../components/Header";
import bus1 from "../../assets/img/bus.png";
import city1 from "../../assets/img/city.png";
import ticket from "../../assets/img/ticket.png";
import Footer from "../travesaly/Footer";
import { useHistory, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/css/dmdetail.css";

import { API_PATH } from "../../Path/Path";

function BusBookingDetail() {
  const { id } = useParams();

  const history = useHistory();
  const [apiData, setApiData] = useState([]);
  const [qrImage, setQRImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(true);
  const { tripList: trips, route_id } = useSelector(
    (state) => state.busReducer
  );
  const {
    data: detailsData,
    createbusData,
    booking_id,
  } = useSelector((state) => state.busReducer);
  const { basic_details } = detailsData;
  console.log("detailsData", detailsData);
  console.log("basic_detailsbasic_details", basic_details);
  console.log("booking_idbooking_id", booking_id);
  const dispatch = useDispatch();

  useEffect(() => {
    getTrips();
  }, []);

  const goHome = () => {
    history.push("/");
  };

  const getTrips = () => {
    fetch(`${API_PATH}/api/v1/busticket/list?booking_Id=${id}`)
      .then((response) => response.json())
      .then((res) => {
        console.log(res.data);
        if (res.data !== undefined) {
          setApiData(res.data);
          localStorage.setItem("data", res.data[0]._id);
          setNotFound(false);
          setLoading(false);
        } else {
          setLoading(false);
          setNotFound(true);
        }
      })
      .catch((e) => {
        setLoading(false);
        setNotFound(true);
      });
  };

  // let apiId = localStorage.getItem("data");
  const BookingId = localStorage.getItem("busticketData");

  if (BookingId == []) {
    // console.log("sadh", apiId)
    console.log("BookingId", BookingId);
  } else {
    console.log("BookingIdBookingId", BookingId);
    fetch(`${API_PATH}/api/v1/busticket/qrcode/${BookingId}`)
      .then((response) => response.json())
      .then((res) => {
        console.log(res.data);
        setQRImage(res.data);
      })
      .catch((e) => {
        setLoading(false);
        setNotFound(true);
      });
  }

  const printPdf = () => {
    window.print();
  };

  return (
    <>
      <div className="d-none d-md-block">
        <Header />
        {loading == false && notFound == false ? (
          <div style={{ backgroundColor: "white" }}>
            <Row className="p-3">
              <Col xs={5} sm={5} className="p-0 dm__barcode">
                <div className="booking-div">
                  <img src={qrImage} alt="" width={250} />
                </div>
              </Col>
              <Col xs={5} sm={5}>
                <Row className="p-0" style={{ textAlign: "center" }}>
                  <Col xs={6} sm={6}>
                    <div
                      className="booking-div"
                      style={{ marginBottom: "2rem" }}
                    >
                      <div style={{ marginBottom: "15px" }}>
                        <img src={ticket} alt="" />
                      </div>
                      <span
                        style={{
                          fontWeight: "bolder",
                          fontSize: "15px",
                          color: "#FF4A68",
                          paddingTop: "50px",
                        }}
                      >
                        Package
                      </span>
                      <br />
                      <span
                        style={{
                          fontWeight: "400",
                          fontSize: "12px",
                          padding: "10px",
                        }}
                      >
                        that will take you to <br />
                        your favourite destinations
                      </span>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Col className="dm__entry_div" xs={12}>
              <div className="dm__entry_card">
                <div className="row mb-1">
                  {" "}
                  <div
                    className="col-md-6"
                    style={{ color: "red", fontWeight: "bolder" }}
                  >
                    Pass Detail
                  </div>{" "}
                  <div
                    className="col-md-6"
                    style={{
                      paddingLeft: "10px",
                      color: "red",
                      fontWeight: "bolder",
                    }}
                  >
                    Pass ID
                  </div>
                </div>
                <div className="row mb-1">
                  {" "}
                  <div className="col-md-6" style={{ fontWeight: "bolder" }}>
                    BUS BOOKING ID
                  </div>{" "}
                  <div className="col-md-6" style={{ paddingLeft: "10px" }}>
                    {apiData.length > 0 ? apiData[0]?.booking_Id : null}
                  </div>
                </div>
              </div>
            </Col>
            <Row>
              <Col className="dm__title" xs={12}>
                PACKAGE DETAILS
              </Col>
              <Col className="dm__traveller_div" xs={12}>
                {basic_details?.length > 0
                  ? basic_details?.map((item, i) => (
                      <div key={i} className="dm__trav_card">
                        <div className="dm__trav_card_title">{item.name}</div>
                        <div className="dm__trav_card_body">
                          <div className="top">
                            {item.gender}, {item.age}
                          </div>
                          <div className="bottom">Adhaar: {item.adhaar}</div>
                        </div>
                      </div>
                    ))
                  : null}
              </Col>
            </Row>
            <Row>
              {/* <Col>
              <Row>
              <Col xs={12} md={6}>
                <div style={{ width: "100%" }}>
                  <span
                    style={{
                      color: "black",
                      fontFamily: "sans-serif",
                      marginLeft:'27px'

                    }}
                  >
                    Boarding from
                  </span>
                </div>

                <div
                  className=" select-train mt-2 d-flex align-items-center"
                  style={{ width: "100%" }}
                >
                  <div className="d-flex">
                    <span
                      style={{
                        margin: "10px",
                        whiteSpace: "nowrap",
                        fontSize: "12px",
                        fontWeight: "bolder",
                        fontFamily: "sans-serif",
                      }}
                    >
                      {apiData[0]?.trips_id?.route?.start?.name}
                    </span>
                  </div>
                </div>
              </Col>
              <Col>
                <div style={{ width: "100%" }}>
                  <span
                    style={{
                      color: "black",
                      fontFamily: "sans-serif",
                      marginLeft:'27px'
                    }}
                  >
                    Dropoff At
                  </span>
                </div>

                <div
                  className=" select-train mt-2 d-flex align-items-center"
                  style={{ width: "100%" }}
                >
                  <div className="d-flex">
                    <span
                      style={{
                        margin: "10px",
                        whiteSpace: "nowrap",
                        fontSize: "12px",
                        fontWeight: "bolder",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Raj Ratan Travels, Borivali East,
                    <br />
                    Devipada Subway

                    {apiData[0]?.trips_id?.route?.end?.name}
                    </span>
                  </div>
                </div>
              </Col>
            </Row>

              </Col> */}
              <Col className="dm__entry_div" xs={12}>
                <div className="dm__entry_card" style={{ marginLeft: "25px" }}>
                  <div className="p-2">
                    <span>Name</span>
                    <br />
                    <span
                      style={{
                        fontSize: "19px",
                        fontWeight: "bolder",
                        color: "black",
                      }}
                    >
                      {/* Chitrakote, Bastar */}
                      {/* {apiData[0]?.trips_id?.route?.end?.name} */}
                      Ghumo Bastar Trip
                    </span>
                    <br />
                    <span>Mobile</span>
                    <br />
                    <span
                      style={{
                        fontSize: "19px",
                        fontWeight: "bolder",
                        color: "black",
                      }}
                    >
                      {/* Chitrakote, Bastar */}
                      8120424325
                    </span>
                    <br />
                    <span>E-mail</span>
                    <br />
                    <span
                      style={{
                        fontSize: "19px",
                        fontWeight: "bolder",
                        color: "black",
                      }}
                    >
                      {/* Chitrakote, Bastar */}
                      admin@gmail.com
                      {/* {apiData[0]?.trips_id?.route?.end?.name} */}
                    </span>
                    <br />
                  </div>
                </div>
                <div className="dm__entry_card">
                  <div>
                    <div
                      className="rajratan-train p-2"
                      style={{ float: "", backgroundColor: "#F8F8F8" }}
                    >
                      <span>Package Name</span>
                      <br />
                      <span
                        style={{
                          fontSize: "19px",
                          fontWeight: "bolder",
                          color: "black",
                        }}
                      >
                        {/* Chitrakote, Bastar */}
                        admin@gmail.com
                        {/* {apiData[0]?.trips_id?.route?.end?.name} */}
                      </span>
                      <br />
                      <span>From Date</span>
                      <br />
                      <span
                        style={{
                          fontSize: "19px",
                          fontWeight: "bolder",
                          color: "black",
                        }}
                      >
                        {/* Chitrakote, Bastar */}
                        13-12-2021
                        {/* {apiData[0]?.trips_id?.route?.end?.name} */}
                      </span>
                      <br />
                      <span>End Date</span>
                      <br />
                      <span
                        style={{
                          fontSize: "19px",
                          fontWeight: "bolder",
                          color: "black",
                        }}
                      >
                        {/* Chitrakote, Bastar */}
                        13-12-2021
                        {/* {apiData[0]?.trips_id?.route?.end?.name} */}
                      </span>
                      <br />
                      <span>No. Of Travellers</span>
                      <br />
                      <span
                        style={{
                          fontSize: "18px",
                          fontWeight: "bolder",
                          color: "black",
                        }}
                      >
                        {/* Chitrakote, Bastar */}3
                        {/* {apiData[0]?.trips_id?.route?.end?.name} */}
                      </span>
                      <br />
                    </div>
                  </div>
                </div>
              </Col>

              <Col className="dm__entry_div" xs={12}>
                <Button
                  onClick={() => printPdf()}
                  style={{
                    width: "186px",
                    textAlign: "center",
                    height: "52px",
                    borderRadius: "9px",
                    border: "none",
                    backgroundColor: "#0FA453",
                    fontWeight: "bold",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  Print Ticket
                </Button>
              </Col>
            </Row>
          </div>
        ) : loading == false ? (
          <h1>No data found</h1>
        ) : null}
        <Footer />
      </div>

      {/*mobile View*/}

      <div className="m-0 d-md-none" style={{ backgroundColor: "#E5E5E5" }}>
        <Row className="m-0">
          <Col className="m-0 dmpass__mob_header" xs={12}>
            <FaArrowLeft
              style={{ width: "30px", height: "30px" }}
              onClick={goHome}
            />
            <div className="dmpass__mob_header_title">Your Details</div>
          </Col>
        </Row>
        {loading == false && notFound == false ? (
          <Row className="mt-5 pt-5">
            <Col xs={12}>
              <div className="text-center mt-2">
                <img src={qrImage} alt="" width={130} />
              </div>
            </Col>
            <Col
              className="px-4 d-flex justify-content-center mt-3 "
              xs={12}
              sm={12}
            >
              <div className="dm__card mobile">
                <div className="dm__entry_card">
                  <div className="row mb-1">
                    {" "}
                    <div
                      className="col-md-6"
                      style={{ color: "red", fontWeight: "bolder" }}
                    >
                      Pass Detail
                    </div>{" "}
                    <div
                      className="col-md-6"
                      style={{
                        paddingLeft: "10px",
                        color: "red",
                        fontWeight: "bolder",
                      }}
                    >
                      Pass ID
                    </div>
                  </div>
                  <div className="row mb-1">
                    {" "}
                    <div className="col-md-6" style={{ fontWeight: "bolder" }}>
                      PACKAGE ID
                    </div>{" "}
                    <div className="col-md-6" style={{ paddingLeft: "10px" }}>
                      {apiData.length > 0 ? apiData[0]?.booking_Id : null}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="dm__title mobile" xs={12}>
              PACKAGE DETAILS
            </Col>
            <Col className="dm__traveller_div mobile" xs={12}>
              <Col className="dm__traveller_div" xs={12}>
                {basic_details?.length > 0
                  ? basic_details?.map((item, i) => (
                      <div key={i} className="dm__trav_card">
                        <div className="dm__trav_card_title">{item.name}</div>
                        <div className="dm__trav_card_body">
                          <div className="top">
                            {item.gender}, {item.age}
                          </div>
                          <div className="bottom">Adhaar: {item.adhaar}</div>
                        </div>
                      </div>
                    ))
                  : null}
              </Col>
            </Col>
            <Col className="dm__title mobile" xs={12}>
              TRIP packages_details
            </Col>

            <Col className="dm__entry_div mobile" xs={12}>
              {/* {apiData?.length > 0
                ? apiData[0]?.ep_id?.locations?.map((item, i) => (
                  <div key={i} className="dm__entry_card">
                    <div className="dm__entry_card_title">
                      <div className="left">Tamdaghumar</div>
                      <div className="right">Change</div>
                    </div>
                    {item?.services?.map((service, key) => (
                      <div key={key} className="dm__entry_card_body">
                        <div className="left">
                          {service?.service_id?.service_name} x{" "}
                          {service?.service_id?.unit}
                        </div>
                        <div className="right">
                          {service?.service_id?.price}
                        </div>
                      </div>
                    ))}
                  </div>
                  ))
                : null} */}
              <div className="dm__entry_card">
                <div className="p-2">
                  <span>Name</span>
                  <br />
                  <span
                    style={{
                      fontSize: "19px",
                      fontWeight: "bolder",
                      color: "black",
                    }}
                  >
                    {/* Chitrakote, Bastar */}
                    {/* {apiData[0]?.trips_id?.route?.end?.name} */}
                    Ghumo Bastar Trip
                  </span>
                  <br />
                  <span>Mobile</span>
                  <br />
                  <span
                    style={{
                      fontSize: "19px",
                      fontWeight: "bolder",
                      color: "black",
                    }}
                  >
                    {/* Chitrakote, Bastar */}
                    8120424325
                  </span>
                  <br />
                  <span>E-mail</span>
                  <br />
                  <span
                    style={{
                      fontSize: "19px",
                      fontWeight: "bolder",
                      color: "black",
                    }}
                  >
                    {/* Chitrakote, Bastar */}
                    admin@gmail.com
                    {/* {apiData[0]?.trips_id?.route?.end?.name} */}
                  </span>
                  <br />
                </div>
              </div>
              <div className="dm__entry_card">
                <div>
                  <div
                    className="rajratan-train p-2"
                    style={{ float: "", backgroundColor: "#F8F8F8" }}
                  >
                    <span>Package Name</span>
                    <br />
                    <span
                      style={{
                        fontSize: "19px",
                        fontWeight: "bolder",
                        color: "black",
                      }}
                    >
                      {/* Chitrakote, Bastar */}
                      admin@gmail.com
                      {/* {apiData[0]?.trips_id?.route?.end?.name} */}
                    </span>
                    <br />
                    <span>From Date</span>
                    <br />
                    <span
                      style={{
                        fontSize: "19px",
                        fontWeight: "bolder",
                        color: "black",
                      }}
                    >
                      {/* Chitrakote, Bastar */}
                      13-12-2021
                      {/* {apiData[0]?.trips_id?.route?.end?.name} */}
                    </span>
                    <br />
                    <span>End Date</span>
                    <br />
                    <span
                      style={{
                        fontSize: "19px",
                        fontWeight: "bolder",
                        color: "black",
                      }}
                    >
                      {/* Chitrakote, Bastar */}
                      13-12-2021
                      {/* {apiData[0]?.trips_id?.route?.end?.name} */}
                    </span>
                    <br />
                    <span>No. Of Travellers</span>
                    <br />
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "bolder",
                        color: "black",
                      }}
                    >
                      {/* Chitrakote, Bastar */}3
                      {/* {apiData[0]?.trips_id?.route?.end?.name} */}
                    </span>
                    <br />
                  </div>
                </div>
              </div>
            </Col>
            {/* <Col className="dm__footer_div mobile" xs={12}>
              <div className="dm__footer_card">
                <div className="dm__footer_card_title">BUS BOOKING</div>
                <Button className="dm__footer_card_body">VIEW</Button>
              </div>
              <div className="dm__footer_card">
                <div className="dm__footer_card_title">CAB BOOKING</div>
                <Button className="dm__footer_card_body">VIEW</Button>
              </div>
            </Col> */}
            <Col className="dm__entry_div" xs={12}>
              <Button
                onClick={() => printPdf()}
                style={{
                  width: "186px",
                  textAlign: "center",
                  height: "52px",
                  borderRadius: "9px",
                  border: "none",
                  backgroundColor: "#0FA453",
                  fontWeight: "bold",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                Print Ticket
              </Button>
            </Col>
          </Row>
        ) : loading == false ? (
          <h1 style={{ height: "96vh", textAlign: "center" }}>No data found</h1>
        ) : null}
      </div>
    </>
  );
}

export default BusBookingDetail;
