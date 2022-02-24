import React from "react";
import { Row, Col, Container} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
// import covid from "../../assets/img/covid-19.png";
// import map from "../../assets/img/Map.svg";
import images from "../../assets/img/image 1.svg";
import logo from "../../assets/img/logo.png";


function Footer() {
  const history = useHistory();
  const goForRegistration = () => {
    history.push("/registrationguide")
  }
  return (
    <>
      <footer className="footer pb-3">
        <Container className="pt-4">
          <h3 className="footer__title pt-5 mb-5">Important Info</h3>
          <Row>
            <Col sm={4} md={4}>
              <div className="footer__block">
                <div className="footer__item">
                  <Link to="/covidresponse" className="link">
                    <h6 className="footer__item-subtitle">For Visitors</h6>
                  </Link>
                </div>
                <div className="footer__item">
                  <Link to="/cab-operator" className="link">
                    <h5 className="footer__item-title"> Cab Operator</h5>
                    <small>View cab operator Details</small>
                  </Link>
                </div>
                <div className="footer__item">
                  <Link to="/tour-operator" className="link">
                    <h5 className="footer__item-title"> Tour Operator</h5>
                    <small>View tout operator Details</small>
                  </Link>
                </div>

                {/* <div className="footer__item">
                  <Link to="/covidresponse" className="link">
                    <h5 className="footer__item-title"> Covid-19 Response</h5>
                  </Link>
                  <small>Health and Safety Update</small>
                </div> */}
                <div className="footer__item">
                  <Link to="/covidresponse" className="link">
                    <h5 className="footer__item-title">Booking Details</h5>
                  </Link>
                  <small>Know how to book or cancel</small>
                </div>
              </div>
            </Col>
            <Col sm={4} md={4}>
              <div className="footer__block">
                <div className="footer__item">
                  <Link to="/registrationguide" className="link">
                    <h6 className="footer__item-subtitle">Vendor & Organization Registration</h6>
                  </Link>
                </div>
                <div className="footer__item">
                  <Link
                    to="#"
                    className="link"
                    onClick={() => goForRegistration()}
                  >
                    <h5 className="footer__item-title">Registration Form</h5>
                  </Link>
                  <small>Vendor & Organization Registration</small>
                </div>
                <div className="footer__item">
                  <Link to="/registrationguide" className="link">
                    <h5 className="footer__item-title">Booking Details</h5>
                  </Link>
                  <small>Map, Guides and Packages </small>
                </div>
              </div>
            </Col>

            <Col sm={4} md={4}>
              <div className="footer__logo">
                <div className={`header__logo`}>
                  <img src={logo} id="logo" alt="logo" style={{ height: 200, width: 200 }} />
                </div>
              </div>
            </Col>
          </Row>
          <center className="mt-3">
            <img src={images} width="50" alt="image" />
            <h6 className="mt-1">
              An initiative by District Bastar Administration
            </h6>
            <a
              className="code"
              style={{ color: "#212529" }}
              href={`tel:+916267020580`}
            >
              Contact Us : +91 6267020580
            </a>
            <br />
          </center>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
