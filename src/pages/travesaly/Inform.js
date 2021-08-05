import React from "react";
import { Button, Row, Col, Form, Container, Card } from "react-bootstrap";
import covid from "../../assets/img/covid-19.png";
import map from "../../assets/img/Map.svg";
import images from "../../assets/img/image 1.svg";
import contact from "../../assets/img/bastarcontact.svg";

function Inform() {
  return (
    <>
      <div className="bg-light">
        <Container className="p-5">
          <Row>
            <h2 className="pb-4" style={{fontSize:"bolder"}}>Important Information</h2>
            <Col className="mt-1">
              {/* <img src={covid}/> */}
              <div className="covid_info">
                <h6 className="visitors">For Visitors</h6>
                <hr />
                <span className="covid-response">Covid-19 Response</span>
                <span className="safety-update">Health and Safety Update</span>

                <span className="covid-response">Booking Details</span>
                <span className="safety-update">
                  Know how to book or cancel
                </span>
              </div>
            </Col>
            <Col className="mt-1">
              <div className="covid_info">
                <h6 className="visitors"> For Operators</h6>
                <hr />
                <span className="covid-response">Registration Guide</span>
                <span className="safety-update">
                  How to assosiate with Know Bastar
                </span>

                <span className="covid-response">Booking Details</span>
                <span className="safety-update">Map, Guides and Packages</span>
              </div>
            </Col>
            <Col className="mt-3">
              <div style={{textAlign:"center",marginTop:"-35px"}}>
                <img src={images} />
              </div>
             <div style={{textAlign:"center"}}>
             <span className="safety-update">
                An initiative by District <br />
                Administration, Bastar
              </span>
              <span className="covid-response">Contact Us </span>
              <span className="safety-update"> +91 6267020580</span>
             </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Inform;
