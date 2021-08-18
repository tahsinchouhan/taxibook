import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import OtpInput from 'react-otp-input';
import { useDispatch, useSelector } from "react-redux";
import { getOtp, verifyOtp } from "../../redux/actions";
import Loader from "../Loader";
import Message from "../Message";


function LoginModal({ show, handleClose }) {
  // const [modalShow, setModalShow] = useState(false);
  const [mobile, setMobile] = useState("");
  const [OTP, setOTP] = useState("");
  const [showDiv, setShowDiv] = useState(false);

  const dispatch = useDispatch();
  const { error, loading, message } = useSelector(state => state.commonReducer)
  const { user_data } = useSelector(state => state.loginReducer)

  const fetchOtp = _ => {
    dispatch(getOtp(mobile))
    setShowDiv(true);
  }
  const handleChange = otp => {
    setOTP(otp);
  }

  const handleSubmit = () => {
    if (OTP.length === 6) {
      dispatch(verifyOtp(mobile, OTP))
    }
  }
  useEffect(() => {
    if (user_data !== null) {
      handleClose()
    }
  }, [user_data])

  return (
    <>
      <div>
        {loading ? <Loader /> : null}
        {message ? <Message msg={message} type="success" /> : null}
        {error ? <Message msg={error} type="error" /> : null}
        {/* {(user_data !== null) ? <Redirect to='/busdetail' /> : null} */}

        <Modal show={show} size="lg">
          <Modal.Header onClick={handleClose} closeButton>
            {/* <Modal.Title id="contained-modal-title-vcenter">
          Using Grid in Modal
        </Modal.Title> */}
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Container>
              <Row>
                <Col style={{ alignSelf: "center" }}>
                  <div style={{ textAlign: "center" }}>
                    <img src={logo} alt="" style={{ height: "280px" }} />
                  </div>
                </Col>
                <Col>
                  <div>
                    <Form>
                      <h1
                        style={{ paddingTop: "20px", marginBottom: "20px", fontWeight: "bolder" }}
                      >
                        Login
                      </h1>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label
                          style={{ fontWeight: "bolder" }}
                        >
                          Enter mobile number
                        </Form.Label>
                        <Form.Control type="text" placeholder="Phone Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                      </Form.Group>

                      <Button variant="dark" onClick={fetchOtp} style={{ fontWeight: "bolder", width: "95px", marginBottom: "50px" }}>
                        Get OTP
                      </Button>

                      <div className="modal__block" style={{ display: `${showDiv ? "block" : "none"}` }} >
                        <h5 className="modal__title mt-2 mb-4" style={{ fontWeight: "bolder" }}>Enter Verification Code</h5>
                        <OtpInput
                          // containerStyle="container__style"
                          inputStyle="input__style"
                          value={OTP}
                          onChange={handleChange}
                          numInputs={6}
                          separator={<span>&nbsp;-&nbsp;</span>}
                        />

                        <div className="mt-4 mb-4">

                          {/* <button className="m-1">Resent otp</button> */}
                          <Button size="sm" style={{
                            background: '#222',
                            border: '1px solid #222'
                          }} className="m-1" onClick={handleSubmit}>Submit</Button>
                        </div>
                      </div>

                      {/* <div style={{ marginBottom: "50px" }}>
                        <span>Create New Account ?</span>
                        <NavLink className="sidebar_item" to="/" style={{ marginBottom: "50px" }} >
                          Click here
                        </NavLink>
                      </div> */}
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
