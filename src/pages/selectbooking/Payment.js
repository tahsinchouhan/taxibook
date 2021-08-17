import React from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { useHistory } from "react-router-dom";

function Payment() {
  const history = useHistory();

  const onNextPage = () => {
    history.push("/CongratulationPage");
  };
  return (
    <>
      <div className="d-none d-md-block">
        <Header />
        <Container style={{ width: "75%",marginTop:"50px" }}>
        <div>
        <Form style={{marginLeft:"207px",marginBottom:"50px"}}>
            <Row>
              <Col xs={12} md={8}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter name"
                    style={{ backgroundColor: " #F8F8F8" }}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={8}>
               
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    style={{ backgroundColor: " #F8F8F8" }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Whatsapp Number</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter whatsapp number"
                    style={{ backgroundColor: " #F8F8F8" }}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={4}></Col>
            </Row>

            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
          </Form>
        </div>
        </Container>
        <div
          classNmae="pay-div"
          style={{
            textAlign: "center",
            backgroundColor: "#0FA453",
            color: "white",
            height: "60px",
          }}
          onClick={onNextPage}
        >
          <span
            variant="primary"
            size="lg"
            type="submit"
            style={{
              marginTop: "15px",
              fontWeight: "600",
              fontSize: "20px",
            }}
          >
            PAYMENT
          </span>
        </div>
        <Footer />
      </div>

{/*mobile-view*/}

      <div fluid className="d-md-none">
        <Header />
        <Container style={{ width: "80%",marginTop:"50px" }}>
        <div>
        <Form style={{marginBottom:"40px"}}>
            <Row>
              <Col xs={12} md={4}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter name"
                    style={{ backgroundColor: " #F8F8F8" }}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={4}>
               
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    style={{ backgroundColor: " #F8F8F8" }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Whatsapp Number</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter whatsapp number"
                    style={{ backgroundColor: " #F8F8F8" }}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={4}></Col>
            </Row>

            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
          </Form>
        </div>
        </Container>
        <div
          classNmae="pay-div"
          style={{
            textAlign: "center",
            backgroundColor: "#0FA453",
            color: "white",
            height: "60px",
          }}
          onClick={onNextPage}
        >
          <span
            variant="primary"
            size="lg"
            type="submit"
            style={{
              marginTop: "15px",
              fontWeight: "600",
              fontSize: "20px",
            }}
          >
            PAYMENT
          </span>
        </div>
        <Footer />
      </div>


    </>
  );
}

export default Payment;
