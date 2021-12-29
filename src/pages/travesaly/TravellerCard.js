import React from "react";
import { Col, Card } from "react-bootstrap";
import Layer11 from "../../assets/img/hil.svg";
import Layer12 from "../../assets/img/adivash.svg";

function TravellerCard() {
  return (
    <>
      <div>
        <div className="pt-5" style={{overflow:"auto",width:"",textDecoration:"none",height:""}}>
        <div style={{display:"flex"}}>
        <Col xs={6} md={6} className="travel_card">
            <Card className="saly_card">
              <img
                src={Layer11}
                alt="saly"
                style={{borderRadius: "10px"}}
              />
            </Card>
            <p className="saly-para"> Destinations 1</p>
          </Col>
          <Col  xs={6} md={6} className="travel_card">
            <Card className="saly_card">
              <img
                src={Layer12}
                alt="saly"
                style={{ width: "", borderRadius: "10px" }}
              />
            </Card>
            <p className="saly-para"> Destinations 2</p>
          </Col>
          <Col  xs={6} md={6}className="travel_card">
            <Card className="saly_card">
              <img
                src={Layer11}
                alt="saly"
                style={{ width: "", borderRadius: "10px" }}
              />
            </Card>
            <p className="saly-para"> Destinations 3</p>
          </Col>
          <Col  xs={6} md={6} className="travel_card">
            <Card className="saly_card">
              <img
                src={Layer12}
                alt="saly"
                style={{ width: "", borderRadius: "10px" }}
              />
            </Card>
            <p className="saly-para"> Destinations 4</p>
          </Col>
        </div>         
        </div>
      </div>
    </>
  );
}

export default TravellerCard;
