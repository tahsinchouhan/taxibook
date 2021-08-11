import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { Container, Row, Col } from "react-bootstrap";
import loc from "../../assets/img/location.svg";
import bg from "../../assets/img/bg_12.jpg";
import GoogleMapReact from "google-map-react";
import { API_PATH } from "../../Path/Path";

const Marker = () => {
  return <div className="SuperAwesomePin"></div>;
};
const PackagesDetails = (props) => {
  const [packages, setPackages] = useState("");
  const [inclusions, setInclusions] = useState([]);
  const [exclusions, setExclusions] = useState([]);
  const [zoom, setZoom] = useState(11);

  var id;
  useEffect(() => {
    if (props.location.item) {
      localStorage.setItem("id", props.location.item);
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
    fetch(API_PATH + `/api/v1/packages/${id}`)
      .then((response) => response.json())
      .then((res) => {
        console.log(res.data);
        setPackages(res.data);
        setInclusions(res.data.inclusions);
        setExclusions(res.data.exclusions);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${packages.upload_images})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 500,
        }}
      >
        <Header />
        <h1 className="header__title">
          <Container>
            <span>{packages.address}</span>
          </Container>
        </h1>
      </div>

      <Container>
        <div className="block pt-5">
          <h4 className="block__title">
            <span>About</span> the Destination
          </h4>
          <p className="pt-3">{packages.description}</p>
        </div>
      </Container>
      <Container className="mb-5 pb-5">
        <h4 className="block__title mt-5">
          <span>Price</span>
        </h4>
        <h5 className="price__title pt-3 mb-1">₹{packages.price}</h5>
        <p>{packages.duration}</p>
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
                <p className="pt-3">{packages.address}</p>
                <span className="text-info">
                  <img src={loc} height="40" width="45" />
                  <b>
                    <a
                      className="get__direction"
                      href={`https://maps.google.com/?q=${packages.latitude},${packages.longitude}`}
                      target="_blank"
                    >
                      Get Directions
                    </a>
                  </b>
                </span>
              </div>
            </Col>
            <Col sm={6} className="google__map">
              {packages ? (
                <GoogleMapReact
                  bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
                  defaultCenter={{
                    lat: parseFloat(packages.latitude),
                    lng: parseFloat(packages.longitude),
                  }}
                  defaultZoom={zoom}
                >
                  <Marker
                    lat={parseFloat(packages.latitude)}
                    lng={parseFloat(packages.longitude)}
                    name="My Marker"
                    color="blue"
                  />
                </GoogleMapReact>
              ) : null}
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
                {inclusions.map((inclusion) => (
                  <li className="inclusionn__item-list">{inclusion}</li>
                ))}
              </ul>
            </Col>
            <Col sm={6}>
              <ul className="inclusionn__itemr">
                {exclusions.map((exclusion) => (
                  <li className="inclusionn__item-list">{exclusion}</li>
                ))}
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
