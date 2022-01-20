import React, { useEffect, useState } from "react";
import { Button, Row, Col, Container, Image } from "react-bootstrap";
// import Salyimg from "../../assets/img/Saly-1.png";
// import Layer11 from "../../assets/img/hil.svg";
// import Layer12 from "../../assets/img/adivash.svg";
// import doodle1 from "../../assets/img/doodle.png";
import "../../assets/css/saly.css";
import { Link, useHistory } from "react-router-dom";
import TravellerTicket from "./TravellerTicket";
import TravellerTicketMobile from "./TravellerTicketMobile";
import { API_PATH } from "../../Path/Path";
import Carousel from "react-multi-carousel";
import { toast, ToastContainer } from "react-toastify";
// import manWithMobile from "../../assets/img/Saly-14@2x.png"
import manWithMobile2 from "../../assets/img/Saly-14new.png";
import heritage_walk from "../../assets/img/heritage_walk.png";
import manWithMobileMob from "../../assets/img/Saly-14-mobile.png";
import adventure from "../../assets/img/bg_12.jpg";
import { useSelector, useDispatch } from "react-redux";
import {
  setPercentages,
  setQuestions,
  setQuizEnded,
  setQuizStarted,
} from "../../redux/actions";
import HeritageWalkModal from "../../components/modal/HeritageWalkModal";
import SeoData from '../../SeoData.json'


function Saly() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [destinations, setDestinations] = useState([]);
  const [destinationsByLocation, setDestinationsByLocation] = useState([]);
  const [packages, setPackages] = useState([]);
  const [destinationsByPersonality, setDestinationsByPersonality] = useState(
    []
  );
  const [packagesByPersonality, setPackagesByPersonality] = useState([]);
  // const [location, setLoation] = useState([]);
  const [location, setLoation] = useState([]);

  const getCurrentLocation = async () => {
    await window.navigator.geolocation.getCurrentPosition((pos) => {
      setLoation(pos.coords);
    });
  };



  useEffect(() => {
    getCurrentLocation();

    document.title = SeoData.home.page_title || 'Travel Bastar';
    document.querySelector("meta[name='description']").setAttribute('content', (SeoData.home.meta_description || ''));
    document.querySelector("meta[name='keywords']").setAttribute('content', (SeoData.home.meta_keywords || ''));
  }, []);
  const onButtonclick = () => {
    console.log("object");
    history.push("plan");
  };
  const dmPassId = localStorage.getItem("dm_pass_id");

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
      });
    }
  };

  useEffect(() => {
    getDestinations();
    getPackages();
    getDestinationsByLocation();
  }, [location]);

  const getDestinations = () => {
    fetch(API_PATH + "/api/v1/destinations/list")
      .then((response) => response.json())
      .then((json) => {
        setDestinations(json.data);
      })
      .catch((e) => console.log(e));
  };

  const getDestinationsByLocation = () => {
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
        if (json.data !== undefined) setDestinationsByLocation(json.data);
      })
      .catch((e) => console.log(e));
  };

  const getPackages = () => {
    fetch(API_PATH + "/api/v1/packages/list")
      .then((response) => response.json())
      .then((json) => {
        if (json.data !== undefined) setPackages(json.data);
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
  const responsiveThree = {
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
      items: 1.7,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const responsiveFour = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.5,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const responsiveTop = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 5,
      slidesToSlide: 2,
    },
    desktopSmall: {
      breakpoint: { max: 1200, min: 980 },
      items: 4,
      slidesToSlide: 2,
    },
    tabletBig: {
      breakpoint: { max: 980, min: 786 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 786, min: 464 },
      items: 2.4,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 380 },
      items: 2.2,
      slidesToSlide: 2,
    },
    mobileSmall: {
      breakpoint: { max: 380, min: 0 },
      items: 1.8,
      slidesToSlide: 1,
    },
  };

  const responsiveExplore = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
      slidesToSlide: 2,
    },
    desktopSmall: {
      breakpoint: { max: 1200, min: 980 },
      items: 3,
      slidesToSlide: 2,
    },
    tabletBig: {
      breakpoint: { max: 980, min: 786 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 786, min: 464 },
      items: 2.4,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 380 },
      items: 2.2,
      slidesToSlide: 2,
    },
    mobileSmall: {
      breakpoint: { max: 380, min: 0 },
      items: 1.8,
      slidesToSlide: 1,
    },
  };
  const viewDetails = (value) => {
    history.push({
      pathname: `/destination_details/${value.title}`,
      id: value._id,
    });
  };

  const bookTickets = () => {
    history.push("/plan");
  };

  // for quiz
  const { questions, percentages, quizStarted, quizAnswered, quizEnded } =
    useSelector((state) => state.quizReducer);

  const onAnswer = (i, value) => {
    let newQ = [...questions];
    newQ[i] = { ...newQ[i], is_true: value, is_current: false };
    if (i + 1 !== newQ.length) {
      newQ[i + 1] = { ...newQ[i + 1], is_current: true };
    } else {
      dispatch(setQuizEnded(true));
    }
    let leisure = 0,
      tot_leisure = 0,
      leisure_per = 0;
    let adventure = 0,
      tot_adventure = 0,
      adventure_per = 0;
    let religious = 0,
      tot_religious = 0,
      religious_per = 0;
    let culture = 0,
      tot_culture = 0,
      culture_per = 0;
    newQ.map((item) => {
      switch (item.type) {
        case "leisure":
          if (item.is_true) {
            leisure++;
          }
          tot_leisure++;
          break;

        case "adventure":
          if (item.is_true) {
            adventure++;
          }
          tot_adventure++;
          break;

        case "religious":
          if (item.is_true) {
            religious++;
          }
          tot_religious++;
          break;

        case "culture":
          if (item.is_true) {
            culture++;
          }
          tot_culture++;
          break;
        default:
          break;
      }
    });
    leisure_per = Math.floor((leisure / tot_leisure) * 100);
    adventure_per = Math.floor((adventure / tot_adventure) * 100);
    religious_per = Math.floor((religious / tot_religious) * 100);
    culture_per = Math.floor((culture / tot_culture) * 100);
    let newPer = [...percentages];
    newPer[0].percentages = leisure_per;
    newPer[1].percentages = adventure_per;
    newPer[2].percentages = religious_per;
    newPer[3].percentages = culture_per;
    dispatch(setQuestions(newQ));
    dispatch(setPercentages(newPer));
  };

  const getPersonalityResult = () => {
    let data = {};
    percentages.map((item) => {
      data = { ...data, [item.type]: item.percentages };
    });
    getDestinationsByPersonality(data);
    getPackagesByPersonality(data);
  };
  // By Personality
  const getDestinationsByPersonality = (data) => {
    fetch(API_PATH + "/api/v1/destinations/sort", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.data !== undefined) setDestinationsByPersonality(json.data);
      })
      .catch((e) => console.log(e));
  };

  const getPackagesByPersonality = (data) => {
    fetch(API_PATH + "/api/v1/packages/sort", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.data !== undefined) setPackagesByPersonality(json.data);
      })
      .catch((e) => console.log(e));
  };
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Container
        fluid="true"
        className="d-none d-md-block"
        style={{ padding: 0, margin: 0 }}
      >
        {quizEnded ? null : (
          <>
          </>
        )}

        <div
          style={{ paddingTop: "4%", textAlign: "center" }}
          className={`personality_div ${quizStarted ? "show" : ""}`}
        >
          <div className="homepage-heading">
            <h1>Your Travel Personality</h1>
            <p>
              Wow! You are an avid traveller! Here’s what your personality looks
              like.{" "}
            </p>
          </div>
          <Container className="type_container">
            {percentages.map((item, key) => (
              <div key={key} className="type_card">
                <div
                  className="type_percent"
                  style={{
                    backgroundColor: `${item.percentages >= 30 && item.percentages < 50
                      ? "#12CBF3"
                      : item.percentages >= 50 && item.percentages < 67
                        ? "#F3D224"
                        : item.percentages >= 67 && item.percentages <= 100
                          ? "#1CBD40"
                          : "#FB7373"
                      }`,
                  }}
                >
                  {item.percentages}%
                </div>
                <div className="type_type">
                  {`${item.type === "religious" ? "heritage" : item.type}`}
                </div>
                <Link
                  to={`/explore/${item.type === "religious" ? "heritage" : item.type
                    }`}
                  className="type_link"
                >
                  Explore &gt;
                </Link>
              </div>
            ))}
          </Container>
          {quizAnswered ? (
            quizEnded ? (
              <Button
                className="btn-primary-tb my-3 py-3 px-5"
                onClick={getPersonalityResult}
              >
                Get list of Destinations and Curated Experiences
              </Button>
            ) : (
              <Button className="btn-primary-tb my-3 py-3 px-5" disabled>
                Get list of Destinations and Curated Experiences
              </Button>
            )
          ) : null}

          {/* <h1>Curated for you</h1> */}
        </div>
        {quizStarted ? (
          <>
            {packagesByPersonality.length > 0 ? (
              <div
                style={{
                  backgroundColor: "black",
                  color: "#fff",
                  height: "521px",
                  marginTop: "35px",
                }}
              >
                <Container style={{ paddingTop: "4%", marginBlockEnd: "1em" }}>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h2
                        className="package__title"
                        style={{ fontSize: "28px", fontFamily: "Inter", color: "#fff" }}
                      >
                        <span>Curated</span> Experiences
                      </h2>
                      <h6
                        style={{
                          cursor: "pointer",
                          fontWeight: "normal",
                          color: "#fff",
                          marginRight: "3em",
                          paddingBlockEnd: "1em",
                        }}
                        onClick={() => history.push("/curatedexperiences")}
                        className="package__title pt-5"
                      >
                        View All
                      </h6>
                    </div>
                  </div>
                  <Carousel
                    ssr
                    partialVisible
                    itemClass="image-item"
                    responsive={responsiveTwo}
                  >
                    {packagesByPersonality.length > 0
                      ? packagesByPersonality.map((item, key) => {
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
                              alt={item.title}
                            />
                            <div>
                              <h6 style={{ color: "#fff" }} className="packages__block-title_ mt-3 mb-0">
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
                </Container>
              </div>
            ) : null}

            {destinationsByPersonality?.length > 0 ? (
              <Container className="mb-4">
                <div className="mb-4">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h2 className="package__title pt-5">
                      <span>Popular</span> Destinations
                    </h2>
                  </div>
                </div>

                <Carousel
                  ssr
                  partialVisible
                  itemClass="image-item"
                  responsive={responsiveTwo}
                >
                  {destinationsByPersonality?.map((item, key) => {
                    return (
                      <div key={key} onClick={() => viewDetails(item)}>
                        <Image
                          className="homepage"
                          draggable={false}
                          style={{ width: "100%", height: "100%" }}
                          src={item.upload_images}
                          alt={item.title}
                        />

                        <div style={{ color: "" }} className="package__trip">
                          <h6 className="packages__block-title mt-3 mb-0">
                            {item.title}
                          </h6>
                          <small className="packages__block-subtitle">
                            {item.sub_title}
                          </small>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              </Container>
            ) : null}
          </>
        ) : (
          <>
            {/* <div className={`destination_div ${quizEnded ? "show" : ""}`}>
              <div className="homepage-top_title">
                <h1 className="top_title">Top Destinations for you</h1>
              </div>
              <Container className="">
                <Carousel
                  partialVisible
                  itemClass="image-item home top"
                  responsive={responsiveTop}
                  className="pt-4"
                >
                  {destinations.length ? (
                    destinations.splice(0, 5).map((item, key) => {
                      return (
                        <div key={key} onClick={() => viewDetails(item)}>
                          <Image
                            draggable={false}
                            style={{ width: "192px", height: "186px" }}
                            src={item.upload_images}
                            alt={item.title}
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
              </Container>
            </div>

            <div className="explore_div">
              <div className="homepage-heading">
                <h1>Explore Bastar</h1>
                <p>Check out the best tourism destinations around Bastar</p>
              </div>
              <Container>
                <Carousel
                  partialVisible
                  itemClass="image-item category"
                  responsive={responsiveExplore}
                  className="pt-4"
                >
                  <div>
                    <Link
                      to="/explore/leisure"
                      style={{ textDecoration: "none" }}
                    >
                      <Image
                        draggable={false}
                        //  style={{ width: "250px", height: "150px" }}
                        src="https://travelbastar.s3.amazonaws.com/package-images/Tritha.jpg"
                        alt={"Leisure"}
                      />
                      <div style={{ color: "black" }} className="package__trip">
                        <h6 className="packages__block-title mt-3 text-center">
                          Leisure
                        </h6>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/explore/adventure"
                      style={{ textDecoration: "none" }}
                    >
                      <Image
                        draggable={false}
                        //  style={{ width: "150px", height: "150px" }}
                        src={adventure}
                        alt={"Adventure"}
                      />
                      <div style={{ color: "black" }} className="package__trip">
                        <h6 className="packages__block-title mt-3 text-center">
                          Adventure
                        </h6>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/explore/heritage"
                      style={{ textDecoration: "none" }}
                    >
                      <Image
                        draggable={false}
                        //  style={{ width: "150px", height: "150px" }}
                        src="https://travelbastar.s3.amazonaws.com/destination-images/Danteshwari%20Temple,%20Jagdalpur.jpg"
                        alt={"Heritage"}
                      />
                      <div style={{ color: "black" }} className="package__trip">
                        <h6 className="packages__block-title mt-3 text-center">
                          Heritage
                        </h6>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/explore/culture"
                      style={{ textDecoration: "none" }}
                    >
                      <Image
                        draggable={false}
                        //  style={{ width: "150px", height: "150px" }}
                        src="https://travelbastar.s3.amazonaws.com/destination-images/Bastar%20Shiv%20Temple.jpg"
                        alt={"Culture"}
                      />
                      <div style={{ color: "black" }} className="package__trip">
                        <h6 className="packages__block-title mt-3 text-center">
                          Culture
                        </h6>
                      </div>
                    </Link>
                  </div>
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
                      outline: "none",
                      border: "none",
                      borderRadius: "10px",
                      marginBottom: "10px",
                      height: "59.59px",
                    }}
                  >
                    View all Destinations
                  </Button>
                </div>
              </Container>
            </div> */}
          </>
        )}


        {!quizStarted ? (
          <>
            <div
              style={{
                backgroundColor: "black",
                color: "#fff",
                height: "521px",
              }}
            >
              <Container style={{ paddingTop: "4%", marginBlockEnd: "1em" }}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h2
                      className="package__title"
                      style={{ fontSize: "28px", fontFamily: "Inter", color: "#fff" }}
                    >
                      <span>Curated</span> Experiences
                    </h2>
                    <h6
                      style={{
                        cursor: "pointer",
                        fontWeight: "normal",
                        marginRight: "3em",
                        paddingBlockEnd: "1em",
                        color: "#fff",
                      }}
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
                    responsive={responsiveTwo}
                  >
                    {packages.length > 0
                      ? packages.map((item, key) => {
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
                              alt={item.title}
                            />
                            <div>
                              <h6 style={{ color: "#fff" }} className="packages__block-title_ mt-3 mb-0">
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

            <Container className="mb-4">
              <div className="mb-4">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h2 className="package__title pt-5">
                    <span>Nearest</span> to you
                  </h2>
                </div>
              </div>

              {destinationsByLocation?.length > 0 ? (
                <Carousel
                  ssr
                  partialVisible
                  itemClass="image-item"
                  responsive={responsiveTwo}
                >
                  {destinationsByLocation?.map((item, key) => {
                    return (
                      <div key={key} onClick={() => viewDetails(item)}>
                        <Image
                          className="homepage"
                          draggable={false}
                          style={{ width: "100%", height: "100%" }}
                          src={item.upload_images}
                          alt={item.title}
                        />

                        <div style={{ color: "" }} className="package__trip">
                          <h6 className="packages__block-title mt-3 mb-0">
                            {item.title}
                          </h6>
                          <small className="packages__block-subtitle">
                            {item.sub_title}
                          </small>
                        </div>
                      </div>
                    );
                  })}
                </Carousel>
              ) : null}
            </Container>
          </>
        ) : null}
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
                  <h3>Bookings</h3>
                  <p>
                    Book tickets for Bus,Location wise Tickets and Traveller
                    Passes
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
                  Step 1 - Book Travel Pass
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
              <Row className="align-items-center">
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
            <div className="pt-4">
              <Container>
                <h4>{/* <b>Recent Tickets</b> */}</h4>
                <TravellerTicket />
              </Container>
            </div>
          </div>
        </Container>
      </Container>


      {/*mobile-view*/}
      <div fluid="true" className="d-md-none">
        <div fluid="true" style={{ padding: 0, margin: 0 }}>
          {quizEnded ? null : (
            <>
            </>
          )}
          <div
            style={{ paddingTop: "4%" }}
            className={`personality_div ${quizStarted ? "show" : ""}`}
          >
            <div className="homepage-heading">
              <h1 style={{ fontSize: "25px", lineHeight: "30px" }}>
                Your Travel Personality
              </h1>
              <p style={{ fontSize: "15px", lineHeight: "18px" }}>
                Wow! You are an avid traveller! Here’s what your personality
                looks like.{" "}
              </p>
            </div>
            <Container className="type_container">
              {percentages.map((item, key) => (
                <div key={key} className="type_card">
                  <div
                    className="type_percent"
                    style={{
                      backgroundColor: `${item.percentages >= 30 && item.percentages < 50
                        ? "#12CBF3"
                        : item.percentages >= 50 && item.percentages < 67
                          ? "#F3D224"
                          : item.percentages >= 67 && item.percentages <= 100
                            ? "#1CBD40"
                            : "#FB7373"
                        }`,
                    }}
                  >
                    {item.percentages}%
                  </div>
                  <div className="type_type">
                    {`${item.type === "religious" ? "heritage" : item.type}`}
                  </div>
                  <Link
                    to={`/explore/${item.type === "religious" ? "heritage" : item.type
                      }`}
                    className="type_link"
                  >
                    Explore &gt;
                  </Link>
                </div>
              ))}
            </Container>
            {quizAnswered ? (
              quizEnded ? (
                <Button
                  className="btn-primary-tb my-3"
                  onClick={getPersonalityResult}
                >
                  Get list of Destinations and Curated Experiences
                </Button>
              ) : (
                <Button className="btn-primary-tb my-3" disabled>
                  Get list of Destinations and Curated Experiences
                </Button>
              )
            ) : null}
          </div>

          <Row className=" saly_div px-0 pt-3 w-100 m-0">
            {/* <Col xs={12} md={6}>
              <div className="rocket-image" style={{ textAlign: "center" }}>
                <img src={Salyimg} alt="saly" style={{ width: "80%" }} />
              </div>
            </Col> */}
            {
              // !quizEnded ? <Col xs={12} md={6}>
              //   <div style={{ padding: "0px" }}>
              //     {/* <div className="explore">
              //     <h2 className="explore_div">Explore Bastar</h2>
              //     <p>Check out the best tourism destinations around Bastar</p>
              //   </div> */}
              //     <div style={{ width: "100%", height: "209px" }}>
              //       <iframe
              //         style={{ borderRadius: "10px" }}
              //         // className="search_view"
              //         width="100%"
              //         height="100%"
              //         src="https://www.youtube.com/embed/V_JZZ1glvkA"
              //         title="YouTube video player"
              //         frameBorder="0"
              //         // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              //         allowFullScreen
              //       ></iframe>
              //     </div>
              //   </div>
              // </Col>
              //   :
              //   null
            }
            {/*<Col xs={12} md={6} className="pt-0">
              <div style={{ padding: "20px" }}>
                <Carousel
                  partialVisible
                  itemClass="image-item"
                  responsive={responsiveThree}
                >
                  {destinations.length ? (
                    destinations.map((item, key) => {
                      return (
                        <div key={key} onClick={() => viewDetails(item)} >
                          <Image
                            draggable={false}
                            // style={{ paddingRight: "10px", borderRadius: "10px" }}
                            style={{ width: "150px", height: "150px", borderRadius: "10px" }}
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
                <div className="travel_home_btn mt-1 mb-3 ">
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
            </Col> */}
          </Row>
          {quizStarted ? (
            <>
              {packagesByPersonality.length > 0 ? (
                <div
                  style={{
                    backgroundColor: "black",
                    color: "#fff",
                    height: "421px",
                    marginTop: "35px",
                  }}
                >
                  <Container
                    style={{ paddingTop: "4%", marginBlockEnd: "1em" }}
                  >
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <h2
                          className="package__title"
                          style={{ fontSize: "24px", fontFamily: "Inter" }}
                        >
                          <span>Curated</span> Experiences
                        </h2>
                        <h6
                          style={{
                            cursor: "pointer",
                            fontWeight: "normal",
                            marginRight: "3em",
                            paddingBlockEnd: "0",
                          }}
                          onClick={() => history.push("/curatedexperiences")}
                          className="package__title pt-3"
                        >
                          View All
                        </h6>
                      </div>
                    </div>
                    <Carousel
                      ssr
                      partialVisible
                      itemClass="image-item"
                      responsive={responsiveTwo}
                    >
                      {packagesByPersonality.length > 0
                        ? packagesByPersonality.map((item, key) => {
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
                                alt={item.title}
                              />
                              <div>
                                <h6 style={{ color: "#fff" }} className="packages__block-title_ mt-3 mb-0">
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
                  </Container>
                </div>
              ) : null}

              {destinationsByPersonality?.length > 0 ? (
                <Container className="mb-4">
                  <div className="mb-4">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h2 className="package__title pt-5">
                        <span>Popular</span> Destinations
                      </h2>
                    </div>
                  </div>

                  <Carousel
                    ssr
                    partialVisible
                    itemClass="image-item"
                    responsive={responsiveTwo}
                  >
                    {destinationsByPersonality?.map((item, key) => {
                      return (
                        <div key={key} onClick={() => viewDetails(item)}>
                          <Image
                            className="homepage"
                            draggable={false}
                            style={{ width: "100%", height: "100%" }}
                            src={item.upload_images}
                            alt={item.title}
                          />

                          <div style={{ color: "" }} className="package__trip">
                            <h6 className="packages__block-title mt-3 mb-0">
                              {item.title}
                            </h6>
                            <small className="packages__block-subtitle">
                              {item.sub_title}
                            </small>
                          </div>
                        </div>
                      );
                    })}
                  </Carousel>
                </Container>
              ) : null}
            </>
          ) : (
            <>
              {/* <div
                className={`destination_div px-0 ${quizEnded ? "show" : ""}`}
              >
                <div className="homepage-top_title">
                  <h1 className="top_title">Top Destinations for you</h1>
                </div>
                <Container className="">
                  <Carousel
                    partialVisible
                    itemClass="image-item home top"
                    responsive={responsiveTop}
                    className="pt-4"
                  >
                    {destinations.length ? (
                      destinations.splice(0, 5).map((item, key) => {
                        return (
                          <div key={key} onClick={() => viewDetails(item)}>
                            <Image
                              draggable={false}
                              style={{ width: "192px", height: "186px" }}
                              src={item.upload_images}
                              alt={item.title}
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
                </Container>
              </div>

              <div className="explore_div px-0">
                <div className="explore_div-heading">
                  <h1>Explore Bastar</h1>
                  <p>Check out the best tourism destinations around Bastar</p>
                </div>
                <Container>
                  <Carousel
                    partialVisible
                    itemClass="image-item category"
                    responsive={responsiveExplore}
                    className="pt-4"
                  >
                    <div>
                      <Link
                        to="/explore/leisure"
                        style={{ textDecoration: "none" }}
                      >
                        <Image
                          draggable={false}
                          //  style={{ width: "250px", height: "150px" }}
                          src="https://travelbastar.s3.amazonaws.com/package-images/Tritha.jpg"
                          alt={"Leisure"}
                        />
                        <div
                          style={{ color: "black" }}
                          className="package__trip"
                        >
                          <h6 className="packages__block-title mt-3 text-center">
                            Leisure
                          </h6>
                        </div>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/explore/adventure"
                        style={{ textDecoration: "none" }}
                      >
                        <Image
                          draggable={false}
                          //  style={{ width: "150px", height: "150px" }}
                          src={adventure}
                          alt={"Adventure"}
                        />
                        <div
                          style={{ color: "black" }}
                          className="package__trip"
                        >
                          <h6 className="packages__block-title mt-3 text-center">
                            Adventure
                          </h6>
                        </div>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/explore/heritage"
                        style={{ textDecoration: "none" }}
                      >
                        <Image
                          draggable={false}
                          //  style={{ width: "150px", height: "150px" }}
                          src="https://travelbastar.s3.amazonaws.com/destination-images/Danteshwari%20Temple,%20Jagdalpur.jpg"
                          alt={"Heritage"}
                        />
                        <div
                          style={{ color: "black" }}
                          className="package__trip"
                        >
                          <h6 className="packages__block-title mt-3 text-center">
                            Heritage
                          </h6>
                        </div>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/explore/culture"
                        style={{ textDecoration: "none" }}
                      >
                        <Image
                          draggable={false}
                          //  style={{ width: "150px", height: "150px" }}
                          src="https://travelbastar.s3.amazonaws.com/destination-images/Bastar%20Shiv%20Temple.jpg"
                          alt={"Culture"}
                        />
                        <div
                          style={{ color: "black" }}
                          className="package__trip"
                        >
                          <h6 className="packages__block-title mt-3 text-center">
                            Culture
                          </h6>
                        </div>
                      </Link>
                    </div>
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
                        outline: "none",
                        border: "none",
                        borderRadius: "10px",
                        marginBottom: "10px",
                        height: "59.59px",
                      }}
                    >
                      View all Destinations
                    </Button>
                  </div>
                </Container>
              </div> */}
            </>
          )}



          {/* Popular PAckages */}

          {!quizStarted ? (
            <>
              <Container style={{ backgroundColor: "black", color: "#fff" }}>
                <div className="mb-5 mt-5">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h2 className="package__title pt-5" style={{ color: "#fff" }}>
                      <span>Curated</span> Experiences
                    </h2>
                    <h6
                      style={{ cursor: "pointer", color: "#fff" }}
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
                    responsive={responsiveTwo}
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
                              alt={item.title}
                            />
                            <div>
                              <h6 style={{ color: "#fff" }} className="packages__block-title_ mt-3 mb-0">
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

              <Container className="mb-4 nearest_div">
                <div className="mb-4">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h2 className="package__title pt-5">
                      <span>Nearest</span> to you
                    </h2>
                  </div>
                </div>

                {destinationsByLocation?.length > 0 ? (
                  <Carousel
                    ssr
                    partialVisible
                    itemClass="image-item"
                    responsive={responsiveFour}
                  >
                    {destinationsByLocation?.map((item, key) => {
                      return (
                        <div key={key} onClick={() => viewDetails(item)}>
                          <Image
                            className="homepagemobile"
                            draggable={false}
                            style={{ width: "100%", height: "100%" }}
                            src={item.upload_images}
                            alt={item.title}
                          />

                          <div style={{ color: "" }} className="package__trip">
                            <h6 className="packages__block-title mt-3 mb-0">
                              {item.title}
                            </h6>
                            <small className="packages__block-subtitle">
                              {item.sub_title}
                            </small>
                          </div>
                        </div>
                      );
                    })}
                  </Carousel>
                ) : null}
              </Container>

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
                        <h3 className="pt-3">Bookings</h3>
                        <p>
                          Book tickets for Bus,Location wise Tickets and Traveller
                          Passes
                        </p>
                      </div>
                      <Button
                        className="makebooking-btn btn-primary-tb"
                        // style={{ backgroundColor: "#0FA453", color: "white" }}
                        onClick={onButtonclick}
                      >
                        Step 1 - Book Travel Pass
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
                    <Col sm={12} md={12}>
                      <div>
                        <h3 className="ml-5">
                          <b>Book Tickets</b>
                        </h3>
                        <p>Click on the ticket type you wish to book</p>
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
                      <h4>{/* <b>Recent Tickets</b> */}</h4>
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
            </>
          ) : null}
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
      <HeritageWalkModal
        show={modalShow}
        handleClose={() => setModalShow(false)}
      />
    </>
  );
}

export default Saly;
