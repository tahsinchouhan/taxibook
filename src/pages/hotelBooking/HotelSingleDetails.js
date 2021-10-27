import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { Container, Row, Col,Image } from "react-bootstrap";
import loc from "../../assets/img/location.svg";
import bg from "../../assets/img/bg_12.jpg";
import GoogleMapReact from "google-map-react";
import { API_PATH } from "../../Path/Path";
import { Button } from "bootstrap";
import { useHistory } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Modal from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import ReactPlayer from "react-player";
import RettingModal from "../../components/modal/RettingModal";
import EnquireModal from "../../components/modal/EnquireModal";
import { FaStar } from "react-icons/fa";

const Marker = () => {
  return <div className="SuperAwesomePin"></div>;
};
const HotelSingleDetails = (props) => {
  const [enquireModal, setEnquireModal] = useState();
  const [modalReviewShow, setModalReviewShow] = useState(false);
  const [packages, setPackages] = useState("");
  const [review, setReview] = useState([]);
  const [enquiry, setEnquiry] = useState([]);
  const [inclusions, setInclusions] = useState([]);
  const [exclusions, setExclusions] = useState([]);
  const [zoom, setZoom] = useState(11);
  const history = useHistory();

  const [modalShow, setModalShow] = useState(false);

  const modalReviewHadler = () => {
    setModalReviewShow(true);
  };

  const handleReviewClose = () => {
    setModalReviewShow(false);
  };
  const modalEnquireHadler = () => {
    setEnquireModal(true);
  };

  const handEnquireClose = () => {
    setEnquireModal(false);
  };
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
    getReview();
    getEnquiry();
    // window.scrollTo(0, 0);
  }, []);

  const getPackages = () => {
    fetch(API_PATH + `/api/v1/packages/${id}`)
      .then((response) => response.json())
      .then((res) => {
        setPackages(res.data);
        setInclusions(res.data.inclusions);
        setExclusions(res.data.exclusions);
      })
      .catch((e) => console.log(e));
  };

  const getReview = () => {
    fetch(API_PATH + `/api/v1/review/list`)
      .then((response) => response.json())
      .then((res) => {
        setReview(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };

  const getEnquiry = () => {
    fetch(API_PATH + `/api/v1/enquiry/list`)
      .then((response) => response.json())
      .then((res) => {
        setEnquiry(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };

  var current = null;
  var cnt = 0;
  // review.map((data) => {
  //   if (data.star_rating != current) {
  //     current = data.star_rating;
  //     cnt = 1;
  //     console.log(current + " comes --> " + cnt + " times");
  //   } else {
  //     cnt++;
  //   }
  // });
  // console.log(current + " comes --> " + cnt + " times");

  for (var i = 0; i < review.length; i++) {
    if (review[i].star_rating != current) {
      if (cnt > 0) {
        console.log(current + " " + cnt);
      }
      current = review[i].star_rating;
      cnt = 1;
      // } else {
      //   cnt++;
      // }
      console.log(cnt)
    }
    // console.log(i)
  }
  // if (cnt > 0) {
  //   console.log(current + " comes --> " + cnt + " times");
  // }

  return (
    <>
      <div
        style={{
          // backgroundImage: `url("${packages.upload_images}")`,
          // backgroundSize: "cover",
          // backgroundPosition: "center top",
          // height: 650,
        }}
      >
        <Header />
        <div className="destination_bg_img">
          <Image
            draggable={false}
            // className="img-fluid"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={packages?.upload_images}
          />
          <Container className="destination_header__title">
            <h1 className="header__title">
              <span>{packages?.title}</span>
            </h1>
          </Container>
        </div>
        {/* <h1 className="header__title pb-3">
          <Container>
            <span>{packages.title}</span>
          </Container>
        </h1> */}
      </div>

      <Container>
        <div className="block pt-3">
          <h4 className="block__title">
            <span>About</span> the Package
          </h4>
          <p className="pt-2">{packages.description}</p>
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
          {packages ? (
            <div>
              <h5 className="price__title pt-3 mb-1">
                {packages.tour_operator_account.name}
              </h5>
              <a
                className="code"
                href={`tel:${packages.tour_operator_account.mobile}`}
              >
                {packages?.tour_operator_account.mobile}
              </a>
              <br />
              <a
                className="code"
                href={`mailto:${packages.tour_operator_account.email}`}
              >
                {packages?.tour_operator_account.email}
              </a>
            </div>
          ) : null}
        </div>
      </Container>

      <div fluid className="d-none d-md-block">
        <div className="packeges_title">
          {packages ? (
            <span
              className="packages_enquired"
              style={{ width: "200px", display: "inline-block" }}
            // onClick={() => modalReviewHadler()}
            >
              <a
                className="code"
                href={`tel:${packages.tour_operator_account.mobile}`}
                style={{ color: "#7868E6" }}
              >
                Call Now
              </a>
            </span>
          ) : null}

          <span
            className="packages_enquired"
            style={{
              color: "rgb(120, 104, 230)",
              width: "200px",
              display: "inline-block",
            }}
            onClick={() => modalReviewHadler()}
          >
            Review
          </span>
          <span
            className="packages_enquired"
            style={{
              color: "rgb(120, 104, 230)",
              width: "200px",
              display: "inline-block",
            }}
            onClick={() => modalEnquireHadler()}
          >
            Enquire Now
          </span>

          <span className="packages_enquired">
            <a
              target="_blank"
              style={{
                color: "rgb(120, 104, 230)",
                textDecoration: "none",
                width: "200px",
                display: "inline-block",
              }}
              href={`https://www.tripadvisor.in/Tourism-g800435-Jagdalpur_Bastar_District_Chhattisgarh-Vacations.html`}
            >
              TripAdvisor reviews
            </a>
          </span>

          <span
            className="packages_whatsapp"
            style={{ width: "200px", display: "inline-block" }}
          >
            <a
              className="package-whats"
              style={{ textDecoration: "none" }}
              target="_blank"
              href={`https://api.whatsapp.com/send/?phone=${packages?.tour_operator_account?.mobile}&text&app_absent=0`}
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
              style={{
                color: "rgb(120, 104, 230)",
                width: "200px",
                display: "inline-block",
              }}
              onClick={() => modalReviewHadler()}
            >
              Review
            </span>
          </div>
          <div>
            <span
              className="packages_enquired"
              style={{
                color: "rgb(120, 104, 230)",
                width: "200px",
                display: "inline-block",
              }}
              onClick={() => modalEnquireHadler()}
            >
              Enquire Now
            </span>
          </div>
          <div>
            {packages ? (
              <span
                className="packages_enquired"
                style={{ width: "200px", display: "inline-block" }}
              >
                <a
                  className="code"
                  href={`tel:${packages.tour_operator_account.mobile}`}
                  style={{ color: "#7868E6" }}
                >
                  Call Now
                </a>
              </span>
            ) : null}
            <span
              style={{ width: "200px", display: "inline-block" }}
              className="packages_enquired"
            >
              <a
                className=""
                style={{ color: "rgb(120, 104, 230)", textDecoration: "none" }}
                target="_blank"
                // onClick={ontripAdviser}
                href={`https://www.tripadvisor.in/Tourism-g800435-Jagdalpur_Bastar_District_Chhattisgarh-Vacations.html`}
              >
                TripAdvisor reviews
              </a>
            </span>
          </div>
          <div>
            <span
              style={{ width: "200px", display: "inline-block" }}
              className="packages_whatsapp"
            >
              <a
                className="package-whats"
                style={{ textDecoration: "none" }}
                target="_blank"
                href={`https://api.whatsapp.com/send/?phone=${packages?.tour_operator_account?.mobile}&text&app_absent=0`}
              >
                <FaWhatsapp style={{ fontSize: "25px" }} />
                <span style={{ margin: "5px" }}> Whatsapp</span>
              </a>
            </span>
          </div>
        </div>
      </div>

      <Container className="mb-5 pb-5">
        <h4 className="block__title mt-5">
          <span>Review</span>
        </h4>
        <h5
          className="price__title pt-3 mb-1"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <span
            style={{
              margin: 3,
              fontSize: 15,
              marginTop: 8,
              fontWeight: "bold",
            }}
          >
            4.5
          </span>
          <ReactStars
            count={5}
            size={24}
            value={4.5}
            isHalf={true}
            activeColor="#ffd700"
          />
          <span
            style={{
              margin: 3,
              fontSize: 15,
              marginTop: 8,
              fontWeight: "bold",
            }}
          >
            {review.length} reviews
          </span>
        </h5>
        <p>
          <span
            style={{
              margin: 3,
              fontSize: 15,
              marginTop: 8,
              fontWeight: "bold",
            }}
          >
            Excellent{" "}
            {
              review.filter(
                (data) => data.star_rating >= "4" && data.star_rating <= "5"
              ).length
            }
          </span>
        </p>
        <p>
          <span
            style={{
              margin: 3,
              fontSize: 15,
              marginTop: 8,
              fontWeight: "bold",
            }}
          >
            Very good{" "}
            {
              review.filter(
                (data) => data.star_rating >= "3" && data.star_rating < "4"
              ).length
            }
          </span>
        </p>
        <p>
          <span
            style={{
              margin: 3,
              fontSize: 15,
              marginTop: 8,
              fontWeight: "bold",
            }}
          >
            Average{" "}
            {
              review.filter(
                (data) => data.star_rating >= "2" && data.star_rating < "3"
              ).length
            }
          </span>
        </p>
        <p>
          <span
            style={{
              margin: 3,
              fontSize: 15,
              marginTop: 8,
              fontWeight: "bold",
            }}
          >
            Poor{" "}
            {
              review.filter(
                (data) => data.star_rating >= "1" && data.star_rating < "2"
              ).length
            }
          </span>
        </p>
        <p>
          <span
            style={{
              margin: 3,
              fontSize: 15,
              marginTop: 8,
              fontWeight: "bold",
            }}
          >
            Terrible {review.filter((data) => data.star_rating === "").length}
          </span>
        </p>
        <div>
          {review
            .filter((data) => data.star_rating === "4.5")
            .map((data) => {
              return (
                <img src={data.image[0]} alt="hell" width="200" height="200" />
              );
            })}
        </div>
      </Container>

      <Footer />
      <RettingModal show={modalReviewShow} handleClose={handleReviewClose} />
      <EnquireModal
        show={enquireModal}
        packages={packages}
        handleClose={handEnquireClose}
      />
    </>
  );
};

export default HotelSingleDetails;
