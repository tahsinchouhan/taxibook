import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { Container, Row, Col, Image } from "react-bootstrap";
import loc from "../../assets/img/location.svg";
import bg from "../../assets/img/bg_12.jpg";
import GoogleMapReact from "google-map-react";
import ReactPlayer from "react-player";
import { API_PATH } from "../../Path/Path";
import Carousel from "react-multi-carousel";
import { NavLink, useHistory, useParams } from "react-router-dom";
import TravellerTicket from "../travesaly/TravellerTicket";
import { Howl, Howler } from "howler";
import Audio from "../..//assets/audio/Audio.mp3";
import { getAudioJourneyFile } from "../../redux/audioJourney/actions";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { AiOutlinePauseCircle } from "react-icons/ai";
import BookNowForm from "../BookNowForm";

import ReactAudioPlayer from "react-audio-player";

// const audioClip = ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"]

const Marker = () => {
  return <div className="SuperAwesomePin"></div>;
};

const DestinationDetails = (props) => {
  let { name } = useParams();
  const history = useHistory();

  name = name.split("-").join(" ");

  const { user_data } = useSelector((state) => state.loginReducer);
  const [showFormModal, setShowFormModal] = useState(false);

  const [destinations, setDestinations] = useState("");
  const [packagesdata, getPackagesdata] = useState([]);
  const [playAudio, setPlayAudio] = useState(false);

  const [zoom, setZoom] = useState(11);

  const dispatch = useDispatch();

  const getSeoDetails = async (data) => {
    try {
      document.title = data?.data?.seo_title || "Travel Bastar";
      document
        .querySelector("meta[name='description']")
        .setAttribute("content", data?.data?.seo_description || "");
      document
        .querySelector("meta[name='keywords']")
        .setAttribute("content", data?.data?.seo_keywords || "");

      let text = data?.data?.seo[0]
        .replace('<script type="application/ld+json">', "")
        .replace("</script>", "");
      document.querySelector("script[id='seoSchema']").innerHTML = text || "";
    } catch (error) {
      console.log(error);
    }
  };

  const audio = document.getElementById("audio");
  const handleAudio = () => {
    if (audio.paused) {
      setPlayAudio(true);
      audio.play();
    } else {
      setPlayAudio(false);
      audio.pause();
    }
  };

  useEffect(() => {
    // if (props.location.id) {
    //   // console.log("props.location.id",props.location.id)
    //   localStorage.setItem("id", props.location.id);
    //   id = localStorage.getItem("id");
    // } else {
    //   id = localStorage.getItem("id");
    // }
    // getSeoDetails(id)
    getPackages(name);
    getPackagesid();
    window.scrollTo(0, 0);
  }, [props]);

  const getPackages = (name) => {
    fetch(API_PATH + `/api/v1/destinations/${name}`)
      .then((response) => response.json())
      .then((res) => {
        getSeoDetails(res);
        setDestinations(res.data);
      })
      .catch((e) => console.log(e));
  };

  const getPackagesid = () => {
    fetch(API_PATH + "/api/v1/packages/location", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        getPackagesdata(res.data);
        // console.log("getPackagesdata", res.data);
      })
      .catch((e) => console.log(e));
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.5,
      slidesToSlide: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.5,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div
        style={{
          // backgroundImage: `url("${destinations?.upload_images}")`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          // height: 650,
        }}
      >
        <Header />
        <div className="destination_bg_img">
          <Image
            draggable={false}
            // className="img-fluid"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={destinations?.upload_images}
          />
          <Container
            className="destination_header__title d-flex align-items-center"
            style={{ justifyContent: "space-between", marginBottom: "0.8rem" }}
          >
            <h1 className="header__title" style={{ margin: 0, padding: 0 }}>
              <span>{destinations?.title}</span>
            </h1>
            <div
              style={{
                backgroundColor: "#ffe",

                display: "inline-block",
                borderRadius: "50%",
              }}
              onClick={() => handleAudio()}
            >
              {playAudio ? (
                <AiOutlinePauseCircle
                  style={{ fontSize: "3rem", cursor: "pointer" }}
                />
              ) : (
                <AiOutlinePlayCircle
                  style={{ fontSize: "3rem", cursor: "pointer" }}
                />
              )}
            </div>
          </Container>
        </div>
      </div>

      <div className="">
        {destinations && (
          <audio id="audio">
            <source src={destinations.audio[0]} />
          </audio>
        )}
      </div>

      <Container>
        <div className="block pt-3">
          <h4 className="block__title">
            <span>About</span> the Destination
          </h4>
          <p className="pt-2" style={{ whiteSpace: "pre-line" }}>
            {destinations?.description}
          </p>
        </div>
      </Container>
      {destinations?.youtube_url ? (
        <Container>
          <h4 className="block__title know__more mb-4 pt-4">
            <span>Know More</span>
          </h4>

          <ReactPlayer
            url={destinations?.youtube_url}
            controls
            playbackRate={2}
            width="100%"
            height="500px"
          />
        </Container>
      ) : null}

      <Container className="mb-5 pb-5">
        <div className="block pt-5">
          <Row>
            <Col sm={6}>
              <div
                className="location__address"
                style={{
                  height: 200,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h4 className="block__title">
                  <span>Location</span>
                </h4>
                <p className="pt-3">{destinations?.address}</p>
                <span className="text-info">
                  <img src={loc} height="40" width="45" />
                  <b>
                    <a
                      className="get__direction"
                      rel="noreferrer"
                      href={`https://maps.google.com/?q=${destinations?.latitude},${destinations?.longitude}`}
                      target="_blank"
                    >
                      Get Directions
                    </a>
                  </b>
                </span>
              </div>
              <button
                className="btn btn-success"
                style={{ background: "green" }}
                onClick={() => setShowFormModal(true)}
              >
                Book Now
              </button>
            </Col>
            <BookNowForm
              item={destinations}
              show={showFormModal}
              handleModal={setShowFormModal}
              user_data={user_data}
            />
            <Col sm={6} className="google__map">
              {destinations ? (
                <GoogleMapReact
                  bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
                  defaultCenter={{
                    lat: parseFloat(destinations?.latitude),
                    lng: parseFloat(destinations?.longitude),
                  }}
                  defaultZoom={zoom}
                >
                  <Marker
                    lat={parseFloat(destinations?.latitude)}
                    lng={parseFloat(destinations?.longitude)}
                    name="My Marker"
                    color="blue"
                  />
                </GoogleMapReact>
              ) : null}
            </Col>
          </Row>
        </div>
      </Container>

      <div
        className="py-5 mt-5"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <Container>
          <div className="mb-2">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h2 className="package__title" style={{ color: "white" }}>
                  <span>Related</span> Packages
                </h2>
                <h6 style={{ color: "white" }}>Choose Your Best Package</h6>
              </div>
            </div>
          </div>

          <Carousel
            partialVisible
            itemClass="image-item"
            responsive={responsive}
          >
            {packagesdata.length ? (
              packagesdata.map((item, key) => {
                return (
                  <div
                    key={key}
                    onClick={() =>
                      history.push({
                        pathname: `/packages_details/${item.title
                          .split(" ")
                          .join("-")}`,
                        id: item._id,
                      })
                    }
                  >
                    <Image
                      draggable={false}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 10,
                      }}
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
                            color: "white",
                            display: "inline",
                            padding: "3px",
                            borderRadius: "4px",
                            fontSize: "14px",
                          }}
                        >
                          {item.sub_title}
                        </h6>
                      </div>
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
      <div className="pt-4">
        <Container>
          <h2 className="package__title">
            <span>Book</span> Tickets
          </h2>

          <TravellerTicket />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default DestinationDetails;
