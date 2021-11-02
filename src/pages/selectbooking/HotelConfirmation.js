import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { useHistory, Redirect } from "react-router-dom";
import "../../assets/css/busconfirmation.css";
import { IoIosArrowBack } from "react-icons/io";
import Room from "../../assets/img/hotelRoom.jpeg";
import calendar from "../../assets/img/calendar.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_PATH } from "../../Path/Path";
import moment from "moment";
import { fetchStart, getOtp, setMobile, verifyOtp } from "../../redux/actions";
import { setApiData } from "../../redux/actions";

function HotelConfirmation(props) {
  const history = useHistory();
  const [singleData, setSingleData] = useState([]);
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(false);

  const dispatch = useDispatch();
  const { getStartData } = useSelector((state) => state.hotelReducer);
  const { user_data } = useSelector((state) => state.loginReducer);
  let check_in = moment(getStartData.startDate).format("DD-MMM");
  let address1 = getStartData.sendlocation;
  let check_out = moment(getStartData.endDate).format("DD-MMM");
  const hotelUniqid = props.match.params.id;
  const getHotelSingleData = () => {
    axios
      .get(`${API_PATH}/api/v2/hotelregistration/${hotelUniqid}`)
      .then((response) => {
        console.log(response.data.data);
        setSingleData(response.data.data);
      });
  };

  // const onCheckout = () => {
  //   console.log("object");
  //   dispatch(setApiData({ ...values, basic_details: travellers }))
  //   history.push("/checkoutpage");
  // };
  const fetchOtp = () => {
    // console.log("OTP:::::",mobile)
    if (number !== "") {
      dispatch(getOtp(`91${number}`));
      setShowOTP(true);
    }
  };
  useEffect(() => {
    if (getStartData.startDate === undefined) {
      history.push("/hotelsearch");
    }
    getHotelSingleData();
  }, [getStartData]);
  const onCheckout = () => {
    history.push("/checkoutpage");
  };

  const onClickBack = () => {
    history.push("/hotellist");
  };
  const onClickMonsoon = () => {
    console.log("object", `91${number}`, otp);
    if (otp.length === 6) {
      dispatch(fetchStart());
      dispatch(verifyOtp(`91${number}`, otp));
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(e.target, "val", values);
  };
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile: "",
    hotel_name: "",
    no_of_guest: "",
    startDate: "",
    endDate: "",
    per_night_charge: "",
    total_amount: "",
  });
  return (
    <>
      <div className="">
        <Header />
        {/* {user_data === null ? <Redirect to="/hotelsearch" /> : null} */}

        <div className="container-div">
          <div onClick={onClickBack}>
            <h4
              style={{
                width: "100%",
                color: "#0fa453",
                fontWeight: 500,
                fontSize: "22px",
                marginTop: "20px",
              }}
            >
              <IoIosArrowBack /> Manage Your Booking
            </h4>
          </div>

          <div className="hotel-confirm-div" style={{ width: "100%" }}>
            <div className="hotel-confirm-1">
              <div className="saving-div-container">
                <h4 className="saving-div">
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
                          onChange={
                            ((e) => setValues(e.target.value),
                            (e) => handleChange(e))
                          }
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
                          onChange={
                            ((e) => setValues(e.target.value),
                            (e) => handleChange(e))
                          }
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
                          onChange={
                            ((e) => setNumber(e.target.value),
                            (e) => handleChange(e))
                          }
                        />
                      </div>
                      {user_data === null ? (
                        <div className="mt-3" style={{ marginRight: "20px" }}>
                          <button
                            type="button"
                            onClick={fetchOtp}
                            style={{
                              backgroundColor: "#0fa453",
                              height: "37px",
                              width: "180px",
                              marginTop: "20px",
                              borderRadius: "5px",
                              border: "0px solid gray",
                              color: "white",
                              fontWeight: "bold",
                              fontSize: "16px",
                            }}
                          >
                            Send Passcode
                          </button>
                        </div>
                      ) : null}
                    </div>
                    <div className=" form-div mt-3">
                      {showOTP ? (
                        <div
                          className=" form-input-div"
                          style={{ marginRight: "20px" }}
                        >
                          <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
                            Enter OTP
                          </h3>
                          <input
                            type="number"
                            className="form-input"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="Enter OTP Number"
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="form-div">
                      <button
                        className="locationpass-btn"
                        type="submit"
                        onClick={onClickMonsoon}
                      >
                        Continue
                      </button>
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
                  {singleData.hotel_name}
                </h2>
                <img
                  src={Room}
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
                }}
              >
                <img
                  alt="logo"
                  className="location-userdatas-calendar"
                  src={calendar}
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: "10px",
                  }}
                />
                <p>{`${check_in}-${check_out}`}</p> &nbsp; | &nbsp;
                <p> 1 Room, 2 Guests</p>
              </div>
              <hr />

              <div className="">
                <div style={{ fontWeight: "bold", margin: "10px 0" }}>
                  Classic (2x)
                </div>
                <div
                  className="mt-1"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ color: "darkgrey" }}>
                    Room price for 1 Night X 2 guest
                  </span>
                  <span style={{ fontWeight: "bold" }}>₹ 2000</span>
                </div>
                <div
                  className="mt-1"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ color: "darkgrey" }}>Price Drop</span>
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
                    color: "#0fa453",
                    padding: "10px",
                    backgroundColor: "#9cffc9",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p style={{ padding: "0", margin: "0" }}>
                    ⚡️ 8 people booked this hotel today
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

export default HotelConfirmation;
