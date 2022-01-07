import React, { useState } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
// import logo from "../../assets/img/logo.png";
// import city from "../../assets/img/city.png";
// import calendar from "../../assets/img/calendar.png";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Pass from "./Pass";
// import BusPass from "./BusPass";
import { useHistory } from "react-router-dom";
import doodle from "../../assets/img/doodle.png";
import cab from "../../assets/img/cab.png";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import FooterIcons from '../../Footer/FooterIcons'

import "bootstrap/dist/css/bootstrap.min.css";
import CarouselReact from "react-multi-carousel";
import Carousel from "react-bootstrap/Carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "react-bootstrap";


import TravelPass from "../../assets/img/TravelPass.jpg";
import Ticket from "../../assets/img/Ticket.jpg";
import HomeStay from "../../assets/img/HomeStay.jpg";
import Bus from "../../assets/img/Bus.jpg";
import TourPackage from "../../assets/img/TourPackage.jpg";
import Taxi from "../../assets/img/Taxi.jpg";
import TourGuid from "../../assets/img/TourGuid.jpeg";
import TourOperator from "../../assets/img/TourOperator.jpg";
import Event from "../../assets/img/Event.jpg";
import Hotel from "../../assets/img/Hotel.jpg";


function SelectBooking() {
  // const [passTab, setPassTab] = useState(false);
  // const [Journey, setJourney] = useState(true);
  // const [startDate, setStartDate] = useState(new Date());
  // const [busjourney, setBusJourney] = useState(false);
  // const [cabjourney, setCabJourney] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const history = useHistory();

  // const onPassClick = () => {
  //   setPassTab(true);
  //   // setJourney(true);
  //   // setBusJourney(false);
  //   // setCabJourney(false);
  //   console.log("object");
  //   history.push("/dmpass");
  // };
  // const onBusClick = () => {
  //   // setPassTab(false);
  //   // setJourney(false);
  //   setBusJourney(true);
  //   console.log("hiii");
  //   history.push("/buspass");
  // };
  // const onClickTicket = () => {
  //   // setBusJourney(false);
  //   // setPassTab(false);
  //   // setJourney(false);
  //   setCabJourney(true);
  //   console.log("hiii");
  //   history.push("/tickets");
  // };

  const clickEventHandler = (href) => {
    history.push(href);
  };

  const list = [
    {
      img: Bus,
      title: 'Bus',
      desc: 'Book bus ticket for your favourite spots',
      link: '/buspass'
    },
    {
      img: Hotel,
      title: 'Hotel',
      desc: 'Hotels for your favourite spots',
      link: '/hotellist'
    },
    {
      img: Ticket,
      title: 'Ticket',
      desc: 'Registered ticket services for a personal travel experience',
      link: '/tickets'
    },
    {
      img: Taxi,
      title: 'Taxi',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      link: '/taxiinbastar'
    },
    {
      img: TravelPass,
      title: 'Travel Pass',
      desc: 'Registered ticket services for a personal travel experience',
      link: '/dmpass'
    },
    {
      img: HomeStay,
      title: 'Home Stay',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      link: '/homestaysinbastar'
    },
    {
      img: TourPackage,
      title: 'Tour Package',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      link: '/tourpackagesinbastar'
    },

    {
      img: TourGuid,
      title: 'Tour Guide',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      link: '/tourguidesinbastar'
    },
    {
      img: TourOperator,
      title: 'Tour Operators',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      link: '/touroperatorsinbastar'
    },
    {
      img: Event,
      title: 'Event & Activity',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      link: '/bastareventsandactivities'
    },
  ];

  const Para = {
    fontSize: "22px",
    fontStyle: "italic",
    fontFamily: '"Josefin Sans", sans-serif',
    marginTop: "-30px",

  };

  const card = {
    marginTop: "-140px",
    fontWeight: "bold",
    color: "DarkRed",
    backgroundColor: "#e9ecef",
    width: "150px",
    marginLeft: "-16px",
    borderRadius: "5px"
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 4,

    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div>
        <Header />
        <div>

          <Carousel
            activeIndex={carouselIndex}
          >
            {list.map((data, idx) => {
              const { img, title, desc, link } = data;
              return (
                <Carousel.Item>
                  <div>
                    <img
                      style={{
                        height: "500px",
                        width: "100%",

                        filter: "brightness(0.5)"
                      }}
                      src={img}
                      alt="Image"
                    />
                  </div>
                  <Carousel.Caption>
                    <div
                      style={{ marginTop: "-450px", textAlign: "left" }}>

                      <h3 style={{
                        fontWeight: "bold",
                        fontSize: "40px",
                        color: "DarkRed",
                        marginTop: "100px"
                      }}
                      >
                        {title}
                      </h3>
                      <p style={Para}> {desc} </p>
                      <Button onClick={() => clickEventHandler(link)} style={{ marginTop: "-30px" }}>
                        Book Now
                      </Button>

                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>

        <Container style={{ position: "relative", zIndex: "4" }}>
          <div style={{ marginTop: "-80px" }}>
            {list.length > 0 ? (
              <CarouselReact
                ssr
                partialVisible
                itemClass="image-item"
                responsive={responsive}
              >
                {list.length > 0
                  ? list.map((data, idx) => {
                    const { img, title, desc, link } = data;
                    return (
                      <div onClick={(e) => { setCarouselIndex(idx) }} >
                        <div style={{ marginLeft: "10px" }} >
                          <Image
                            draggable={false}
                            style={{ width: "150px", height: "180px", borderRadius: "10px" }}
                            src={img}
                          />
                        </div>
                        <Carousel.Caption>
                          <div>
                            <h6 className="packages_block-title_mt-3 mb-0" style={card}>
                              {title}
                            </h6>
                          </div>
                        </Carousel.Caption>
                      </div>
                    );
                  })
                  : null}
              </CarouselReact>
            ) : null}
          </div>


        </Container>

      </div>

      <div className="pt-5 mt-5">
        <Footer />
      </div>


      {/*mobile*/}
      <div className="d-block d-md-none">
        <div className="select_div">
          <div className="row p-3" style={{ textAlign: "center" }}>
            <div className="col-xs-12  col-sm-12 col-md-12">
              <div className="booking-div">
                <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                  Select your booking
                </span>
              </div>
            </div>
          </div>

          <Container>
            <Row>
              {
                list.map((data, idx) => {
                  const { img, title, desc, link } = data
                  return (
                    <Col key={idx} xs={12} md={4}>
                      <div className="userdatas" onClick={() => clickEventHandler(link)}>
                        <div><img src={img} alt={img} style={{ width: 39, height: 25.58, marginTop: "10px" }} /></div>
                        <div className="ps-3">
                          <p className="booking_icon my-0 text-secondary">{title}</p>
                          <p>{desc}</p>
                        </div>
                      </div>
                    </Col>
                  )
                })
              }
            </Row>
          </Container>
        </div>
        <div fluid="true" className="d-sm-none">
          <FooterIcons />
        </div>
      </div>
    </>
  );
}

export default SelectBooking;
