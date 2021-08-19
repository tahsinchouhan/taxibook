import React,{useEffect,useState} from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { useHistory } from "react-router-dom";



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


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    fetch("http://localhost:1337/razorpay", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);


  const displayRazorpaysss = async() => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    console.log(res)
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    var options = {
      key: __DEV__ ? "rzp_test_lS3QWpplq93lr5" : "PRODUCTION_KEY",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Aamcho Bastar",
      description: "Tankyou for nothink.",
      image: "https://travelbastar.com/static/media/logo.0a3bc983.png",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
        if(response.razorpay_payment_id){
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
      <div className="d-none d-md-block">
        <Header />
        <Container style={{ width: "75%",marginTop:"50px" }}>
        <div>
        <Form style={{marginLeft:"207px",marginBottom:"50px"}}>
            <Row>
              <Col xs={12} md={8}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
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
                    onChange={(e)=> setEmail(e.target.value)}
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
                    onChange={(e)=> setNumber(e.target.value)}
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
          style={{
            textAlign: "center",
            backgroundColor: "#0FA453",
            color: "white",
            height: "60px",
          }}
          onClick={displayRazorpaysss}
        >
          <span
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
          </span>
        </div>
        <Footer />
      </div>

{/*mobile-view*/}

      <div fluid className="d-md-none">
        <Header />
        <Container style={{ width: "80%",marginTop:"50px" }}>
        <div>
        <Form style={{marginBottom:"40px"}}>
            <Row>
              <Col xs={12} md={4}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
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
                    onChange={(e)=> setEmail(e.target.value)}
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
                    onChange={(e)=> setNumber(e.target.value)}
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
          style={{
            textAlign: "center",
          
            color: "white",
            height: "60px",
            widow:"100%"
          }}
          onClick={displayRazorpaysss}
        >
          <Button
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
          </Button>
        </div>
        <Footer />
      </div>


    </>
  );
}

export default Payment;
