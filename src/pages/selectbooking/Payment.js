import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { API_PATH } from "../../Path/Path";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBusBooking, setApiData } from "../../redux/actions";
import { Formik, Field } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  number: yup.string().required(),

});

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

const __DEV__ = document.domain === "localhost";

function Payment() {
  const history = useHistory();
  const [data, setData] = useState();

  const dispatch = useDispatch();
  const {
    data: apiData,
    tripData,
    mobile,
  } = useSelector((state) => state.busReducer);
  const { age, gender, adhaar, basic_details, price, surcharge } = apiData;

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [number, setNumber] = useState('');

  useEffect(() => {
    console.log("wrds", price, surcharge);
    axios.post(`${API_PATH}/api/v1/busticket/pay`, {
      amount: price + surcharge,
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


  const displayRazorpaysss = async (values) => {
    
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    console.log("data", data.amount);
    var options = {
      key: __DEV__ ? "rzp_test_DuapYrmQwcWLGy" : "PRODUCTION_KEY",
      currency: "INR",
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Aamcho Bastar",
      description: "Thank You For Booking.",
      image: "https://travelbastar.com/static/media/logo.0a3bc983.png",
      handler: function (response) {
        // toast(response.razorpay_payment_id);
        // toast(response.razorpay_order_id);
        // toast(response.razorpay_signature);
        if (response.razorpay_payment_id) {
          dispatch(
            createBusBooking({
              ...apiData,
              trips_id: tripData?._id,
              route: tripData?.route?._id,
              from: tripData?.route?.start?._id,
              to: tripData?.route?.end?._id,
              bus: tripData?.vehical,
              mobile,
              // name,
              // email,
              // whatsapp: number,
            })
          );
          dispatch(setApiData({ ...apiData, order_id: response.razorpay_order_id }))
          history.push("/CongratulationPage")
        }
      },
      prefill: {
        name: values.name,
        email: values.email,
        contact: values.number,
      },
    };
    const paymentOpject = new window.Razorpay(options);
    paymentOpject.open();
  };
  return (
    <>
      <ToastContainer />
      <div className="d-none d-md-block">
        <Header />
        <Container style={{ width: "75%", marginTop: "50px" }}>
          <div>
            <Formik
              validationSchema={schema}
              onSubmit={(values) => displayRazorpaysss(values)}
              initialValues={{
                name: '',
                email: '',
                number: '',
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit} style={{ marginLeft: "207px", marginBottom: "50px" }}>
                  <Row>
                    <Col xs={12} md={8}>
                      <Form.Group
                        md="3"
                        controlId="validationFormik101"
                        className="position-relative mb-3"
                      >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Enter name"
                          value={values.name}
                          onChange={handleChange}
                          isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={8}>
                      <Form.Group

                        md="3"
                        controlId="validationFormik102"
                        className="position-relative mb-3"
                      >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter email"
                          value={values.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                        />

                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={8}>
                      <Form.Group

                        md="3"
                        controlId="validationFormik103"
                        className="position-relative mb-3"

                      >
                        <Form.Label>Whatsapp Number</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter whatsapp number"
                          name="number"
                          value={values.number}
                          onChange={handleChange}
                          isInvalid={!!errors.number}
                        />

                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.number}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button type="submit" className="locationpass-btn mt-3 mb-5" style={{ margin: " 0% 22% 0%", width: "33%" }} >PAYMENT</Button>
                </Form>
              )}
            </Formik>
          </div>
        </Container>
        <Footer />
      </div>

      {/*mobile-view*/}

      <div fluid className="d-md-none">
        <Header />
        <Container style={{ width: "80%", marginTop: "50px" }}>
          <div>
            <Formik
              validationSchema={schema}
              onSubmit={(values) => displayRazorpaysss(values)}
              initialValues={{
                name: '',
                email: '',
                number: '',
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit} style={{ marginBottom: "40px" }}>
                  <Row>
                    <Col xs={12} md={8}>
                      <Form.Group
                        md="3"
                        controlId="validationFormik101"
                        className="position-relative mb-3"
                      >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Enter name"
                          value={values.name}
                          onChange={handleChange}
                          isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={8}>
                      <Form.Group

                        md="3"
                        controlId="validationFormik102"
                        className="position-relative mb-3"
                      >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter email"
                          value={values.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                        />

                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={8}>
                      <Form.Group

                        md="3"
                        controlId="validationFormik103"
                        className="position-relative mb-3"

                      >
                        <Form.Label>Whatsapp Number</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter whatsapp number"
                          name="number"
                          value={values.number}
                          onChange={handleChange}
                          isInvalid={!!errors.number}
                        />

                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.number}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="pay-div">
                    <Button
                      variant="primary"
                      size="lg"
                      type="submit"
                      style={{
                        marginTop: "15px",
                        fontWeight: "600",
                        fontSize: "20px",
                        width: "100%",
                        backgroundColor: "#0FA453",
                      }}
                    >
                      PAYMENT
                    </Button>

                   
                  </div>

                </Form>
              )}
            </Formik>
          </div>
        </Container>

      </div>


    </>
  );
}

export default Payment;
