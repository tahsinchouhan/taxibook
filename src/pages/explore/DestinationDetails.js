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
import { NavLink, useHistory } from "react-router-dom";
import TravellerTicket from "../travesaly/TravellerTicket";

const Marker = () => {
  return <div className="SuperAwesomePin"></div>;
};

const DestinationDetails = (props) => {
  const history = useHistory();
  const [destinations, setDestinations] = useState("");
  const [packagesdata, getPackagesdata] = useState([]);
  const [zoom, setZoom] = useState(11);

  var id;

  useEffect(() => {
    if (props.location.id) {
      localStorage.setItem("id", props.location.id);
      id = localStorage.getItem("id");
    } else {
      id = localStorage.getItem("id");
    }
  }, []);

  useEffect(() => {
    getPackages();
    getPackagesid();
    window.scrollTo(0, 0);
  }, []);

  const getPackages = () => {
    fetch(API_PATH + `/api/v1/destinations/${id}`)
      .then((response) => response.json())
      .then((res) => {
        setDestinations(res.data);
      })
      .catch((e) => console.log(e));
  };
  const getPackagesid = () => {
    fetch(`${API_PATH}/api/v1/packages/list?destinations=${id}`)
      .then((response) => response.json())
      .then((res) => {
        getPackagesdata(res.data);
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
          backgroundImage: `url("${destinations?.upload_images}")`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          height: 650,
        }}
      >
        <Header />
        <Container>
          <h1 className="header__title">
            <span>{destinations?.title}</span>
          </h1>
        </Container>
      </div>
      <Container>
        <div className="block pt-5">
          <h4 className="block__title">
            <span>About</span> the Destination
          </h4>
          <p className="pt-3">{destinations?.description}</p>
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
                      href={`https://maps.google.com/?q=${destinations?.latitude},${destinations?.longitude}`}
                      target="_blank"
                    >
                      Get Directions
                    </a>
                  </b>
                </span>
              </div>
            </Col>
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
                <h2 className="package__title">
                  <span>Related</span> Packages
                </h2>
                <h6>
                  Choose Your Best Packages
                </h6>
              </div>
            </div>
          </div>



          <Carousel
            partialVisbile
            itemClass="image-item"
            responsive={responsive}
          >
            {packagesdata.length ? (
              packagesdata.map((item) => {
                return (
                  <div
                    onClick={() =>
                      history.push({
                        pathname: `/packages_details/${item.title}`,
                        item: item._id,
                      })
                    }
                    style={{
                      width: 300,
                      height: 200,
                      marginRight: 15,
                      marginTop: 10,
                      marginBottom: 80
                    }}
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
                            background: "#BEBEBE",
                            display: "inline",
                            padding: "3px",
                            borderRadius: "4px",
                            fontSize: "14px",
                          }}
                        >
                          {item.sub_title}
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
