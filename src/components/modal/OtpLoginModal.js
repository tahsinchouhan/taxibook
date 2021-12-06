import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Message from "../Message";
import { getOtp, verifyOtp } from "../../redux/actions";
import { AiOutlineMail } from "react-icons/ai";
import OtpInput from "react-otp-input";

function OtpLoginModal({ show, handleClose }) {
    const [OTP, setOTP] = useState("");
    const [mobile, setMobile] = useState("");
    const [showDiv, setShowDiv] = useState(false);

    const dispatch = useDispatch();
    const { error, loading, message } = useSelector(
      (state) => state.commonReducer
    );
    const { user_data } = useSelector((state) => state.loginReducer);

    
    const fetchOtp = (_) => {
        dispatch(getOtp(mobile));
        setShowDiv(true);
      };

    const handleChange = (otp) => {
        setOTP(otp);
      };
      const handleSubmit = () => {
        if (OTP.length === 6) {
          dispatch(verifyOtp(mobile, OTP));
        }
      };
      useEffect(() => {
        if (user_data !== null) {
          handleClose();
        }
      }, [user_data]);
    
  return (
    <>
      <div>
        {loading ? <Loader /> : null}
        {message ? <Message msg={message} type="success" /> : null}
        {error ? <Message msg={error} type="error" /> : null}
      </div>
      <Modal show={show} size="lg">
      <Modal.Header onClick={handleClose} closeButton></Modal.Header>
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
                      <div className="d-flex">
                        <AiOutlineMail
                          className="mx-2"
                          style={{ color: "#07bf07", fontSize: "42px" }}
                        />
                        <h2 style={{ fontWeight: "bolder" }}>Enter OTP</h2>
                      </div>
                      <OtpInput
                          type="number"
                          inputStyle="input__style"
                          value={OTP}
                          isInputNum={true}
                          onChange={handleChange}
                          numInputs={6}
                          separator={
                            <span style={{ color: "green" }}>
                              &nbsp;-&nbsp;
                            </span>
                          }
                        />
                        <div className="d-flex justify-content-end">
                          <p style={{ color: "red" }}>RE-send OTP</p>
                        </div>
                        <div className="mt-4 mb-4 text-center">
                          <Button
                            className="otp-btn m-1"
                            size="sm"
                            onClick={handleSubmit}
                            style={{
                              background: "#07bf07",

                              border: "1px solid #222",
                            }}
                          >
                            Confirm
                          </Button>
                          <p className="mt-3" style={{ fontWeight: "600" }}>
                           Don't Have an Account?
                            <span className="mx-2" style={{ color: "#07bf07" }}>
                              Sign up
                            </span>
                          </p>
                        </div>
                      </Form>
                </div>
                </Col>
        </Row>
        </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OtpLoginModal;
