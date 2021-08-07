import React, { useState, useEffect } from "react";
import "../../assets/css/pass.css";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ButtonComponent from "../../containers/Button";

const button_Data = [
  {
    name: "Male",
    value: "Male",
  },
  {
    name: "Female",
    value: "Female",
  },
];

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

function Pass() {
  const [activeButton, setActiveButton] = useState(button_Data[0].name);
  const [data, setData] = useState();

  const onSideBtnClick = (e) => {
    const name = e.target.name;
    setActiveButton(name);
  };

  useEffect(() => {
    fetch("http://localhost:1337/razorpay", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const [name, setName] = useState("Aish Khan");
  const [qrcode, setQrcode] = useState("18246AISH");

  const displayRazorpaysss = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    var options = {
      key: __DEV__ ? "rzp_test_ITrJmeIH74R5nA" : "PRODUCTION_KEY",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Aamcho Bastar",
      description: "Tankyou for nothink.",
      image: "http://localhost:1337/logo.svg",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: name,
        email: "mdaish80@gmail.com",
        contact: "8120130431",
      },
    };
    const paymentOpject = new window.Razorpay(options);
    paymentOpject.open();
  };

  return (
    <div>
      <Container>
        {/* <h1>pass</h1> */}
        <Row className="dmpassData">
          <form>
            <div className="form-row"></div>
            <div className="form-group">
              <label for="inputAddress">Mobile Number</label>
              <input
                type="text"
                className="form-control pass_input"
                id="inputAddress"
                placeholder="Enter mobile number"
              />
            </div>
            <div className="form-row">
              <div className="form-group ">
                <label for="inputState">Number of Travellers</label>
                <select id="inputState" className="form-control pass_input">
                  <option selected>1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <div className="form-group ">
                <label for="inputState">Days of Travel</label>
                <select id="inputState" className="form-control pass_input">
                  <option selected>1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div>
            <div className="traveller-detail">
              <label for="inputAddress">Traveller Details</label>
              <div className="card w-100">
                <div className="card-body">
                  <h5 className="card-title">Traveller 1</h5>
                  <p className="card-text">
                    <div className="form-group">
                      <label for="inputAddress">Name</label>
                      <input
                        type="text"
                        className="form-control pass_input"
                        id="inputAddress"
                        placeholder="Enter passenger name"
                        style={{ fontSize: "11px" }}
                      />
                    </div>

                    <div className="form-row genderform pt-3 d-flex ">
                      <div className="col m-2 w-50">
                        <label for="inputAddress">Gender</label>
                        <div className="d-flex pt-2">
                          <ButtonComponent
                            style={{
                              width: "50%",
                              fontSize: "11px",
                              whiteSpace: "nowrap",
                            }}
                            data={button_Data}
                            activeButton={activeButton}
                            trigerOnClickEmpSideBtn={onSideBtnClick}
                          />
                        </div>
                      </div>
                      <div className="col m-2 w-50">
                        <label for="inputAddress">Age</label>
                        <br />
                        <input
                          type="text"
                          className="form-control pass_input w-70 pt-2"
                          placeholder="Enter Age"
                          style={{
                            fontSize: "12px",
                            whiteSpace: "nowrap",
                            height: "33px",
                          }}
                        />
                      </div>
                    </div>

                    <div className="form-group pt-2">
                      <label for="inputAddress">Aadhar Card Number </label>
                      <input
                        type="text"
                        className="form-control pass_input"
                        id="inputAddress"
                        placeholder=" Enter 12 digit Aadhar Card Number"
                        style={{ fontSize: "11px" }}
                      />
                    </div>
                  </p>
                  <Link className="btn" style={{backgroundColor:"#0FA453"}}>Button</Link>
                </div>
              </div>
            </div>

            <div className="form-group passengerbtn">
              <button type="submit" className="btn btn-success">
                Add passenger
              </button>
            </div>
          </form>
        </Row>
      </Container>
      <button
        onClick={displayRazorpaysss}
        className="payment-div text-center pt-2 bg-warning"
      >
        <h1>MAKE PAYMENT</h1>
      </button>
    </div>
  );
}

export default Pass;
