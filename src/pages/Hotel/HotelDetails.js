import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import calendar from "../../assets/img/calendar.png";
import "react-datepicker/dist/react-datepicker.css";
// import { useHistory } from "react-router-dom";
import { API_PATH } from "../../Path/Path";
import axios from "axios";
import Footer from "../travesaly/Footer";
import moment from "moment";
import { useSelector } from "react-redux";
// import { DatePicker } from "antd";
import Details from "./Details";

// import { Carousel } from "react-bootstrap";

const HotelDetails = (props) => {
  // const history = useHistory();

  const hotelUniqid = props.match.params.name;
  const startDate = props.match.params.startDate;
  const endDate = props.match.params.endDate;

  const { detail, address, roomState, hotelDetail } = props?.location?.state;

  const [detailsP, setDetailsP] = useState([]);
  // const [hotelDetail, setHotelDetail] = useState([]);
  // const [hotel, setHotel] = useState([]);

  // console.log('Hotel Details', hotelDetail);

  const { getStartData } = useSelector((state) => state.hotelReducer);

  useEffect(() => {
    setDetailsP(detail);
    getSelectedHotel(hotelDetail._id);
    window.scrollTo(0, 0);
  }, [detail]);

  const getSelectedHotel = async (id) => {
    try {
      const res = await fetch(`${API_PATH}/api/v2/hotelregistration/${id}`);
      const data = await res.json();
      getSeoDetails(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSeoDetails = async (data) => {
    try {
      // console.log(data.seo_schema_1);
      document.title = data?.seo_title || "Travel Bastar";
      document
        .querySelector("meta[name='description']")
        .setAttribute("content", data?.seo_description || "");
      document
        .querySelector("meta[name='keywords']")
        .setAttribute("content", data?.seo_keywords || "");

      let text = data?.seo[0]
        .replace('<script type="application/ld+json">', "")
        .replace("</script>", "");

      let text1 = data?.seo_schema_1[0]
        ?.replace('<script type="application/ld+json">', "")
        ?.replace("</script>", "");
      let text2 = data?.seo_schema_2[0]
        ?.replace('<script type="application/ld+json">', "")
        ?.replace("</script>", "");
      let text3 = data?.seo_schema_3[0]
        ?.replace('<script type="application/ld+json">', "")
        ?.replace("</script>", "");
      let text4 = data?.seo_schema_4[0]
        ?.replace('<script type="application/ld+json">', "")
        ?.replace("</script>", "");

      document.querySelector("script[id='seoSchema']").innerHTML = text || "";
      document.querySelector("script[id='seoSchema1']").innerHTML = text1 || "";
      document.querySelector("script[id='seoSchema2']").innerHTML = text2 || "";
      document.querySelector("script[id='seoSchema3']").innerHTML = text3 || "";
      document.querySelector("script[id='seoSchema4']").innerHTML = text4 || "";
    } catch (error) {
      console.log(error);
    }
  };

  const initLoad = (value) => {
    axios
      .post(API_PATH + `/api/v2/room/set`, {
        address: value.city,
        check_in: moment(getStartData.startDate).format("YYYY-MM-DD"),
        check_out: moment(getStartData.endDate).format("YYYY-MM-DD"),
        hotel_id: value._id,
      })
      .then((response) => setDetailsP(response.data.data));
  };

  // const { RangePicker } = DatePicker;
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <div>
      <Header />

      <div className="d-none d-md-block" style={{ marginTop: "0" }}>
        <Container
          className="d-none d-md-block "
          style={{ marginTop: "0", backgroundColor: "white" }}
        ></Container>
        <Details
          detailsP={detailsP}
          hotelDetail={hotelDetail}
          hotelUniqid={hotelUniqid}
          address={address}
          startDate={startDate}
          endDate={endDate}
          roomStateData={roomState}
        />
        <Footer />
      </div>

      {/* Mobile */}
      <div className="d-md-none">
        <div>
          {/* <Container>
            <div className="select_div">
              <Container
                style={{
                  marginTop: "0",
                  background: "white",
                  backgroundColor: "white",
                  padding: "0px",
                }}
              >
                <Row style={{ display: "flex", justifyContent: "center" }}>
                  <Col xs={12} className="mt-3">
                    <Form.Group
                      className=""
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="dm-ticket">
                        Select Your Location
                      </Form.Label>
                      <select
                        id="inputState"
                        className="form-control pass_input"
                        placeholder="Choose Your Area"
                        style={{
                          height: "47px",
                          backgroundColor: "#f5f5f5",
                          border: 0,
                          padding: "10px",
                          paddingLeft: "20px",
                        }}
                      >
                        <option selected>Choose Your Area</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </Form.Group>
                  </Col>

                  <Col xs={12} className="mt-3">
                    <Form.Group
                      className=""
                      controlId="exampleForm.ControlInput1"
                    >
                      <div>
                        <Form.Label className="dm-ticket">
                          Booking Date
                        </Form.Label>
                        <br />
                        <div
                          style={{
                            backgroundColor: "#f5f5f5",
                            padding: "5px",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            display: "flex",
                          }}
                        >
                          <img
                            alt="logo"
                            className="location-userdatas-calendar"
                            src={calendar}
                            style={{
                              width: 25,
                              height: 30,
                              marginRight: "10px",
                            }}
                          />
                          <RangePicker
                            disabledDate={disabledDate}
                            style={{
                              backgroundColor: "transparent",
                              border: "0",
                            }}
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </Col>
                  <Col xs={12} className="mt-3">
                    <Form.Group
                      className=""
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="dm-ticket">
                        Number Of Guests
                      </Form.Label>
                      <select
                        id="inputState"
                        className="form-control pass_input"
                        placeholder="Choose Your Area"
                        style={{
                          backgroundColor: "#f5f5f5",
                          border: 0,
                          height: "47px",
                          padding: "10px",
                        }}
                      >
                        <option selected>1 Room 2, Guests </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </Form.Group>
                  </Col>
                  <Col
                    md={2}
                    className="mt-2"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-end",
                    }}
                  >
                    <div className="dmticket-btn mt-3">
                      <Button
                        type="submit"
                        style={{
                          width: "138px",
                          textAlign: "center",
                          height: "47px",
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
              </Container>
              <hr />
            </div>
          </Container> */}
        </div>
        <div>
          <Details
            hotelUniqid={hotelUniqid}
            hotelDetail={hotelDetail}
            detailsP={detailsP}
            address={address}
            startDate={startDate}
            endDate={endDate}
            roomStateData={roomState}
          />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
