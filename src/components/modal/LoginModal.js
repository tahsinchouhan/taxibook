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
import '../../assets/css/loginModal.css'
import { FiLogIn } from "react-icons/fi";



function LoginModal({ show, handleClose }) {
  const [modalShow, setModalShow] = useState(false);
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
        <Modal show={show} size="lg">
          <Modal.Header onClick={handleClose} closeButton>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Container>
              <Row>
                <Col style={{ alignSelf: "center" }}>
                  <div style={{ textAlign: "center" }}>
                    <img src={logo} alt="Login logo" className="login-logo" />
                  </div>
                </Col>
                <Col>
                <div className="vl"></div>
                  <div>
                    <Form>
                      <div className='d-flex justify-content-center '>
                      {/* <FiLogIn  className='text-success'/> */}
                      <h1
                        style={{ paddingTop: "20px", marginBottom: "20px", fontWeight: "bolder" }}
                      >
                        Login
                      </h1>
                      </div>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label
                          style={{ fontWeight: "bolder" }}
                        >
                          Enter mobile number
                        </Form.Label>
                        <Form.Control type="number" placeholder="10 digit number" value={mobile} onChange={(e) => setMobile(e.target.value)}
                          />
                      </Form.Group>

                      <Button className=" bg-success btn-lg" variant="dark" onClick={fetchOtp} >
                      Send OTP
                      </Button>
                      <p> Don't have a account? <span className='text-success'>sign up</span></p>

                      <div className="modal__block" style={{ display: `${showDiv ? "block" : "none"}` }} >
                        <h5 className="modal__title mt-2 mb-4" style={{ fontWeight: "bolder" }}>Enter Verification Code</h5>
                        <OtpInput
                          type="number"
                          inputStyle="input__style"
                          value={OTP}
                          isInputNum={true}
                          onChange={handleChange}
                          numInputs={6}
                          separator={<span>&nbsp;-&nbsp;</span>}
                        />
                        <div className="mt-4 mb-4">
                          <Button className="login-button m-1" size="sm" onClick={handleSubmit}
                           style={{
                            background: '#222',
                            border: '1px solid #222'
                          }} >Submit</Button>
                        </div>
                      </div>
                    </Form>
                  </div>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
export default LoginModal;
