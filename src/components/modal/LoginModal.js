import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";

function LoginModal({ show, handleClose }) {
  // const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div>
        <Modal show={show} size="lg">
          <Modal.Header  onClick={handleClose} closeButton>
            {/* <Modal.Title id="contained-modal-title-vcenter">
          Using Grid in Modal
        </Modal.Title> */}
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Container>
              <Row>
                <Col>
                  <div style={{ textAlign: "center" }}>
                    <img src={logo} alt="" style={{ height: "200px" }} />
                  </div>
                </Col>
                <Col>
                  <div>
                    <Form>
                      <h1
                        style={{ paddingTop:"20px",marginBottom: "20px", fontWeight: "bolder" }}
                      >
                        Login
                      </h1>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label
                          style={{fontWeight: "bolder" }}
                        >
                          Enter mobile number
                        </Form.Label>
                        <Form.Control type="text" placeholder="phone number" />
                      </Form.Group>
                      <Button variant="dark" type="submit" style={{fontWeight: "bolder",width:"85px",marginBottom: "50px"}}>
                        OTP
                      </Button>
                      <div style={{marginBottom: "50px"}}>
                        <span>Create New Account ?</span>
                        <NavLink className="sidebar_item" to="/" style={{marginBottom: "50px"}} >
                          Click here
                        </NavLink>
                        {/* <span>Click here</span> */}
                      </div>
                    </Form>
                  </div>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button onClick={handleClose}>Close</Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    </>
  );
}

export default LoginModal;

{
  /* <Modal {...props} aria-labelledby="contained-modal-title-vcenter"> */
}
{
  /* <Button onClick={props.onHide}>Close</Button> */
}
