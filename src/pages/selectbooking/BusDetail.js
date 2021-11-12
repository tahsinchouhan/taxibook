import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "../../assets/css/buspass.css";
// import { FaBus, FaCarAlt, FaTicketAlt } from "react-icons/fa";
import bus from "../../assets/img/bus.png";
import calendar from "../../assets/img/calendar.png";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import Header from "../../components/Header";
// import Footer from "../travesaly/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_PATH } from "../../Path/Path";
import { useDispatch } from "react-redux";
import {
  getTripByRouteId,
  setBookinStartDate,
  setRouteData,
  setRouteId,
} from "../../redux/actions";
import Footer from "../travesaly/Footer";

function BusPass() {
  const history = useHistory();
  const history2 = useHistory();
  const [routes, setRoutes] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [selected, setSelected] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      style={{
        border: "none",
        background: "transparent",
        fontSize: "25px",
        color: "#a5a5a5",
      }}
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));

  useEffect(() => {
    getRoutes();
  }, []);

  const getRoutes = () => {
    fetch(API_PATH + `/api/v1/routes/list`)
      .then((response) => response.json())
      .then((res) => {
        setRoutes(res.data);
      })
      .catch((e) => console.log(e));
  };

  const onSubmit = () => {
    if (selected !== "") {
      dispatch(setRouteId(selected, startDate));
      dispatch(
        setRouteData({
          ...routes[routes.findIndex((x) => x._id == selected)],
          startDate,
        })
      );
      history.push("/busmonsoon");
    }
  };

  const ViewTicketHandler = ()=>{
    history.push('/viewticket')
  }

  return (
    <div>
      <ToastContainer />
      <Header />
      
      <div className=" col-md-11 d-flex justify-content-end">
                        <button style={{background:'#0fa453',borderColor:'#0fa453',color:'white',borderRadius:'11px'}} onClick={ViewTicketHandler}>View tickets</button>
                      </div>
      <div className="d-none d-md-block">
        <Container className="d-none d-md-block">
          <div style={{ textAlign: "center", margin: "50px" }}>
            <div style={{ margin: "10px" }}>
              <img src={bus} alt="bus" />
              <h5 style={{ margin: "10px", color: "#FF4A68" }}>Bus</h5>
            </div>
            <span>
            Book bus ticket for route 
           <br />
           Tamda Ghumar- Mendri 
           <br /> 
           Ghumar- Chitrakoot etc 
            </span>
          </div>
          <Container style={{ width: "70%" }}>
            <Row className="row justify-content-center">
              <Col xs={12} md={4} className="">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label
                    className="formselect"
                    style={{
                      fontWeight: "bolder",
                      marginLeft: "4px",
                      fontSize: "12px",
                      color: "black",
                    }}
                  >
                    Select Route
                  </Form.Label>
                  <Form.Select
                    className="location-userdatas"
                    style={{ border: "none", fontSize: "12px" }}
                    defaultValue="Choose..."
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                    isInvalid={!selected}
                    isValid={selected}
                  >
                    <option value="" hidden>
                      Choose your preferred route
                    </option>
                    {routes.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.routename}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} className="">
                <Form.Group
                  // className="location-userdatas"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label
                    className="formselect"
                    style={{
                      fontSize: "12px",
                      fontWeight: "bolder",
                      marginLeft: "4px",
                      color: "black",
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
                      onChange={(date) => setStartDate(date)}
                      customInput={<ExampleCustomInput />}
                      dateFormat="dd MMM"
                      minDate={new Date()}
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>
          </Container>
          <div className="location-btn">
            <Button className="locationpass-btn" onClick={onSubmit}>
              Continue
            </Button>
          </div>
        </Container>
        <div className="mt-5">
          <Footer />
        </div>
      </div>

      {/* Mobile View */}

      <div className="d-md-none">
        <div style={{ textAlign: "center", margin: "50px" }}>
          <div style={{ margin: "10px" }}>
            <img src={bus} alt="bus" />
            <h5 style={{ margin: "10px", color: "#FF4A68" }}>Bus</h5>
          </div>
          <span style={{ fontSize: "12px", fontWeight: "bold" }}>
          Book bus ticket for route 
           <br />
           Tamda Ghumar- Mendri 
           <br /> 
           Ghumar- Chitrakoot etc 
          </span>
        </div>
        <Container style={{ width: "100%" }}>
          <Row className="row justify-content-center">
            <Col xs={12} md={4} className="">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label
                  className="formselect"
                  style={{
                    fontWeight: "bolder",
                    marginLeft: "4px",
                    fontSize: "12px",
                    color: "black",
                  }}
                >
                  Select Route
                </Form.Label>
                <Form.Select
                  className="location-userdatas"
                  style={{ border: "none", fontSize: "12px" }}
                  defaultValue="Choose..."
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  isInvalid={!selected}
                  isValid={selected}
                >
                  Please choose a username.
                  <option>Choose your preferred route</option>
                  {routes.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.routename}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={12} md={4} className="">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label
                  className="formselect"
                  style={{
                    fontWeight: "bolder",
                    marginLeft: "4px",
                    fontSize: "12px",
                    color: "black",
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
                    onChange={(date) => setStartDate(date)}
                    customInput={<ExampleCustomInput />}
                    dateFormat="dd MMM"
                    minDate={new Date()}

                  />
                </div>
              </Form.Group>
            </Col>
          </Row>
        </Container>
        <Button className="locationpass-btn" onClick={onSubmit}>
          Continue
        </Button>
        <div className="" style={{ paddingBottom: "85px" }}>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}
export default BusPass;
