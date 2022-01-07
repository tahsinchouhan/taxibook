import React, { useEffect, useState } from "react";
import { Button, Row, Col, Container, Image } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import bg from "../../assets/img/bg_12.jpg";
import { useHistory, useParams } from "react-router-dom";
import Heritage from "../../assets/img/Heritage.jpg";
import Adventure from "../../assets/img/Adventure.jpg";
import { API_PATH } from "../../Path/Path";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Geocode from "react-geocode";
import heritage_walk from "../../assets/img/heritage_walk.png";
import TravellerTicket from "../travesaly/TravellerTicket";
import TravellerTicketMobile from "../travesaly/TravellerTicketMobile";
import { useSelector } from "react-redux";
import hotelReducer from "../../redux/hotel/reducer";
import AudioJourneyBanner from '../../components/AudioJourneyBanner'

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API);
Geocode.setLanguage("en");
Geocode.setRegion("in");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();

const Interest = () => {
  const [modalShow, setModalShow] = useState(false);
  const {getPrehomeInterest,getPrehomeDestination} = useSelector((state) => state.hotelReducer);
  let { id } = useParams();
  const history = useHistory();
  const [destinations, setDestinations] = useState([]);
  const [packages, setPackages] = useState([]);
  const [location, setLoation] = useState([]);

  const getCurrentLocation = async () => {
    await window.navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
      setLoation(pos.coords);
    });
  };
  
  // const bookTickets = () => {
  //   history.push("/select-booking");
  // };
  const onButtonclick = () => {
    // history.push("/select-booking");
    history.push("/buspass");
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);

  const tripPackage = [
    {
      url: Adventure,
      title: "Adventure Map",
      subtTitle: "Download",
      pdf: "https://firebasestorage.googleapis.com/v0/b/flutterrdemo.appspot.com/o/Adventure%20Map.pdf?alt=media&token=eeafe1f1-a2c0-47cf-991a-d8be9eb8161d",
    },
    {
      url: Heritage,
      title: "Heritage Map",
      subtTitle: "Download",
      pdf: "https://firebasestorage.googleapis.com/v0/b/flutterrdemo.appspot.com/o/Heritage%20Map.pdf?alt=media&token=de4579b8-91c5-4a8a-8798-58a74a89317c",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.5,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3.5,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  useEffect(() => {
    getPackages();
    getDestinations();
    window.scrollTo(0, 0);
  }, [location]);

  const getDestinations = () => {
    if (id !== undefined) {
      if (id == "heritage") id = "religious";
      fetch(`${API_PATH}/api/v1/destinations/list?${id}=true`)
        .then((response) => response.json())
        .then((json) => {
          if (json.data !== undefined) {
            setDestinations(json.data);
          }
        })
        .catch((e) => console.log(e));
    } else {
      fetch(API_PATH + "/api/v1/destinations/location", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          latitude: location.latitude,
          longitude: location.longitude,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.data !== undefined) setDestinations(json.data);
        })
        .catch((e) => console.log(e));
    }
  };

  const getPackages = () => {
    console.log("object", id);
    if (id !== undefined) {
      if (id == "heritage") id = "religious";
      fetch(`${API_PATH}/api/v1/packages/list?${id}=true`)
        .then((response) => response.json())
        .then((json) => {
          if (json.data !== undefined) {
            setPackages(json.data);
          }
        })
        .catch((e) => console.log(e));
    } else {
      fetch(`${API_PATH}/api/v1/packages/location`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          latitude: location.latitude,
          longitude: location.longitude,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.data !== undefined) {
            setPackages(json.data);
          }
        })
        .catch((e) => console.log(e));
    }
  };
 
  const onDestinations = (value) => {
    history.push({
      pathname: `/destination_details/${value.title}`,
      id: value._id,
    });
  };

  const goToSearch = () => {
    history.push("/search");
  };

  useEffect(() => {
    if(getPrehomeInterest?.length>0){
      setPackages(getPrehomeInterest)
    }
    if(getPrehomeDestination?.length>0){
      setDestinations(getPrehomeDestination)
    }
    
  }, [getPrehomeInterest,getPrehomeDestination])
  return (
    <>
      <Container>
        <Header />
        <AudioJourneyBanner />
        <div className="mb-5 mt-5">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2 className="package__title pt-5">
              <span>Curated</span> Experiences
            </h2>
            <h6
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/curatedexperiences")}
              className="package__title pt-5"
            >
              View All
            </h6>
          </div>
        </div>
        {packages.length > 0 ? (
          <Carousel
            ssr
            partialVisible
            itemClass="image-item"
            responsive={responsive}
          >
            {packages.length > 0
              ? packages.map((item, key) => {
                  return (
                    <div
                      key={key}
                      onClick={() =>
                        history.push({
                          pathname: `/packages_details/${item.title}`,
                          item: item._id,
                        })
                      }
                    >
                      <Image
                        draggable={false}
                        style={{ width: "100%", height: "100%" }}
                        src={item.upload_images}
                      />
                      <div>
                        <h6 className="packages__block-title_ mt-3 mb-0">
                          {item.title}
                        </h6>
                        <div
                          style={{
                            paddingTop: 2,
                          }}
                        >
                          {/* <h6
                            style={{
                              background: "#BEBEBE",
                              display: "inline",
                              padding: "3px",
                              borderRadius: "4px",
                              fontSize: "14px",
                            }}
                          >
                            {item.category.category_name}
                          </h6> */}
                        </div>
                        <div>
                          <small className="packages__block-subtitle">
                            ₹ {item.price}
                          </small>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </Carousel>
        ) : null}

      </Container>
      <div
        className="py-5 mt-5"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <Container>
          <div className="mb-5">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color:"white"
              }}
            >
              <div>
                <h2 className="package__title" style={{color:"white"}}>
                  <span>Popular</span> Destinations
                </h2>
                <h6 style={{color:"white"}}>
                  The best tourist locations across Bastar, rated and curated by
                  travellers.
                </h6>
              </div>

              <h6
                style={{ cursor: "pointer",color:"white" }}
                onClick={() => history.push("/populardestinations")}
                className="package__title pt-5"
              >
                View All
              </h6>
            </div>
          </div>
          {destinations.length > 0 ? (
            <Carousel
              ssr
              partialVisible
              itemClass="image-item"
              responsive={responsive}
            >
              {destinations.map((item, key) => {
                return (
                  <div key={key} onClick={() => onDestinations(item)}>
                    <Image
                      draggable={false}
                      style={{ width: "100%", height: "100%" }}
                      src={item.upload_images}
                    />

                    <div style={{ color: "white" }} className="package__trip">
                      <h6  style={{ color: "white" }} className="packages__block-title mt-3 mb-0">
                        {item.title}
                      </h6>
                      <small style={{ color: "white" }} className="packages__block-subtitle">
                        {item.sub_title}
                      </small>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          ) : null}
        </Container>
      </div>
      <Container
        fluid="true"
        className="d-none d-md-block"
        style={{ padding: 0, margin: 0 }}
      >
         <Container className="heritage_walk_div">
          <Row
            style={{
              flexDirection: "row",
              marginRight: "0px",
              marginTop: "81px",
            }}
          >
            <Col md={6} style={{ position: "relative" }}>
              <div>
                <div className="heritage_walk">
                  <Image src={heritage_walk} alt="Heritage Walk" />
                  <span className="heritage_walk_text">
                    Heritage Walk{" "}
                    <Button
                      onClick={() => setModalShow(true)}
                      className="btn-primary-tb makebooking-btn"
                    >
                      Know More
                    </Button>
                  </span>
                </div>
              </div>
            </Col>
            <Col
              sm={6}
              style={{
                backgroundColor: "#2c2c2c",
                color: "white",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ textAlign: "left", paddingLeft: "11%" }}>
                <div className="bookings-div">
                  <h3 style={{color:'#fff'}}>Bookings</h3>
                  <p>
                    Book bus tickets for your favorite destination  
                  </p>
                </div>

                <svg
                  width="75"
                  height="50"
                  viewBox="0 0 75 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 22.5C16.6667 16.9772 21.1438 12.5 26.6667 12.5H48.3333C53.8562 12.5 58.3333 16.9772 58.3333 22.5V27.5C58.3333 33.0228 53.8562 37.5 48.3333 37.5H26.6667C21.1438 37.5 16.6667 33.0228 16.6667 27.5V22.5ZM68.75 25C68.75 30.4223 75 35.6456 75 41.0679V43.75C75 47.2018 72.2018 50 68.75 50H6.25C2.79818 50 0 47.2018 0 43.75V41.0679C0 35.6456 6.25 30.4223 6.25 25C6.25 19.5777 0 14.3544 0 8.93212V6.25C0 2.79818 2.79818 0 6.25 0H68.75C72.2018 0 75 2.79818 75 6.25V8.93212C75 14.3544 68.75 19.5777 68.75 25ZM62.5 11.4583C62.5 9.73242 61.1009 8.33333 59.375 8.33333H15.625C13.8991 8.33333 12.5 9.73242 12.5 11.4583V38.5417C12.5 40.2676 13.8991 41.6667 15.625 41.6667H59.375C61.1009 41.6667 62.5 40.2676 62.5 38.5417V11.4583Z"
                    fill="#0FA453"
                  />
                </svg>

                <Button
                  className="makebooking-btn mx-3 btn-primary-tb"
                  onClick={onButtonclick}
                >
                  {/* Step 1 - Book Travel Pass */}
                  Book Bus Ticket 
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        
        {/* <div style={{ backgroundColor: "#2c2c2c", color: "white", height: "289px", marginTop: "81px" }} >
          <Row style={{ flexDirection: "row", marginRight: "0px" }}>
            <Col sm={8}>
              <div style={{ paddingTop: "85px", textAlign: "left", paddingLeft: "31%" }}>
                <div className="bookings-div">
                  <h3>Bookings</h3>
                  <p>Book tickets for Bus,Location wise Tickets and Traveller Passes</p>
                </div>
                <Button
                  className="makebooking-btn"
                  onClick={onButtonclick}
                >Step 1 - Book Travel Pass
                </Button>
              </div>

            </Col>
            <Col md={4} style={{ position: "relative" }} >
              <div >
                <div className="men-image"  >
                  <Image src={manWithMobile2} alt="men" />
                </div>
              </div>
            </Col>
          </Row>
        </div> */}

        {/*Tictets*/}

        <Container>
          <div className="ticket-div py-5">
            <Container style={{ paddingLeft: "10%" }}>
              {/* <Row className="align-items-center">
                <Col sm={6} md={6}>
                  <div>
                    <h3 className="ml-5">Book Tickets</h3>
                    <p className="pb-0">
                      View all part tickets and check out where you have visited
                    </p>
                  </div>
                </Col>
                <Col sm={6} md={6}>
                  <div className="viewbtn">
                    <Button
                      style={{
                        cursor: "pointer",
                        // marginTop: "32px",
                        backgroundColor: "#FF814A",
                        borderRadius: "10px",
                        border: "none",
                        width: "186px",
                        height: "53.63px",
                      }}
                      // onClick={bookTickets}
                    >
                      Book Tickets
                    </Button>
                  </div>
                </Col>
              </Row> */}

              {/* Search Field */}
              <Row style={{ marginTop: "20px" }}>
                <Col sm={12} md={12}>
                  {/* <div className="d-flex" style={{ position: "relative" }} onClick={gotoTickets_sraech} >
                    <Form.Control
                      type="text"
                      name="search"
                      placeholder="Search Tickets"
                      style={{ marginTop: "3px", width: "823px", height: "70px" }}

                    />
                    <button
                      className="form__search-btn"
                      type="button"
                      style={{
                        position: "absolute",
                        top: "35px",
                        right: 0,
                        left: "78%",
                        background: "none",
                        border: "none",
                      }}
                    >
                      <BsSearch style={{ marginTop: -20 }} color="grey" size="25px" />
                    </button>
                  </div> */}
                </Col>
              </Row>
            </Container>
            {/* <div className="pt-4">
              <Container>
                <TravellerTicket />
              </Container>
            </div> */}
          </div>
        </Container>
      </Container>
     


     

      <div fluid="true" className="d-md-none">
        <div fluid="true" style={{ padding: 0, margin: 0 }}></div>
        
      <div
        style={{
          // backgroundColor: "black",
          color: "white",
          // height: "500px",
        }}
      >
        <div style={{ flexDirection: "row" }}>
          <Col md={6} style={{ position: "relative" }}>
            <div>
              <div className="heritage_walk">
                <Image
                  src={heritage_walk}
                  alt="Heritage Walk"
                  style={{ borderRadius: "0" }}
                />
                <span
                  className="heritage_walk_text"
                  style={{ fontSize: "34px", lineHeight: "40px" }}
                >
                  Heritage Walk{" "}
                  <Button
                    onClick={() => setModalShow(true)}
                    className="makebooking-btn "
                  >
                    Know More
                  </Button>
                </span>
              </div>
            </div>
          </Col>
          <Col className="p-3">
            <div
              style={{
                paddingBlock: "34px",
                backgroundColor: "#2c2c2c",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <div className="bookings-div px-3">
                <svg
                  width="75"
                  height="50"
                  viewBox="0 0 75 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 22.5C16.6667 16.9772 21.1438 12.5 26.6667 12.5H48.3333C53.8562 12.5 58.3333 16.9772 58.3333 22.5V27.5C58.3333 33.0228 53.8562 37.5 48.3333 37.5H26.6667C21.1438 37.5 16.6667 33.0228 16.6667 27.5V22.5ZM68.75 25C68.75 30.4223 75 35.6456 75 41.0679V43.75C75 47.2018 72.2018 50 68.75 50H6.25C2.79818 50 0 47.2018 0 43.75V41.0679C0 35.6456 6.25 30.4223 6.25 25C6.25 19.5777 0 14.3544 0 8.93212V6.25C0 2.79818 2.79818 0 6.25 0H68.75C72.2018 0 75 2.79818 75 6.25V8.93212C75 14.3544 68.75 19.5777 68.75 25ZM62.5 11.4583C62.5 9.73242 61.1009 8.33333 59.375 8.33333H15.625C13.8991 8.33333 12.5 9.73242 12.5 11.4583V38.5417C12.5 40.2676 13.8991 41.6667 15.625 41.6667H59.375C61.1009 41.6667 62.5 40.2676 62.5 38.5417V11.4583Z"
                    fill="#0FA453"
                  />
                </svg>
                <h3 className="pt-3 text-white">Bookings</h3>
                <p>
                  Book bus tickets for your favorite destination  
                </p>
              </div>
              <Button
                className="makebooking-btn btn-primary-tb"
                // style={{ backgroundColor: "#0FA453", color: "white" }}
                onClick={onButtonclick}
              >
              Book Bus Ticket 
              </Button>
              {/* <div style={{ width: "266px", height: "487px", marginLeft: "42px", marginBlockStart: "8px" }}>
                    <Image className="img-fluid" src={manWithMobileMob} />
                  </div> */}
            </div>
          </Col>
          <Col></Col>
        </div>
      </div>

      {/*Tictets*/}
      <Container>
        <div className="ticket-div py-5">
          <Row>
            {/* <Col sm={12} md={12}>
              <div>
                <h3 className="ml-5">
                  <b>Book Tickets</b>
                </h3>
                <p>Click on the ticket type you wish to book</p>
              </div>
            </Col> */}

            {/* <Col sm={6} md={6}>
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
                </Col> */}
          </Row>
          <div className="pt-4">
            <Container>
              <h4>{/* <b>Recent Tickets</b> */}</h4>
              {/* <TravellerTicketMobile /> */}
            </Container>
          </div>
          {/* <div className="viewbtn">
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
                  Book Now
                </Button>
              </div> */}
        </div>
      </Container>
        </div>
        <Footer />

    </>
  );
};

export default Interest;
