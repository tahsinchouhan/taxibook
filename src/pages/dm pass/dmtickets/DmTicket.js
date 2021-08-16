import React, { useState } from "react";
import { Container, Row, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import ButtonComponent from "../../containers/Button";
import { NavLink, useHistory } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

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

function DmPass() {
  const [activeButton, setActiveButton] = useState(button_Data[0].name);
  const [data, setData] = useState();
  const history = useHistory();
  const onSideBtnClick = (e) => {
    const name = e.target.name;
    setActiveButton(name);
  };

  const onLocationsClick = () => {
    console.log("object");
    history.push("/locations");
  };
  return (
    <>
      <div>
        <div className="dmpass-div">
          <Container className="dm-kangervilla">
            <FaArrowLeft className="kanger-arrow" />
            <div className="kangervilla">
              <span className="kanger-valley">
                Tickets for Kanger Valley
                <br />
                30th July, 2021
              </span>
            </div>
          </Container>
        </div>
        {/*progessbar*/}
        <Container>
          <div className="rangebar">
            <div>
              <Button className=" btn-danger dmPass-rangebar">
                <br />
                <span>DM Pass</span>
              </Button>
            </div>
            <div>
              <Button
                className=" locations-rangebar"
                style={{
                  backgroundColor: "none",
                  border: "1px solid #FF814A",
                  color: "black",
                }}
                onClick={onLocationsClick}
              >
                <br />
                <span>Locations</span>
              </Button>
            </div>
            <div>
              <Button className=" btn-danger confirm-rangebar">
                <br />
                <span>Confirm</span>
              </Button>
            </div>
            <div>
              <Button className=" btn-danger checkout-rangebar">
                <span>Checkout</span>
              </Button>
            </div>
          </div>

          {/* <Form.Label>Range</Form.Label>
          <Form.Range /> */}
        </Container>

        {/*form*/}
        <Container className="dmpass-form mt-5">
          <Row className="dmpassData">
            <h3 style={{ fontWeight: "bolder", textAlign: "center" }}>
              Book your DM Pass
            </h3>
            <form>
              <div className="form-row"></div>
              <div className="form-group mt-4">
                <label for="inputAddress">Mobile Number</label>
                <input
                  type="text"
                  className="form-control pass_input"
                  id="inputAddress"
                  placeholder="Enter mobile number"
                />
              </div>
              <div className="form-row">
                <div className="form-group mt-4 ">
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
                <div className="form-group mt-4 ">
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
                <div className="form-group mt-4 ">
                  <label for="inputState">Number of Vehicles</label>
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
                <label for="inputAddress" style={{ paddingTop: "30px" }}>
                  Vehicle Details
                </label>
                <div className="card w-100">
                  <div className="card-body">
                    <h5 className="card-title">Vehicle 1</h5>
                    <p className="card-text">
                      <div className="form-group mt-4">
                        <label for="inputAddress">Name</label>
                        <input
                          type="text"
                          className="form-control pass_input"
                          id="inputAddress"
                          placeholder="Enter passenger name"
                          style={{ fontSize: "11px" }}
                        />
                      </div>

                      <div className="form-row genderform pt-3 d-flex ">
                        <div className="col m-2 w-50">
                          <label for="inputAddress">Gender</label>
                          <div className="d-flex pt-2">
                            <ButtonComponent
                              style={{
                                width: "50%",
                                fontSize: "11px",
                                whiteSpace: "nowrap",
                              }}
                              data={button_Data}
                              activeButton={activeButton}
                              trigerOnClickEmpSideBtn={onSideBtnClick}
                            />
                          </div>
                        </div>
                        <div className="col m-2 w-50">
                          <label for="inputAddress">Age</label>
                          <br />
                          <input
                            type="text"
                            className="form-control pass_input w-70 pt-2"
                            placeholder="Enter Age"
                            style={{
                              fontSize: "12px",
                              whiteSpace: "nowrap",
                              height: "33px",
                            }}
                          />
                        </div>
                      </div>

                      <div className="form-group mt-4 pt-2">
                        <label for="inputAddress">Adhaar Card Number </label>
                        <input
                          type="text"
                          className="form-control pass_input"
                          id="inputAddress"
                          placeholder=" Enter 12 digit Adhaar Card Number"
                          style={{ fontSize: "11px" }}
                        />
                      </div>
                    </p>
                    <Link
                      className="btn"
                      style={{ backgroundColor: "#0FA453", color: "white" }}
                    >
                      Add Vehicle
                    </Link>
                  </div>
                </div>
              </div>
              {/*traveller Detail*/}
              <div className="traveller-detail">
                <label for="inputAddress" style={{ paddingTop: "30px" }}>
                  Traveller Details
                </label>
                <div className="card w-100">
                  <div className="card-body">
                    <h5 className="card-title">Traveller 1</h5>
                    <p className="card-text">
                      <div className="form-group mt-4">
                        <label for="inputAddress">Name</label>
                        <input
                          type="text"
                          className="form-control pass_input"
                          id="inputAddress"
                          placeholder="Enter passenger name"
                          style={{ fontSize: "11px" }}
                        />
                      </div>

                      <div className="form-row genderform pt-3 d-flex ">
                        <div className="col m-2 w-50">
                          <label for="inputAddress">Gender</label>
                          <div className="d-flex pt-2">
                            <ButtonComponent
                              style={{
                                width: "50%",
                                fontSize: "11px",
                                whiteSpace: "nowrap",
                              }}
                              data={button_Data}
                              activeButton={activeButton}
                              trigerOnClickEmpSideBtn={onSideBtnClick}
                            />
                          </div>
                        </div>
                        <div className="col m-2 w-50">
                          <label for="inputAddress">Age</label>
                          <br />
                          <input
                            type="text"
                            className="form-control pass_input w-70 pt-2"
                            placeholder="Enter Age"
                            style={{
                              fontSize: "12px",
                              whiteSpace: "nowrap",
                              height: "33px",
                            }}
                          />
                        </div>
                      </div>

                      <div className="form-group mt-4 pt-2">
                        <label for="inputAddress">Adhaar Card Number </label>
                        <input
                          type="text"
                          className="form-control pass_input"
                          id="inputAddress"
                          placeholder=" Enter 12 digit Adhaar Card Number"
                          style={{ fontSize: "11px" }}
                        />
                      </div>
                    </p>
                    <Link
                      className="btn"
                      style={{ backgroundColor: "#0FA453", color: "#FFFFFF" }}
                    >
                      Add Passenger
                    </Link>
                  </div>
                </div>
              </div>

              {/* <div className="form-group mt-4 passengerbtn" 
            style={{backgroundColor:"#0FA453",color:"#FFFFFF"}}
            >Save & Continue
              <button type="submit" className="btn" style={{backgroundColor:"#0FA453",color:"#FFFFFF"}} >
              Save & Continue
              </button>
            </div> */}
            </form>
          </Row>
        </Container>
        <div
          className="form-group mt-4 passengerbtn"
          style={{
            backgroundColor: "#0FA453",
            color: "#FFFFFF",
            fontWeight: "600",
          }}
        >
          Save & Continue
          {/* <button type="submit" className="btn" style={{backgroundColor:"#0FA453",color:"#FFFFFF"}} >
              Save & Continue
              </button> */}
        </div>

        {/* <!-- Horizontal Steppers --> */}
        <div class="row">
          <div class="col-md-12">
            {/* <!-- Stepers Wrapper --> */}
            <ul class="stepper stepper-horizontal">
              {/* <!-- First Step --> */}
              <li class="completed">
                <a href="#!">
                  <span class="circle">1</span>
                  <span class="label">First step</span>
                </a>
              </li>

              {/* <!-- Second Step --> */}
              <li class="active">
                <a href="#!">
                  <span class="circle">2</span>
                  <span class="label">Second step</span>
                </a>
              </li>

              {/* <-- Third Step --> */}
              <li class="warning">
                <a href="#!">
                  <span class="circle">
                    <i class="fas fa-exclamation"></i>
                  </span>
                  <span class="label">Third step</span>
                </a>
              </li>
            </ul>
            {/* <!-- /.Stepers Wrapper --> */}
          </div>
        </div>
        {/* <!-- /.Horizontal Steppers --> */}
      </div>
    </>
  );
}

export default DmPass;


