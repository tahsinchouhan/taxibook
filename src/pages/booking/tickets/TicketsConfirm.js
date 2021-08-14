import React from "react";
import { Container, Row, Button, Form, Col, Card } from "react-bootstrap";

function TicketsConfirm() {
  return (
    <>
      {/* <div>
        <Container>
          <h3>Confirm your Details</h3>
          <div>
            <Row>
              <Col>
                <span>Tirathgarh</span>
              </Col>
              <Col>
                <span>Change</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span>Car Parking x 2</span>
              </Col>
              <Col>
                <span>40  </span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span>Trekking x 5</span>
              </Col>
              <Col>
                <span> 500</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span> Boating x 5 </span>
              </Col>
              <Col>
                <span>100</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span>Sightseeing x 6</span>
              </Col>
              <Col>
                <span>240</span>
              </Col>
            </Row>
          </div>
        </Container>
      </div> */}
      <div>
        <Container>
          <h3  style={{textAlign:"center"}}>Confirm your Details</h3>
         <div className="confirm-main">
         <div className="confirm_div" style={{textAlign:"center",backgroundColor:"#F8F8F8" ,marginBottom:"10px"}}>
            <Row>
              <Col xs={6} md={6}>
                <span className="confirm-title">Tirathgarh</span>
              </Col>
              <Col xs={6} md={6}>
                <span>Change</span>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6}>
                <span className="confirm_part">Car Parking x 2</span>
              </Col>
              <Col xs={6} md={6}>
                <span  className="confirm_part">40  </span>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6}>
                <span  className="confirm_part">Trekking x 5</span>
              </Col>
              <Col xs={6} md={6}>
                <span  className="confirm_part"> 500</span>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6}>
                <span  className="confirm_part"> Boating x 5 </span>
              </Col>
              <Col xs={6} md={6}>
                <span  className="confirm_part">100</span>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6}>
                <span  className="confirm_part">Sightseeing x 6</span>
              </Col>
              <Col xs={6} md={6}>
                <span  className="confirm_part">240</span>
              </Col>
            </Row>
          </div>

         </div>
          <div  className="confirm_div" style={{textAlign:"center",backgroundColor:"#F8F8F8",marginBottom:"10px"}}>
            <Row>
              <Col xs={6} md={6}>
                <span className="confirm-title">Tamdaghumar</span>
              </Col>
              <Col xs={6} md={6}>
                <span>Change</span>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6}>
                <span  className="confirm_part">Car Parking x 2</span>
              </Col>
              <Col xs={6} md={6}>
                <span  className="confirm_part">40  </span>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6}>
                <span  className="confirm_part">Trekking x 5</span>
              </Col>
              <Col xs={6} md={6}>
                <span  className="confirm_part"> 500</span>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6}>
                <span  className="confirm_part"> Boating x 5 </span>
              </Col>
              <Col xs={6} md={6}>
                <span  className="confirm_part">100</span>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6}>
                <span  className="confirm_part">Sightseeing x 6</span>
              </Col>
              <Col xs={6} md={6}>
                <span  className="confirm_part">240</span>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Button className="locationpass-btn" >Save Continue</Button>
    </>
  );
}

export default TicketsConfirm;
