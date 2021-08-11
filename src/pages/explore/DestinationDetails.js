import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { Container, Row, Col } from "react-bootstrap";
import loc from "../../assets/img/location.svg";
import bg from "../../assets/img/bg_12.jpg";
import GoogleMapReact from "google-map-react";
import ReactPlayer from "react-player";
import { API_PATH } from "../../Path/Path";

const Marker = () => {
  return <div className="SuperAwesomePin"></div>;
};

const DestinationDetails = (props) => {
  const [destinations, setDestinations] = useState("");
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

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${destinations.upload_images})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 500,
        }}
      >
        <Header />
        <Container>
          <h1 className="header__title">
            <span>{destinations.address}</span>
          </h1>
        </Container>
      </div>
      <Container>
        <div className="block pt-5">
          <h4 className="block__title">
            <span>About</span> the Destination
          </h4>
          <p className="pt-3">{destinations.description}</p>
        </div>
      </Container>
      {destinations.youtube_url ? (
        <Container>
          <h4 className="block__title know__more mb-4 pt-4">
            <span>Know More</span>
          </h4>

          <ReactPlayer
            url={destinations.youtube_url}
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
                <p className="pt-3">{destinations.address}</p>
                <span className="text-info">
                  <img src={loc} height="40" width="45" />
                  <b>
                    <a
                      className="get__direction"
                      href={`https://maps.google.com/?q=${destinations.latitude},${destinations.longitude}`}
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
                    lat: parseFloat(destinations.latitude),
                    lng: parseFloat(destinations.longitude),
                  }}
                  defaultZoom={zoom}
                >
                  <Marker
                    lat={parseFloat(destinations.latitude)}
                    lng={parseFloat(destinations.longitude)}
                    name="My Marker"
                    color="blue"
                  />
                </GoogleMapReact>
              ) : null}
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default DestinationDetails;
