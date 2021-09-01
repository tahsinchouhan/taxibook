import React, { useEffect, useState } from "react";
import { Container, Row, Button, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavLink, useHistory } from "react-router-dom";
import { FaArrowDown, FaArrowLeft } from "react-icons/fa";
import ButtonComponent from "../../../containers/Button";
import { Stepper } from "react-form-stepper";
//import Locations from "../../dm pass/Locations";
//import TicketsConfirm from "../../../pages/booking/tickets/TicketsConfirm";
import Cards from "../../dm pass/Cards";
import Header from "../../../components/Header";
import congo from "../../../assets/img/mobile.png";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "../../travesaly/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field } from "formik";
import { ToastContainer } from 'react-toastify';
import * as yup from "yup";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  Paper,
  Typography,
} from "@material-ui/core";
import { createDmPass, setDmData, createBusBooking } from "../../../redux/actions";
import { API_PATH } from "../../../Path/Path";
import axios from "axios";
import { AvForm, AvField } from "availity-reactstrap-validation";
import Payment from "../../selectbooking/Payment";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  number: yup.string().required(),

});
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

function SteperDmpass(shows, ...props) {
  const [show, setShow] = useState(0);

  const [activeButton, setActiveButton] = useState(button_Data[0].name);
  // const [data, setData] = useState();
  const history = useHistory();

  const dispatch = useDispatch();
  const { dmData } = useSelector((state) => state.dmpassReducer);
  const { user_data } = useSelector((state) => state.loginReducer);
  const {
    dmpass_id,
    number_of_vehicals,
    number_of_travellers,
    duration_of_travel,
    mobile,
    start_date,
  } = dmData;

  const onSideBtnClick = (e) => {
    const name = e.target.name;
    setActiveButton(name);
  };

  useEffect(() => {
    let mob;
    if (user_data !== null) {
      mob = user_data?.user?.mobile?.slice(2, user_data?.user?.mobile?.length);
      dispatch(setDmData("mobile", mob));
      getDmPassData(mob);
      console.log();
    }
  }, [user_data]);

  const getDmPassData = async (mobile) => {
    await axios
      .post(`${API_PATH}/api/v1/dmpass/search`, {
        mobile,
      })
      .then((response) => {
        return response.data;
      })
      .then((json) => {
        console.log("js", json);
        return json;
      })
      .catch((error) => {
        console.log("js", error);
      });
  };

  const onDmPassClick = () => {
    console.log("objectNEwwwwwwwww", {
      ...dmData,
      basic_details: travellers,
      vehical_details: vehicles,
    });
    // dispatch(createDmPass({ ...dmData, basic_details: travellers, vehical_details: vehicles }))
    setShow(1);
  };

  // const onTicketCheckClick = () => {
  //   console.log("object");
  //   //history.push("./ ticket_checkout");
  //   dispatch(
  //     createDmPass({
  //       ...dmData,
  //       basic_details: travellers,
  //       vehical_details: vehicles,
  //       locations: locServ,
  //       total_charges: tot_charges,
  //     })
  //   );
  //   setShow(3);
  //   localStorage.setItem("dm_pass_id", dmData.dmpass_id)

  // };
  // };
  // const onTicketCheckClick = () => {
  //   console.log("object");
  //   //history.push("./ ticket_checkout");
  //   dispatch(
  //     createDmPass({
  //       ...dmData,
  //       basic_details: travellers,
  //       vehical_details: vehicles,
  //       locations: locServ,
  //       total_charges: tot_charges,
  //     })
  //   );
  //   setShow(3);
  //   localStorage.setItem("dm_pass_id", dmData.dmpass_id)

  // };
  const onTicketCheckClick = () => {
    console.log("object");
    axios.post(`${API_PATH}/api/v1/entrypass/pay`, {
      amount: tot_charges,
    })
      // .then((res) => res.json())
      .then((result) => {
        console.log("dhshsdh", result);
        setData(result.data);

        // dispatch(
        //   createDmPass({
        //     ...dmData,
        //     basic_details: travellers,
        //     vehical_details: vehicles,
        //     locations: locServ,
        //     total_charges: tot_charges,
        //   })
        // );
        setShow(3);

      })
      .catch((e) => {
        console.log(e);
      });

  };
  const onClickBack = () => {
    console.log("object");
    history.push("./tickets");
    // setShow(3);
  };

  const onDmByeClick = () => {
    console.log("object", {
      ...dmData,
      basic_details: travellers,
      vehical_details: vehicles,
    });
    history.push("/dm_congratulate");
  };

  const initialTravellers = () => {
    let temp = [];
    for (let v = 0; v < 1; v++) {
      temp.push({
        name: "",
        gender: "Male",
        age: "",
        adhaar: "",
        customer_id: JSON.parse(localStorage.getItem("customer_id"))
      });
    }
    return temp;
  };
  const [travellers, setTravellers] = useState(initialTravellers);
  const [showDate, setShowDate] = useState("");

  const handleTraveller = (val, lbl, i) => {
    console.log("val", val);
    setTravellers(
      [...travellers].map((obj, key) => {
        if (key === i) {
          return {
            ...obj,
            [lbl]: val,
          };
        } else {
          return obj;
        }
      })
    );
  };

  const initialVehicles = () => {
    let temp = [];
    for (let v = 0; v < 1; v++) {
      temp.push({
        vehicle_number: "",
        name: "",
        gender: "Male",
        age: "",
        adhaar: "",
      });
    }
    return temp;
  };

  const [vehicles, setVehicles] = useState(initialVehicles);
  const handleVehicle = (val, lbl, i) => {
    setVehicles(
      [...vehicles].map((obj, key) => {
        if (key === i) {
          return {
            ...obj,
            [lbl]: val,
          };
        } else {
          return obj;
        }
      })
    );
  };

  const [tot_charges, setTot_charges] = useState(0);
  const [locServ, setLocServ] = useState([
    {
      locations: [
        {
          location: "",
          location_name: "",
          services: [
            {
              service_id: "",
              service_name: "",
              charge: "",
              total_charges: "",
              unit: "",
            },
          ],
        },
      ],
    },
  ]);

  useEffect(() => {
    getLocationsList();
    let st_date = new Date(start_date);
    if (start_date === "") {
      st_date = new Date();
      dispatch(setDmData("start_date", getFormatedDate(st_date)));
    }
    showFormatedDate(st_date);
    let en_date = new Date();
    en_date.setDate(st_date.getDate() + Number(1));
    dispatch(setDmData("duration_of_travel", 1));
    dispatch(setDmData("end_date", getFormatedDate(en_date)));
  }, []);

  const getLocationsList = async () => {
    let temp = [];
    await fetch(`${API_PATH}/api/v1/location/list?ischecked=true`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        // console.log(json);
        // setLocationList(json.data)
        json?.data?.map(async (item, i) => {
          let tempServ = [];
          fetch(`${API_PATH}/api/v1/services/list?location=${item?._id}`)
            .then((response) => {
              return response.json();
            })
            .then((res) => {
              res?.data?.map((service, i) => {
                // console.log("service", service);
                tempServ.push({
                  service_id: service._id,
                  service_name: service.service_name,
                  charge: service.price,
                  total_charges: "0",
                  unit: "0",
                });
              });
            });
          temp.push({
            location: item?._id,
            location_name: item?.name,
            services: tempServ,
          });
        });
      });

    console.log("temp", temp);
    setLocServ(temp);
  };

  useEffect(() => {
    console.log("locServ", locServ);
  }, [locServ]);

  const handleService = (val, lbl, i, j) => {
    console.log("handleService", { val, lbl, i, j });
    setLocServ(
      [...locServ].map((obj, key) => {
        if (key === i) {
          return {
            ...obj,
            services: obj.services.map((service, key2) => {
              if (key2 === j) {
                console.log("acc11", service);
                if (lbl === "-" && val != 0) {
                  setTot_charges(
                    tot_charges +
                    Number(service?.charge * (val - 1)) -
                    service?.total_charges
                  );
                  return {
                    ...service,
                    unit: val - 1,
                    total_charges: Number(service?.charge * (val - 1)),
                  };
                } else if (lbl === "+") {
                  setTot_charges(
                    tot_charges +
                    Number(service?.charge * (Number(val) + 1)) -
                    service?.total_charges
                  );
                  return {
                    ...service,
                    unit: Number(val) + 1,
                    total_charges: Number(service?.charge * (Number(val) + 1)),
                  };
                } else {
                  return service;
                }
              } else {
                return service;
              }
            }),
          };
        } else {
          return obj;
        }
      })
    );
  };
  const handleDuration = (e) => {
    console.log(e.target.value);
    let st_date = new Date(start_date);
    if (start_date === "") {
      st_date = new Date();
      dispatch(setDmData("start_date", getFormatedDate(st_date)));
    }
    let en_date = new Date();
    en_date.setDate(st_date.getDate() + Number(e.target.value));
    dispatch(setDmData("duration_of_travel", e.target.value));
    dispatch(setDmData("end_date", getFormatedDate(en_date)));
  };
  const getFormatedDate = (d) => {
    let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    let mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d);
    let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    return `${ye}-${mo}-${da}`;
  };

  const showFormatedDate = (d) => {
    let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    let mo = new Intl.DateTimeFormat("en", { month: "long" }).format(d);
    let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    setShowDate(`${da}, ${mo} ${ye}`);
  };


  const [travel, setTravel] = useState("");
  const [vehicle, setVehicle] = useState("");

  const handleTravellerCount = (e) => {
    console.log("Number of Travellers", e.target.value)
    setTravel(e.target.value)

    setTravellers([
      ...travellers,
      {
        name: "",
        gender: "Male",
        age: "",
        adhaar: "",
      },
    ])
  }
  const handlerVehicles = (e) => {
    console.log("Number of Vehicles", e.target.value)
    //setVehicle(e.target.value)
    setVehicles([
      ...vehicles,
      {
        vehicle_number: "",
        name: "",
        gender: "Male",
        age: "",
        adhaar: "",
      },
    ])
  }
  const [data, setData] = useState();



  const onLocationsClick = () => {
    console.log("object");
    setShow(2);
    return shows;
    // history.push("/locations");
  };


  const __DEV__ = document.domain === "localhost";

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

  const displayRazorpaysss = async (values) => {
    console.log("objec::::::::::::::::::::::t")
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
            createDmPass({ ...dmData, basic_details: travellers, vehical_details: vehicles })
            // createBusBooking({
            //   ...dmData,
            //   basic_details: travellers,
            //   vehical_details: vehicles,
            //   locations: locServ,
            //   total_charges: tot_charges,
            // })
          );
          dispatch(setDmData({ ...dmData, order_id: response.razorpay_order_id }))
          localStorage.setItem("dm_pass_id", dmData.dmpass_id)
          // history.push("/CongratulationPage")

          setShow(4);
          // dispatch(
          //   createBusBooking({
          //     ...apiData,
          //     trips_id: tripData?._id,
          //     route: tripData?.route?._id,
          //     from: tripData?.route?.start?._id,
          //     to: tripData?.route?.end?._id,
          //     bus: tripData?.vehical,
          //     mobile,

          //   })
          // );

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
      <div className="d-none d-md-block">
        <Header />
      </div>
      <div className="dmpass-div d-md-none">
        <Container className="dm-kangervilla">
          <FaArrowLeft className="kanger-arrow" onClick={onClickBack} />
          <div className="kangervilla">
            <span className="kanger-valley">
              Tickets
              <br />
              {/* 30th July, 2021 */}
              {showDate}
            </span>
          </div>
        </Container>
      </div>

      <Container>
        <Stepper
          steps={[
            { label: <b style={{ whiteSpace: "nowrap" }}>Traveller Pass</b> },
            { label: <b>Locations</b> },
            { label: <b>Confirm</b> },
            { label: <b>Payment</b> },
            { label: <b>Checkout</b> },
          ]}
          activeStep={show}
          className="pb-0"
        />
      </Container>
      {show == 0 ? (
        <div>

          <Container className="dmpass-form mt-4">
          <AvForm onSubmit={onDmPassClick}>
            <Row className="dmpassData">
              <h3
                style={{
                  fontWeight: "bolder",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                Book your Traveller Pass
              </h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-row"></div>

                <div className="form-row">
                  <div className="form-group mt-4 ">
                    <label for="inputState">Number of Travellers</label>
                    <select
                      id="inputState"
                      className="form-control pass_input"
                      onChange={handleTravellerCount}
                    >
                      <option selected>1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                  <div className="form-group mt-4 ">
                    <label for="inputState">Days of Travel</label>
                    <select
                      id="inputState"
                      className="form-control pass_input"
                      onChange={handleDuration}
                    >
                      <option selected>1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                  <div className="form-group mt-4 ">
                    <label for="inputState">Number of Vehicles</label>
                    <select id="inputState" className="form-control pass_input" onChange={(e) => handlerVehicles(e)}>
                      <option selected>1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                </div>
                <Container className="p-0 pb-5">
               
                    <Row>
                      <Col className="pt-3">
                        {/* <div style={{ width: "50%", float: "right" }}> */}
                        <label
                          style={{
                            fontSize: "14px",
                            // marginBottom: "10px",
                            fontWeight: "500",
                            color: "black",
                          }}
                        >
                          Vehicle Details
                        </label>
                        <div
                          className="traveller_div"
                          style={{
                            marginTop: "1rem",
                            justifyContent: "flex-start",
                          }}
                        >
                          {vehicles.map((item, i) => (
                            <Paper
                              key={i}
                              className="traveller__card py-5 px-4 flex-grow-1"
                            >
                              <div
                                className="traveller__card_body"
                                className="py-0"
                              >
                                <h5
                                  className="traveller__card_title"
                                  style={{ fontSize: "12px" }}
                                >
                                  Vehicle {i + 1}
                                </h5>
                                <p className="traveller__card_text">
                                  <div className="form-group pt-4">
                                    <label
                                      className="mb-1"
                                      for={`vehicle_number${i}`}
                                    >
                                      Vehicle Number
                                    </label>
                                    <AvField
                                      type="text"
                                      className="form-control pass_input"
                                      id={`vehicle_number${i}`}
                                      placeholder="Enter the license plate number"
                                      style={{
                                        fontSize: "11px",
                                        marginLeft: "-5px",
                                      }}
                                      name="registration_number"
                                      onChange={(e) =>
                                        handleVehicle(
                                          e.target.value,
                                          e.target.name,
                                          i
                                        )
                                      }
                                      value={vehicles[i].registration_number}
                                      validate={{
                                        required: {
                                          value: true,
                                          errorMessage: "Enter the license plate number",
                                        },

                                      }}
                                    />
                                  </div>
                                  <div className="form-group pt-4">
                                    <label className="mb-1" for={`name${i}`}>
                                      Driver Name
                                    </label>
                                    <AvField
                                      type="text"
                                      className="form-control pass_input"
                                      id={`name${i}`}
                                      placeholder="Enter Driver Name"
                                      style={{
                                        fontSize: "11px",
                                        marginLeft: "-5px",
                                      }}
                                      name="driver_name"
                                      onChange={(e) =>
                                        handleVehicle(
                                          e.target.value,
                                          e.target.name,
                                          i
                                        )
                                      }
                                      value={vehicles[i].driver_name}
                                      validate={{
                                        required: {
                                          value: true,
                                          errorMessage: "Enter Driver Name",
                                        },

                                      }}
                                    />
                                  </div>


                                  <div className="form-group mt-1 pt-4">
                                    <label className="mb-1" for={`aadhaar${i}`}>
                                      Driver License Number
                                    </label>
                                    <AvField
                                      type="text"
                                      className="form-control pass_input"
                                      id={`adhaar${i}`}
                                      placeholder="Driver License Number"
                                      style={{
                                        fontSize: "11px",
                                        marginLeft: "-5px",
                                      }}
                                      // name="adhaar" onChange={handleChange} value={adhaar}
                                      name="driver_license_number"
                                      onChange={(e) =>
                                        handleVehicle(
                                          e.target.value,
                                          e.target.name,
                                          i
                                        )
                                      }
                                      value={vehicles[i].adhaar}
                                      validate={{
                                        required: {
                                          value: true,
                                          errorMessage: "Driver License Number",
                                        },

                                      }}
                                    />
                                  </div>
                                </p>
                              </div>
                            </Paper>
                          ))}
                        </div>
                        {/* <div style={{ marginTop: "23px", textAlign: "center" }}>
                        <Button
                          class="btn btn-success"
                          style={{
                            width: "55%",
                            textAlign: "center",
                            height: "50px",
                            borderRadius: "9px",
                            backgroundColor: "#0fa453",
                            border: "none",
                            fontWeight: "600",
                          }}
                          onClick={() =>
                            setVehicles([
                              ...vehicles,
                              {
                                vehicle_number: "",
                                name: "",
                                gender: "Male",
                                age: "",
                                adhaar: "",
                              },
                            ])
                          }
                        >
                          Add Vehicle
                        </Button>
                      </div> */}
                        {/* </div> */}
                      </Col>
                      <Col className="pt-3 pb-5">
                        {/* <div style={{ width: "50%" }}> */}
                        <label
                          style={{
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "black",
                          }}
                        >
                          Travellers Details
                        </label>

                        <div
                          className="traveller_div"
                          style={{
                            marginTop: "1rem",
                            justifyContent: "flex-start",
                          }}
                        >
                          {travellers?.map((item, i) => (
                            <Paper
                              key={i}
                              className="traveller__card p-4 flex-grow-1"
                              style={{ minHeight: "364px" }}
                            >
                              <div
                                className="traveller__card_body"
                                className="py-0"
                              >
                                <h5
                                  className="traveller__card_title"
                                  style={{ fontSize: "12px" }}
                                >
                                  Travellers {i + 1}
                                </h5>
                                <p className="traveller__card_text">
                                  <div className="form-group pt-3">
                                    <label className="mb-3" for={`name${i}`}>
                                      Name
                                    </label>
                                    <AvField
                                      type="text"
                                      className="form-control pass_input"
                                      id={`name${i}`}
                                      placeholder="Enter Traveller Name"
                                      style={{
                                        fontSize: "11px",
                                        marginLeft: "-5px",
                                      }}
                                      name="name"
                                      onChange={(e) =>
                                        handleTraveller(
                                          e.target.value,
                                          e.target.name,
                                          i
                                        )
                                      }
                                      value={travellers[i].name}
                                      validate={{
                                        required: {
                                          value: true,
                                          errorMessage: "Enter Traveller Name",
                                        },

                                      }}
                                    />
                                  </div>

                                  <div className="form-row genderform pt-3 d-flex ">
                                    <div className="col m-2 w-50">
                                      <label className="mb-3" for={`gender${i}`}>
                                        Gender
                                      </label>
                                      <div className="d-flex pt-2">
                                        <ButtonComponent
                                          style={{
                                            width: "50%",
                                            fontSize: "11px",
                                            whiteSpace: "nowrap",
                                          }}
                                          type="button"
                                          data={button_Data}
                                          // activeButton={activeButton}
                                          // trigerOnClickEmpSideBtn={onSideBtnClick}
                                          trigerOnClickEmpSideBtn={(e) =>
                                            handleTraveller(
                                              e.target.name,
                                              "gender",
                                              i
                                            )
                                          }
                                          activeButton={travellers[i].gender}
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group col m-2 w-50">
                                      <label className="mb-3" for={`age${i}`}>
                                        Age
                                      </label>
                                      <AvField
                                        type="text"
                                        className="form-control pass_input w-70 pt-2"
                                        placeholder="Enter Age"
                                        id={`age${i}`}
                                        style={{
                                          width: "110px",
                                          marginLeft: "-5px",
                                          fontSize: "12px",
                                          whiteSpace: "nowrap",
                                          height: "33px",
                                        }}
                                        name="age"
                                        onChange={(e) =>
                                          handleTraveller(
                                            e.target.value,
                                            e.target.name,
                                            i
                                          )
                                        }
                                        value={travellers[i].age}
                                        validate={{
                                          required: {
                                            value: true,
                                            errorMessage: "Enter Age",
                                          },

                                        }}
                                      />
                                    </div>
                                  </div>

                                  <div className="form-group mt-1 pt-3">
                                    <label className="mb-3" for={`aadhaar${i}`}>
                                      Adhaar Card Number{" "}
                                    </label>
                                    <AvField
                                      type="text"
                                      className="form-control pass_input"
                                      id={`adhaar${i}`}
                                      placeholder="Enter 12 digit Adhaar Card Number"
                                      style={{
                                        fontSize: "11px",
                                        marginLeft: "-5px",
                                      }}
                                      name="adhaar"
                                      onChange={(e) =>
                                        handleTraveller(
                                          e.target.value,
                                          e.target.name,
                                          i
                                        )
                                      }
                                      value={travellers[i].adhaar}
                                      validate={{
                                        required: {
                                          value: true,
                                          errorMessage: "Enter 12 digit Adhaar Card Number",
                                        },

                                      }}
                                    />
                                  </div>

                                </p>
                              </div>
                            </Paper>
                          ))}
                        </div>
                        {/* <div style={{ marginTop: "23px", textAlign: "center" }}>
                        <Button
                          class="btn btn-success"
                          style={{
                            width: "55%",
                            textAlign: "center",
                            height: "50px",
                            borderRadius: "9px",
                            backgroundColor: "#0fa453",
                            border: "none",
                            fontWeight: "600",
                          }}
                          onClick={() =>
                            setTravellers([
                              ...travellers,
                              {
                                name: "",
                                gender: "Male",
                                age: "",
                                adhaar: "",
                              },
                            ])
                          }
                        >
                          Add Traveller
                        </Button>
                      </div> */}
                        {/* </div> */}

                      </Col>
                    </Row>
                   
                  
                </Container>
              </form>
            </Row>
            <div style={{ paddingBottom: "5px", paddingTop: "5px",display:"flex",justifyContent:"center" }}>
                      <div className="mb-5">
                        <Button type="submit" className="locationpass-btn">
                          Save & Continue
                        </Button>
                      </div>
                    </div>
            </AvForm>
          </Container>

          <div className="d-none d-md-block">
            <Footer />
          </div>

        </div>
      ) : show == 1 ? (
        <div>
          <Container className="dmpass-form mt-2">
            <Row className="dmpassData d-none d-md-block" style={{ "backgroundColor": "#FF814A" }}>
              <h6
                style={{
                  textAlign: "center",
                  color: "white",
                  paddingTop: "10px"
                }}
              >
                Tickets
              </h6>
              <h6
                style={{
                  textAlign: "center",
                  color: "white",
                  paddingBottom: "10px"
                }}
              >
                30th July 2021
              </h6>
            </Row>
            <Row className="dmpassData">
              <h3
                style={{
                  fontWeight: "bolder",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                Select Locations
              </h3>
              {locServ.length > 0
                ? locServ?.map((item, key) => (
                  <Accordion className="p-0" style={{ boxShadow: "none" }}>
                    <AccordionSummary
                      className="p-0"
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div
                        className="location_pass w-100 d-flex"
                        style={{
                          border: "1px solid #888",
                          backgroundColor: " #F8F8F8",
                          borderRadius: 5,
                        }}
                      >
                        <Form.Check
                          type="radio"
                          label={item?.location_name}
                          name="formHorizontalRadios"
                          id="formHorizontalRadios2"
                          style={{
                            margin: "8px",
                            color: "black",
                            fontWeight: "600",
                          }}
                        />
                      </div>
                    </AccordionSummary>
                    <AccordionDetails className="py-0">
                      <div className="card-Caintainer">
                        {item?.services?.length > 0
                          ? item?.services?.map((service, j) => (
                            <Cards
                              key={j}
                              parname={service?.service_name}
                              rate={service?.charge}
                              value={service?.unit}
                              i={key}
                              j={j}
                              // onMinus={()=> setLocServ([...locServ,])}
                              onClick={handleService}
                            />
                          ))
                          : null}
                      </div>
                    </AccordionDetails>
                  </Accordion>
                ))
                : null}
            </Row>
          </Container>
          <div className=" d-none d-md-block">
            <div className="locatione-title">
              <Col md={6}>
                <div className="location-amount">
                  <span className="location-total">Total Amount</span>
                  <span className="location-rs">₹ {tot_charges}</span>
                </div>
              </Col>
              <Col md={6}>
                <Button style={{ "width": "100%", "marginLeft": "0px", "borderRadius": "0px" }} className="locationpass-btn" onClick={onLocationsClick}>
                  Save & Continue
                </Button>
                {/* <div className="mb-5">
                  <div
                    className=""
                    style={{
                      textAlign: " center",
                      fontSize: " 20px",
                      fontWeight: " 600",
                      color: "white",
                      padding: " 15px",
                      backgroundColor: "#0FA453",
                    }}
                    onClick={onLocationsClick}
                  >
                    Save & Continue
                  </div>
                </div> */}
              </Col>
            </div>
          </div>
          <div>
            <div
              className="d-md-none"
              style={{ position: "fixed", width: "100%", bottom: "0" }}
            >
              <Col xs={12} md={6}>
                <div className="location-amount">
                  <span className="location-total">Total Amount</span>
                  <span className="location-rs">₹ {tot_charges}</span>
                </div>
              </Col>
              <Col xs={12} md={6}>
                {/* <div className="">
                  <div
                    className=""
                    style={{
                      textAlign: " center",
                      fontSize: " 20px",
                      fontWeight: " 600",
                      color: "white",
                      padding: " 15px",
                      backgroundColor: "#0FA453",
                    }}
                    onClick={onLocationsClick}
                  >
                    Save & Continue
                  </div>
                </div> */}
                <Button className="locationpass-btn" onClick={onLocationsClick}>
                  Save & Continue
                </Button>
              </Col>
            </div>
          </div>
          <div className="d-none d-md-block">
            <Footer />
          </div>
        </div>
      ) : show == 2 ? (
        <>
          <div>
            <Container className="dmpass-form mt-2">
              <Row className="dmpassData d-none d-md-block" style={{ "backgroundColor": "#FF814A" }}>
                <h6
                  style={{
                    textAlign: "center",
                    color: "white",
                    paddingTop: "10px"
                  }}
                >
                  Tickets
                </h6>
                <h6
                  style={{
                    textAlign: "center",
                    color: "white",
                    paddingBottom: "10px"
                  }}
                >
                  30th July 2021
                </h6>
              </Row>
              <h3 style={{ textAlign: "center" }}>Confirm your Details</h3>
              <div className="confirm-main">
                <div
                  className="confirm_div"
                  style={{
                    textAlign: "center",
                    backgroundColor: "#F8F8F8",
                    marginBottom: "10px",
                    padding: "20px"
                  }}
                >
                  {locServ.length > 0
                    ? locServ?.map((item, key) => (
                      <>
                        <Row className="mb-1">
                          <Col xs={6} md={6} style={{ textAlign: "left" }} >
                            <span className="confirm-title">
                              {item?.location_name}
                            </span>
                          </Col>
                          <Col style={{ textAlign: "right" }} xs={6} md={6}>
                            <span
                              style={{
                                color: "#FF4A68",
                                fontSize: "15px",
                                fontWeight: "600",
                                cursor: "pointer",
                              }}
                              onClick={() => setShow(1)}
                            >
                              Change
                            </span>
                          </Col>
                          <Col>
                            {item?.services?.length > 0
                              ? item?.services?.map((service, j) => (
                                <Row>
                                  <Col xs={6} md={6} style={{ textAlign: "left" }}>
                                    <span className="confirm_part">
                                      {service?.service_name} x{" "}
                                      {service?.unit}
                                    </span>
                                  </Col>
                                  <Col xs={6} md={6} style={{ textAlign: "right" }}>
                                    <span className="confirm_part">
                                      {service?.total_charges}{" "}
                                    </span>
                                  </Col>

                                </Row>
                              ))
                              : null}
                          </Col>
                        </Row>

                      </>
                    ))
                    : null}

                  <div>
                    <div className="location-amount">
                      <span className="location-total">Total Amount</span>
                      <span className="location-rs">₹ {tot_charges}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
          <div style={{ "paddingTop": "50px", "paddingBottom": "50px" }}>
            <Button className="locationpass-btn" onClick={onTicketCheckClick}  >
              Save & Continue
            </Button>
          </div>
          <div className="d-none d-md-block">
            <Footer />
          </div>
        </>
      ) : show == 3 ? <>
        <ToastContainer />
        <div className="d-none d-md-block">

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
        : show == 4 ?
          (<>
            <div className="d-none d-md-block">
              <Container style={{ width: "70%", paddingTop: "20px" }}>
                <Row>
                  <Col>
                    <div style={{ marginTop: "15px" }}>
                      <img src={congo} alt="" style={{ height: "500px" }} />
                    </div>
                  </Col>
                  <Col>
                    <div style={{ paddingTop: "60px" }}>
                      <div style={{ marginBottom: "20px" }}>
                        <h3 style={{ fontWeight: "bolder" }}>CONGRATULATIONS!</h3>
                        <span style={{ color: "black" }}>
                          Your booking has been confirmed
                        </span>

                        <h3 style={{ fontWeight: "bolder" }}>Order ID</h3>
                        <span style={{ color: "black", marginBottom: "50px" }}>
                          {dmpass_id}
                        </span>
                      </div>
                      <div>
                        {/* <div>
                        <Button
                          className="btn btn-success"
                          style={{
                            width: "186px",
                            textAlign: "center",
                            height: "52px",
                            borderRadius: "9px",
                            backgroundColor: "#0fa453",
                            fontWeight: "bold",
                            marginBottom: "20px",
                          }}
                        >
                          <FaWhatsapp
                            style={{
                              fontWeight: "bold",
                              fontSize: "30px",
                            }}
                          />
                          <span> Whatsapp Link</span>
                        </Button>
                      </div> */}

                        <div>
                          <Button
                            style={{
                              width: "186px",
                              textAlign: "center",
                              height: "52px",
                              borderRadius: "9px",
                              backgroundColor: " #FF4A68",
                              fontWeight: "bold",
                              marginBottom: "20px",
                            }}
                          >
                            {/* <Link
                            to={`/dm-detail/${dmpass_id}`}
                            style={{ textDecoration: "none" }}
                          > */}
                            Download E-ticket
                            {/* </Link> */}
                          </Button>
                        </div>

                        <div>
                          <Button style={{
                            width: "186px",
                            textAlign: "center",
                            height: "52px",
                            borderRadius: "9px",
                            backgroundColor: "",
                            fontWeight: "bold",
                            marginBottom: "20px"
                          }}
                          >
                            <Link
                              to={`/dm-detail/${dmpass_id}`}
                              style={{ textDecoration: "none", color: "#fff" }}
                            >
                              View Ticket
                            </Link>
                          </Button>
                        </div>
                        <div>
                          <Button
                            onClick={() => history.push("/")}
                            style={{
                              width: "186px",
                              textAlign: "center",
                              height: "52px",
                              borderRadius: "9px",
                              backgroundColor: "#864BD8",
                              fontWeight: "bold",
                              marginBottom: "20px",
                            }}
                          >
                            Back to Home
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
              <Footer />
            </div>

            <div className="d-md-none">
              <Container style={{ width: "", paddingTop: "20px" }}>
                <div>
                  <div style={{ textAlign: "center", marginTop: "15px" }}>
                    <span style={{ fontWeight: "bolder" }}>CONGRATULATIONS!</span>
                    <br />
                    <span style={{ color: "black", fontSize: "13px" }}>
                      Your Passes are ready
                    </span>
                  </div>
                  <Col xs={12} md={6}>
                    <div style={{ marginTop: "" }}>
                      <img
                        src={congo}
                        alt=""
                        style={{ width: "100%", height: "" }}
                      />
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div style={{ marginBottom: "20px", textAlign: "center" }}>
                      <h3 style={{ fontWeight: "bolder" }}>Transaction ID</h3>
                      <span style={{ color: "black", marginBottom: "50px" }}>
                        {dmpass_id}
                      </span>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div>
                        <Button
                          className="btn btn-success"
                          style={{
                            width: "186px",
                            textAlign: "center",
                            height: "52px",
                            borderRadius: "9px",
                            backgroundColor: "#0fa453",
                            fontWeight: "bold",
                            marginBottom: "20px",
                          }}
                        >
                          <FaWhatsapp
                            style={{
                              fontWeight: "bold",
                              fontSize: "30px",
                            }}
                          />
                          <span> Whatsapp Link</span>
                        </Button>
                      </div>
                    </div>
                    <div>
                      <Button style={{
                        width: "186px",
                        textAlign: "center",
                        height: "52px",
                        borderRadius: "9px",
                        backgroundColor: "",
                        fontWeight: "bold",
                        marginBottom: "20px"
                      }}
                      >
                        <Link
                          to={`/dm-detail/${dmpass_id}`}
                          style={{ textDecoration: "none", color: "#fff" }}
                        >
                          View Ticket
                        </Link>
                      </Button>
                    </div>

                    <div>
                      <Button
                        style={{
                          width: "186px",
                          textAlign: "center",
                          height: "52px",
                          borderRadius: "9px",
                          backgroundColor: " #FF4A68",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        Download E-ticket
                      </Button>
                    </div>
                    <div>
                      <Button style={{
                        width: "186px",
                        textAlign: "center",
                        height: "52px",
                        borderRadius: "9px",
                        backgroundColor: "",
                        fontWeight: "bold",
                        marginBottom: "20px"
                      }}
                      >Sent by Email</Button>
                    </div>


                    <div>
                      <Button
                        onClick={() => history.push("/")}
                        style={{
                          width: "186px",
                          textAlign: "center",
                          height: "52px",
                          borderRadius: "9px",
                          backgroundColor: "#864BD8",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        Back to Home
                      </Button>
                    </div>
                    {/* </div> */}

                  </Col>
                </div>
                <Col xs={12} md={6}>
                  <div style={{ marginTop: "" }}>
                    <img
                      src={congo}
                      alt=""
                      style={{ width: "100%", height: "" }}
                    />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div style={{ marginBottom: "20px", textAlign: "center" }}>
                    <h3 style={{ fontWeight: "bolder" }}>Transaction ID</h3>
                    <span style={{ color: "black", marginBottom: "50px" }}>
                      {dmpass_id}
                    </span>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    {/* <div>
                      <Button
                        className="btn btn-success"
                        style={{
                          width: "186px",
                          textAlign: "center",
                          height: "52px",
                          borderRadius: "9px",
                          backgroundColor: "#0fa453",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        <FaWhatsapp
                          style={{
                            fontWeight: "bold",
                            fontSize: "30px",
                          }}
                        />
                        <span> Whatsapp Link</span>
                      </Button>
                    </div> */}
                    <div>
                      <Button style={{
                        width: "186px",
                        textAlign: "center",
                        height: "52px",
                        borderRadius: "9px",
                        backgroundColor: "",
                        fontWeight: "bold",
                        marginBottom: "20px"
                      }}
                      ><Link
                        to={`/dm-detail/${dmpass_id}`}
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                          View Ticket
                        </Link></Button>
                    </div>
                    <div>
                      <Button
                        style={{
                          width: "186px",
                          textAlign: "center",
                          height: "52px",
                          borderRadius: "9px",
                          backgroundColor: " #FF4A68",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        Download E-ticket
                      </Button>
                    </div>

                    <div>
                      <Button
                        onClick={() => history.push("/")}
                        style={{
                          width: "186px",
                          textAlign: "center",
                          height: "52px",
                          borderRadius: "9px",
                          backgroundColor: "#864BD8",
                          fontWeight: "bold",
                          marginBottom: "20px",
                        }}
                      >
                        Back to Home
                      </Button>
                    </div>
                  </div>
                </Col>
              </Container>
            </div>


          </>) : <></>}

    </>
  );
}


export default SteperDmpass;
