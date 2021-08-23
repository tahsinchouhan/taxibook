import React, { useEffect } from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import bus1 from "../../assets/img/bus.png";
import city1 from "../../assets/img/city.png";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createBusBooking } from "../../redux/actions";
import { FaArrowLeft } from "react-icons/fa";
import Typography from "@material-ui/core/Typography";

function CheckoutPage() {
  const history = useHistory();

  const dispatch = useDispatch();
  const {
    data: apiData,
    tripData,
    mobile,
    routeData
  } = useSelector((state) => state.busReducer);
  const { name, age, gender, adhaar, basic_details, price, surcharge } = apiData;

  const onCongratsClick = () => {
    // console.log("object", tripData);
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
    history.push("/payment");
  };

  useEffect(() => {
    // setValues({ ...values, price: (BASE_PRICE * basic_details.length)  })
    // setValues({ ...values, price: (basePrice * basic_details.length) })
    console.log("enosdkl", apiData);
  }, [basic_details]);

  const onClickBack = () => {
    history.push("/busconfirmation");
  };
  return (
    <>
      <div className="d-none d-md-block">
        <Header />
        <div>
          <Container className="" style={{ width: "42%", paddingTop: "50px" }}>
            <h5
              style={{
                fontSize: "19px",
                color: "#0FA453",
                fontWeight: "bolder",
                marginLeft: "25px",
              }}
            >
              Checkout
            </h5>
            <Row>
              <Col>
                <div style={{ marginLeft: "25px" }}>
                  <div className="p-2">
                    <span
                      style={{
                        color: "black",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      Destination
                    </span>
                    <br />
                    <span
                      style={{
                        fontSize: "19px",
                        fontWeight: "bolder",
                        color: "black",
                      }}
                    >
                      {/* Chitrakote, Bastar */}
                      {tripData?.route?.end?.name}
                    </span>
                    <br />
                    <span
                      style={{
                        color: "black",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      {/* 31 July, 2021 */}
                      {/* {tripData?.route?.end?.name} */}
                      {`${routeData?.startDate?.toLocaleDateString("en-US", { day: 'numeric' })} `}
                      {`${routeData?.startDate?.toLocaleDateString("en-US", { month: 'short' })} `}
                      {`${routeData?.startDate?.toLocaleDateString("en-US", { year: 'numeric' })} `}
                    </span>
                  </div>
                  <div className="p-2">
                    <span
                      style={{
                        color: "black",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      Total Amount
                    </span>
                    <br />
                    <span
                      style={{
                        fontSize: "19px",
                        fontWeight: "bolder",
                        color: "#FF4A68",
                      }}
                    >
                      ₹ {price + surcharge}
                    </span>
                    <br />
                    <span
                      style={{
                        color: "black",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      *Excluding taxes
                    </span>
                  </div>
                </div>
              </Col>
              <Col>
                <div>
                  <span
                    style={{
                      color: "black",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    Travel Details
                  </span>
                  <div>
                    <div
                      className="rajratan-train p-2"
                      style={{ float: "", backgroundColor: "#F8F8F8" }}
                    >
                      <div style={{}}>
                        <img src={city1} />
                        {/*  <span
                          style={{
                            color: "grey",
                            padding: "10px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          2 Stops
                        </span> */}
                        <span
                          style={{
                            whiteSpace: "nowrap",
                            fontSize: "13px",
                            fontWeight: "bolder",
                            fontFamily: "sans-serif",
                          }}
                        >
                          {" "} {tripData?.trip_name}
                        </span>
                        <br />
                        <span
                          style={{
                            fontWeight: "bolder",
                            fontFamily: "sans-serif",
                            fontSize: "13px",
                          }}
                        >
                          {tripData?.departure_time} -{" "}
                          {tripData?.estimated_time_of_arrival}
                        </span>
                        <br />
                        <div style={{ marginLeft: "-8px" }}>
                          <span
                            style={{
                              marginRight: "20px",
                              color: "grey",
                              padding: "12px",
                              fontFamily: "sans-serif",
                            }}
                          >
                            {tripData?.duration_of_travel}
                          </span>
                        </div>
                      </div>
                      <div className="d-flex p-1">
                        <img
                          src={bus1}
                          alt="bus"
                          style={{ height: "20px", paddingRight: "10px" }}
                        />
                        <span
                          style={{
                            whiteSpace: "nowrap",
                            fontSize: "13px",
                            fontWeight: "bolder",
                            fontFamily: "sans-serif",
                          }}
                        >
                          {tripData?.route?.vehical?.registration_number}
                        </span>
                      </div>
                      <span
                        className="train-sleeper"
                        style={{
                          whiteSpace: "nowrap",
                          fontSize: "13px",
                        }}
                      >
                        {/* Volvo Multi-Axle Sleeper A/C (2+1) */}
                        Bus 30 Seater
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Container className="" style={{ width: "42%", paddingTop: "20px" }}>
            <Row>
              <span
                style={{
                  fontWeight: "bolder",
                  fontFamily: "sans-serif",
                  fontSize: "16px",
                  color: "black",
                  marginLeft: "25px",
                }}
              >
                Passenger Details
              </span>
              {basic_details?.length > 0 ? (
                <Row>
                  {/* <h3
                    style={{
                      fontSize: "19px",
                      color: "#0FA453",
                      fontWeight: "bolder",
                    }}>Passengers ({`${basic_details?.length}`})</h3> */}
                  {basic_details?.map((item, i) => (
                    <Col md={6}>
                      <div
                        className="check-passenger"
                        style={{ marginLeft: "25px" }}
                      >
                        <div style={{ textAlign: "center", padding: "10px" }}>
                          <span
                            style={{
                              fontWeight: "bolder",
                              fontFamily: "sans-serif",
                              fontSize: "13px",
                              color: "black",
                            }}
                          >
                            {item.name}
                          </span>
                          <br />
                          <span>
                            {item.gender}, {item.age}
                          </span>
                          <br />
                          <span> Adhaar: {item.adhaar}</span>
                          <div className="p-3">
                            <Button className="checout-btn" onClick={onClickBack} >EDIT</Button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              ) : null}
            </Row>
          </Container>
        </div>
        {/* <div style={{ height: "250px" }}></div> */}
        {/* <div
          className="check-payment"
          style={{ background: "#0FA453" }}
          onClick={onCongratsClick}
        >
          <div
            className="checkout-payment"
            style={{
              position: "absolute",
              lineHeight: "25px",
              fontSize: "21px",
              textAlign: "center",
              paddingTop: " 32px",
              fontWeight: "bolder",
              color: " #FFFFFF",
            }}
          >
            NEXT
          </div>
        </div> */}

        <Button className="locationpass-btn  mt-5 mb-5" onClick={onCongratsClick}>
          NEXT
        </Button>
        <Footer />
      </div>


      {/*Mobile_view*/}
      <div fluid className="d-md-none">
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
              // marginRight: "62px",
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
                marginLeft: "110px",
                paddingTop: "29px",
                fontSize: "17px",
                backgroundColor: "#0FA453",
                fontWeight: "bolder",
                color: "white",
                textAlign: "center",
              }}
            >
              Checkout
            </h5>
          </div>
        </div>
        <Container>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <span>Destination</span>
            <h3 style={{ fontWeight: "700" }}>
              {/* Chitrakote, Bastar */}
              {tripData?.route?.end?.name}</h3>
            <span>
              {/* 31 July, 2021 */}
              {`${routeData?.startDate?.toLocaleDateString("en-US", { day: 'numeric' })} `}
              {`${routeData?.startDate?.toLocaleDateString("en-US", { month: 'short' })} `}
              {`${routeData?.startDate?.toLocaleDateString("en-US", { year: 'numeric' })} `}
            </span>
            <br />
            <span>Total Amount</span> <br />
            <span style={{ fontWeight: "700", fontSize: "22px", color: "#FF4A68" }}>  ₹ {price + surcharge} </span> <br />
            <span>*Excluding taxes</span>
          </div>
        </Container>

        <Container className="" style={{ width: "", paddingTop: "20px" }}>
          <Row>
            <span
              style={{
                fontWeight: "bolder",
                fontFamily: "sans-serif",
                fontSize: "13px",
                color: "black",
                // marginLeft: "10px",
                whiteSpace: 'nowrap',
                textAlign: ""
              }}
            >
              Passenger Details
            </span>
            {basic_details?.length > 0 ? (
              <Row>
                {/* <h3
                    style={{
                      fontSize: "19px",
                      color: "#0FA453",
                      fontWeight: "bolder",
                    }}>Passengers ({`${basic_details?.length}`})</h3> */}
                {basic_details?.map((item, i) => (
                  <Col xs={6} md={6}>
                    <div
                      className="check-passenger"
                      style={{ marginLeft: "25px" }}
                    >
                      <div style={{ textAlign: "center", padding: "5px", marginTop: "10px" }}>
                        <span
                          style={{
                            fontWeight: "bolder",
                            fontFamily: "sans-serif",
                            fontSize: "13px",
                            color: "black",
                          }}
                        >
                          {item.name}
                        </span>
                        <br />
                        <span style={{
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "11px",
                          color: "black",
                        }}>
                          {item.gender}, {item.age}
                        </span>
                        <br />
                        <span style={{
                          fontWeight: "bold",
                          fontFamily: "sans-serif",
                          fontSize: "11px",
                          color: "black",
                        }}> Adhaar: {item.adhaar}</span>
                        <div className="">
                          <Button className="checout-btn" onClick={onClickBack} >EDIT</Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            ) : null}
          </Row>
        </Container>
        {/* <div
          className="check-payment"
          style={{ 
            background: "#0FA453",
            marginTop: "0px",
            position: "absolute",
            bottom: 0
          }}
          onClick={onCongratsClick}
        >
          <div
            className="checkout-payment"
            style={{
              position: "absolute",
              lineHeight: "25px",
              fontSize: "21px",
              textAlign: "center",
              paddingTop: " 32px",
              fontWeight: "bolder",
              color: " #FFFFFF",
            }}
          >
            NEXT
          </div>
        </div> */}

        <Button className="locationpass-btn  mt-5" onClick={onCongratsClick}>
          NEXT
        </Button>
      </div>
    </>
  );
}

export default CheckoutPage;
