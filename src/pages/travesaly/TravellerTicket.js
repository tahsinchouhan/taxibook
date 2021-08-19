import React from "react";
import { Button, Row, Col, Form, Container, Card } from "react-bootstrap";
import doodle1 from "../../assets/img/doodle.png";

function TravellerTicket() {
  return (
    <>
      <div>
      <div className="pt-5" style={{overflow:"auto",width:"",textDecoration:"none",height:""}}>
        <div style={{display:"flex",width:"100%"}}>
          <Col>
            <img src={doodle1} />
            <br />
            <p>
              Chitrakote
              <br />
              24 Feb
            </p>
          </Col>
          <Col>
            <img src={doodle1} />
            <br />
            <p>
              Tamda Ghumar
              <br />
              24 Feb
            </p>
          </Col>
          <Col>
            <img src={doodle1} />
            <br />
            <p>
              Nendi Ghumar
              <br />
              24 Feb
            </p>
          </Col>
          <Col>
            <img src={doodle1} />
            <br />
            <p>
              Chitrakote
              <br />
              24 Feb
            </p>
          </Col>
          <Col>
            <img src={doodle1} />
            <br />
            <p>
              Tamda Ghumar
              <br />
              24 Feb
            </p>
          </Col>
          <Col>
            <img src={doodle1} />
            <br />
            <p>
              Nendi Ghumar
              <br />
              24 Feb
            </p>
          </Col>
          </div>         
        </div>
      </div>
    </>
  );
}

export default TravellerTicket;
