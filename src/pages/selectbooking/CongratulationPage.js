import React from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import bus1 from "../../assets/img/bus.png";
import city1 from "../../assets/img/city.png";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { useHistory } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import runmen from "../../assets/img/runmen.png";

import { useDispatch, useSelector } from "react-redux";

function CongratulationPage() {
  const history = useHistory();
  const { data: apiData, tripData,booking_id } = useSelector(state => state.busReducer)
  const goHome = () => {
    history.push("/");
  };
  return (
    <>
      <div className="d-none d-md-block">
      <Header />
        <Container  style={{ width: "70%", paddingTop: "50px" }}>
          <Row>
            <Col>
            <div>
                <img src={runmen} alt=""/>
            </div>
            </Col>
            <Col>
              <div style={{paddingTop:"60px"}}>
                <div style={{marginBottom:"20px"}}>
                  <h3 style={{fontWeight:"bolder"}}>CONGRATULATIONS!</h3>
                  <span style={{color:"black"}}>Your booking has been confirmed</span>

                  <h3 style={{fontWeight:"bolder"}}>Order ID</h3>
                  <span style={{color:"black", marginBottom:"50px"}}>{booking_id}</span>
                  {/* <span style={{color:"black", marginBottom:"50px"}}>{apiData?.order_id}</span> */}
                </div>
                <div>
                     <div >
                     <Button  
                  className="btn btn-success"
                  style={{
                    width: "200px",
                    textAlign: "center",
                    height: "52px",
                    borderRadius: "9px",
                    backgroundColor: "#0fa453",
                    fontWeight:"bold",
                    marginBottom:"20px"
                  }} 
                     ><FaWhatsapp style={{fontWeight:"bold",marginLeft:"-23px",fontSize:"30px"}}/>
                      <span> Whatsapp Link</span></Button>
                     </div>
                 <div>
                 <Button style={{
                    width: "208px",
                    textAlign: "center",
                    height: "52px",
                    borderRadius: "9px",
                    backgroundColor: " #FF4A68",
                    fontWeight:"bold",
                    marginBottom:"20px"
                  }} 
                 >Download E-ticket</Button>
                 </div>
                   <div>
                   <Button style={{
                    width: "186px",
                    textAlign: "center",
                    height: "52px",
                    borderRadius: "9px",
                    backgroundColor: "",
                    fontWeight:"bold",
                    marginBottom:"20px"
                  }} 
                   >Sent by Email</Button>
                   </div>
                   <div>
                   <Button style={{
                    width: "186px",
                    textAlign: "center",
                    height: "52px",
                    borderRadius: "9px",
                    backgroundColor: "#864BD8",
                    fontWeight:"bold",
                    marginBottom:"20px"
                  }} 
                  onClick={goHome}
                   >Back to Home</Button>
                   </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer/>
      </div>
      {/*mobile-view*/}
      <div fluid className="d-md-none">
      <div
          className="tatibandh d-flex"
          style={{
            height: "85px",
            backgroundColor: "#0FA453",
            color: "white",
            justifyContent:"center"
          }}
        >
          <div> 
         
            <h5
              style={{
                // marginLeft: "110px",
                paddingTop: "29px",
                fontSize: "17px",
                backgroundColor: "#0FA453",
                fontWeight: "bolder",
                color: "white",
                textAlign: "center",
              }}
            >
              Booking Confirmed!
            </h5>  
            </div>         
        </div>
        <div style={{marginTop:"20px",textAlign:"center"}}>
        <span style={{fontWeight:"700",fontSize:"22px"}}>CONGRATULATIONS!</span><br/>
              <span style={{fontSize:"13px"}}>Your booking has been confirmed</span>
          </div>
          <div>
                <img src={runmen} alt="" style={{width:"90%"}}/>
            </div>
            <div style={{textAlign:"center"}}>
            <h3 style={{fontWeight:"bolder", marginBottom:"20px"}}>Order ID</h3>
                  <span style={{color:"black", marginBottom:"50px"}}>{booking_id}</span>
            </div>
            <div style={{textAlign:"center"}}>
                     <div >
                     <Button  
                  className="btn btn-success"
                  style={{
                    width: "200px",
                    textAlign: "center",
                    height: "52px",
                    borderRadius: "9px",
                    backgroundColor: "#0fa453",
                    fontWeight:"bold",
                    marginBottom:"20px"
                  }} 
                     ><FaWhatsapp style={{fontWeight:"bold",marginLeft:"-23px",fontSize:"30px"}}/>
                      <span> Whatsapp Link</span></Button>
                     </div>
                 <div>
                 <Button style={{
                    width: "208px",
                    textAlign: "center",
                    height: "52px",
                    borderRadius: "9px",
                    backgroundColor: " #FF4A68",
                    fontWeight:"bold",
                    marginBottom:"20px"
                  }} 
                 >Download E-ticket</Button>
                 </div>
                   <div>
                   <Button style={{
                    width: "186px",
                    textAlign: "center",
                    height: "52px",
                    borderRadius: "9px",
                    backgroundColor: "",
                    fontWeight:"bold",
                    marginBottom:"20px"
                  }} 
                   >Sent by Email</Button>
                   </div>
                   <div>
                   <Button style={{
                    width: "186px",
                    textAlign: "center",
                    height: "52px",
                    borderRadius: "9px",
                    backgroundColor: "#864BD8",
                    fontWeight:"bold",
                    marginBottom:"20px"
                  }} 
                  onClick={goHome}
                   >Back to Home</Button>
                   </div>
                </div>
      </div>
    </>
  );
}

export default CongratulationPage;
