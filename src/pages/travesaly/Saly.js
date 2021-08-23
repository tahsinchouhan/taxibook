import React, { useEffect, useState } from "react";
import {
  Button,
  Row,
  Col,
  Form,
  Container,
  Card,
  Image,
} from "react-bootstrap";
import Salyimg from "../../assets/img/Saly-1.svg";
import Layer11 from "../../assets/img/hil.svg";
import Layer12 from "../../assets/img/adivash.svg";
import men1 from "../../assets/img/men.svg";
import doodle1 from "../../assets/img/doodle.png";
import "../../assets/css/saly.css";
import Inform from "./Footer";
import { NavLink, useHistory } from "react-router-dom";
import TravellerCard from "./TravellerCard";
import TravellerTicket from "./TravellerTicket";
import { API_PATH } from "../../Path/Path";
import Carousel from "react-multi-carousel";

function Saly() {
  const history = useHistory();
  const [destinations, setDestinations] = useState([]);
  const onButtonclick = () => {
    console.log("object");
    history.push("/select-booking");
  };
  const gotoTickets_sraech = () => {
    console.log("object");
    history.push("/tickets_sraech");
  };

  useEffect(() => {
    getDestinations();
  }, []);

  const getDestinations = () => {
    fetch(API_PATH + "/api/v1/destinations/list")
      .then((response) => response.json())
      .then((json) => {
        setDestinations(json.data);
        console.log(json.data);
      })
      .catch((e) => console.log(e));
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.5,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  
  return (
    <>
      <Container
        fluid
        className="d-none d-md-block"
        style={{ padding: 0, margin: 0 }}
      >
        <Row className="saly_div pt-5 w-100">
          <Col xs={12} md={6}>
            <div className="rocket-image">
              <img src={Salyimg} alt="saly" style={{ width: "100%" }} />
            </div>
          </Col>
          <Col xs={12} md={6} className="pt-5">
            <div className="p-5">
              <div className="explore">
                <h2 className="explore_div">Explore</h2>
                <p>Check out the best tourism destinations around Bastar</p>
              </div>
              <Row className="pt-5">
                <Carousel
                  partialVisbile
                  itemClass="image-item"
                  responsive={responsive}
                >
                  {destinations.length ? (
                    destinations.map((item, key) => {
                      return (
                        <div key={key}>
                          <Image
                            draggable={false}
                            style={{ width: "95%", height: "100%" }}
                            src={item.upload_images}
                          />
                          <div
                            style={{ color: "black" }}
                            className="package__trip"
                          >
                            <h6 className="packages__block-title mt-3">
                              {item.title}
                            </h6>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <h1></h1>
                  )}
                </Carousel>

                <div className="travel_home_btn pt-0">
                  <Button
                   onClick={() => history.push("/populardestinations")}
                    style={{
                      marginTop: 20,
                      justifyContent: "center",
                      backgroundColor: "#58b839",
                      color: "white",
                      fontSize: "15px",
                      fontWeight: "bolder",
                      padding: 15,
                      width: 300,
                      outline: 'none',
                      border: 'none'
                    }}
                  >
                    View all destinations
                  </Button>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
        <div
          style={{ backgroundColor: "black", color: "white", height: "370px" }}
        >
          <div style={{ flexDirection: "row" }}>
            <Col>
              <div style={{ paddingTop: "100px", textAlign: "center" }}>
                <div className="bookings-div">
                  <h3>Bookings</h3>
                  <p>Book tickets for buses,cabs and DM Passees</p>
                </div>
                <Button
                  className="makebooking-btn"
                  style={{ backgroundColor: " #864BD8", color: "white" }}
                  onClick={onButtonclick}
                >
                  Make a Booking
                </Button>
              </div>
            </Col>
            <Col>
              {/* <div className="men-image">
                                <img src={men1} alt="" />
                            </div> */}
            </Col>
          </div>
        </div>

        {/*Tictets*/}
        <Container>
          <div className="ticket-div py-5">
            <Row>
              <Col sm={6} md={6}>
                <div>
                  <h3 className="ml-5">Tickets</h3>
                  <p>
                    View all part tickets and check out where you have visited
                  </p>
                </div>
              </Col>

              <Col sm={6} md={6}>
                <div className="viewbtn">
                  <Button
                    variant="danger"
                    style={{ cursor: "pointer", marginTop: "32px" }}
                    onClick={gotoTickets_sraech}
                  >
                    View your Tickets
                  </Button>
                </div>
              </Col>
            </Row>
            <div className="pt-4">
              <Container>
                <h4>
                  <b>Recent Tickets</b>
                </h4>
                <TravellerTicket />
              </Container>
            </div>
          </div>
        </Container>
      </Container>
      {/*mobile-view*/}
      <div fluid className="d-md-none">
        <div fluid style={{ padding: 0, margin: 0 }}>
          <Row className=" saly_div pt-5 w-100">
            <Col xs={12} md={6}>
              <div className="rocket-image">
                <img src={Salyimg} alt="saly" style={{ width: "100%" }} />
              </div>
            </Col>
            <Col xs={12} md={6} className="pt-5">
              <div className="p-5">
                <div className="explore">
                  <h2 className="explore_div">Explore</h2>
                  <p>Check out the best tourism destinations around Bastar</p>
                </div>
                <Carousel
                  partialVisbile
                  itemClass="image-item"
                  responsive={responsive}
                >
                  {destinations.length ? (
                    destinations.map((item, key) => {
                      return (
                        <div key={key}>
                          <Image
                            draggable={false}
                            style={{ width: "100%", height: "100%" }}
                            src={item.upload_images}
                          />
                          <div
                            style={{ color: "black" }}
                            className="package__trip"
                          >
                            <h6 className="mt-3">{item.title}</h6>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <h1></h1>
                  )}
                </Carousel>
                <div className="travel_home_btn pt-5">
                  <Button
                  onClick={() => history.push("/populardestinations")}
                    variant=""
                    style={{
                      justifyContent: "center",
                      backgroundColor: "#58b839",
                      color: "white",
                      fontSize: "17px",
                      fontWeight: "bolder",
                    }}
                  >
                    View all destinations
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              height: "370px",
            }}
          >
            <div style={{ flexDirection: "row" }}>
              <Col>
                <div style={{ paddingTop: "100px", textAlign: "center" }}>
                  <div className="bookings-div">
                    <h3>Bookings</h3>
                    <p>Book tickets for buses,cabs and DM Passees</p>
                  </div>
                  <Button
                    className="makebooking-btn"
                    style={{ backgroundColor: " #864BD8", color: "white" }}
                    onClick={onButtonclick}
                  >
                    Make a Booking
                  </Button>
                </div>
              </Col>
              <Col></Col>
            </div>
          </div>

          {/*Tictets*/}
          <Container>
            <div className="ticket-div py-5">
              <Row>
                <Col sm={6} md={6}>
                  <div>
                    <h3 className="ml-5">
                      <b>Tickets</b>
                    </h3>
                    <p>
                      Get tickets to your favourite <br />
                      destinations right from your mobile
                    </p>
                  </div>
                </Col>

                <Col sm={6} md={6}>
                  <div className="viewbtn">
                    <Button
                      variant="danger"
                      style={{ cursor: "pointer", marginTop: "32px" }}
                      onClick={gotoTickets_sraech}
                    >
                      View your Tickets
                    </Button>
                  </div>
                </Col>
              </Row>
              <div className="pt-4">
                <Container>
                  <h4>
                    <b>Recent Tickets</b>
                  </h4>
                  <TravellerTicket />
                </Container>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Saly;
