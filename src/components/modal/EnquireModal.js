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

function EnquireModal({ show, handleClose }) {
  return (
    <>
      <div>
        {/* {loading ? <Loader /> : null}
        {message ? <Message msg={message} type="success" /> : null}
        {error ? <Message msg={error} type="error" /> : null} */}

        <Modal show={show} size="lg">
          <Modal.Header onClick={handleClose} closeButton>
            <h3 className=""style={{fontWeight:"600"}}>Enquire Page</h3>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Form className="col-sm-6 offset-sm-3">
              <Form.Group
                className="review_input mb-3"
                controlId="formBasicEmail"
              >
                <Form.Control type="text" placeholder="Enter Your Name" />
                <br />

                <Form.Control type="email" placeholder="Enter Your Email*" />
                <br />
                <Form.Control type="text" placeholder="Enter Your Mobile" />
                <br />
                <Form.Control
                  type="text"
                  placeholder="Enter Your message (Destination)"
                />
                <br />
                {/* <Form.Control type="text" placeholder="packages ID" />
                <br />
                <Form.Control type="text" placeholder="Destination ID" />
                <br />                */}
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              */}
              <Button
                className="col-sm-6 offset-sm-3"
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default EnquireModal;
