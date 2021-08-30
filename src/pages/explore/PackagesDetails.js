import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { Container, Row, Col } from "react-bootstrap";
import loc from "../../assets/img/location.svg";
import bg from "../../assets/img/bg_12.jpg";
import GoogleMapReact from "google-map-react";
import { API_PATH } from "../../Path/Path";
import { Button } from "bootstrap";
import { useHistory } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Modal from 'react-bootstrap'
import ReactPlayer from "react-player";
import RettingModal from "../../components/modal/RettingModal";
import EnquireModal from "../../components/modal/EnquireModal";
import imgtest from "../../assets/img/bus.png"

const Marker = () => {
  return <div className="SuperAwesomePin"></div>;
};
const PackagesDetails = (props) => {
  const [enquireModal, setEnquireModal] = useState();
  const [modalReviewShow, setModalReviewShow] = useState(false);
  const [packages, setPackages] = useState("");
  const [inclusions, setInclusions] = useState([]);
  const [exclusions, setExclusions] = useState([]);
  const [zoom, setZoom] = useState(11);
  const history = useHistory();

  const [modalShow, setModalShow] = useState(false);

  const modalReviewHadler = () => {
    setModalReviewShow(true)
    console.log("helllo")
  }

  const handleReviewClose = () => {
    setModalReviewShow(false)
  }
  const modalEnquireHadler = () => {
    setEnquireModal(true)
    console.log("helllo")
  }

  const handEnquireClose = () => {
    setEnquireModal(false)
  }
  // const [modalRettShow, setModalRettShow] = useState(false);
  // const [show, setShow] = useState(false);



  // const handleLoginClose = () => {
  //   setModalShow(false)
  // }


  // const onClickWhatsapp=()=>{
  //   history.push("")
  // }
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
      <div style={{
        backgroundImage: `url(${packages.upload_images})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: 500,
      }}
      >
        <Header />
        <h1 className="header__title">
          <Container>
            <span>{packages.title}</span>
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

      {packages.youtube_url ? (
        <Container>
          <h4 className="block__title know__more mb-4 pt-4">
            <span>Know More</span>
          </h4>

          <ReactPlayer
            url={packages.youtube_url}
            controls
            playbackRate={2}
            width="100%"
            height="500px"
          />
        </Container>
      ) : null}

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
      <div fluid className="d-none d-md-block">
        <div className="packeges_title">

          <span
            className="packages_enquired"
            style={{ color: "rgb(120, 104, 230)", width: "200px", display: "inline-block" }}
            onClick={() => modalReviewHadler()}
          >
            Review
          </span>
          <span
            className="packages_enquired"
            style={{ color: "rgb(120, 104, 230)", width: "200px", display: "inline-block" }}
            onClick={() => modalEnquireHadler()}
          >
            Enquire  Now
          </span>
          <span
            className="packages_enquired"
          >
            <a
              className="" style={{ color: "rgb(120, 104, 230)", textDecoration: "none", width: "200px", display: "inline-block" }}
              href={` https://www.tripadvisor.in/Tourism-g800435-Jagdalpur_Bastar_District_Chhattisgarh-Vacations.html`}
            >
              TripAdvisor reviews
            </a>
          </span>
          <span className="packages_whatsapp" style={{ width: "200px", display: "inline-block" }}>
            <a
              className="package-whats" style={{ textDecoration: "none" }}
              href={`https://api.whatsapp.com/send/?phone=+917894512324&text&app_absent=0`}
            >
              <FaWhatsapp style={{ fontSize: "30px" }} />
              <span style={{ margin: "5px" }}> Whatsapp</span>
            </a>
          </span>
        </div>
      </div>
      <div fluid className="d-md-none">
        <div className="packeges_title">
          <div>
            <span
              className="packages_enquired"
              style={{ color: "rgb(120, 104, 230)", width: "200px", display: "inline-block" }}
              onClick={() => modalReviewHadler()}
            >
              Review
            </span>
          </div>
          <div>
            <span
              className="packages_enquired"
              style={{ color: "rgb(120, 104, 230)", width: "200px", display: "inline-block" }}
              onClick={() => modalEnquireHadler()}
            >
              Enquire Now
            </span>
          </div>
          <div>
            <span style={{ width: "200px", display: "inline-block" }}
              className="packages_enquired"
            >
              <a
                className="" style={{ color: "rgb(120, 104, 230)", textDecoration: "none" }}
                href={` https://www.tripadvisor.in/Tourism-g800435-Jagdalpur_Bastar_District_Chhattisgarh-Vacations.html`}
              >
                TripAdvisor reviews
              </a>
            </span>
          </div>
          <div>
            <span style={{ width: "200px", display: "inline-block" }} className="packages_whatsapp" >
              <a
                className="package-whats" style={{ textDecoration: "none" }}
                href={`https://api.whatsapp.com/send/?phone=+917894512324&text&app_absent=0`}
              >
                <FaWhatsapp style={{ fontSize: "25px" }} />
                <span style={{ margin: "5px" }}> Whatsapp</span>
              </a>
            </span>
          </div>
        </div>
      </div>
      <Footer />
      <RettingModal show={modalReviewShow} handleClose={handleReviewClose} />
      <EnquireModal show={enquireModal} handleClose={handEnquireClose} />


    </>
  );
};

export default PackagesDetails;
