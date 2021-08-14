import React, { useState } from "react";
import { Container, Row, Button, Form, Col } from "react-bootstrap";
import TicketsConfirm from "../booking/tickets/TicketsConfirm";
import Cards from './Cards'

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

function Locations() {
  const [show, setShow] = useState(0);
  const [activeButton, setActiveButton] = useState(button_Data[0].name);
  const [data, setData] = useState();

  const onSideBtnClick = (e) => {
    const name = e.target.name;
    setActiveButton(name);
  };

  const onLocationsClick = () => {
    console.log("object");
    setShow(1);
    // history.push("/locations");
  };

  return (
    <>
      {show == 0 ? (
        <div>
          <Container className="dmpass-form mt-2">
            <Row className="dmpassData">
              <h3 style={{ fontWeight: "bolder", textAlign: "center" }}>
                Select Locations
              </h3>

              <div
                className="location_pass d-flex"
                style={{
                  border: "1px solid #888",
                  backgroundColor: " #F8F8F8",
                  marginBottom: "15px",
                  borderRadius: 5,
                }}
              >
                <Form.Check
                  type="radio"
                  label="Chitrakote"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  style={{ margin: "8px", color: "black", fontWeight: "600" }}
                />
              </div>
              <div
                className="location_pass d-flex"
                style={{
                  border: "1px solid #888",
                  backgroundColor: " #F8F8F8",
                  borderRadius: 5,
                }}
              >
                <Form.Check
                  type="radio"
                  label="Tirathgarh"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  style={{ margin: "8px", color: "black", fontWeight: "600" }}
                />
              </div>
            </Row>
            <div className="card-Caintainer">
               <Cards parname="Car Parking" rate="20" />
               <Cards parname="Bus Parking" rate="40" />
               <Cards parname="Bike Parking" rate="10" />

               <Cards parname="Trekking" rate="100" />
               <Cards parname="Boating" rate="20" />
               <Cards parname="Sightseeing" rate="40" />
            </div>
          </Container>
          <div>
            <Button className="locationpass-btn" onClick={onLocationsClick}>
              Save Continue
            </Button>
          </div>
        </div>
      ) : (
        <TicketsConfirm />
      )}
    </>
  );
}

export default Locations;
