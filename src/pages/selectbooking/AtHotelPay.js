import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import Header from "../../components/Header";
import bus1 from "../../assets/img/bus.png";
import city1 from "../../assets/img/city.png";
import hotel from "../../assets/img/hotel.png";
import Footer from "../travesaly/Footer";
import { useHistory, useParams,useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setBookHotel } from "../../redux/actions";
import "../../assets/css/dmdetail.css";
import { API_PATH } from "../../Path/Path";
import axios from 'axios';
import Moment from 'moment';


function AtHotelPay(props) {
    console.log("props",props)
    const location = useLocation();
    const  {Setdata}  = useSelector((state) => state.hotelReducer);
  console.log("Setdata",Setdata)
  const { id } = useParams();
  const hotelpayData = useSelector((state) => state.hotelReducer)
  console.log("hotelpayData222",hotelpayData)

  const history = useHistory();
  const [apiData, setApiData] = useState([]);
  const [qrImage, setQRImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(true);


  
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("locationlocation",location?.state?.detail);

    axios.get(API_PATH + `/api/v2/booking/${hotelpayData.hotelpayData.data._id}`)
    .then((res) => {
        console.log("resresres",res)
        setApiData(res.data)
    })
    .catch((err) => {
        console.log("err",err)
    })
  }, [location]);

  const goHome = () => {
    history.push("/");
  };

  let apiId = localStorage.getItem("data");

  if (apiId == []) {
    console.log("sadh", apiId);
  } else {
    console.log("saddgdgdgdh", apiId);
    fetch(`${API_PATH}/api/v2/booking/qrcode/61a5e079f5def32a5611d67b`)
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
            <Col className="dm__traveller_div" xs={12}>
             
             <div className="dm__entry_card_two">
                 <div className="row mb-1"> <div className="col-md-4" style={{color:"red",fontWeight:'bolder'}}>Pass Detail</div> <div className="col-md-8" style={{paddingLeft:'10px',color:"red",fontWeight:'bolder'}}>Pass ID</div></div>
                 <div className="row mb-1"> <div className="col-md-4" style={{fontWeight:'bolder'}}>Booking Id </div> <div className="col-md-8" style={{paddingLeft:'10px'}}>{hotelpayData.hotelpayData.data.booking_id}</div></div>
                   </div>
     </Col>
          <Row>
            <Col className="dm__title text-danger" xs={12}>
              TRAVELLER DETAILS
            </Col>
            <Col className="dm__traveller_div" xs={12}>
                  <div className="dm__entry_card_two">
                          <div className="row mb-1"> <div className="col-md-4" style={{fontWeight:'bolder'}}>Name : </div> <div className="col-md-8" style={{paddingLeft:'10px'}}>{props.location.state.fullname}</div></div>
                          <div className="row mb-1"> <div className="col-md-4" style={{fontWeight:'bolder'}}>Age : </div> <div className="col-md-8" style={{paddingLeft:'10px'}}>{props.location.state.age}</div></div>
                          <div className="row mb-1"> <div className="col-md-4" style={{fontWeight:'bolder'}}>Gender : </div> <div className="col-md-8" style={{paddingLeft:'10px'}}>{props.location.state.gender}</div></div>
                          <div className="row mb-1"> <div className="col-md-4" style={{fontWeight:'bolder'}}>Aadhar : </div> <div className="col-md-8" style={{paddingLeft:'10px'}}>{props.location.state.adhar}</div></div> 
 
                            </div>
            </Col>
          </Row>
          <Row>
          <Col className="dm__title text-danger" xs={12}>
              ENTRY TICKET DETAILS
            </Col>
            <Col className="dm__traveller_div" xs={12}>
             
                      <div className="dm__entry_card_two">

                          <div className="row mb-1"> <div className="col-md-4" style={{fontWeight:'bolder'}}>Hotel Name : </div> <div className="col-md-8" style={{paddingLeft:'10px'}}>{apiData?.data?.hotel_id?.hotel_name}</div></div>
                          <div className="row mb-1"> <div className="col-md-4" style={{fontWeight:'bolder'}}>Location : </div> <div className="col-md-8" style={{paddingLeft:'10px'}}>{apiData?.data?.hotel_id?.address}</div></div>
                              <div className="row mb-1">
                              <div className="col-md-4" style={{fontWeight:'bolder'}}>
                               Check-In-Date:
                               </div>          
                                 <div className="col-md-8" style={{paddingLeft:'10px'}}>
                                 {Moment(hotelpayData.hotelpayData.data.check_in).format('DD-MM-YYYY')}
              
            </div>
                              </div>
                              <div className="row mb-1">
                              <div className="col-md-4" style={{fontWeight:'bolder'}}>
                               Check-Out-Date: 
                               </div>         
                                 <div className="col-md-8" style={{paddingLeft:'10px'}}>
                                 {Moment(hotelpayData.hotelpayData.data.check_out).format('DD-MM-YYYY')}

              
            </div>
                              </div>
                            </div>
              </Col>
          </Row>
          <Row>
          <Col className="dm__traveller_div dm__title text-danger" xs={12}>
          AMOUNT PAID
          </Col>
          <Col className="dm__entry_div" xs={12}>
          <div className="dm__entry_card row">
          <div className="col-md-6 dm__title">
          Total Amount :
          </div>
          <div className="col-md-4 ">
          ₹ {hotelpayData.hotelpayData.data.amount*100}
          <hr style={{color:'black'}}/>
          ₹ {hotelpayData.hotelpayData.data.amount*100} 

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
    )
}

export default AtHotelPay
