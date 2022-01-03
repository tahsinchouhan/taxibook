import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { API_PATH } from "../../Path/Path";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  // createBusBooking,
  setApiData
} from "../../redux/actions";
import {packagesbookingAction} from '../../redux/packages/actions'
// import { Formik, Field } from "formik";
// import * as yup from "yup";
import { AvForm, AvField } from "availity-reactstrap-validation";

async function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

function Payment() {
  const history = useHistory();
  const [data, setData] = useState();

  const dispatch = useDispatch();
  const {
    data: apiData,
    tripData,
    mobile,
    routeData,
  } = useSelector((state) => state.busReducer);
  const { age, gender, adhaar, basic_details, price } = apiData;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    console.log("wrds", price);
    axios
      .post(`${API_PATH}/api/v1/busticket/pay`, {
        amount: price,
      })
      // .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    if (routeData.startDate === undefined) {
      history.push("/busdetail");
    }
  }, [routeData]);

  const displayRazorpaysss = async (values) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    console.log("data", data);
    // key: "rzp_test_DuapYrmQwcWLGy",
    var options = {
      key: "rzp_live_CpkoLmfTklzLb0",
      // key: 'rzp_test_DuapYrmQwcWLGy',
      currency: "INR",
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Aamcho Bastar",
      description: "Thank You For Booking.",
      image: "https://travelbastar.com/static/media/logo.0a3bc983.png",

      handler: function (response) {
        console.log({ response });
        dispatch(packagesbookingAction());
        dispatch(
          setApiData({ ...apiData, order_id: response.razorpay_order_id })
        );
        if (response.razorpay_payment_id) {
          // dispatch(packagesbookingAction());
          // dispatch(
          //   setApiData({ ...apiData, order_id: response.razorpay_order_id })
          // );
          history.push("/congratulation-page");
        }
      },

      prefill: {
        name: name,
        email: email,
        contact: number,
      },
    };
    const paymentOpject = new window.Razorpay(options);
    console.log("paymentOpject", paymentOpject);
    paymentOpject.open();
  };
  return (
    <>
      <ToastContainer />
      <div className="d-none d-md-block">
        <Header />
        <Container style={{ width: "75%", marginTop: "50px" }}>
          <div>
            <AvForm>
              <Row style={{ justifyContent: "center" }}>
                <Col xs={12} md={6} className="mt-2">
                  <Form.Label className="dm-ticket">Enter Your Name</Form.Label>
                  <AvField
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    name="name"
                    type="text"
                    className="position-relative"
                    placeholder="Enter Name"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "Enter Your Name",
                      },
                    }}
                  />

                  <Form.Label className="dm-ticket">
                    Enter WhatsApp Number
                  </Form.Label>

                  <AvField
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                    name="number"
                    type="number"
                    className="position-relative"
                    errorMessage="Invalid Number"
                    placeholder="Enter WhatsApp Number"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "Enter your WhatsApp number",
                      },
                      pattern: {
                        value: "^[0-9]",
                        errorMessage: "Your Number only be 10 numbers",
                      },
                      maxLength: {
                        value: 10,
                        errorMessage: "Only 10 digit number",
                      },
                    }}
                  />

                  <Form.Label className="dm-ticket">
                    Enter Email Address
                  </Form.Label>

                  <AvField
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    name="email"
                    type="email"
                    className="position-relative"
                    placeholder="Enter Email Address"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "Enter your Email Address",
                      },
                      pattern: {
                        value:
                          "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/",
                        errorMessage: "Please Enter Your Vailid Email",
                      },
                    }}
                  />
                </Col>
              </Row>
              <div
                className="dmticket-btn"
                style={{ textAlign: "center", marginTop: "70px" }}
              >
                <Button
                  type="submit"
                  class="btn btn-success"
                  style={{
                    width: "200px",
                    textAlign: "center",
                    height: "52px",
                    borderRadius: "9px",
                    backgroundColor: "#0fa453",
                    border: "none",
                    marginBottom: 100,
                  }}
                  onClick={displayRazorpaysss}
                >
                  Continue
                </Button>
              </div>
            </AvForm>
          </div>
        </Container>
        <Footer />
      </div>

      {/*mobile-view*/}

      <div fluid className="d-md-none">
        <Header />
        <Container style={{ width: "80%", marginTop: "50px" }}>
          <div>
            <AvForm>
              <Row style={{ justifyContent: "center" }}>
                <Col xs={12} md={6} className="mt-2">
                  <Form.Label className="dm-ticket">Enter Your Name</Form.Label>
                  <AvField
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    name="name"
                    type="text"
                    className="position-relative"
                    placeholder="Enter Name"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "Enter Your Name",
                      },
                    }}
                  />

                  <Form.Label className="dm-ticket">
                    Enter WhatsApp Number
                  </Form.Label>

                  <AvField
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                    name="number"
                    type="number"
                    className="position-relative"
                    errorMessage="Invalid Number"
                    placeholder="Enter WhatsApp Number"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "Enter your WhatsApp number",
                      },
                      pattern: {
                        value: "^[0-9]",
                        errorMessage: "Your Number only be 10 numbers",
                      },
                      maxLength: {
                        value: 10,
                        errorMessage: "Only 10 digit number",
                      },
                    }}
                  />

                  <Form.Label className="dm-ticket">
                    Enter Email Address
                  </Form.Label>

                  <AvField
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    name="email"
                    type="email"
                    className="position-relative"
                    placeholder="Enter Email Address"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "Enter your Email Address",
                      },
                      pattern: {
                        value:
                          "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/",
                        errorMessage: "Please Enter Your Vailid Email",
                      },
                    }}
                  />
                </Col>
              </Row>
              <div
                className="dmticket-btn"
                style={{ textAlign: "center", marginTop: "70px" }}
              >
                <Button
                  type="submit"
                  class="btn btn-success"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    height: "52px",
                    borderRadius: "9px",
                    backgroundColor: "#0fa453",
                    border: "none",
                    marginBottom: 100,
                  }}
                  onClick={displayRazorpaysss}
                >
                  Continue
                </Button>
              </div>
            </AvForm>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Payment;
