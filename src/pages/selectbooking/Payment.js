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
  } = useSelector((state) => state.busReducer);
  const { age, gender, adhaar, basic_details, price, surcharge } = apiData;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

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


  const displayRazorpaysss = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    var options = {
      key: "rzp_test_DuapYrmQwcWLGy",
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
              name,
              email,
              whatsapp:number,
            })
          );
          dispatch(setApiData({ ...apiData, order_id:response.razorpay_order_id }))
          history.push("/CongratulationPage")
        }
      },
      prefill: {
        name: name,
        email: email,
        contact: number,
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
            <Form style={{ marginLeft: "207px", marginBottom: "50px" }}>
              <Row>
                <Col xs={12} md={8}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{ backgroundColor: " #F8F8F8" }}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={8}>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      type="number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
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
          // style={{
          //   textAlign: "center",
          //   backgroundColor: "#0FA453",
          //   color: "white",
          //   height: "60px",
          // }}
          onClick={displayRazorpaysss}
        >
          {/* <span
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
          </span> */}

        <Button className="locationpass-btn  mb-5">
          PAYMENT
        </Button>
        </div>
        <Footer />
      </div>

      {/*mobile-view*/}

      <div fluid className="d-md-none">
        <Header />
        <Container style={{ width: "80%", marginTop: "50px" }}>
          <div>
            <Form style={{ marginBottom: "40px" }}>
              <Row>
                <Col xs={12} md={4}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{ backgroundColor: " #F8F8F8" }}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={4}>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      type="number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
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
          // style={{
          //   textAlign: "center",
          
          //   color: "white",
          //   height: "60px",
          //   widow:"100%"
          // }}
          onClick={displayRazorpaysss}
        >
          {/* <Button
            variant="primary"
            size="lg"
            type="submit"
            style={{
              marginTop: "15px",
              fontWeight: "600",
              fontSize: "20px",
              width:"100%",
              backgroundColor: "#0FA453",
            }}
          >
            PAYMENT
          </Button> */}

        <Button className="locationpass-btn  mt-5">
          PAYMENT
        </Button>
        </div>
        {/* <Footer /> */}
      </div>


    </>
  );
}

export default Payment;
