import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { getOtp, verifyOtp } from "../../redux/actions";
import Loader from "../Loader";
import Message from "../Message";
import { FaStar } from 'react-icons/fa';


function RettingModal({ show, handleClose }) {
  const { error, loading, message } = useSelector(
    (state) => state.commonReducer
  );

  return (
    <>
      <div>
        {loading ? <Loader /> : null}
        {message ? <Message msg={message} type="success" /> : null}
        {error ? <Message msg={error} type="error" /> : null}       
          <Modal show={show} size="lg"  >
           <div className="review_modal">
           <Modal.Header onClick={handleClose} closeButton>
              <h3 className="review_header" style={{fontWeight:"600"}}>Review</h3>
            </Modal.Header>
            <Modal.Body className="">
              <Form className="col-sm-6 offset-sm-3">
                <Form.Group className="review_input mb-3" controlId="formBasicEmail">
                  <div className="d-flex">
                  <Form.Label style={{
                      paddingTop: '5px'
                    }}>Star Rating:&nbsp;</Form.Label>
                    <div style={{color:"#FF8700", fontSize:"22px"}}>                    
                    <FaStar  /> 
                    <FaStar  /> 
                    <FaStar  /> 
                    <FaStar  /> 
                    <FaStar  /> 
                    </div>
                    </div>
                  {/* <Form.Control type="text" placeholder="Star Rating" >
                     <FaStar  />
                    
                  </Form.Control>  */}

                  <Form.Label style={{
                      paddingTop: '5px'
                    }}>Enter Your Mobile:</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Mobile" />

                  <Form.Label style={{
                      paddingTop: '5px'
                    }}>Enter Your Email:</Form.Label>
                  <Form.Control type="email" placeholder="Enter Your Email" />
                  
                  <Form.Label style={{
                      paddingTop: '5px'
                    }}>Comments:</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Comments"/>
                  
                  
                  
                  
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              */}
                <Button className="col-sm-6 offset-sm-3" variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Modal.Body>
           </div>
          </Modal>       
      </div>
    </>
  );
}

export default RettingModal;

// className="login-logo"
// className="review_modal"
{
  /* <Container>
  <Row>
    <Col style={{ alignSelf: "center" }}>
      <div style={{ textAlign: "center" }}>
        <img src={logo} alt="" className="login-logo" />
      </div>
    </Col>
    <Col>
      <div>
        <Form>
          <h1
            style={{
              paddingTop: "20px",
              marginBottom: "20px",
              fontWeight: "bolder",
            }}
          >
            Login
          </h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontWeight: "bolder" }}>
              Enter mobile number
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="dark"
            onClick={fetchOtp}
            style={{
              fontWeight: "bolder",
              width: "95px",
              marginBottom: "50px",
            }}
          >
            Get OTP
          </Button>

          <div
            className="modal__block"
            style={{ display: `${showDiv ? "block" : "none"}` }}
          >
            <h5
              className="modal__title mt-2 mb-4"
              style={{ fontWeight: "bolder" }}
            >
              Enter Verification Code
            </h5>
            <OtpInput
              // containerStyle="container__style"
              inputStyle="input__style"
              value={OTP}
              onChange={handleChange}
              numInputs={6}
              separator={<span>&nbsp;-&nbsp;</span>}
            />

            <div className="mt-4 mb-4">
              <Button
                size="sm"
                style={{
                  background: "#222",
                  border: "1px solid #222",
                }}
                className="m-1"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </Col>
  </Row>
</Container>; */
}
