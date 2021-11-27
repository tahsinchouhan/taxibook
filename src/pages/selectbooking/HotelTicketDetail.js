import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import Header from "../../components/Header";
import bus1 from "../../assets/img/bus.png";
import city1 from "../../assets/img/city.png";
import hotel from "../../assets/img/hotel.png";
import Footer from "../travesaly/Footer";
import { useHistory, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setBookHotel } from "../../redux/actions";
import "../../assets/css/dmdetail.css";


import { API_PATH } from "../../Path/Path";

function HotelTicketDetail() {
  const  {getStartData,Setdata,checkoutData}  = useSelector((state) => state.hotelReducer);
  console.log("Setdata",Setdata)
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
  }, []);

  const goHome = () => {
    history.push("/");
  };

  let apiId = localStorage.getItem("data");

  if (apiId == []) {
    console.log("sadh", apiId);
  } else {
    console.log("saddgdgdgdh", apiId);
    fetch(`${API_PATH}/api/v2/booking/qrcode/619f5dae9e706607aca196b8`)
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="">
        <Header />
          <div>
            <div className="text-center mb-3">
            
                    <div style={{ marginBottom: "15px" }}>
                      <img src={hotel} alt="logo" style={{ width: "120px" }} />
                    </div>
                    <div
                                            style={{
                        fontWeight: "bolder",
                        color: "#FF4A68",
                        paddingTop: "10px",
                      }}
                    >
                      HOTEL
                    </div>
                    <br />
                    <span
                      style={{
                        fontWeight: "bolder",
                        paddingTop: "10px",
                      }}
                    >
                    Hotel Ticket<br/>
                    Hope You have a Wonderful Stay
                    </span>
            </div>
            <div className="row">
            <div className="col-md-3">
                <img src={qrImage} alt="" width={250} />
              </div>
              <div className="col-md-7">
            <Col className="dm__entry_div" xs={12}>
             
             <div className="dm__entry_card_two">
                 <div className="row mb-1"> <div className="col-md-4" style={{color:"red",fontWeight:'bolder'}}>Pass Detail</div> <div className="col-md-6" style={{paddingLeft:'10px',color:"red",fontWeight:'bolder'}}>Pass ID</div></div>
                 <div className="row mb-1"> <div className="col-md-4" style={{fontWeight:'bolder'}}>Booking Id </div> <div className="col-md-9" style={{paddingLeft:'10px'}}></div></div>
                   </div>
     </Col>
          <Row>
            <Col className="dm__title" xs={12}>
              TRAVELLER DETAILS
            </Col>
            <Col className="dm__traveller_div" xs={12}>
                  <div className="dm__entry_card_two">
                          <div className="row mb-1"> <div className="col-md-4" style={{fontWeight:'bolder'}}>Name : </div> <div className="col-md-8" style={{paddingLeft:'10px'}}>{Setdata.name}</div></div>
                          <div className="row mb-1"> <div className="col-md-4" style={{fontWeight:'bolder'}}>Age : </div> <div className="col-md-8" style={{paddingLeft:'10px'}}>{Setdata.mobile}</div></div>
                          <div className="row mb-1"> <div className="col-md-4" style={{fontWeight:'bolder'}}>Gender : </div> <div className="col-md-8" style={{paddingLeft:'10px'}}>Gender will be here</div></div>
                          <div className="row mb-1"> <div className="col-md-4" style={{fontWeight:'bolder'}}>Aadhar : </div> <div className="col-md-8" style={{paddingLeft:'10px'}}>Aadhar will be here</div></div> 
 
                            </div>
            </Col>
          </Row>
          <Row>
          <Col className="dm__title" xs={12}>
              ENTRY TICKET DETAILS
            </Col>
            <Col className="dm__entry_div" xs={12}>
             
                      <div className="dm__entry_card_two">
                          <div className="row mb-1"> <div className="col-md-4" style={{fontWeight:'bolder'}}>Hotel Name : </div> <div className="col-md-8" style={{paddingLeft:'10px'}}>{Setdata.basic_details.hotel_id.hotel_name}</div></div>
                          <div className="row mb-1"> <div className="col-md-4" style={{fontWeight:'bolder'}}>Location : </div> <div className="col-md-8" style={{paddingLeft:'10px'}}>{Setdata.basic_details.hotel_id.address}</div></div>
                              <div className="row mb-1">
                              <div className="col-md-4" style={{fontWeight:'bolder'}}>
                               Check-In-Date:
                               </div>          
                                 <div className="col-md-8" style={{paddingLeft:'10px'}}>
              {/* 31 July, 2021 */}
              {`${Setdata?.startDate?.toLocaleDateString("en-US", { day: 'numeric' })} `}
              {`${Setdata?.startDate?.toLocaleDateString("en-US", { month: 'short' })} `}
              {`${Setdata?.startDate?.toLocaleDateString("en-US", { year: 'numeric' })} `}
            </div>
                              </div>
                              <div className="row mb-1">
                              <div className="col-md-4" style={{fontWeight:'bolder'}}>
                               Check-Out-Date: 
                               </div>         
                                 <div className="col-md-8" style={{paddingLeft:'10px'}}>
              {/* 31 July, 2021 */}
              {`${Setdata?.endDate?.toLocaleDateString("en-US", { day: 'numeric' })} `}
              {`${Setdata?.endDate?.toLocaleDateString("en-US", { month: 'short' })} `}
              {`${Setdata?.endDate?.toLocaleDateString("en-US", { year: 'numeric' })} `}
            </div>
                              </div>
                            </div>
              </Col>
          </Row>
          <Row>
          <Col className="dm__title" xs={12}>
          AMOUNT PAID
          </Col>
          <Col className="dm__entry_div" xs={12}>
          <div className="dm__entry_card row">
          <div className="col-md-6 dm__title">
          Total Amount :
          </div>
          <div className="col-md-4 ">
          ₹ {Setdata?.total_amount} 
          <hr style={{color:'black'}}/>
          ₹ {Setdata?.total_amount} 

          </div>
          </div>
            </Col>
          </Row>
          <Row>
          <Col className="dm__footer_div" xs={12}>
          <div className="d-flex justify-content-center align-items-center">
                <Button className="dm__footer_card_body" style={{ fontSize: "18px" }} onClick={handlePrint}>PRINT TICKET</Button>
              </div>
          </Col>
          </Row>
          </div>
          </div> 
          </div>
        </div>

        <Footer />
    </>
  );
}

export default HotelTicketDetail;
