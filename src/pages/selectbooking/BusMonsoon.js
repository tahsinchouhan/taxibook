import React from 'react'
import { Container, Row, Col, Form, Dropdown,Button  } from "react-bootstrap";



function BusMonsoon() {
    return (
        <>
         <div style={{backgroundColor:"white"}}>
             <Container className="mansoon-div">
                 <Row>
                     <Col>
                     <h5>Tatibandh, Raipur to Chitrakote </h5>
                     <span>Change</span>
                     </Col>
                     <Col>
                     <div>                         
                     </div>
                     </Col>
                 </Row>
                 <Container >
                     <span>Available Promo Codes</span>
                 <Row>
                     <Col className="mansoon-row" ><span>MONSOON15</span><br/>
                     <span>15% off in July 2021</span>
                     </Col>
                     <Col className="mansoon-row" >
                     <span>TRYNEW</span><br/>
                     <span>10% off your first booking</span></Col>
                     <Col className="mansoon-row" >
                         <span>MONSOON15</span><br/>
                     <span>15% off in July 2021</span>
                     </Col>
                     <Col className="mansoon-row" >
                     <span>TRYNEW</span><br/>
                     <span>10% off your first booking</span>
                     </Col>
                 </Row>
                 </Container>
             </Container>

             </div>   
        </>
    )
}

export default BusMonsoon
