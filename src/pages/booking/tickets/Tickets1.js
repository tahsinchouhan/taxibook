import React, { useState } from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import Header from "../../../components/Header";
import doodle from "../../../assets/img/doodle.png";
import DatePicker from "react-datepicker";
import calendar from "../../../assets/img/calendar.png";
import { useHistory } from "react-router-dom";
import Footer from "../../travesaly/Footer";

function Tickets1() {
  const history = useHistory();
  const [routes, setRoutes] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [selected, setSelected] = useState("");

  const onStepreClick=()=>{
    console.log("steper")
    history.push("/steper_dmpass")
}

  return (
    <>
      <div>
        <Header />
        <Container className="">
          <div style={{ textAlign: "center", margin: "50px" }}>
            <div style={{ margin: "10px" }}>
              <img src={doodle} alt="doodle" style={{ height: "200px" }} />
              <h5 style={{ margin: "10px", color: "black", fontWeight: "700" }}>
                Tickets
              </h5>
            </div>
            <span
              style={{
                margin: "10px",
                color: "black",
                fontWeight: "500",
                whiteSpace: "nowrap",
              }}
            >
              Book tickets to your favourite <br />
              destinations right from your mobile
            </span>
          </div>
          <Container style={{ width: "%" }}>
            <Row className="row justify-content-center">
              <Col xs={12} md={4} className="">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label
                    className="formselect"
                    style={{
                      fontWeight: "bolder",
                      paddingLeft: "4px",
                      fontSize: "12px",
                      color: "black",
                      marginBottom: "5px",
                    }}
                  >
                    Enter Destination
                  </Form.Label>
                  <Form.Select
                    className="location-userdatas"
                    style={{ border: "none", fontSize: "12px" }}
                  >
                    <option>select a destination...</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} className="" style={{}}>
                <Form.Group
                  // className="location-userdatas"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label
                    className="formselect"
                    style={{
                      fontSize: "12px",
                      fontWeight: "bolder",
                      paddingLeft: "4px",
                      color: "black",
                      marginBottom: "5px",
                    }}
                  >
                    Journey Date
                  </Form.Label>
                  <div
                    className="location-userdatas"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      className="location-userdatas-calendar"
                      src={calendar}
                      style={{ width: 25, height: 30 }}
                    />
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      // customInput={<ExampleCustomInput/>}
                      dateFormat="dd,MMM"
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </Container>
        <div className="d-none d-md-block">
          <div style={{ textAlign: "center" }}>
            <Button
              className=""
              style={{
                marginTop: "50px",
                width: "19%",
                height: "50px",
                backgroundColor: "#FF814A",
                color: "white",
                fontWeight: "900",
                fontSize: "15px",
                marginBottom:"50px"
              }}
              onClick={onStepreClick}
            >
              Book Tickets
            </Button>
          </div>
          <Footer />
        </div>
      
        <div className="d-md-none">
          <Button
            className=""
            style={{
              marginTop: "50px",
              width: "100%",
              height: "71px",
              backgroundColor: "#FF814A",
              color: "white",
              fontWeight: "900",
              fontSize: "15px",
            }}
            onClick={onStepreClick}
          >
            Book Tickets
          </Button>
        </div>
      </div>
    </>
  );
}

export default Tickets1;
