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
import Salyimg from "../../assets/img/Saly-1.png";
import Layer11 from "../../assets/img/hil.svg";
import Layer12 from "../../assets/img/adivash.svg";
import doodle1 from "../../assets/img/doodle.png";
import "../../assets/css/saly.css";
import Inform from "./Footer";
import { useHistory } from "react-router-dom";
import TravellerCard from "./TravellerCard";
import TravellerTicket from "./TravellerTicket";
import TravellerTicketMobile from "./TravellerTicketMobile";
import { API_PATH } from "../../Path/Path";
import Carousel from "react-multi-carousel";
import SearchFelid from "./SearchFelid";
import { toast, ToastContainer } from 'react-toastify'
import { BsSearch } from "react-icons/bs";
import manWithMobile from "../../assets/img/Saly-14@2x.png"
import manWithMobile2 from "../../assets/img/Saly-14new.png"

function Saly() {
  const history = useHistory();
  const [destinations, setDestinations] = useState([]);
  const [packages, setPackages] = useState([]);
  const [location, setLoation] = useState([]);

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
    getPackages();
  }, [location]);

  const getDestinations = () => {
    fetch(API_PATH + "/api/v1/destinations/list")
      .then((response) => response.json())
      .then((json) => {
        setDestinations(json.data);
        console.log("datatata", json.data);
      })
      .catch((e) => console.log(e));
  };

  // const getPackages = () => {
  //   fetch(API_PATH + "/api/v1/packages/location", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       latitude: location.latitude,
  //       longitude: location.longitude,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       if (json.data !== undefined) {
  //         console.log("json.data", json.data)
  //         setPackages(json.data);
  //       }
  //     })
  //     .catch((e) => console.log(e));
  // };

  const getPackages = () => {
    fetch(API_PATH + "/api/v1/packages/list")
      .then((response) => response.json())
      .then((json) => {
        if (json.data !== undefined) setPackages(json.data);
        console.log(json.data);
      })
      .catch((e) => console.log(e));
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  const responsiveTwo = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
  const viewDetails = (value) => {
    history.push({
      pathname: `/destination_details/${value.title}`,
      id: value._id,
    });
  }

  const bookTickets = () => {
    history.push('/select-booking')
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
            <div className="rocket-image"
              style={{
                position: "absolute",
                width: "689px",
                minHeight: "590px",
                top: "14%",
                left: "4%"
              }}>
              <img src={Salyimg} alt="saly" style={{ width: "100%" }} />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div style={{paddingTop:"8%"}}>

              <div style={{ width: "650px", height: "389.85px" }}>
                <iframe
                  style={{ borderRadius: "10px" }}
                  // className="search_view"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/V_JZZ1glvkA"
                  title="YouTube video player"
                  frameborder="0"
                  // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>


            </div>
          </Col>
        </Row>

        <div style={{paddingTop:"7%"}} >
          <div className="homepage-heading">
            <h1>Explore Bastar</h1>
            <p>Check out the best tourism destinations around Bastar</p>
          </div>
          <Container>
            <Carousel
              partialVisbile
              itemClass="image-item home"
              responsive={responsive}
              className="pt-4"
            >
              {destinations.length ? (
                destinations.map((item, key) => {
                  return (
                    <div key={key} onClick={() => viewDetails(item)}>
                      <Image
                        draggable={false}
                        //  style={{ width: "150px", height: "150px" }}
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
                  marginTop: "48px",
                  justifyContent: "center",
                  backgroundColor: "#0FA453",
                  color: "white",
                  fontSize: "17x",
                  lineHeight: "21px",
                  padding: 15,
                  width: "254px",
                  outline: 'none',
                  border: 'none',
                  borderRadius: "10px",
                  marginBottom: "70px",
                  height: "59.59px"
                }}
              >
                View all Destinations
              </Button>
            </div>
          </Container>
        </div>


        <div style={{ backgroundColor: "black", color: "white", height: "289px", marginTop: "81px" }} >
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
        </div>

        {/*Tictets*/}

        <Container style={{ width: "1010px" }}>
          <div className="ticket-div py-5">
            <Container style={{ marginLeft: "37px" }}>
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
                      // onClick={gotoTickets_sraech}
                      onClick={bookTickets}

                    >
                      Book Tickets
                    </Button>
                  </div>
                </Col>

              </Row>


              {/* Search Field */}


              <Row style={{ marginTop: "20px" }}>
                <Col sm={12} md={12}>
                  <div className="d-flex" style={{ position: "relative" }} onClick={gotoTickets_sraech} >
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
                  </div>
                </Col>
              </Row>
            </Container>
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

        <div style={{ backgroundColor: "black", color: "#fff", height: "521px" }}>
          <Container style={{ paddingTop: "4%" }}>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h2 className="package__title" style={{ fontSize: "28px", fontFamily: 'Inter', paddingLeft: "32px" }}>
                  <span>Curated</span> Experiences
                </h2>
                <h6
                  style={{ cursor: "pointer",fontWeight:"normal" }}
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
                partialVisbile
                itemClass="image-item"
                responsive={responsiveTwo}
              >
                {packages.length > 0
                  ? packages.map((item, key) => {
                    console.log("items:::::::", item);
                    return (
                      <div
                        // style={{width:"376px", height:"237px"}}
                        key={key}
                        onClick={() =>
                          history.push({
                            pathname: `/packages_details/${item.title}`,
                            item: item._id,
                          })
                        }
                      >
                        <Image
                          className="homepage"
                          draggable={false}
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
                            <h6
                            style={{
                              // background: "#BEBEBE",
                              display: "inline",
                              padding: "3px",
                              borderRadius: "4px",
                              fontSize: "14px",
                            }}
                          >
                            {item.category.category_name}
                          </h6>
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
        </div>
        {/* </Container> */}

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
            {/* <Col xs={12} md={6}>
              <div className="rocket-image" style={{ textAlign: "center" }}>
                <img src={Salyimg} alt="saly" style={{ width: "80%" }} />
              </div>
            </Col> */}
            <Col xs={12} md={6} className="pt-0">
              <div style={{ padding: "20px" }}>
                <div className="explore">
                  <h2 className="explore_div">Explore</h2>
                  <p>Check out the best tourism destinations around Bastar</p>
                </div>
                <Carousel
                  partialVisbile
                  itemClass="image-item home"
                  responsive={responsiveTwo}
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                  {/* <div>Item 1</div>
                  <div>Item 2</div>
                  <div>Item 3</div>
                  <div>Item 4</div> */}
                  {destinations.length ? (
                    destinations.map((item, key) => {
                      return (
                        <div key={key} onClick={() => viewDetails(item)} >
                          <Image
                            draggable={false}
                            style={{  paddingRight: "10px", borderRadius: "10px" }}
                            src={item.upload_images}
                          />
                          <div
                            style={{ color: "black" }}
                            className="package__trip"
                          >
                            <h6 className="mt-3" style={{ fontWeight: "bold" }}>{item.title}</h6>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <h1></h1>
                  )}
                </Carousel>
                <div className="travel_home_btn mt-4 mb-3 ">
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
              height: "595px",
            }} >
            <div style={{ flexDirection: "row" }}>
              <Col>
                <div style={{ paddingTop: "100px", textAlign: "center" }}>
                  <div className="bookings-div">
                    <h3>Bookings</h3>
                    <p>Book tickets for Bus,Location wise Tickets and Traveller Passes</p>
                  </div>
                  <Button
                    className="makebooking-btn"
                    // style={{ backgroundColor: "#0FA453", color: "white" }}
                    onClick={onButtonclick}
                  >
                    Step 1 - Book Travel Pass
                  </Button>
                  <div style={{ width: "266px", height: "487px", marginLeft: "42px" }}>
                    <Image className="img-fluid" src={manWithMobile} />
                  </div>
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
                  <h4>
                    {/* <b>Recent Tickets</b> */}
                  </h4>
                  <TravellerTicketMobile />
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

          {/* Popular PAckages */}
          <Container style={{ backgroundColor: "black", color: "#fff" }}>
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
                partialVisbile
                itemClass="image-item"
                responsive={responsiveTwo}
              >
                {packages.length > 0
                  ? packages.map((item, key) => {
                    console.log("items:::::::", item);
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
                            <h6
                            style={{
                            //  background: "#BEBEBE",
                              display: "inline",
                              padding: "3px",
                              borderRadius: "4px",
                              fontSize: "14px",
                            }}
                          >
                            {item.category.category_name}
                          </h6>
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
