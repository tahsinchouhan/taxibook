import React, { useState } from "react";
import { Container, Row, Col, Form, Dropdown,Button  } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/css/buspass.css";
import { FaBus, FaCarAlt, FaTicketAlt } from "react-icons/fa";
import bus from "../../assets/img/bus.png";
import calendar from "../../assets/img/calendar.png";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";

import ButtonComponent from "../../containers/Button";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";

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
  const [startDate, setStartDate] = useState(new Date());
  const[detail,setDetail]=useState(false);
  const history = useHistory();

  const onSideBtnClick = (e) => {
    const name = e.target.name;
    setActiveButton(name);
    // alert("test");
    history.push('/busdetail')

    const onClickContinue=()=>{
      console.log("object");
      // history.push('/busdetail')
  }

  };

  return (
    <div>
      <Header />
      <Container className="d-none d-md-block">       
        <div style={{textAlign:"center" ,margin:"50px"}}>
          <div style={{margin:"10px" }}><img src={bus} alt="bus" />
          <h5 style={{margin:"10px" ,color:"#FF4A68"}}>Bus</h5></div>
          <span>
            Find buses that will take you to <br />
            your favourite destinations
          </span>
        </div>
        <Container style={{width:"70%"}}>
          <Row className="row justify-content-center">
            <Col xs={12} md={4} className="">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label  className="formselect"
                  style={{ fontWeight: "bolder",marginLeft:"4px", fontSize:"12px",color:"black" }}>Select Route</Form.Label>
                <Form.Select   className="location-userdatas"
                 style={{border:"none",fontSize:"12px"}}
                  defaultValue="Choose...">
                  <option>Choose your preferred route</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={12} md={4} className="">
              <Form.Group
                // className="location-userdatas"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label
                  className="formselect"
                  style={{  fontSize:"12px",fontWeight: "bolder", marginLeft: "4px",color:"black"}}
                >
                  Journey Date
                </Form.Label>
                <div
                  className="location-userdatas"
                  style={{ display: "flex", flexDirection: "row",overflow: 'hidden'}}
                >
                  <img
                    className="location-userdatas-calendar"
                    src={calendar}
                    style={{ width: 25, height: 30 }}
                  />
                  {/* <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showTimeSelect
                        dateFormat="dd,MMM"
                       
                      /> */}
                  {/* <Form.Control
                    type="text"
                    className="user_input1"
                    placeholder="Enter Source"
                  /> */}
                </div>
              </Form.Group>
            </Col>
          </Row>
        </Container> 
        <div className="location-btn" >
      <Button className="locationpass-btn" onClick={onSideBtnClick}>Continue</Button>
      </div>       
      </Container>
      <Container className="d-md-none">       
        <div style={{textAlign:"center" ,margin:"50px"}}>
          <div style={{margin:"10px" }}><img src={bus} alt="bus" />
          <h5 style={{margin:"10px" ,color:"#FF4A68"}}>Bus</h5></div>
          <span style={{fontSize:"12px",fontWeight:"bold"}}>
          Find buses that will take you to<br/> your favourite destinations
          </span>
        </div>
        <Container style={{width:"100%"}}>
          <Row className="row justify-content-center">
            <Col xs={12} md={4} className="">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label  className="formselect"
                  style={{ fontWeight: "bolder",marginLeft:"4px", fontSize:"12px",color:"black"}}>Select Route</Form.Label>
                <Form.Select   className="location-userdatas"
                 style={{border:"none",fontSize:"12px"}}
                  defaultValue="Choose...">
                  <option>Choose your preferred route</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={12} md={4} className="">
              <Form.Group
                // className="location-userdatas"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label
                  className="formselect"
                  style={{ fontWeight: "bolder",marginLeft:"4px", fontSize:"12px",color:"black"}}
                >
                  Journey Date
                </Form.Label>
                <div
                  className="location-userdatas"
                  style={{ display: "flex", flexDirection: "row"  ,overflow: 'hidden'}}
                >
                  <img
                    className="location-userdatas-calendar"
                    src={calendar}
                    style={{ width: 25, height: 30 }}
                  />
                  <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showTimeSelect
                        dateFormat="dd,MMM"
                       
                      />


                  {/* <Form.Control
                    type="text"
                    className="user_input1"
                    placeholder="Enter Source"
                  /> */}
                </div>
              </Form.Group>
            </Col>
          </Row>
        </Container> 
        <div className="location-btn" >
      <Button className="locationpass-btn"
      onClick={onSideBtnClick}>Continue</Button>
      </div>       
      </Container>
    </div>
  );
}

export default BusPass;
