import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import Header from "../../components/Header";
import bus1 from "../../assets/img/bus.png";
import city1 from "../../assets/img/city.png";
import ticket from "../../assets/img/ticket.png";
import Footer from "../travesaly/Footer";
import { useHistory, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/css/dmdetail.css";
import "../../assets/css/pkgTicketDetail.css";
import { useReactToPrint } from "react-to-print";

import { API_PATH } from "../../Path/Path";

function BusBookingDetail() {
  const { id } = useParams();
  const { user_data } = useSelector((state) => state.loginReducer);

  const history = useHistory();
  const [apiData, setApiData] = useState([]);
  const [packages, setPackages] = useState([]);
  const [qrImage, setQRImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(true);

  // const dispatch = useDispatch();

  const goHome = () => {
    history.push("/");
  };

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = async () => {
    try {
      // /api/v1/packages/booking/list?booking_Id=TBP2801202208
      const endpoint = await fetch(`${API_PATH}/api/v1/packages/booking/list?booking_Id=${id}`);
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

  // let apiId = localStorage.getItem("data");
  // const BookingId = localStorage.getItem("busticketData");


    // console.log("BookingIdBookingId", BookingId);
    if(apiData?.booking_Id && loading) {
      fetch(`${API_PATH}/api/v1/packages/booking/qrcode/${apiData?._id}`)
      .then((response) => response.json())
      .then((res) => {
        setQRImage(res.data);
      })
      .catch((e) => {
        // setLoading(false);
        // setNotFound(true);
      });
    }


  // const printPdf = () => {
  //   window.print();
  // };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // const printPdf = () => {
  //   // var content = document.getElementById("divcontents");
  //   // var pri = document.getElementById("ifmcontentstoprint").contentWindow;
  //   // pri.document.open();
  //   // pri.document.write(content.innerHTML);
  //   // pri.document.close();
  //   // pri.focus();
  //   // pri.print();
  //   const w = window.open();
  //   if (printableAreaRef.current.innerHTML) {
  //     w?.document.write(printableAreaRef.current.innerHTML);
  //     w?.print();
  //   }
  //   w?.close();
  // };

  return (
    <>
      <iframe
        id="ifmcontentstoprint"
        title="ifmcontentstoprint"
        style={{ height: "0px", width: "0px", position: "absolute" }}
      ></iframe>
      <div className="d-block package-ticket-page">
        <Header />
        {loading === false && notFound === false ? (
          <div
            className="package-ticket-page"
            id="divcontents"
            ref={componentRef}
          >
            <div className="card mb-4 bg-white">
              <div
                style={{
                  width: "40px",
                  height: "30px",
                }}
              >
                <img src={ticket} alt="ticketIcon" />
              </div>
              <h3 style={{ color: "#0fa453" }}>Package</h3>
              <p style={{ margin: 0 }}>
                That will take you to your favourite destinations
              </p>
            </div>

            <div className="qr-code">
              <img src={qrImage} alt="" width={250} />
            </div>

            {/* Pass Detail + Pass ID */}
            <div
              className="card mb-5 ticket-width"
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                width: "35%",
              }}
            >
              <div>
                <h3>Pass Detail</h3>
                <div>Package Booking Id</div>
              </div>
              <div>
                <h3 style={{ color: "#0fa453" }}>Pass ID</h3>
                <div>{apiData.booking_Id}</div>
              </div>
            </div>

            <h2>Package Details</h2>
            <div className="card" style={{ textAlign: "center" }}>
              <div>
                <div className="d-flex">
                  <div style={{ width: "50%" }}>
                    <p>Name</p>
                    <h2>{apiData.package_name}</h2>
                  </div>

                  <div style={{ width: "50%" }}>
                    <p>Price</p>
                    <h2 style={{ color: "#0fa453" }}>₹{apiData.price}</h2>
                  </div>
                </div>

                <div className="d-flex">
                  <div style={{ width: "50%" }}>
                    <p>Start Date</p>
                    <h2>{apiData.start_date.toString().slice(0, 10)}</h2>
                  </div>

                  <div style={{ width: "50%", marginLeft: "1rem" }}>
                    <p>End Date</p>
                    <h2>{apiData.end_date.toString().slice(0, 10)}</h2>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="card mt-5 mb-5 ticket-width personal-details"
              style={{
                flexDirection: "row",
                width: "44%",
                justifyContent: "space-around",
                alignItems: "flex-start",
              }}
            >
              <div>
                <h2 style={{ fontSize: "1.1rem" }}>Traveller Details</h2>
                {/* name, email, mobile, no. of travellers */}
                <p>Name</p>
                <h2>{apiData?.customer_id?.name || ''}</h2>

                <p>E-mail</p>
                <h2>{apiData?.email || ''}</h2>

                <p>Mobile</p>
                <h2>{apiData?.customer_mobile || ''}</h2>

                <p>No. of Travellers</p>
                <h2>{apiData?.number_of_travellers || ''}</h2>
              </div>

              <div>
                <h2 style={{ fontSize: "1.1rem" }}>Vendor Details</h2>
                {/* email, mobile */}
                <p>Email</p>
                <h2>{apiData?.vendor_email || ''}</h2>

                <p>Mobile</p>
                <h2>{apiData?.vendor_mobile || ''}</h2>
              </div>
            </div>
          </div>
        ) : loading === false ? (
          <h1>No data found</h1>
        ) : null}

        <div className="d-flex justify-content-center align-items-center mb-3">
          <button
            className="btn btn-success"
            style={{ width: "100px" }}
            onClick={() => handlePrint()}
          >
            Print
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BusBookingDetail;
