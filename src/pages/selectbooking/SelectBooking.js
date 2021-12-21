import React, { useState } from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import city from "../../assets/img/city.png";
import calendar from "../../assets/img/calendar.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Pass from "./Pass";
import BusPass from "./BusPass";
import { useHistory } from "react-router-dom";
import doodle from "../../assets/img/doodle.png";
import bus from "../../assets/img/bus.png";
import ticket from "../../assets/img/ticket.png";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";

function SelectBooking() {
  // const [passTab, setPassTab] = useState(false);
  // const [Journey, setJourney] = useState(true);
  // const [startDate, setStartDate] = useState(new Date());
  // const [busjourney, setBusJourney] = useState(false);
  // const [cabjourney, setCabJourney] = useState(false);

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

  const clickEventHandler = href => {
    history.push(href);
  }

  const list = [
    {
      img:bus,
      title: 'Bus',
      desc: 'Book bus ticket for your favourite spots',
      link: '/buspass'
    },
    {
      img:doodle,
      title: 'Ticket',
      desc: 'Registered ticket services for a personal travel experience',
      link: '/tickets'
    },
    {
      img:ticket,
      title: 'Travel Pass',
      desc: 'Registered ticket services for a personal travel experience',
      link: '/dmpass'
    },
    {
      img:ticket,
      title: 'Home Stay',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      link: '/homestaysinbastar'
    },
    {
      img:ticket,
      title: 'Tour Package',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      link: '/tourpackagesinbastar'
    },
    {
      img:ticket,
      title: 'Taxi',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      link: '/taxiinbastar'
    },
    {
      img:ticket,
      title: 'Tour Guid',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      link: '/tourguidesinbastar'
    },
    {
      img:ticket,
      title: 'Tour Operators',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      link: '/touroperatorsinbastar'
    },
    {
      img:ticket,
      title: 'Event & Activity',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      link: '/bastareventsandactivities'
    }
  ]

  return (
    <>
      <Header />
      <div className="d-none d-md-block">
        <div className="select_div">
          <div className="col-xs-12  col-sm-12 col-md-12">
            <div
              className="booking-div py-5 mt-5"
              style={{ textAlign: "center" }}
            >
              <span style={{ fontWeight: "bolder", fontSize: "20px" }}>
                What do you wish to book?
              </span>
            </div>
          </div>
        </div>
        <Container style={{width:"971px"}}>
            <Row>
              {
                list.map((data,idx) => {
                  const { img, title, desc, link } = data
                  return (
                    <Col key={idx} xs={12} md={4}>
                      <div className="userdatas" onClick={()=>clickEventHandler(link)}>
                        <div><img src={img} style={{ width: 39, height: 25.58, marginTop: "10px" }} /></div>
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
        <div className="pt-5 mt-5">
          <Footer />
        </div>
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
                list.map((data,idx) => {
                  const { img, title, desc, link } = data
                  return (
                    <Col key={idx} xs={12} md={4}>
                      <div className="userdatas" onClick={()=>clickEventHandler(link)}>
                        <div><img src={img} style={{ width: 39, height: 25.58, marginTop: "10px" }} /></div>
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
      </div>
    </>
  );
}

export default SelectBooking;
