import React, { useEffect, useState } from "react";
import { Button, Row, Col, Form, Container, Image } from "react-bootstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import Header from "../../../components/Header";
import doodle from "../../../assets/img/doodle.png";
import DatePicker from "react-datepicker";
import calendar from "../../../assets/img/calendar.png";
import { Redirect, useHistory } from "react-router-dom";
import Footer from "../../travesaly/Footer";
import { API_PATH } from "../../../Path/Path";
import { FaSpinner } from 'react-icons/fa';
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchStart, getOtp, hideMessage, setDmData, verifyOtp } from "../../../redux/actions";

import Loader from "../../../components/Loader";
import Message from "../../../components/Message";


function Tickets1({loading}) {
  const history = useHistory();
  const [routes, setRoutes] = useState([]);
  const [number, setNumber] = useState([]);

  const dispatch = useDispatch()
  const { error, message } = useSelector(state => state.commonReducer)
  const { user_data } = useSelector(state => state.loginReducer)
  const { dmData } = useSelector(state => state.dmpassReducer)
  const { mobile } = dmData

  const [startDate, setStartDate] = useState(new Date());
  const [selected, setSelected] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getRoutes();
  }, []);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        console.log("Er", error);
        dispatch(hideMessage())

      }, 100);
      // dispatch(hideMessage())
    }
  }, [error]);

  const getRoutes = () => {
    fetch(`${API_PATH}/api/v1/location/list`)
      .then((response) => response.json())
      .then((res) => {
        setRoutes(res.data);
      })
      .catch((e) => console.log(e));
  };

  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      style={{ border: "none", background: "transparent", fontSize: "25px", color: "#a5a5a5" }}
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));
  const onStepreClick = () => {
    console.log("steper")
    if (user_data !== null) {
      history.push("/steper_dmpass")
    } else {
      dispatch(fetchStart())
      dispatch(verifyOtp(`91${mobile}`, otp))
    }
  }
  const handleDate = (d) => {
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    console.log(`${ye}-${mo}-${da}`);
    dispatch(setDmData('start_date', `${ye}-${mo}-${da}`))
    setStartDate(d)
  }

  // useEffect(() => {
  //   console.log("dmData",dmData);
  // }, [dmData])

  const [otp, setOtp] = useState('');
  const sendOtp = () => {
    // console.log("object::::::::::::::",number)
    dispatch(getOtp(number))
  }

  const handleMobile = (e) => {
    console.log("object", e.target.value);
    setNumber(e.target.value)
    let mob = e.target.value;
    if (mob.length > 9) {
      fetchOtp(e.target.value)
    }
    dispatch(setDmData("mobile", e.target.value))
  }
  const fetchOtp = (mobile) => {
    dispatch(getOtp(`91${mobile}`))
  }

  return (
    <>
      <div>
        <AvForm>
          <Header />
          {/* {loading ? <Loader /> : null} */}
          {message ? <Message msg={message} type="success" /> : null}
          {error ? <Message msg={error} type="error" /> : null}
          {/* {(user_data !== null) ? <Redirect to='/busdetail' /> : null} */}
          <Container className="">
            <div style={{ textAlign: "center", margin: "50px" }}>
              <div style={{ margin: "10px" }}>
                <img src={doodle} alt="doodle" style={{ height: "60px" }} />
                <h5 style={{ margin: "10px", color: "black", fontWeight: "700" }}>
                  Tickets
                </h5>
              </div>
              <span
                style={{
                  margin: "10px",
                  color: "black",
                  fontWeight: "500",
                  whiteSpace: "nowrap",
                }}
              >
                Book tickets for <br />
                Nature Trekking, Parking, Boating etc.
              </span>
            </div>
            <div className="d-none d-md-block" style={{ width: "388px",margin:"0 auto" }} >
              <div className="row d-flex text-center">
                <div className="col-4" >
                  <Image style={{ width: 36 }} src="https://cdn4.iconfinder.com/data/icons/nature-solid-icons-vol-3/72/108-512.png" />
                  <p className="ticket-icons" style={{ marginLeft:" -10px", fontSize: "13px" }}>Nature Trekking</p>
                </div>
                <div className="col-4">
                  <Image style={{ width: 36 }} src="https://www.iconpacks.net/icons/2/free-parking-sign-icon-1641-thumb.png" />
                  <p className="ticket-icons" style={{ marginLeft: "-10px", fontSize: "13px" }}>Parking</p>
                </div>
                <div className="col-4">
                  <Image style={{ width: 36 }} src="https://cdn3.iconfinder.com/data/icons/common-sports/4096/oarsmanship-512.png" />
                  <p className="ticket-icons" style={{ marginLeft: "-10px", fontSize: "13px" }}>Boating</p>
                </div>
              </div>
            </div>
            
            {/* mobile view */}
            <div className="d-md-none"  >
              <div className="row d-flex text-center">
                <div className="col-4" >
                  <Image style={{ width: 27 }} src="https://cdn4.iconfinder.com/data/icons/nature-solid-icons-vol-3/72/108-512.png" />
                  <p className="ticket-icons" style={{ marginLeft:" -10px", fontSize: "13px" }}>Nature Trekking</p>
                </div>
                <div className="col-4">
                  <Image style={{ width: 27 }} src="https://www.iconpacks.net/icons/2/free-parking-sign-icon-1641-thumb.png" />
                  <p className="ticket-icons" style={{ marginLeft: "-10px", fontSize: "13px" }}>Parking</p>
                </div>
                <div className="col-4">
                  <Image style={{ width: 27 }} src="https://cdn3.iconfinder.com/data/icons/common-sports/4096/oarsmanship-512.png" />
                  <p className="ticket-icons" style={{ marginLeft: "-10px", fontSize: "13px" }}>Boating</p>
                </div>
              </div>
            </div>
             {/* mobile view */}

            <Container>

              <Row className="custom-row" style={{marginLeft:"34%",marginTop:"25px"}}>
                {
                  (user_data === null)
                    ?
                    <>
                      <Col xs={12} md={3} className=""> 
                      <label className="formselect"
                        style={{
                          fontWeight: "bolder",
                          paddingLeft: "4px",
                          fontSize: "12px",
                          color: "black",
                          marginBottom: "5px",
                        }}
                      >
                        Enter mobile number
                      </label>

                        <AvField
                          name="Mobile Number"
                          type="number"
                          className="location-userdatas form-control"
                          placeholder="Enter mobile number"
                          style={{ border: "none", fontSize: "12px", margin: "0px !important" }}
                          value={mobile} onChange={handleMobile}
                          validate={{
                            required: {
                              value: true,
                              errorMessage: "Enter mobile number",
                            },

                          }}
                        />
                        <Button
                          // onClick={sendOtp}
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            color: "#FF4A68",
                            float: "right",
                            fontSize: "12px",
                          }}
                        >
                          {loading ?
                            <><FaSpinner style={{ marginRight: "5px" }} />Sending...</> :
                            <>Send OTP</>}
                        </Button>
                      </Col>
                      <Col xs={12} md={3} className="">
                        <label
                          className="formselect"
                          style={{
                            fontSize: "12px",
                            fontWeight: "bolder",
                            marginLeft: "4px",
                            color: "black",
                          }}
                        >
                          Enter OTP

                        </label>

                        <AvField
                          name="OTP"
                          type="number"
                          className="location-userdatas form-control"
                          placeholder="Enter the 6 digit OTP"
                          style={{ border: "none", height: "50px", fontSize: "12px" }}
                          value={otp} onChange={(e) => setOtp(e.target.value)}
                          validate={{
                            required: {
                              value: true,
                              errorMessage: "Enter the 6 digit OTP",
                            },

                          }}
                        />
                      </Col>

                    </>
                    :
                    <Col xs={12} md={5}>
                      <Form.Group
                        // className="location-userdatas"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label
                          className="formselect"
                          style={{
                            fontSize: "15px",
                            fontWeight: "bolder",
                            paddingLeft: "4px",
                            color: "black",
                            marginBottom: "5px",
                          }}
                        >
                          Select Booking Date
                        </Form.Label>
                        <div
                          className="location-userdatas"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            overflow: "hidden",
                            backgroundColor:"#F8F8F8"
                          }}
                        >
                          <img
                            className="location-userdatas-calendar"
                            src={calendar}
                            style={{ width: 25, height: 30 }}
                          />
                          <DatePicker
                            selected={startDate}
                            // onChange={(date) => setStartDate(date)}
                            onChange={handleDate}
                            customInput={<ExampleCustomInput />}
                            dateFormat="dd MMM"                           
                          />
                        </div>
                      </Form.Group>
                    </Col>
                }
              </Row>
            </Container>

          </Container>


          <div className="d-none d-md-block">
            <div style={{ textAlign: "center" }}>
              <Button
                type="submit"
                style={{
                  marginTop: "21px",
                  width: "21%",
                  height: "50px",
                  backgroundColor: "#FF814A",
                  color: "white",
                  fontWeight: "900",
                  fontSize: "15px",
                  marginBottom: "47px",
                  border: '1px solid #FF814A'
                }}
                onClick={onStepreClick}
              >
                Book Tickets
              </Button>
            </div>
            <Footer />
          </div>
          <div className="d-md-none">
            <Button
              type="submit"
              style={{
                marginTop: "21px",
                width: "100%",
                height: "71px",
                backgroundColor: "#FF814A",
                color: "white",
                fontWeight: "900",
                fontSize: "15px",
                border: '1px solid #FF814A',
                borderRadius: 0,
                // position: "absolute",
                bottom: 0
              }}
              onClick={onStepreClick}
            >
              Book Tickets
            </Button>
          </div>
        </AvForm>
      </div>
    </>
  );
}

const mapStateToProps = ({ loginReducer }) => {
  const { loading } = loginReducer;
  return { loading };
};

export default connect(
  mapStateToProps,
)(Tickets1);
