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
import {
  fetchStart,
  getOtp,
  setMobile,
  verifyOtp,
  hotelpay,
} from "../../redux/actions";
import { setBookHotel } from "../../redux/actions";
import { toast, ToastContainer } from "react-toastify";
import ButtonComponent from "../../containers/Button";

function HotelConfirmation(props) {
  const history = useHistory();
  const [singleData, setSingleData] = useState([]);
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [adhar, setAdhar] = useState("");
  const [gender, setGender] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [total_amount1, settotal_amount1] = useState(0);
  const dispatch = useDispatch();
  const { getStartData } = useSelector((state) => state.hotelReducer);
  const { hotelpayData } = useSelector((state) => state.hotelReducer);
  // console.log("hotelpayData",hotelpayData)
  const { user_data } = useSelector((state) => state.loginReducer);
  const check_in = moment(getStartData.startDate).format("DD-MMM");
  const address1 = getStartData.sendlocation;
  const check_out = moment(getStartData.endDate).format("DD-MMM");
  const hotelUniqid = props.match.params.id;
  // console.log(getStartData)
  const [hotelDetails, setHotelDetails] = useState([]);

  const date1 = new Date(getStartData.startDate);
  const date2 = new Date(getStartData.endDate);
  const no_of_room = getStartData.noOfRoom;
  //calculate time difference
  const time_difference = date2.getTime() - date1.getTime();
  //calculate days difference by dividing total milliseconds in a day
  const days_difference = time_difference / (1000 * 60 * 60 * 24);
  const [dayDifference, setdayDifference] = useState(days_difference);
  const [hotelPayDetails, setHotelPayDetails] = useState({});
  const getHotelSingleData = async () => {
    await axios
      .get(`${API_PATH}/api/v2/room/${hotelUniqid}`)
      .then(async (response) => {
        // console.log('eee',response.data.data);
        await setSingleData(response.data.data);
        // console.log(response.data.data.hotel_id.hotel_name)
        setHotelDetails(response.data.data.hotel_id);
        setHotelPayDetails(response.data.data);
        setTotalValue();
      });
  };

  const { amount, endDate, guests, rooms, startDate } = {
    ...props?.location?.state,
  };

  const onCheckout = () => {
    // console.log("object",values);

    dispatch(
      setBookHotel({
        ...values,
        ...gender,
        ...adhar,
        basic_details: singleData,
        total_amount: total_amount1,
      })
    );
    history.push("/hcheckoutpage");
    return false;
  };
  const fetchOtp = () => {
    //  console.log("OTP:::::",number)
    if (number !== "") {
      dispatch(getOtp(`91${number}`));
      setShowOTP(true);
    }
  };
  useEffect(() => {
    if (getStartData.startDate === undefined) {
      history.push("/hotelsearch");
    }
  }, [getStartData]);
  useEffect(() => {
    getHotelSingleData();
  }, []);

  const onClickBack = () => {
    history.push("/hotellist");
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target, "val", values);
  };
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile: "",
    hotel_name: hotelDetails && hotelDetails?.hotel_name,
    no_of_guest: getStartData.noOfGuest,
    no_of_room: getStartData.noOfRoom,
    startDate: getStartData.startDate,
    endDate: getStartData.endDate,
    per_night_charge: "",
  });

  const setTotalValue = () => {
    setValues({ ...values, ["per_night_charge"]: 0 });
    setValues({ ...values, ["no_of_guest"]: 2 });
    setValues({ ...values, ["no_of_room"]: 2 });
  };
  const setTotalAmt = () => {
    // setValues({ ...values, ['total_amount']: total_amount1 });
  };
  const [checkLogin, setCheckLogin] = useState(false);
  useEffect(() => {}, []);

  const onClickMonsoon = () => {
    // console.log("object", `91${number}`, otp);

    setTotalValue();
    setTotalAmt();
    if (localStorage.getItem("mobile")) {
      JSON.parse(localStorage.getItem("mobile"));
      setCheckLogin(true);
      onCheckout();
    } else if (otp.length === 6) {
      dispatch(fetchStart());
      dispatch(verifyOtp(`91${number}`, otp));
      onCheckout();
    } else {
      toast.error("Please Login!!");
      return false;
    }

    return false;
  };

  const [payableAmt, setPayableAmt] = useState(0);
  const calculatePrice = () => {
    console.log({ no_of_room });
    let payAmt =
      getStartData.noOfRoom * dayDifference * singleData?.price?.base_price;
    setPayableAmt(payAmt);
  };
  useEffect(
    (email) => {
      console.log(singleData);
      calculatePrice();
    },
    [singleData, dayDifference, getStartData]
  );
  // const className = props.activeButton === item.name ? "btn-success" : "btn-light";

  useEffect(() => {
    if (hotelpayData?.data?.booking_id === undefined) {
    } else {
      history.push({
        pathname: `/hotel-details-pay/${hotelpayData?.data?.booking_id}`,
        state: {
          fullname: values.name,
          gender: gender,
          age: number,
          adhar: adhar,
        },
      });
    }
  }, [hotelpayData]);

  const onHotelPay = () => {
    if (!user_data) {
      toast.error("Please Log in first", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    dispatch(
      hotelpay({
        hotelPayDetails: {
          ...hotelPayDetails,
          amount,
          endDate,
          startDate,
          guests,
          rooms,
        },
        getStartData,
      })
    );
  };

  return (
    <>
      <ToastContainer />
      {singleData.price ? (
        <div className="">
          <Header showSignUpModal={!user_data} />
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
                {/* <div className="saving-div-container">
                  <h4 className="saving-div">
                    🎉 Yay!! you just saved ₹{" "}
                    {singleData?.price?.base_price -
                      singleData?.price?.final_price +
                      (singleData?.price?.base_price -
                        singleData?.price?.final_price) *
                        0.25}{" "}
                    on this booking
                  </h4>
                </div> */}
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
                    Enter Travellers Details
                  </h4>
                  <div style={{ padding: "24px 20px", marginBottom: "40px" }}>
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
                            name="name"
                            placeholder="Your Name"
                            className="form-input"
                            onChange={(e) => {
                              setValues(e.target.value);
                              handleChange(e);
                            }}
                            required
                            value={user_data?.user?.name}
                            disabled
                          />
                        </div>
                        <div className="form-input-div">
                          <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
                            Email
                          </h3>

                          <input
                            type="text"
                            name="gender"
                            required
                            placeholder="Male/Female"
                            className="form-input"
                            onChange={(e) => {
                              setGender(e.target.value);
                              handleChange(e);
                            }}
                            value={user_data?.user?.email}
                            disabled
                          />
                        </div>
                      </div>
                      <div className=" form-div">
                        <div
                          className=" form-input-div"
                          style={{ marginRight: "20px" }}
                        >
                          <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
                            Mobile
                          </h3>
                          <input
                            type="number"
                            name="age"
                            required
                            className="form-input"
                            placeholder="Your Age"
                            onChange={(e) => {
                              setNumber(e.target.value);
                              handleChange(e);
                              settotal_amount1(payableAmt);
                            }}
                            value={user_data?.user?.mobile}
                            disabled
                          />
                        </div>
                        {/* <div
                          className=" form-input-div"
                          style={{ marginRight: "20px" }}
                        >
                          <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
                            Adhar Number
                          </h3>
                          <input
                            type="number"
                            name="adhar"
                            required
                            className="form-input"
                            placeholder="Enter Adhar no"
                            onChange={(e) => {
                              setAdhar(e.target.value);
                              handleChange(e);
                              //   settotal_amount1(payableAmt);
                            }}
                          />
                        </div> */}
                        {/* {user_data === null ? (
                          <div
                            className="mt-3 "
                            style={{
                              marginRight: "20px",

                            }}
                          >
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
                        ) : null} */}
                      </div>
                      <div className=" form-div mt-3">
                        {showOTP ? (
                          <div
                            className=" form-input-div"
                            style={{
                              marginRight: "20px",
                              marginBottom: "20px",
                            }}
                          >
                            <h3
                              style={{ fontSize: "16px", fontWeight: "bold" }}
                            >
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
                      {/* <div className="form-div d-flex">
                        <button
                          className="locationpass-btn"
                          type="button"
                          onClick={onClickMonsoon}
                        >
                          Pay Now
                        </button>
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
              <div className="hotel-confirm-2">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h2
                    className="mt-2"
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    {singleData?.hotel_id?.hotel_name}
                  </h2>
                  <img
                    src={Room}
                    alt="room"
                    style={{
                      width: "80px",
                      height: "60px",
                      borderRadius: "5px",
                    }}
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
                  <p>{`${moment(startDate).format("DD-MMM")}-${moment(endDate).format("DD-MMM")}`}</p> &nbsp; | &nbsp;
                  <p>
                    {" "}
                    {rooms} Room, {guests}{" "}
                    Guests
                  </p>
                </div>
                <hr />

                <div className="">
                  <div style={{ fontWeight: "bold", margin: "10px 0" }}>
                    Classic ({singleData.category})
                  </div>
                  <div
                    className="mt-1"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span style={{ color: "darkgrey" }}>
                      Room price for {dayDifference} Night X{" "}
                      {guests} guest
                    </span>
                    <span style={{ fontWeight: "bold" }}>₹ {amount}</span>
                  </div>
                  {/* <div
                  className="mt-1"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ color: "darkgrey" }}>Price Drop</span>
                  <span style={{ fontWeight: "bold" }}>-₹  {singleData.price.base_price- singleData.price.final_price}</span>
                </div> */}
                  {/* <div
                  className="mt-1"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ color: "darkgrey" }}>25% discount coupon</span>
                  <span style={{ fontWeight: "bold" }}>-₹ {(singleData.price.base_price- singleData.price.final_price)*0.25}</span>
                </div> */}
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

                    <span style={{ fontWeight: "bold" }}>₹ {amount}</span>
                  </div>
                  <button
                    className="locationpass-btn mb-2 offset-md-5"
                    type="button"
                    onClick={onHotelPay}
                  >
                    Pay at Hotel
                  </button>
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
      ) : (
        ""
      )}
    </>
  );
}

export default HotelConfirmation;
