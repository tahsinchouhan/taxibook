import React, { useState, useEffect } from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import ticket from "../../../assets/img/ticket.png";
import Header from "../../../components/Header";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ButtonComponent from "../../../containers/Button";
import Footer from "../../travesaly/Footer";
import { connect, useDispatch, useSelector } from "react-redux";
import { Paper } from "@material-ui/core";
import { createDmPassTwo } from "../../../redux/actions";
import DmPass from "../DmPass";
import AvField from "availity-reactstrap-validation/lib/AvField";
import AvForm from "availity-reactstrap-validation/lib/AvForm";
import DatePicker from "react-datepicker";

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

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

function TravelTicket({ Seleted_Values }) {
  const [activeButton, setActiveButton] = useState(button_Data[0].name);
  const [data, setData] = useState();
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const dispatch = useDispatch();
  const { dmData } = useSelector((state) => state.dmpassReducer);
  const { Vehicle: number_of_vehicals, Travellers: number_of_travellers, DaysTravel: duration_of_travel } =
    (Seleted_Values && Seleted_Values[0]) || {};

  console.log("No of v", number_of_vehicals);
  const onDmByeClick = (values) => {
    console.log("fdjjkjgkdfj");
    console.log("object", {
      ...dmData,
      basic_details: travellers,
      vehical_details: vehicles,
    });
    dispatch(
      createDmPassTwo({
        ...dmData,
        basic_details: travellers,
        vehical_details: vehicles,
      })
    );
    history.push("/dm_congratulate");
  };

  const initialTravellers = () => {
    let temp = [];
    for (let v = 0; v < number_of_travellers; v++) {
      temp.push({
        name: "",
        gender: "Male",
        age: "",
        adhaar: "",
        start_date: startDate,
        end_date: endDate,

      });
    }
    return temp;
  };
  const [travellers, setTravellers] = useState(initialTravellers);

  const handleTraveller = (val, lbl, i) => {
    handleDate();
    handleDateTwo();
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
    for (let v = 0; v < number_of_vehicals; v++) {
      temp.push({
        vehicle_number: "",
        name: "",
        gender: "Male",

      });
    }
    return temp;
  };

  const [vehicles, setVehicles] = useState(initialVehicles);
  const handleVehicle = (val, lbl, i) => {
    console.log("object", val);
    console.log("object lbl", lbl);
    console.log("object i", i);

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

  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      style={{ border: "none", background: "transparent", fontSize: "12px", color: "#a5a5a5" }}
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ))
  const handleDate = (d) => {
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    console.log(`${ye}-${mo}-${da}`);
    //dispatch(setDmData('start_date', `${ye}-${mo}-${da}`))
    setStartDate(d)

  }

  const handleDateTwo = (d) => {
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    console.log(`${ye}-${mo}-${da}`);
    //dispatch(setDmData('start_date', `${ye}-${mo}-${da}`))
    setEndDate(d)
  }

  useEffect(() => {
    console.log("vehicles", vehicles);
  }, [vehicles]);

  const editDetails = () => {
    console.log("dbdbbdbbb");
    history.push("/dmticket")

  }
  return (
    <>
      <Header />
      <div className="d-none d-md-block">
        <Container className=" my-5" style={{ width: "70%" }}>
          <div className="select_div">
            <div className="row p-3" style={{ textAlign: "center" }}>
              <div className="col-xs-12  col-sm-12 col-md-12">
                <div className="booking-div">
                  <div style={{ marginBottom: "15px" }}>
                    <img src={ticket} alt="" />
                  </div>
                  <span
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      color: "#0fa453",
                      paddingTop: "50px",
                    }}
                  >
                    Travel Pass
                  </span>
                  <br />
                  <span
                    style={{
                      fontWeight: "bolder",
                      padding: "10px",
                    }}
                  >
                    Get a pass for travellers, vehicles
                    <br /> and duration of your travel
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Container style={{ width: "", marginBottom: "40px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "centers",
            }}
          >
            <div style={{ width: "" }}>
              <Row>
                <Col
                  style={{ background: "#F8F8F8", width: "px", margin: "10px" }}
                >
                  <div style={{}}>
                    <div style={{ padding: "10px" }}>
                      <h2
                        style={{
                          textAlign: "center",
                          fontSize: "17px",
                          fontWeight: "700",
                        }}
                      >
                        {number_of_vehicals}
                      </h2>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "700",
                          color: "gray",
                        }}
                      >
                        Vehicles
                      </span>
                      <br />
                      <div style={{ background: "#F8F8F8" }}>
                        <Button
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            color: "#FF4A68",
                            float: "right",
                            fontSize: "11px",
                            float: "left",
                            fontWeight: "700",
                          }}
                          onClick={editDetails}
                        >
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col style={{ background: "#F8F8F8", margin: "10px" }}>
                  <div style={{ background: "#F8F8F8", padding: "10px" }}>
                    <h2
                      style={{
                        textAlign: "center",
                        fontSize: "17px",
                        fontWeight: "700",
                      }}
                    >
                      {number_of_travellers}
                    </h2>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        color: "gray",
                      }}
                    >
                      Travellers
                    </span>
                    <br />
                    <Button
                      onClick={editDetails}
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "#FF4A68",
                        float: "right",
                        fontSize: "11px",
                        float: "left",
                        fontWeight: "700",
                      }}
                    >
                      Edit
                    </Button>
                  </div>
                </Col>
                <Col style={{ background: "#F8F8F8", margin: "10px" }}>
                  <div style={{ background: "#F8F8F8", padding: "10px" }}>
                    <h2
                      style={{
                        textAlign: "center",
                        fontSize: "17px",
                        fontWeight: "700",
                      }}
                    >
                      {duration_of_travel}
                    </h2>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        color: "gray",
                      }}
                    >
                      Days
                    </span>
                    <br />
                    <Button
                      onClick={editDetails}
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "#FF4A68",
                        float: "right",
                        fontSize: "11px",
                        float: "left",
                        fontWeight: "700",
                      }}
                    >
                      Edit
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>

        <Container style={{ marginLeft: "32%" }}>
          <Row>
            <AvForm onValidSubmit={onDmByeClick}>

              {
                (vehicles?.length > 0)
                  ?
                  <Col xs={12} md={6}>
                    <div style={{ width: "50%", float: "right" }}>
                      <label
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "black",
                        }}
                      >
                        Vehicle Details
                      </label>
                      <div
                        className="traveller_div"
                        style={{ marginTop: "1rem", justifyContent: "flex-start" }}
                      >
                        {vehicles?.map((item, i) => (
                          <Paper key={i} className="traveller__card p-3">
                            <div className="traveller__card_body" className="py-0">
                              <h5
                                className="traveller__card_title"
                                style={{ fontSize: "12px" }}
                              >
                                Vehicle {i + 1}
                              </h5>
                              <p className="traveller__card_text">
                                <div className="form-group pt-3">
                                  <label className="mb-1" for={`vehicle_number${i}`}>
                                    Vehicle Number
                                  </label>

                                  <AvField
                                    type="text"
                                    className="form-control pass_input"
                                    id={`vehicle_number${i}`}
                                    placeholder="Enter the license plate number"
                                    style={{ fontSize: "11px", marginLeft: "-5px", width: 250 }}
                                    name="registration_number"
                                    onChange={(e) =>
                                      handleVehicle(e.target.value, e.target.name, i)
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
                                <div className="form-group pt-3">
                                  <label className="mb-1" for={`name${i}`}>
                                    Driver Name
                                  </label>
                                  <AvField
                                    type="text"
                                    className="form-control pass_input"
                                    id={`name${i}`}
                                    placeholder="Enter Driver Name"
                                    style={{ fontSize: "11px", marginLeft: "-5px" }}
                                    name="driver_name"
                                    onChange={(e) =>
                                      handleVehicle(e.target.value, e.target.name, i)
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
                                <div className="form-group pt-3">
                                  <label className="mb-1" for={`name${i}`}>
                                    Driver License Number (Optional)
                                  </label>
                                  <AvField
                                    type="text"
                                    className="form-control pass_input"
                                    id={`license_number${i}`}
                                    placeholder="Enter Driver License Number"
                                    style={{ fontSize: "11px", marginLeft: "-5px" }}
                                    name="driver_licence_number"
                                    onChange={(e) =>
                                      handleVehicle(e.target.value, e.target.name, i)
                                    }
                                    value={vehicles[i].driver_licence_number}
                                  // validate={{
                                  //   required: {
                                  //     value: true,
                                  //     errorMessage: "Enter Driver License Number",
                                  //   },

                                  // }}
                                  />
                                </div>
                              </p>
                            </div>
                          </Paper>

                        ))}
                      </div>

                      {/* <div style={{ marginTop: "23px", textAlign: "center" }}>
                  <Button
                    type="submit"
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
                    </div>
                  </Col>
                  : null

              }
              <Col xs={12} md={6}>
                <div style={{ width: "50%" }}>
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
                    style={{ marginTop: "1rem", justifyContent: "flex-start" }}
                  >
                    {travellers?.map((item, i) => {
                      return (
                        <Paper
                          key={i}
                          className="traveller__card p-3"
                          style={{ minHeight: "364px" }}
                        >
                          <div className="traveller__card_body" className="py-0">
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
                                  style={{ fontSize: "11px", marginLeft: "-5px" }}
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
                                      data={button_Data}
                                      // activeButton={activeButton}
                                      // trigerOnClickEmpSideBtn={onSideBtnClick}
                                      trigerOnClickEmpSideBtn={(e) =>
                                        handleTraveller(e.target.name, "gender", i)
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
                                      }
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
                                  style={{ fontSize: "11px", marginLeft: "-5px" }}
                                  name="adhaar"
                                  onChange={(e) =>
                                    handleTraveller(
                                      e.target.value,
                                      e.target.name,
                                      i
                                    )
                                  }
                                  maxlength="12"
                                  value={travellers[i].adhaar}
                                  validate={{
                                    required: {
                                      value: true,
                                      errorMessage: "Your Adhar Card Number Required",
                                    },
                                    pattern: {
                                      value: "(?=.{12})",
                                      errorMessage: "Enter 12 digit Adhaar Card Number"
                                    },
                                    
                                  }}
                                />
                              </div>
                              <div className="form-group mt-1 pt-3 row">
                                {/* <div className="col-sm-6">
                                <label className="mb-3" for={`start_date${i}`}>
                                  Start Date1
                                </label>
                                <DatePicker
                                 // id={`start_date${i}`}
                                  selected={startDate}
                                  onChange={handleDate}
                                  customInput={<ExampleCustomInput />}
                                  dateFormat="dd/MM/yy"
                                 // value={travellers[i].start_date}
                                />
                              </div> */}
                                {/* <div className="col-sm-6">
                                <label className="mb-3" for={`end_date${i}`}>
                                  End Date1
                                </label>
                                <DatePicker
                                 // id={`end_date${i}`}
                                  selected={endDate}
                                  onChange={handleDateTwo}
                                  customInput={<ExampleCustomInput />}
                                  dateFormat="dd/MM/yy"
                                  //value={travellers[i].end_date}
                                />
                              </div> */}

                              </div>
                            </p>
                          </div>

                        </Paper>
                      )
                    })}


                    <div style={{ marginTop: "10rem", textAlign: "center", marginLeft: "52%" }}>
                      <Button
                        type="submit"
                        class="btn btn-success"
                        style={{
                          width: '250px',
                          textAlign: "center",
                          height: "50px",
                          borderRadius: 10,
                          backgroundColor: "#0fa453",
                          border: "none",
                          fontWeight: "600",
                        }}
                      >
                        Book your Pass
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </AvForm>
          </Row>
        </Container>
        <div style={{ height: "100px" }}></div>
        <Footer />
      </div>

      {/*mobile-view*/}

      <div fluid className="d-md-none" style={{ width: "" }}>
        <Container className=" my-5" style={{ width: "" }}>
          <div className="select_div">
            <div className="row p-3" style={{ textAlign: "center" }}>
              <div className="col-xs-12  col-sm-12 col-md-12">
                <div className="booking-div">
                  <div style={{ marginBottom: "15px" }}>
                    <img src={ticket} alt="" />
                  </div>
                  <span
                    style={{
                      fontWeight: "bolder",
                      fontSize: "15px",
                      color: "#0fa453",
                      paddingTop: "50px",
                    }}
                  >
                    Travel Pass
                  </span>
                  <br />
                  <span
                    style={{
                      fontWeight: "bolder",
                      padding: "10px",
                    }}
                  >
                    Get a pass for travellers, vehicles
                    <br /> and duration of your travel
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Container style={{ width: "", marginBottom: "40px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "" }}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Col
                  xs={4}
                  style={{
                    background: "#F8F8F8",
                    width: "85px",
                    textAlign: "center",
                    marginRight: "10px",
                  }}
                >
                  <div style={{}}>
                    <div style={{}}>
                      <h2
                        style={{
                          textAlign: "center",
                          fontSize: "17px",
                          fontWeight: "700",
                          marginTop: 10
                        }}
                      >
                        {number_of_vehicals}
                      </h2>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "700",
                          color: "gray",
                        }}
                      >
                        Vehicles
                      </span>
                      <br />
                      <div style={{ background: "#F8F8F8" }}>
                        <Button
                          onClick={editDetails}
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            color: "#FF4A68",
                            float: "right",
                            fontSize: "11px",
                            float: "left",
                            fontWeight: "700",
                            paddingLeft: "29px",
                          }}
                        >
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col
                  xs={4}
                  style={{
                    background: "#F8F8F8",
                    marginRight: "10px",
                    width: "85px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ background: "#F8F8F8" }}>
                    <h2
                      style={{
                        textAlign: "center",
                        fontSize: "17px",
                        fontWeight: "700",
                        marginTop: 10
                      }}
                    >
                      {number_of_travellers}
                    </h2>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        color: "gray",
                      }}
                    >
                      Travellers
                    </span>
                    <br />
                    <Button
                      onClick={editDetails}
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "#FF4A68",
                        float: "right",
                        fontSize: "11px",
                        float: "left",
                        fontWeight: "700",
                        paddingLeft: "29px",
                      }}
                    >
                      Edit
                    </Button>
                  </div>
                </Col>
                <Col
                  xs={4}
                  style={{
                    background: "#F8F8F8",
                    margin: "2px",
                    width: "85px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ background: "#F8F8F8" }}>
                    <h2
                      style={{
                        textAlign: "center",
                        fontSize: "17px",
                        fontWeight: "700",
                        marginTop: 10
                      }}
                    >
                      {duration_of_travel}
                    </h2>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        color: "gray",
                      }}
                    >
                      Days
                    </span>
                    <br />
                    <Button
                      onClick={editDetails}
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "#FF4A68",
                        float: "right",
                        fontSize: "11px",
                        float: "left",
                        fontWeight: "700",
                        paddingLeft: "29px",
                      }}
                    >
                      Edit
                    </Button>
                  </div>
                </Col>
              </div>
            </div>
          </div>
          <div>
            <div style={{}}>
              <AvForm onValidSubmit={onDmByeClick}>
                {
                  (vehicles?.length > 0)
                    ?
                    <Col xs={12} md={6}>
                      <label
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "black",
                          display: "flex",
                          justifyContent: "center",
                          paddingTop: "15px"
                        }}
                      >
                        Vehicle Details
                      </label>
                      <div
                        className="traveller_div"
                        style={{ marginTop: "1rem", justifyContent: "center" }}
                      >
                        {vehicles?.map((item, i) => (
                          <Paper key={i} className="traveller__card p-3" style={{ marginBottom: "12px" }}>
                            <div className="traveller__card_body" className="py-0" >
                              <h5
                                className="traveller__card_title"
                                style={{ fontSize: "12px" }}
                              >
                                Vehicle {i + 1}
                              </h5>
                              <p className="traveller__card_text">
                                <div className="form-group pt-3">
                                  <label className="mb-1" for={`vehicle_number${i}`}>
                                    Vehicle Number
                                  </label>
                                  <AvField
                                    type="text"
                                    className="form-control pass_input"
                                    id={`vehicle_number${i}`}
                                    placeholder="Enter the license plate number"
                                    style={{ fontSize: "11px", marginLeft: "-5px", width: 250 }}
                                    name="registration_number"
                                    onChange={(e) =>
                                      handleVehicle(e.target.value, e.target.name, i)
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
                                <div className="form-group pt-3">
                                  <label className="mb-1" for={`name${i}`}>
                                    Driver Name
                                  </label>
                                  <AvField
                                    type="text"
                                    className="form-control pass_input"
                                    id={`name${i}`}
                                    placeholder="Enter Driver Name"
                                    style={{ fontSize: "11px", marginLeft: "-5px" }}
                                    name="driver_name"
                                    onChange={(e) =>
                                      handleVehicle(e.target.value, e.target.name, i)
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

                                <div className="form-group pt-3">
                                  <label className="mb-1" for={`name${i}`}>
                                    Driver License Number (Optional)
                                  </label>
                                  <AvField
                                    type="text"
                                    className="form-control pass_input"
                                    id={`name${i}`}
                                    placeholder="Enter Driver License Number"
                                    style={{ fontSize: "11px", marginLeft: "-5px" }}
                                    name="driver_licence_number"
                                    onChange={(e) =>
                                      handleVehicle(e.target.value, e.target.name, i)
                                    }
                                    value={vehicles[i].driver_licence_number}
                                  />
                                </div>

                              </p>
                            </div>
                          </Paper>
                        ))}
                      </div>
                    </Col>

                    : null

                }
                <Col xs={12} md={6}>
                  <label
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "black",
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: "15px"
                    }}
                  >
                    Travellers Details
                  </label>

                  <div
                    className="traveller_div"
                    style={{ marginTop: "1rem", justifyContent: "center" }}
                  >
                    {travellers?.map((item, i) => (
                      <Paper
                        key={i}
                        className="traveller__card p-3"
                        style={{ minHeight: "364px", marginBottom: "12px" }}
                      >
                        <div className="traveller__card_body" className="py-0">
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
                                style={{ fontSize: "11px", marginLeft: "-5px" }}
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
                                    data={button_Data}
                                    // activeButton={activeButton}
                                    // trigerOnClickEmpSideBtn={onSideBtnClick}
                                    trigerOnClickEmpSideBtn={(e) =>
                                      handleTraveller(e.target.name, "gender", i)
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
                                    }
                                  }}
                                />

                              </div>
                            </div>

                            <div className="form-group mt-1 pt-3">
                              <label className="mb-3" for={`aadhaar${i}`}>
                                Adhaar Card Number
                              </label>
                              <AvField
                                type="text"
                                className="form-control pass_input"
                                id={`adhaar${i}`}
                                placeholder="Enter 12 digit Adhaar Card Number"
                                style={{ fontSize: "11px", marginLeft: "-5px" }}
                                name="adhaar"
                                onChange={(e) =>
                                  handleTraveller(
                                    e.target.value,
                                    e.target.name,
                                    i
                                  )
                                }
                                maxlength="12"
                                value={travellers[i].adhaar}
                                validate={{
                                  required: {
                                    value: true,
                                    errorMessage: "Your Adhar Card Number Required",
                                  },
                                  pattern: {
                                    value: "(?=.{12})",
                                    errorMessage: "Enter 12 digit Adhaar Card Number"
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
                </Col>
                <div style={{ marginTop: "86px", textAlign: "center" }}>1</div>
                <div style={{ marginTop: "10rem", textAlign: "center" }}>
                  <Button
                    type="submit"
                    class="btn btn-success"
                    style={{
                      width: "100%",
                      textAlign: "center",
                      // height: "80px",
                      borderRadius: "0px",
                      backgroundColor: "#0fa453",
                      border: "none",
                      fontWeight: "600",
                      height: "86px",
                      position:"fixed",
                      width:"100%",
                      bottom:"0",
                      left:"0"
                    }}
                  // onClick={onDmByeClick}
                  >
                    Book your Pass
                  </Button>
                </div>
              </AvForm>
            </div>
          </div>
        </Container>

      </div>

    </>
  );
}

const mapStateToProps = ({ dmpassReducer }) => {
  const { Seleted_Values } = dmpassReducer;
  return { Seleted_Values };
};

export default connect(
  mapStateToProps,
  null
)(TravelTicket);

