import React, { useEffect, useState } from "react";
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

import { API_PATH } from "../../Path/Path";

function HotelTicketDetail() {
  const { id } = useParams();

  const history = useHistory();
  const [apiData, setApiData] = useState([]);
  const [qrImage, setQRImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(true);
  const { tripList: trips, route_id } = useSelector(
    (state) => state.busReducer
  );

  
  const dispatch = useDispatch();

  useEffect(() => {
    getTrips();
  }, []);

  const goHome = () => {
    history.push("/");
  };

  const getTrips = () => {
    fetch(`${API_PATH}/api/v1/busticket/list?booking_Id=${id}`)
      .then((response) => response.json())
      .then((res) => {
        console.log(res.data);
        if (res.data !== undefined) {
          setApiData(res.data);
          localStorage.setItem("data", res.data[0]._id);
          setNotFound(false);
          setLoading(false);
        } else {
          setLoading(false);
          setNotFound(true);
        }
      })
      .catch((e) => {
        setLoading(false);
        setNotFound(true);
      });
  };

  let apiId = localStorage.getItem("data");

  if (apiId == []) {
    console.log("sadh", apiId);
  } else {
    console.log("saddgdgdgdh", apiId);
    fetch(`${API_PATH}/api/v1/dmpass/qrcode/${apiId}`)
      .then((response) => response.json())
      .then((res) => {
        console.log(res.data);
        setQRImage(res.data);
      })
      .catch((e) => {
        setLoading(false);
        setNotFound(true);
      });
  }

  const printPdf = () => {
    window.print();
  };

  return (
    <>
      <div className="">
        <Header />
        <div style={{margin:"30px"}}>
          <p >
            {" "}
            Do give us a chance to host you again. For your next booking,use the
            Travel Bastar App,the website ,or call on the guest line at
            +91797979797
          </p>
          <table className="table">
            <tr style={{ backgroundColor: "#4e4d4d", color: "white", width: 600 }}>
              <th style={{ padding: "10px" }}>Here are your booking Details</th>
            </tr>
            <tr>
                 <hr style={{color:"black"}} />
             
            </tr>
            <tr>
              <td>
                <b>SPOT ON 46488 HOTEL ABCD</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>CHECK-IN:</b> 15 sep 2018{" "}
              </td>
            </tr>
            <tr>
              <td>
                <b>CHECK-OUT:</b> 15 sep 2018
              </td>
            </tr>
          </table>
          <table className="table">
            <tr style={{ backgroundColor: "#4e4d4d", color: "white", width: 600 }} >
              <th colspan="2" style={{ padding: "10px" }}>Here are your Payment Details</th>
            </tr>
            
            <tr>
            <hr /><hr />
             
            </tr>
            <tr>
              <td>
                Room Tariff: 15 sep 2018{" "}
              </td>
              <td>
               Rs. 510.00{" "}
              </td>
            </tr>
            <tr>
              <td>
                Meal Price: 15 sep 2018{" "}
              </td>
              <td>
               Rs. 00.00{" "}
              </td>
            </tr>
            <tr>
                 <hr />
             
            </tr>
            <tr>
              <td>
               Total{" "}
              </td>
              <td>
               Rs. 510.00{" "}
              </td>
            </tr>
          </table>
          <table className="table">
            <tr style={{ backgroundColor: "#4e4d4d", color: "white", width: 600 }}>
              <th style={{ padding: "10px" }}>Here are your Top deals</th>
            </tr>
            <tr>
             <hr />
            </tr>
 
          </table>
          <table className="table">
            
            <tr>
            <td>Cheers,</td>
            </tr>
            <tr>
            <td>Travel Baster,</td>
            </tr>
            <tr style={{ backgroundColor: "#4e4d4d", color: "white", width: 600 }}>
              <th style={{ padding: "10px" }}>Here is a quick snapshot of all things Travel Baster:</th>
            </tr>
          </table>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default HotelTicketDetail;
