import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { Container, Row, Col } from "react-bootstrap";
import loc from "../../assets/img/location.svg";
import bg from "../../assets/img/bg_12.jpg";
import GoogleMapReact from "google-map-react";
import ReactPlayer from "react-player";
const Marker = (props) => {
  return <div className="SuperAwesomePin"></div>;
};
const DestinationDetails = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 500,
        }}
      >
        <Header />
        <h1 className="header__title">
          <span>Jagdalpur Palace</span>
        </h1>
      </div>

      <Container>
        <div className="block pt-5">
          <h4 className="block__title">
            <span>About</span> the Destination
          </h4>
          <p className="pt-3">
            The Teerathgarh Falls is all season tourism's site and a good
            photography place waterfall near Jagdalpur at Kanger Ghati in Bastar
            district in the Indian state of Chhattisgarh. The Teerathgarh Falls
            is a block type waterfall on the Kanger River. The water plunges 91
            metres (299 ft) in a single drop. It is located at a distance of 35
            kilometres (22 mi) south-west of Jagdalpur. One can approach the
            falls from Darbha, near state highway that connects Jagdalpur to
            Sukma. One has to take a jeep at Darbha junction to visit
            Teerathgarh and Kutumsar. Kutumsar Caves and Kailash Gufa are nearby
            attractions. It is in Kanger Ghati National Park.
          </p>
        </div>
      </Container>
      <Container>
        <h4 className="block__title know__more mb-4 pt-4">
          <span>Know More</span>
        </h4>
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=gBB5Vjn8xbA"}
          controls
          playbackRate={2}
          width="100%"
          height="500px"
        />
      </Container>
      <Container className="mb-5 pb-5">
        <div className="block pt-5">
          <h4 className="block__title">
            <span>About</span> the Destination
          </h4>
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
                <p className="pt-3"></p>
                <span className="text-info">
                  <img src={loc} height="40" width="45" />
                  <b>
                    <a
                      className="get__direction"
                      href={`https://maps.google.com/?q=28.4838° N,77.0210° E`}
                      target="_blank"
                    >
                      Get Directions
                    </a>
                  </b>
                </span>
              </div>
            </Col>
            <Col sm={6} className="google__map">
              <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
                defaultCenter={{
                  lat: parseFloat("28.4838° N"),
                  lng: parseFloat("77.0210° E"),
                }}
                defaultZoom={11}
              >
                <Marker
                  lat={parseFloat("28.4838° N")}
                  lng={parseFloat("77.0210° E")}
                  name="My Marker"
                  color="blue"
                />
              </GoogleMapReact>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default DestinationDetails;
