import React, { useEffect, useState } from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import Header from "../../../components/Header";
import doodle from "../../../assets/img/doodle.png";
import DatePicker from "react-datepicker";
import calendar from "../../../assets/img/calendar.png";
import { Redirect, useHistory } from "react-router-dom";
import Footer from "../../travesaly/Footer";
import { API_PATH } from "../../../Path/Path";

import { useDispatch, useSelector } from "react-redux";
import { fetchStart, getOtp, hideMessage, setDmData, verifyOtp } from "../../../redux/actions";

import Loader from "../../../components/Loader";
import Message from "../../../components/Message";

function Tickets1() {
  const history = useHistory();
  const [routes, setRoutes] = useState([]);

  const dispatch = useDispatch()
  const { error, loading, message } = useSelector(state => state.commonReducer)
  const { user_data } = useSelector(state => state.loginReducer)
  const { dmData } = useSelector(state => state.dmpassReducer)
  const { mobile } = dmData

  const [startDate, setStartDate] = useState(new Date());
  const [selected, setSelected] = useState("");

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
    if(user_data !==null){
      history.push("/steper_dmpass")
    }else{
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

  const handleMobile = (e) => {
    console.log("object", e.target.value);
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
        <Header />
        {loading ? <Loader /> : null}
        {message ? <Message msg={message} type="success" /> : null}
        {error ? <Message msg={error} type="error" /> : null}
        {/* {(user_data !== null) ? <Redirect to='/busdetail' /> : null} */}
        <Container className="">
          <div style={{ textAlign: "center", margin: "50px" }}>
            <div style={{ margin: "10px" }}>
              <img src={doodle} alt="doodle" style={{ height: "200px" }} />
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
              Book tickets to your favourite <br />
              destinations right from your mobile
            </span>
          </div>
          <Container style={{ width: "%" }}>
            <Row className="row justify-content-center">
              {

                (user_data === null)
                  ?
                  <>
                    <Col xs={12} md={3} className="">
                      {/* <Form.Group as={Col} controlId="formGridState">
                  <Form.Label
                    className="formselect"
                    style={{
                      fontWeight: "bolder",
                      paddingLeft: "4px",
                      fontSize: "12px",
                      color: "black",
                      marginBottom: "5px",
                    }}
                  >
                    Enter Destination
                  </Form.Label>
                  <Form.Select
                    className="location-userdatas"
                    style={{ border: "none", fontSize: "12px" }}
                  >
                    <option>select a destination...</option>
                    {routes.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group> */}
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label
                          className="formselect"
                          style={{
                            fontWeight: "bolder",
                            paddingLeft: "4px",
                            fontSize: "12px",
                            color: "black",
                            marginBottom: "5px",
                          }}
                        >
                          Mobile
                        </Form.Label>
                        <Form.Control
                          className="location-userdatas"
                          placeholder=" Enter Mobile No"
                          style={{ border: "none", fontSize: "12px" }}
                          value={mobile} onChange={handleMobile}
                        >
                        </Form.Control>
                      </Form.Group>
                      <Button
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          color: "#FF4A68",
                          float: "right",
                          fontSize: "12px",
                        }}
                      >
                        Sent OTP
                      </Button>
                    </Col>
                    <Col xs={12} md={3} className="">
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label
                          className="formselect"
                          style={{
                            fontSize: "12px",
                            fontWeight: "bolder",
                            marginLeft: "4px",
                            color: "black",
                          }}
                        >
                          Enter OTP
                        </Form.Label>

                        <Form.Control
                          type="text"
                          className="location-userdatas"
                          placeholder="Enter the 6 digit OTP"
                          style={{ border: "none", height: "50px", fontSize: "12px" }}
                          value={otp} onChange={(e) => setOtp(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </>
                  :
                  <Col xs={12} md={3} className="" style={{}}>
                    <Form.Group
                      // className="location-userdatas"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label
                        className="formselect"
                        style={{
                          fontSize: "12px",
                          fontWeight: "bolder",
                          paddingLeft: "4px",
                          color: "black",
                          marginBottom: "5px",
                        }}
                      >
                        Journey Date
                      </Form.Label>
                      <div
                        className="location-userdatas"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          overflow: "hidden",
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
              className=""
              style={{
                marginTop: "50px",
                width: "19%",
                height: "50px",
                backgroundColor: "#FF814A",
                color: "white",
                fontWeight: "900",
                fontSize: "15px",
                marginBottom: "50px"
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
            className=""
            style={{
              marginTop: "50px",
              width: "100%",
              height: "71px",
              backgroundColor: "#FF814A",
              color: "white",
              fontWeight: "900",
              fontSize: "15px",
            }}
            onClick={onStepreClick}
          >
            Book Tickets
          </Button>
        </div>
      </div>
    </>
  );
}

export default Tickets1;
