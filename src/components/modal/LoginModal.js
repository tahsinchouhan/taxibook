import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import {
  Container,
  Row,
  Col,
  Form,
  // Dropdown,
  Button,
  InputGroup,
} from "react-bootstrap";
import logo from "../../assets/img/logo.png";
// import { NavLink } from "react-router-dom";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import {
  getOtp,
  verifyOtp,
  // signupOtp,
  signup,
  loginEmail,
  // verifysignupSuccess,
} from "../../redux/actions";
import Loader from "../Loader";
import Message from "../Message";
import "../../assets/css/loginModal.css";
import { FiLogIn } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import { FaMobileAlt, FaSignInAlt, FaUserCircle } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";

function LoginModal({ show, handleClose }) {
  const [flag, setFlag] = useState(2);

  const dispatch = useDispatch();
  const { error, loading, message } = useSelector(
    (state) => state.commonReducer
  );

  const { apiData } = useSelector((state) => state.loginReducer);

  // login
  const [mobile, setMobile] = useState("");
  const [OTP, setOTP] = useState("");
  const [showDiv, setShowDiv] = useState(false);

  const email_data = useSelector((state) => state.loginReducer.email_data);
  // email
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // signup
  const [fullName, setFullName] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const signup_success_data = useSelector(
    (state) => state.signupReducer.signup_success_data
  );

  // reset
  const [confirmPassword, setConfirmPassword] = useState("");

  const { user_data} = useSelector((state) => state.loginReducer);

  useEffect(() => {
    if (user_data !== null) {
      handleClose();
    }
  }, [user_data]);
  
  useEffect(() => {
    if (show === true) {
     setFlag(2);
    }
  }, [show]);

  useEffect(() => {
    if(signup_success_data.code){
      if (signup_success_data?.code === 403) {
        if(signup_success_data?.message === 'Mobile Already Existed'){
          toast.error(signup_success_data?.message);
          setFlag(0);
        }else if(signup_success_data?.message === 'Email Already Existed'){
          toast.error(signup_success_data?.message);
          setFlag(1);
        }else{
          toast.error(signup_success_data?.message);
        }
       
      } else {
        toast.success("OTP SENT SUCCESSFULLY");
        setFlag(5);
      }
    }
    
  }, [signup_success_data]);

 

  useEffect(() => {
    // console.log(apiData);
    if (apiData !== undefined && apiData.length !== 0) {
      // toast.success("OTP Sent Successfully")
      setFlag(5);
    } else if (apiData === undefined) {
      toast.error("USER not registered? Signup First");
    }
  }, [apiData]);

  const fetchOtp = (_) => {
    dispatch(getOtp(mobile));
  };

  // login
  const handleChange = (otp) => {
    setOTP(otp);
  };
  const loginHandler = () => {
    setFlag(0);
  };

  const handleSubmit = () => {
    if (OTP.length === 6) {
      dispatch(verifyOtp(mobile, OTP));
      // dispatch(verifysignupSuccess(mobile, OTP));
    }
    setOTP("");
    setMobile("");
    setFlag(0);
    setFullName("");
    setEmail("");
    setPassword("");
    setMobile("");
  };

  const handleSignupSubmit = () => {
    if (OTP.length === 6) {
      dispatch(verifyOtp(mobile, OTP));
    }
  };

  const otpHandler = () => {};
  // for email

  const emailHandler = () => {
    setFlag(1);
  };

  useEffect(() => {
    if (email_data && email_data?.status === "ERROR") {
      toast.error(email_data?.message);
      setFlag(0);
    } else if (email_data && email_data?.status === "OK") {
      
    }
  }, [email_data]);

  const loginEmailHandler = () => {
    dispatch(loginEmail({ email, password }));
  };

  // for signupmobileNo
  const signupHandler = () => {
    setFlag(2);
  };

  const registerHandler = () => {
    localStorage.setItem("mobileNo", mobile);
    dispatch(signup({ mobile, email, fullName, password }));
    localStorage.setItem("email", email);
    setEmail("");
    setPassword("");
    setFullName("");
    // setMobile("")
  };

  // forget

  const forgetHandler = () => {
    setFlag(3);
  };

  // reset

  const resetHandler = () => {
    setFlag(4);
  };

  // closing button

  return (
    <>
      <div>
        <ToastContainer limit={1} />
        {loading ? <Loader /> : null}
        {message ? <Message msg={message} type="success" /> : null}
        {error ? <Message msg={error} type="error" /> : null}
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
                  {flag === 0 ? (
                    <div>
                      <Form>
                        <div className="d-flex justify-content-center ">
                          <FiLogIn
                            className="mx-2"
                            style={{ color: "#07bf07", fontSize: "42px" }}
                          />
                          <h1 style={{ fontWeight: "bolder" }}>Login</h1>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label style={{ fontWeight: "bolder" }}>
                            Enter mobile number
                          </Form.Label>
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                              <FaMobileAlt className="mx-2" />
                            </InputGroup.Text>
                            <Form.Control
                              type="number"
                              placeholder="10 digit number"
                              value={mobile}
                              onChange={(e) => setMobile(e.target.value)}
                            />
                          </InputGroup>
                        </Form.Group>
                        <div
                          className="d-flex justify-content-end mb-4"
                          style={{
                            fontWeight: "600",
                            textDecoration: "underline",
                          }}
                        >
                          Sign-in with<span> </span>
                          <span
                            className="mx-1"
                            onClick={emailHandler}
                            style={{ color: "#07bf07", cursor: "pointer" }}
                          >
                            email
                          </span>
                        </div>
                        <div className="text-center">
                          <Button
                            className="otp-btn "
                            variant="dark"
                            onClick={fetchOtp}
                          >
                            Send OTP
                          </Button>
                        </div>
                        <p
                          className="mt-3 text-center"
                          style={{ fontWeight: "600" }}
                        >
                          Don't have a account?
                          <span
                            className="mx-2"
                            onClick={signupHandler}
                            style={{ color: "#07bf07", cursor: "pointer" }}
                          >
                            Sign Up
                          </span>
                        </p>
                      </Form>
                    </div>
                  ) : flag === 1 ? (
                    <div>
                      <Form>
                        <div className="d-flex justify-content-center mb-4">
                          <FiLogIn
                            className="mx-2"
                            style={{ color: "#07bf07", fontSize: "42px" }}
                          />
                          <h1 style={{ fontWeight: "bolder" }}>Login</h1>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="email"
                            placeholder="Enter E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </Form.Group>
                        <div
                          className="d-flex justify-content-end mb-4"
                          style={{
                            fontWeight: "600",
                            textDecoration: "underline",
                          }}
                        >
                          Sign-in with<span> </span>
                          <span
                            className="mx-1"
                            onClick={loginHandler}
                            style={{ color: "#07bf07", cursor: "pointer" }}
                          >
                            Mobile
                          </span>
                        </div>
                        <div className="text-center">
                          <Button
                            type="button"
                            className="otp-btn "
                            variant="dark"
                            onClick={loginEmailHandler}
                          >
                            Login
                          </Button>
                        </div>
                        <p
                          className=" text-center"
                          style={{
                            fontWeight: "600",
                            marginBottom: "0",
                            cursor: "pointer",
                          }}
                          onClick={forgetHandler}
                        >
                          Forget Password ?
                        </p>
                        <p
                          className="text-center"
                          style={{ fontWeight: "600" }}
                        >
                          Don't have a account?
                          <span
                            onClick={signupHandler}
                            className="mx-2"
                            style={{ color: "#07bf07", cursor: "pointer" }}
                          >
                            Sign Up
                          </span>
                        </p>
                      </Form>
                    </div>
                  ) : flag === 2 ? (
                    <div>
                      <Form>
                        <div className=" vl"></div>
                        <div className="d-flex justify-content-center">
                          <div>
                            <FaSignInAlt
                              className="mx-3"
                              style={{ color: "#07bf07", fontSize: "42px" }}
                            />
                          </div>
                          <h1 style={{ fontWeight: "bolder" }}>Sign Up</h1>
                        </div>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label
                            style={{ fontWeight: "bolder" }}
                          ></Form.Label>
                          <FaUserCircle className="text-success" />
                          <Form.Control
                            type="text"
                            placeholder="Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                          />
                          {/* <i className="fa fa-user icon icons">
                          <FaUserCircle />
                        </i>
                        <input class="input-field" type="text" placeholder='Name'></input> */}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label
                            style={{ fontWeight: "bolder" }}
                          ></Form.Label>
                          <AiOutlineMail className="text-success" />
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label
                            style={{ fontWeight: "bolder" }}
                          ></Form.Label>
                          <RiLockPasswordFill className="text-success" />
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label
                            style={{ fontWeight: "bolder" }}
                          ></Form.Label>
                          <FaMobileAlt className="text-success" />
                          <Form.Control
                            type="number"
                            placeholder="Mobile"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                          />
                        </Form.Group>
                        {/* <div
                        className="d-flex justify-content-end "
                        onClick={fetchSignupOtp}
                        style={{ color: "red" }}
                      >
                        Send OTP
                      </div> */}
                        <div className="text-center">
                          <Button
                            className="login-button register"
                            type="button"
                            variant="dark"
                            style={{
                              fontWeight: "bolder",

                              marginBottom: "10px",
                            }}
                            onClick={registerHandler}
                          >
                            Register
                          </Button>
                        </div>
                        <div className="text-center">
                          <p style={{ fontWeight: "600" }}>
                            Have a account ?
                            <span
                              style={{ color: "#07bf07", cursor: "pointer" }}
                              className="mx-2"
                              onClick={loginHandler}
                            >
                              Login{" "}
                            </span>{" "}
                          </p>
                        </div>
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
                            type="number"
                            inputStyle="input__style"
                            value={OTP}
                            isInputNum={true}
                            onChange={handleChange}
                            numInputs={6}
                            separator={<span>&nbsp;-&nbsp;</span>}
                          />
                          <div className="mt-4 mb-4">
                            <Button
                              className="login-button m-1"
                              size="sm"
                              type="submit"
                              onClick={handleSignupSubmit}
                              style={{
                                background: "#222",
                                border: "1px solid #222",
                              }}
                            >
                              Submit
                            </Button>
                          </div>
                        </div>
                      </Form>
                    </div>
                  ) : flag === 3 ? (
                    <div>
                      <Form onSubmit={resetHandler}>
                        <div className="d-flex justify-content-center mb-4">
                          <FiLogIn
                            className="mx-2"
                            style={{ color: "#07bf07", fontSize: "42px" }}
                          />
                          <h1 style={{ fontWeight: "bolder" }}>Forget</h1>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="email"
                            placeholder="Enter E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </Form.Group>
                        <div
                          className="text-center mb-5"
                          style={{
                            fontWeight: "600",
                            textDecoration: "underline",
                          }}
                        >
                          Please Check your Email
                        </div>
                        <div className="text-center">
                          <Button
                            className="otp-btn mb-5"
                            variant="dark"
                            type="submit"
                          >
                            Continue
                          </Button>
                        </div>

                        <p
                          className="text-center"
                          style={{ fontWeight: "600" }}
                        >
                          Don't have a account?
                          <span
                            onClick={signupHandler}
                            className="mx-2"
                            style={{ color: "#07bf07", cursor: "pointer" }}
                          >
                            Sign Up
                          </span>
                        </p>
                      </Form>
                    </div>
                  ) : flag === 4 ? (
                    <div>
                      <Form onSubmit={emailHandler}>
                        <div className="d-flex justify-content-center mb-4">
                          <FiLogIn
                            className="mx-2"
                            style={{ color: "#07bf07", fontSize: "42px" }}
                          />
                          <h1 style={{ fontWeight: "bolder" }}>Reset</h1>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="text"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-5" controlId="formBasicEmail">
                          <Form.Control
                            type="text"
                            placeholder="Confirm Email"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                          />
                        </Form.Group>

                        <div className="text-center">
                          <Button
                            className="otp-btn mb-5"
                            variant="dark"
                            type="submit"
                          >
                            Confirm
                          </Button>
                        </div>

                        <p
                          className="text-center"
                          style={{ fontWeight: "600" }}
                        >
                          Don't have a account?
                          <span
                            onClick={signupHandler}
                            className="mx-2"
                            style={{ color: "#07bf07", cursor: "pointer" }}
                          >
                            Sign Up
                          </span>
                        </p>
                      </Form>
                    </div>
                  ) : flag === 5 ? (
                    <div className="modal__block">
                      <div className=" d-flex justify-content-center ">
                        <div style={{ fontSize: "24px", color: "green" }}>
                          <AiOutlineMail className="mx-2" />
                        </div>
                        <h5
                          className="modal__title mt-2 mb-4"
                          style={{ fontWeight: "bolder" }}
                        >
                          Enter OTP
                        </h5>
                      </div>
                      <OtpInput
                        type="number"
                        inputStyle="input__style"
                        value={OTP}
                        isInputNum={true}
                        onChange={handleChange}
                        numInputs={6}
                        separator={
                          <span style={{ color: "green" }}>&nbsp;-&nbsp;</span>
                        }
                      />
                      {/* <div className="d-flex justify-content-end">
                          <p style={{ color: "red" }}>Resend OTP</p>
                        </div> */}
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
                          Don't have a account?
                          <span
                            onClick={signupHandler}
                            className="mx-2"
                            style={{ color: "#07bf07" }}
                          >
                            sign up
                          </span>
                        </p>
                      </div>
                    </div>
                  ) : null}
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
