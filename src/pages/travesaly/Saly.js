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
import SearchFelid from "./SearchFelid";
import { toast, ToastContainer } from 'react-toastify'
import imageMobile from "../../assets/img/homepageMobie2.png"

function Saly() {
  const history = useHistory();
  const [destinations, setDestinations] = useState([]);
  const onButtonclick = () => {
    console.log("object");
    history.push("/select-booking");
  };
  const dmPassId = localStorage.getItem("dm_pass_id")
  const gotoTickets_sraech = () => {
    console.log("object");
    if (dmPassId) {
      history.push(`/dm-detail/${dmPassId}`);
    } else {
      toast.error("Please Create Your Ticket", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,

      })
    }
  };

  useEffect(() => {
    getDestinations();
  }, []);

  const getDestinations = () => {
    fetch(API_PATH + "/api/v1/destinations/list")
      .then((response) => response.json())
      .then((json) => {
        setDestinations(json.data);
        console.log("datatata", json.data);
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
const viewDetails =(value)=>{
  history.push({
    pathname: `/destination_details/${value.title}`,
    id: value._id,
  });
}
  return (
    <>
      <Container
        fluid
        className="d-none d-md-block"
        style={{ padding: 0, margin: 0 }}
      >
        <Row className="saly_div w-100 ">
          <Col xs={12} md={6}>
            <div className="rocket-image pt-3">
              <img src={Salyimg} alt="saly" style={{ width: "100%" }} />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="p-5">
              <div className="explore">
                <h2 className="explore_div">Explore</h2>
                <p>Check out the best tourism destinations around Bastar</p>
              </div>
              <div>
                <iframe
                  style={{ borderRadius: "10px" }}
                  // className="search_view"
                  width="600"
                  height="350"
                  src="https://www.youtube.com/embed/V_JZZ1glvkA"
                  title="YouTube video player"
                  frameborder="0"
                  // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
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
                        <div key={key} onClick={()=>viewDetails(item)}>
                          <Image
                            draggable={false}
                            // style={{ width: "95%", height: "100%" }}
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
                      backgroundColor: "#0FA453",
                      color: "white",
                      fontSize: "15px",
                      fontWeight: "bolder",
                      padding: 15,
                      width: "186px",
                      outline: 'none',
                      border: 'none',
                      borderRadius: "10px",
                    }}
                  >
                    View all Destinations
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
                  <p>Book tickets for buses,cabs and Traveller Passes</p>
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
                  <h3 className="ml-5">Book Tickets</h3>
                  <p>
                    View all part tickets and check out where you have visited
                  </p>
                </div>
              </Col>

              <Col sm={6} md={6}>
                <div className="viewbtn">
                  <Button
                    // variant="danger"
                    style={{
                      cursor: "pointer",
                      marginTop: "32px",
                      backgroundColor: "#FF814A",
                      borderRadius: "10px",
                      border: "none", 
                      width: "186px",
                      height: "53.63px"
                    }}
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
                  {/* <b>Recent Tickets</b> */}
                </h4>
                <TravellerTicket />
              </Container>
            </div>
          </div>
        </Container>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Container>
      {/*mobile-view*/}
      <div fluid className="d-md-none">
        <div fluid style={{ padding: 0, margin: 0 }}>
          <Row className=" saly_div pt-3 w-100">
            <Col xs={12} md={6}>
              <div className="rocket-image" style={{textAlign:"center"}}>
                <img src={Salyimg} alt="saly" style={{ width: "80%" }} />
              </div>
            </Col>
            <Col xs={12} md={6} className="pt-0">
              <div style={{padding:"20px"}}>
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
                        <div key={key} onClick={()=>viewDetails(item)} >
                          <Image
                            draggable={false}
                            style={{ width: "100%", height: "100%" }}
                            src={item.upload_images}
                          />
                          <div
                            style={{ color: "black" }}
                            className="package__trip"
                          >
                            <h6 className="mt-3" style={{fontWeight:"bold"}}>{item.title}</h6>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <h1></h1>
                  )}
                </Carousel>
                <div className="travel_home_btn mt-3 ">
                  <Button
                    onClick={() => history.push("/populardestinations")}
                    variant=""
                    style={{
                      justifyContent: "center",
                      backgroundColor: "#0FA453",
                      color: "white",
                      fontSize: "16px",
                      // fontWeight: "bolder",
                      width: "258px",
                      height: "48.41px",
                      borderRadius: "10px",
                    }}
                  >
                    View all Destinations
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
                    <p>Book tickets for buses,cabs and Traveller Passes</p>
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
                      <b>Book Tickets</b>
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
                      // variant="danger"                      
                      style={{
                        cursor: "pointer",
                        marginTop: "32px",
                        backgroundColor: "#FF814A",
                        borderRadius: "10px",
                        border: "none", 
                        width: "186px",
                        height: "53.63px"
                      }}
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
                    {/* <b>Recent Tickets</b> */}
                  </h4>
                  <TravellerTicket />
                </Container>
              </div>
            </div>
          </Container>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
}

export default Saly;
