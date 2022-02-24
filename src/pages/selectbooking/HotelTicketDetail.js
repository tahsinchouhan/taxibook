import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Header from "../../components/Header";
// import bus1 from "../../assets/img/bus.png";
// import city1 from "../../assets/img/city.png";
import hotel from "../../assets/img/hotel.png";
// import Footer from "../travesaly/Footer";
import { useHistory, useParams } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
// import { setBookHotel } from "../../redux/actions";
import "../../assets/css/dmdetail.css";

import { API_PATH } from "../../Path/Path";

function HotelTicketDetail() {
  const { Setdata } = useSelector((state) => state.hotelReducer);
  const { id } = useParams();

  const history = useHistory();
  const [apiData, setApiData] = useState([]);
  const [qrImage, setQRImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(true);

  // const { tripList: trips, route_id } = useSelector((state) => state.busReducer);

  // const dispatch = useDispatch();

  // const goHome = () => {
  //   history.push("/");
  // };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // /api/v2/booking/list?booking_id=TBH2411202111
      const endpoint = await fetch(
        `${API_PATH}/api/v2/booking/list?booking_id=${id}`
      );
      const res = await endpoint.json();
      console.log("data", res.data[0]);
      setApiData(res.data[0]);
      setLoading(false);
      setNotFound(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
      setNotFound(true);
    }
  };

  if (apiData?.booking_id && loading) {
    fetch(`${API_PATH}/api/v2/booking/qrcode/${apiData?._id}`)
      .then((response) => response.json())
      .then((res) => {
        setQRImage(res.data);
      })
      .catch((e) => {
        // setLoading(false);
        // setNotFound(true);
      });
  }

  // let apiId = localStorage.getItem("data");

  // if (apiId == []) {
  //   console.log("sadh", apiId);
  // } else {
  //   console.log("saddgdgdgdh", apiId);
  //   fetch(`${API_PATH}/api/v2/booking/qrcode/619f5dae9e706607aca196b8`)
  //     .then((response) => response.json())
  //     .then((res) => {
  //       console.log(res.data);
  //       setQRImage(res.data);
  //     })
  //     .catch((e) => {
  //       setLoading(false);
  //       setNotFound(true);
  //     });
  // }

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="d-block package-ticket-page">
        <Header />
        <div className="package-ticket-page" id="divcontents">
          <div className="card mb-1 bg-white">
            <div style={{ width: "100px", height: "70px" }}>
              <img
                src={hotel}
                alt="hotelIcon"
                style={{
                  minWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <h3>Hotel</h3>
            <p className="m-0 text-center">
              Hotel Ticket
              <br />
              Hope You have a Wonderful Stay
            </p>
          </div>

          {/* QR CODE */}
          <div className="qr-code border mb-2">
            <img src={qrImage} alt="qr-code" width={200} />
          </div>

          {/* Hotel Detail + Pass ID */}
          <div className="card mb-4 ticket-width d-flex flex-row gap-3 gap-md-5 text-center text-md-start">
            <div>
              <h3>Pass Detail</h3>
              <div>Hotel Booking Id</div>
            </div>
            <div>
              <h3>Pass ID</h3>
              <div>{apiData?.booking_id || ""}</div>
            </div>
          </div>

          <div className="dm__title mb-2">
            TRAVELLER DETAILS
          </div>
        
          <div className="card ticket-width" style={{minWidth:'35%', alignItems:'initial'}}>
            <div className="dm__entry_card_two1 d-flex flex-column justify-content-center">
              <div className="row mb-1">
                {" "}
                <div className="col-md-4" style={{ fontWeight: "bolder" }}>
                  Name :{" "}
                </div>{" "}
                <div className="col-md-8" style={{ paddingLeft: "10px" }}>
                  {apiData?.customer_id?.name || ""}
                </div>
              </div>
              <div className="row mb-1">
                {" "}
                <div
                  className="col-md-4"
                  style={{ fontWeight: "bolder" }}
                >
                  Mobile :{" "}
                </div>{" "}
                <div className="col-md-8" style={{ paddingLeft: "10px" }}>
                  {apiData?.mobile || ""}
                </div>
              </div>
              <div className="row mb-1">
                {" "}
                <div
                  className="col-md-4"
                  style={{ fontWeight: "bolder" }}
                >
                  Email :{" "}
                </div>{" "}
                <div className="col-md-8" style={{ paddingLeft: "10px" }}>
                  {apiData?.email || ""}
                </div>
              </div>
              <div className="row mb-1">
                {" "}
                <div
                  className="col-md-4"
                  style={{ fontWeight: "bolder" }}
                >
                  Aadhar :{" "}
                </div>{" "}
                <div className="col-md-8" style={{ paddingLeft: "10px" }}>
                  Aadhar will be here
                </div>
              </div>
            </div>
          </div>

          <div className="dm__title my-4">
            ENTRY TICKET DETAILS
          </div>
          
          <div className="card mb-4 py-0 ticket-width" style={{minWidth:'40%', alignItems:'initial'}}>
            <div className="dm__entry_card_two1 d-flex flex-column justify-content-center">
              <div className="row mb-1">
                <div className="col-md-5" style={{ fontWeight: "bolder" }}>Hotel Name</div>
                <div className="col-md-7" style={{ paddingLeft: "10px" }}>{apiData?.hotel_id}</div>
              </div>
              <div className="row mb-1">
                <div className="col-md-5" style={{ fontWeight: "bolder" }}>
                  Location :
                </div>
                <div className="col-md-7" style={{ paddingLeft: "10px" }}>
                  {apiData?.hotel_id?.address}
                </div>
              </div>
              <div className="row mb-1">
                <div
                  className="col-md-5"
                  style={{ fontWeight: "bolder" }}
                >
                  Check-In-Date:
                </div>
                <div className="col-md-7" style={{ paddingLeft: "10px" }}>
                {apiData?.check_in?.split('T')[0].split("-").reverse().join("-") || ''}
                  {/* {`${apiData?.check_in?.toLocaleDateString("en-US", {
                    day: "numeric",
                  })} `} */}
                  {/* {`${apiData?.check_in?.toLocaleDateString("en-US", {
                    month: "short",
                  })} `}
                  {`${apiData?.check_in?.toLocaleDateString("en-US", {
                    year: "numeric",
                  })} `} */}
                </div>
              </div>
              <div className="row mb-1">
                <div className="col-md-5" style={{ fontWeight: "bolder" }}>Check-Out-Date:</div>
                <div className="col-md-7" style={{ paddingLeft: "10px" }}>
                {apiData?.check_out?.split('T')[0].split("-").reverse().join("-") || ''}
                  {/* {`${apiData?.check_out?.toLocaleDateString("en-US", {
                    day: "numeric",
                  })} `}
                  {`${apiData?.check_out?.toLocaleDateString("en-US", {
                    month: "short",
                  })} `}
                  {`${apiData?.check_out?.toLocaleDateString("en-US", {
                    year: "numeric",
                  })} `} */}
                </div>
              </div>
            </div>
          </div>

          <div className="dm__title">
            AMOUNT PAID
          </div>
          
            <div className="card mt-4 py-0 ticket-width" style={{minWidth:'40%', alignItems:'initial'}}>
              <div className="dm__entry_div1">
                <div className="dm__entry_card row">
                  <div className="col-md-6 dm__title1">Total Amount :</div>
                  <div className="col-md-4">
                    ₹ {apiData?.amount}
                    {/* <hr style={{ color: "black" }} />
                    ₹ {Setdata?.total_amount} */}
                  </div>
                </div>
              </div>
            </div>

            <Row>
              <Col className="dm__footer_div" xs={12}>
                <div className="d-flex justify-content-center align-items-center">
                  <Button
                    className="dm__footer_card_body"
                    style={{ fontSize: "18px" }}
                    onClick={handlePrint}
                  >
                    PRINT TICKET
                  </Button>
                </div>
              </Col>
            </Row>
        </div>
      </div>
    </>
  );
}

export default HotelTicketDetail;
