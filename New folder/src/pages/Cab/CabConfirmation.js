import React,{useEffect,useState}from "react";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { useHistory } from "react-router-dom";
import { API_PATH } from "../../Path/Path";
import axios from "axios";

import "../../assets/css/busconfirmation.css";
import { IoIosArrowBack } from "react-icons/io";
import Car from "../../assets/img/car.jpeg";
import Cab from "../../assets/img/cab.png";

function CabConfirmation() {
  const history = useHistory();

  const [data, setData] = useState();
  const [name, setName] = useState("");
  const [email, setEamil] = useState("");
  const [mobile, setMobile] = useState("");

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

  useEffect(() => {
    const values = {
      amount: 10
    }
    fetch(API_PATH + '/api/v1/busticket/pay',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      .then(res => res.json())
      .then(res => {
        console.log("res::", res);
        setData(res.data)
      })
      .catch(error => {
        console.log("error::", error);
        
      });
  }, []);

  // const onClickBack = () => {
  //   history.push("/hotellist");
  // };

  const cafeBooking =()=> {
    const values = {
      name:name,
      email:email,
      mobile:mobile
    }
    fetch(`http://15.206.92.158/api/v2/taxi-booking/create`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(res => res.json())
    .then(res => {
      console.log("res::", res);
      setData(res.data)
    })
    .catch(error => {
      console.log("error::", error);
      
    });


    axios
      .post(`http://15.206.92.158/api/v2/taxi-booking/create`, {
        amount: 10
      })
      .then((res) => res.json())
      .then((result) => {
        console.log("result", result);
        // setData(result.data);
        alert('Booking Confirm')
      })
      .catch((e) => {
        console.log(e);
      });
  }
  const displayRazorpaysss =  (values) => {
    cafeBooking();
    console.log("drgbhebfb")
    // const res = await loadScript(
    //   "https://checkout.razorpay.com/v1/checkout.js"
    // );

    // if (!res) {
    //   alert("Razorpay SDK failed to load. Are you online?");
    //   return;
    // }
    // console.log("data", data);

  };

  return (
    <>
      <div className="">
        <Header />
        <div className="container-div">
          <div
          //  onClick={onClickBack}
           >
            <h4
              style={{
                width: "100%",
                color: "#864BD7",
                fontWeight: 500,
                fontSize: "22px",
                marginTop: "20px",
              }}
            >
              <IoIosArrowBack /> Manage Your Cab Booking
            </h4>
          </div>

          <div className="hotel-confirm-div" style={{ width: "100%" }}>
            <div className="hotel-confirm-1">
              <div
                className="saving-div-container"
                style={{
                  backgroundColor: "#d7baff",
                  border: "1px solid #5c00db",
                }}
              >
                <h4 className="saving-div" style={{ color: "#864BD7" }}>
                  🎉 Yay!! you just saved ₹ 457 on this booking
                </h4>
              </div>
              <div className="details-div">
                <h4
                  style={{
                    backgroundColor: "#F9F9FB",
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 600,
                    fontSize: "20px",
                    height: "50px",
                    padding: "15px",
                  }}
                >
                  1️) Enter Your Details
                </h4>
                <div style={{ padding: "10px 20px", marginBottom: "40px" }}>
                  <p>
                    We will use this detail to share your booking information{" "}
                  </p>

                  <form>
                    <div className="mt-4 form-div">
                      <div
                        className="form-input-div"
                        style={{ marginRight: "20px" }}
                      >
                        <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
                          Full Name
                        </h3>
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="form-input"
                          value={name}
                          onChange={(e)=>setName(e.target.value)}
                        />
                      </div>
                      <div className="form-input-div">
                        <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
                          Email Address
                        </h3>
                        <input
                          type="email"
                          placeholder="example@gmail.com"
                          className="form-input"
                          value={email}
                          onChange={(e)=>setEamil(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className=" form-div">
                      <div
                        className=" form-input-div"
                        style={{ marginRight: "20px" }}
                      >
                        <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
                          Mobile Number
                        </h3>
                        <input
                          type="number"
                          className="form-input"
                          placeholder="Your Mobile Number"
                          value={mobile}
                          onChange={(e)=>setMobile(e.target.value)}
                        />
                      </div>
                      <div className="mt-3" style={{ marginRight: "20px" }}>
                        <button type="submit"
                          style={{
                            backgroundColor: "#864BD7",
                            height: "37px",
                            width: "180px",
                            marginTop: "20px",
                            borderRadius: "5px",
                            border: "0px solid gray",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                          onClick={()=>displayRazorpaysss()}
                        >
                          Send Passcode
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="hotel-confirm-2">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2
                  className="mt-2"
                  style={{ fontSize: "16px", fontWeight: "bold" }}
                >
                  Your Cab Booking Details
                </h2>
                <img
                  src={Car}
                  alt="room"
                  style={{ width: "80px", height: "60px", borderRadius: "5px" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: "12px",
                  fontWeight: "bold",
                  padding: "15px 2px 0 2px",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex" }}>
                  <img
                    alt="logo"
                    className="location-userdatas-calendar"
                    src={Cab}
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: "10px",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "16px",
                    }}
                  >
                    Jagdalpur To Bastar
                  </span>
                </div>

                <br />
                <span style={{ display: "flex" }}>
                  <p>Sat, 30 Oct-Sun, 12:00 PM </p>
                </span>
              </div>
              <hr />

              <div className="">
                <div style={{ fontWeight: "bold", margin: "10px 0" }}>
                  Car Type : Toyota Elico
                </div>
                <div
                  className="mt-1"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ color: "darkgrey" }}>Price</span>
                  <span style={{ fontWeight: "bold" }}>₹ 2000</span>
                </div>
                <div
                  className="mt-1"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ color: "darkgrey" }}>Offer Price Drop</span>
                  <span style={{ fontWeight: "bold" }}>-₹ 782</span>
                </div>
                <div
                  className="mt-1"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ color: "darkgrey" }}>25% discount coupon</span>
                  <span style={{ fontWeight: "bold" }}>-₹ 457</span>
                </div>
              </div>
              <hr />
              <div>
                <div
                  className="mt-1"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <span style={{ fontSize: "17px", fontWeight: "bold" }}>
                      Payable Amount
                    </span>
                    <br />
                    <span style={{ color: "darkgrey", fontSize: "13px" }}>
                      Inclusive of all taxes
                    </span>
                  </div>
                  <span style={{ fontWeight: "bold" }}>₹ 1370</span>
                </div>
                <div
                  style={{
                    fontWeight: "bold",
                    color: "#864BD7",
                    padding: "10px",
                    backgroundColor: "#d7baff",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p style={{ padding: "0", margin: "0" }}>
                    ⚡️ 8 people booked this Cab Last Week
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default CabConfirmation;
