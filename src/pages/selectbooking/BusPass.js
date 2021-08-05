import React, { useState } from "react";
import { Container, Row,Col} from "react-bootstrap";
import { Link } from "react-router-dom";

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
          {/* <form>
            <div className="form-row">
            </div>
            <div className="form-group">
              <label for="inputAddress">Mobile Number</label>
              <input type="text" className="form-control pass_input" id="inputAddress" placeholder="Enter mobile number" style={{fontSize:"11px"}}/>
            </div>
            <div className="form-row">
              <div className="form-group ">
                <label for="inputState">Number of Travellers</label>
                <select id="inputState" className="form-control pass_input">
                  <option selected>1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <div className="form-group ">
                <label for="inputState">Days of Travel</label>
                <select id="inputState" className="form-control pass_input">
                  <option selected>1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div>
            <div className="traveller-detail">
              <label for="inputAddress">Traveller Details</label>
              <div className="card w-100">
                <div className="card-body">
                  <h5 className="card-title">Traveller 1</h5>
                  <p className="card-text">
                    <div className="form-group">
                      <label for="inputAddress">Name</label>
                      <input type="text" className="form-control pass_input" id="inputAddress" placeholder="Enter passenger name" style={{fontSize:"11px"}}/>
                    </div>

                    <div className="form-row genderform pt-3 d-flex ">
                      <div className="col m-2 w-50">
                        <label for="inputAddress">Gender</label>
                        <div className="d-flex pt-2">
                        <ButtonComponent
                  style={{width:"50%",fontSize:"11px",whiteSpace:"nowrap"}}
                  data={button_Data}
                  activeButton={activeButton}
                  trigerOnClickEmpSideBtn={onSideBtnClick}
                />                       
                        </div>
                      </div>
                      <div className="col m-2 w-50">
                        <label for="inputAddress">Age</label><br />
                        <input type="text" className="form-control pass_input w-70 pt-2" placeholder="Enter Age" style={{fontSize:"12px",height:"33px"}}/>
                      </div>
                    </div>

                    <div className="form-group pt-2">
                      <label for="inputAddress">Aadhar Card Number </label>
                      <input type="text" className="form-control pass_input" id="inputAddress" placeholder=" Enter 12 digit Aadhar Card Number" style={{fontSize:"11px"}}/>
                    </div>
                  </p>
                  <Link className="btn btn-primary">Button</Link>
                </div>
              </div>
            </div>

            <div className="form-group passengerbtn">
              <button type="submit" className="btn btn-primary">Add passenger</button>
            </div>
          </form> */}
        </Row>
        <h3 className="text-center">Available Promo Codes</h3>
        <Container>
        <Row>
          <Col className="bg-secondary m-3">
            <h3>MONSOON15</h3>
            <span>15% off in July 2021</span>
          </Col>
          <Col className="bg-secondary  m-3">
            <h3>TRYNEW</h3>
            <span>10% off your first booking</span>
          </Col>
          <Col className="bg-secondary  m-3">
          <h3>MONSOON15</h3>
            <span>15% off in July 2021</span>
          </Col>
          <Col className="bg-secondary  m-3">
          <h3>TRYNEW</h3>
            <span>10% off your first booking</span>
          </Col>
        </Row>
        </Container>
        <Container>
        <Row>          
          <Col>hlll</Col>
          <Col>hlll</Col>
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
