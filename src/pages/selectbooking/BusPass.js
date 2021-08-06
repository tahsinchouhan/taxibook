import React, { useState } from "react";
import { Container, Row,Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/css/buspass.css";
import { FaBus, FaCarAlt, FaTicketAlt } from "react-icons/fa";


import ButtonComponent from "../../containers/Button";

const button_Data = [
  {
    name: "Male",
    value: "Male",
  },

  {
    name: "Female",
    value: "Female",
  },
];

function BusPass() {
  const [activeButton, setActiveButton] = useState(button_Data[0].name);
  const onSideBtnClick = (e) => {
    const name = e.target.name;
    setActiveButton(name);
    // alert("test");
  };

  return (
    <div>
      <Container>
        {/* <h1>bus</h1> */}
        <Row className="dmpassData">
         
        </Row >
        <h3 className="text-center">Available Promo Codes</h3>
        <Container>
        <Row style={{overflow:"auto",width:"100%"}}>
          <Col className=" monsoon-div bg-secondary m-3">
            <h3>MONSOON15</h3>
            <span>15% off in July 2021</span>
          </Col>
          <Col className=" monsoon-div bg-secondary  m-3">
            <h3>TRYNEW</h3>
            <span>10% off your first booking</span>
          </Col>
          <Col className=" monsoon-div bg-secondary  m-3">
          <h3>MONSOON15</h3>
            <span>15% off in July 2021</span>
          </Col>
          <Col className=" monsoon-div bg-secondary  m-3">
          <h3>TRYNEW</h3>
            <span>10% off your first booking</span>
          </Col>
        </Row>
        </Container>
        <Container>
        <Row>          
          <Col>
          <span>2 Stops</span>
          <span>21:45 - 9:50</span>
          <span>12h 05m</span><br/>
         
           <FaBus style={{backgroundColor:"red"}}/>
           <span>Raj Ratan Tours and Travels</span>
          
          </Col>
          <Col>
          <span>*per person</span><br/>
          <span>₹ 1500</span>
          </Col>
        </Row>
        </Container>

      </Container>
      <div className="payment-div text-center pt-2 bg-danger">
        <h1>MAKE PAYMENT</h1>
      </div>
    </div>
  );
}

export default BusPass;
