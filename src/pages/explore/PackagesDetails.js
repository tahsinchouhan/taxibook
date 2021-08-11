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
const PackagesDetails = () => {
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
      <Container className="mb-5 pb-5">
        <h4 className="block__title mt-5">
          <span>Price</span>
        </h4>
        <h5 className="price__title pt-3 mb-1">₹5000</h5>
        <p>3d 2N Paclage</p>
        <div className="block pt-5">
          <h4 className="block__title">
            <span>Location</span>
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
                <p className="pt-3">Jagdalpur,Chhattisgarh</p>
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

        <div>
          <h4 className="block__title">
            <span>Inclusions</span> and Exclusions
          </h4>
          <Row>
            <Col sm={6}>
              <ul className="inclusionn__iteml pt-3">
                <li className="inclusionn__item-list">Gypsy</li>
                <li className="inclusionn__item-list">Refreshements</li>
              </ul>
            </Col>
            <Col sm={6}>
              <ul className="inclusionn__itemr">
                <li className="inclusionn__item-list">
                  Water bottles, tips, souvenirs etc
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        {/* <Block title="Contact Details" boolean={true}> */}
        <div>
          <h4 className="block__title">
            <span>Contact Details</span>
          </h4>
          <h5 className="price__title pt-3 mb-1">admin</h5>
          <a className="code" href={`tel:7894512324`}>
            +91 7894512324
          </a>
          <br />
          <a className="code" href={`mailto:admintest@gmail.com`}>
            admintest@gmail.com
          </a>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default PackagesDetails;
