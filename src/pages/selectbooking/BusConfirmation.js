import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ButtonComponent from "../../containers/Button";
import { useDispatch, useSelector } from "react-redux";
import { setApiData } from "../../redux/actions";
import '../../assets/css/busconfirmation.css'
import { AvField, AvForm } from "availity-reactstrap-validation";


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
function BusConfirmation() {

  const [activeButton, setActiveButton] = useState(button_Data[0].name);
  const [data, setData] = useState();
  const history = useHistory();

  const dispatch = useDispatch()
  const { tripData, data: apiData,  routeData } = useSelector(state => state.busReducer)

  const onSideBtnClick = (e) => {
    const name = e.target.name;
    setActiveButton(name);
  };

  useEffect(() => {
    if(routeData.startDate === undefined){
      history.push('/busdetail')
    }
  }, [routeData]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const classes = useStyles();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (newPlacement) => (event) => {
    console.log("object");
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const onCheckout = () => {
    console.log("object");
    dispatch(setApiData({ ...values, basic_details: travellers }))
    history.push("/checkoutpage");
  };

  const onClickBack = () => {
    history.push("/busmonsoon");
  }

  const [values, setValues] = useState({
    mobile: '',
    nameoftrip: '',
    trips_id: '',
    date: '',
    time: '',
    route: '',
    bus: '',
    from: '',
    to: '',
    name: '',
    adhaar: '',
    age: '',
    price: '',
    surcharge: tripData?.surcharge,
    gender: '',
    basic_details: apiData?.basic_details || [],
  })
  const [basePrice, setBasePrice] = useState(tripData?.ticket_price || 0)

  const [travellers, setTravellers] = useState(apiData?.basic_details || [{
    name: '',
    gender: '',
    age: '',
    adhaar: '',
  }])

  const { name, age, gender, adhaar, basic_details, price, surcharge } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value, gender: activeButton })
    console.log(e.target, 'val', values);
  }
  const handleTraveller = (val, lbl, i) => {
    setTravellers([...travellers].map((obj, key) => {
      if (key === i) {
        return {
          ...obj,
          [lbl]: val
        }
      } else {
        return obj
      }

    }))
  }
  const deleteHandler = (key) => {
    // console.log("object123456",key)
    // let deleteTravellers
    setTravellers([...travellers].filter((obj, i) => i != key))
  }

  const handleOk = () => {
    // console.log('ok');
    setValues({ ...values, basic_details: [...basic_details, { name, age, gender, adhaar }], name: "", age: '', gender: '', adhaar: '' })
    setShow(false);
  };

  useEffect(() => {
    setValues({ ...values, price: (basePrice * travellers.length) })
    // console.log(tripData,price,"enosdkl",travellers);
  }, [travellers])

  useEffect(() => {
    // setValues({ ...values, price: (BASE_PRICE * basic_details.length)  })
    setValues({ ...values, price: (basePrice * basic_details.length) })
    // console.log("enosdkl");
  }, [basic_details])


  return (
    <>
      <div className="d-none d-md-block">
        <Header />
        <AvForm onValidSubmit={onCheckout}>
          <Container
            style={{ width: "60%", paddingTop: "40px", marginBottom: "70px" }}
          >
            <h3
              style={{
                fontSize: "19px",
                color: "#0FA453",
                fontWeight: "bolder",
              }}
            >
              Confirmation
            </h3>

            <Row>
              <Col xs={12} md={6}>
                <div style={{ width: "100%" }}>
                  <span
                    style={{
                      color: "black",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Boarding from
                  </span>
                </div>

                <div
                  className=" select-train mt-2 d-flex align-items-center"
                  style={{ width: "100%" }}
                >
                  <Form className="d-flex">
                    {["radio"].map((type) => (
                      <div
                        key={`inline-${type}`}
                        className="mb-3"
                        style={{ margin: "10px", marginLeft: "10px" }}
                      >
                      </div>
                    ))}

                    <span
                      style={{
                        // marginTop: "10px",
                        marginRight: "10px",
                        color: "black",
                        fontWeight: "bolder",
                        fontFamily: "sans-serif",
                      }}
                    >
                      {/* 19:45 */}
                      {tripData?.departure_time}
                    </span>
                  </Form>
                  <div className="d-flex">
                    <span
                      style={{
                        margin: "10px",
                        whiteSpace: "nowrap",
                        fontSize: "12px",
                        fontWeight: "bolder",
                        fontFamily: "sans-serif",
                      }}
                    >
                      {tripData?.route?.start?.name}
                    </span>
                  </div>
                </div>
              </Col>
              <Col>
                <div style={{ width: "100%" }}>
                  <span
                    style={{
                      color: "black",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Dropoff At
                  </span>
                </div>

                <div
                  className=" select-train mt-2 d-flex align-items-center"
                  style={{ width: "100%" }}
                >
                  <Form className="d-flex">
                    {["radio"].map((type) => (
                      <div
                        key={`inline-${type}`}
                        className="mb-3"
                        style={{ margin: "10px", marginLeft: "10px" }}
                      >
                      </div>
                    ))}

                    <span
                      style={{
                        // marginTop: "10px",
                        marginRight: "10px",
                        color: "black",
                        fontWeight: "bolder",
                        fontFamily: "sans-serif",
                      }}
                    >
                      {tripData?.estimated_time_of_arrival}
                    </span>
                  </Form>
                  <div className="d-flex">
                    <span
                      style={{
                        margin: "10px",
                        whiteSpace: "nowrap",
                        fontSize: "12px",
                        fontWeight: "bolder",
                        fontFamily: "sans-serif",
                      }}
                    >
                      {/* Raj Ratan Travels, Borivali East,
                    <br />
                    Devipada Subway */}

                      {tripData?.route?.end?.name}
                    </span>
                  </div>
                </div>
              </Col>
            </Row>


            <div className="">
              <div className="traveller_div" >
                {
                  travellers?.map((item, i) => (
                    <Paper key={i} className="traveller__card" >
                      <div className="traveller__card_body" className="py-0">
                        <div>
                          <h5 className="traveller__card_title" style={{ fontSize: "20px", marginBottom: "15px", float: "left", fontWeight: "bold" }}>Enter Travellers {i + 1}</h5>

                          <button className="btn" style={{ float: "right", position: "relative", top: "-10px" }} onClick={(key) => deleteHandler(i)}>X</button>
                        </div>

                        <p className="traveller__card_text" style={{ clear: "both" }}>
                          <div className="form-group mt-0">
                            <label className="mb-1" for={`name${i}`}><h3 style={{ fontSize: "15px", marginLeft: "-5px", fontWeight: "bold" }}>Name</h3></label>
                            <AvField
                              type="text"
                              className="form-control pass_input"
                              id={`name${i}`}
                              placeholder="Enter Traveller Name"
                              style={{ fontSize: "11px", marginLeft: "-5px", fontWeight: "bold" }}
                              name='name'
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
                              <label className="mb-1" for={`gender${i}`}><h3 style={{ fontSize: "15px", marginLeft: "-5px", fontWeight: "bold" }}>Gender</h3></label>
                              <div className="d-flex pt-2">
                                <ButtonComponent
                                  style={{
                                    width: "50%",
                                    fontSize: "11px",
                                    whiteSpace: "nowrap"
                                    , fontWeight: "bold"
                                  }}
                                  data={button_Data}
                                  // activeButton={activeButton}
                                  // trigerOnClickEmpSideBtn={onSideBtnClick}
                                  trigerOnClickEmpSideBtn={(e) => handleTraveller(e.target.name, "gender", i)} activeButton={travellers[i].gender}

                                />
                              </div>
                            </div>
                            <div className="form-group col m-2 w-50">
                              <label className="mb-1" for={`age${i}`}><h3 style={{ fontSize: "15px", marginLeft: "-5px", fontWeight: "bold" }}>Age</h3></label>

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
                                  fontWeight: "bold" ,

                                }}
                                name='age'
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

                          <div className="form-group mt-1 pt-2">
                            <label className="mb-1" for={`aadhaar${i}`}>
                            <h3 style={{ fontSize: "15px", marginLeft: "-5px", fontWeight: "bold" }}> Aadhar /Any Govt ID Number{" "}</h3>
                            </label>
                            <AvField
                              type="text"
                              className="form-control pass_input"
                              id={`adhaar${i}`}
                              placeholder="Enter Aadhar /Any Govt ID Number"
                              style={{ fontSize: "11px", marginLeft: "-5px", fontWeight: "bold" }}
                              name='adhaar'
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
                                  errorMessage: "Your Aadhar /Any Govt ID Number Required",
                                },
                                // pattern: {
                                //   value: "(?=.{12})",
                                //   errorMessage: "Enter Aadhar /Any Govt ID Number"
                                // },
                                
                              }}
                            />

                          </div>
                        </p>
                      </div>
                    </Paper>
                  ))
                }
              </div>

              <div style={{ textAlign: "center", margin: "55px" }}>
                <Button
                  type="button"
                  style={{
                    backgroundColor: "#0FA453",
                    color: "white",
                    width: "29%",
                    height: "51px",
                    border: "none",
                    borderRadius: "15px",
                  }}
                  onClick={() => setTravellers([...travellers, {
                    name: '',
                    gender: '',
                    age: '',
                    adhaar: '',
                  }])}
                >
                  Add Traveller
                </Button>
              </div>

              {/* <Popper
                    open={open}
                    anchorEl={anchorEl}
                    placement={placement}
                    transition
                  > */}


            </div>
          </Container>

          <div>
            <div style={{ display: 'flex', flexDirection: 'row' }} >
              <Col style={{ backgroundColor: "#E5E5E5", textAlign: "center", height: "86px", }}>
                <div style={{ backgroundColor: "#E5E5E5", textAlign: "center", height: "86px" }}>

                  <div style={{ padding: "" }}>
                    <span style={{ fontSize: "15px", lineHeight: "21px", color: "grey" }}>
                      Total Amount (*Exclusive of Taxes)
                    </span>
                    <br />
                    <span
                      style={{
                        fontSize: "33px",
                        fontWeight: "bolder",
                        lineHeight: "40px",
                        fontSize: " 24px",
                      }}
                    >

                      ₹  {price + surcharge}
                    </span>
                  </div>
                </div>
              </Col>
              <Col>
                <Button
                  type="submit"
                  className="w-100"
                  style={{
                    borderColor: "#0FA453",
                    backgroundColor: "#0FA453",
                    color: "white",
                    textAlign: "center",
                    height: "86px",
                  }}
                // onClick={onCheckout}
                >
                  <div>
                    <span
                      style={{
                        fontSize: "21px",
                        fontWeight: "bolder",
                        lineHeight: "25px",
                      }}
                    // onClick={onCheckout}
                    >
                      CONTINUE
                    </span>
                  </div>
                </Button>
              </Col>
            </div>
          </div>
        </AvForm>
        <Footer />
      </div>

      {/*mobile-view*/}

      <div className="d-md-none">
        <AvForm onValidSubmit={onCheckout}>
          <div
            className="tatibandh d-flex"
            style={{
              height: "85px",
              backgroundColor: "#0FA453",
              color: "white",
            }}
          >
            <div
              style={{
                marginRight: "62px",
                paddingTop: " 20px",
                fontSize: " 24px",
                marginLeft: "20px",
              }}
            >
              <FaArrowLeft onClick={onClickBack} />
            </div>
            <div>
              <h5
                style={{
                  paddingTop: "29px",
                  fontSize: "17px",
                  backgroundColor: "#0FA453",
                  fontWeight: "bolder",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Confirmation
              </h5>
            </div>
          </div>

          <Container
            style={{ width: "90%", paddingTop: "25px" }}
          >
            <h3
              style={{
                fontSize: "19px",
                color: "#0FA453",
                fontWeight: "bolder",
              }}
            >
              Confirmation
            </h3>

            <Row>
              <Col xs={6}>
                <div style={{ width: "89%" }}>
                  <span
                    style={{
                      color: "black",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Boarding from
                  </span>

                </div>
                <div className=" select-train mt-2 d-flex">
                  <Form className="d-flex">
                    {["radio"].map((type) => (
                      <div
                        key={`inline-${type}`}
                        className="mb-3"
                        style={{ margin: "10px", marginLeft: "10px" }}
                      >
                        {/* <Form.Check
                        inline
                        label=""
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      /> */}
                      </div>
                    ))}

                    {/* <span
                      style={{
                        marginTop: "10px",
                        marginRight: "10px",
                        color: "black",
                        fontWeight: "bolder",
                        fontFamily: "sans-serif",
                      }}
                    >
                      {tripData?.departure_time}
                    </span> */}
                  </Form>
                  <div className="d-flex">
                    <span
                      style={{
                        margin: "10px",
                        whiteSpace: "nowrap",
                        fontSize: "12px",
                        fontWeight: "bolder",
                        fontFamily: "sans-serif",
                        textAlign:"justify"
                      }}
                    >
                      {tripData?.route?.start?.name}
                    </span>
                  </div>
                </div>
              </Col>
              <Col xs={6}>
                <div style={{ width: "89%" }}>
                  <span
                    style={{
                      color: "black",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Dropoff At
                  </span>

                </div>
                <div className=" select-train mt-2 d-flex">
                  <Form className="d-flex">
                    {["radio"].map((type) => (
                      <div
                        key={`inline-${type}`}
                        className="mb-3"
                        style={{ margin: "10px", marginLeft: "10px" }}
                      >
                        {/* <Form.Check
                        inline
                        label=""
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      /> */}
                      </div>
                    ))}

                    {/* <span
                      style={{
                        // marginTop: "10px",
                        // marginRight: "0px",
                        // color: "black",
                        // fontWeight: "bolder",
                        // fontFamily: "sans-serif",
                      }}
                    >
                      {tripData?.estimated_time_of_arrival}
                    </span> */}
                  </Form>
                  <div className="d-flex">
                    <span
                      style={{
                        margin: "10px",
                        whiteSpace: "nowrap",
                        fontSize: "12px",
                        fontWeight: "bolder",
                        fontFamily: "sans-serif",
                      }}
                    >

                      {tripData?.route?.end?.name}
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <div className="traveller_div" >
            {
              travellers?.map((item, i) => (
                <Paper key={i} className="traveller__card" style={{ marginBottom: "15px" }}>
                  <div className="traveller__card_body" className="py-0">
                    <div>
                      <h5 className="traveller__card_title" style={{ fontSize: "20px", marginBottom: "15px", float: "left", fontWeight: "bold" }}>Enter Travellers {i + 1}</h5>
                      <button className="btn" style={{ float: "right", position: "relative", top: "-10px" }} onClick={(key) => deleteHandler(i)}>X</button>
                    </div>
                    <p className="traveller__card_text" style={{ clear: "both" }}>
                      <div className="form-group mt-0">
                        <label className="mb-1" for={`name${i}`}><h3 style={{ fontSize: "15px", marginLeft: "-5px", fontWeight: "bold" }}>Name</h3>  </label>
                        <AvField
                          type="text"
                          className="form-control pass_input"
                          id={`name${i}`}
                          placeholder="Enter Traveller Name"
                          style={{ fontSize: "11px", marginLeft: "-5px", fontWeight: "bold" }}
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
                          <label className="mb-1" for={`gender${i}`}><h3 style={{ fontSize: "15px", marginLeft: "-5px", fontWeight: "bold" }}>Gender</h3></label>
                          <div className="d-flex pt-2">
                            <ButtonComponent
                              style={{
                                width: "50%",
                                fontSize: "11px",
                                whiteSpace: "nowrap", fontWeight: "bold" 
                              }}
                              data={button_Data}
                              // activeButton={activeButton}
                              // trigerOnClickEmpSideBtn={onSideBtnClick}
                              trigerOnClickEmpSideBtn={(e) => handleTraveller(e.target.name, "gender", i)} activeButton={travellers[i].gender} />
                          </div>
                        </div>
                        <div className="form-group col m-2 w-50">
                          <label className="mb-1" for={`age${i}`}><h3 style={{ fontSize: "15px", marginLeft: "-5px", fontWeight: "bold" }}>Age</h3></label>
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
                              fontWeight: "bold" ,
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

                      <div className="form-group mt-1 pt-2">
                        <label className="mb-1" for={`aadhaar${i}`}>
                        <h3 style={{ fontSize: "15px", marginLeft: "-5px", fontWeight: "bold" }}> Aadhar /Any Govt ID Number{" "}</h3>
                        </label>
                        <AvField
                          type="text"
                          className="form-control pass_input"
                          id={`adhaar${i}`}
                          placeholder="Enter 12 digit Aadhar /Any Govt ID Number"
                          style={{ fontSize: "11px", marginLeft: "-5px", marginTop: "7px" , fontWeight: "bold"}}
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
                              errorMessage: "Your Aadhar /Any Govt ID Number Required",
                            },
                            // pattern: {
                            //   value: "(?=.{12})",
                            //   errorMessage: "Enter 12 digit Adhaar Card Number"
                            // },
                            
                          }}
                        />

                      </div>
                    </p>
                  </div>
                </Paper>
              ))
            }
          </div>
          
          <div style={{ textAlign: "center", paddingBottom: "200px" }}>
            <Button
              type="button"
              style={{
                backgroundColor: "#0FA453",
                color: "white",
                width: "50%",
                height: "51px",
                border: "none",
                borderRadius: "15px",
                marginTop: '40px'
              }}
              onClick={() => setTravellers([...travellers, {
                name: '',
                gender: '',
                age: '',
                adhaar: '',
              }])}
            >
              Add Traveller
            </Button>
          </div>

          <div>
            <div style={{ display: "flex", marginTop: "50px", flexDirection: 'row', width: "50%", position: 'fixed', bottom: "0px" }} >
              <Col xs={12} md={6} style={{ backgroundColor: "#E5E5E5", textAlign: "center", height: "86px", }}>
                <div style={{ backgroundColor: "#E5E5E5", textAlign: "center", height: "86px" }}>

                  <div style={{ padding: "" }}>
                    <span style={{ fontSize: "13px", lineHeight: "21px", color: "grey" }}>
                      Total Amount (*Exclusive of Taxes)
                    </span>
                    <br />
                    <span
                      style={{
                        fontSize: "33px",
                        fontWeight: "bolder",
                        lineHeight: "40px",
                        fontSize: " 24px",
                      }}
                    >
                      ₹  {price + surcharge}
                    </span>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <Button
                  type="submit"
                  className="w-100"
                  style={{
                    borderColor: "#0FA453",
                    backgroundColor: "#0FA453",
                    color: "white",
                    textAlign: "center",
                    height: "86px",
                  }}
                  // onClick={onCheckout}
                >
                  <div>
                    <span
                      style={{
                        fontSize: "21px",
                        fontWeight: "bolder",
                        lineHeight: "25px",
                      }}
                      // onClick={onCheckout}
                    >
                      CONTINUE
                    </span>
                  </div>
                </Button>
              </Col>
            </div>
          </div>
        </AvForm>
      </div>
    </>
  );
}

export default BusConfirmation;