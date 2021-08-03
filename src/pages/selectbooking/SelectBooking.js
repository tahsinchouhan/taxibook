// import React, { useState } from 'react'
// import { Button, Row, Col, Form, Container } from 'react-bootstrap'
// import logo from '../../assets/img/logo.png'
// import { FaBus, FaCarAlt, FaTicketAlt } from "react-icons/fa";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import Pass from './Pass';
// import { useHistory } from 'react-router-dom';



// // import home1 from '../assets/img/home1.svg'



// function SelectBooking() {
//     const [startDate, setStartDate] = useState(new Date());
//     const history = useHistory();

//     const onButtonclick = () => {
//         console.log("object");
//         history.push('/pass')
//     }

//     return (
//         <div>
//             <Container>
//                 <div className="select_div">
//                     <div className="row p-5" style={{ textAlign: "center" }}>
//                         <div className="col-xs-12  col-sm-14 col-md-12">
//                             <img src={logo} alt="bastar" h />
//                             <div className="booking-div p-5">
//                                 <h1>Select youe booking</h1>
//                             </div>
//                         </div>
//                     </div>
//                     <Container >
//                         <Row xs={12} md={4} className="user-icon" >
//                             <Col style={{ color: "red" }}><FaBus /><br />Bus</Col>
//                             <Col style={{ color: "purple" }}><FaCarAlt /><br />Cab</Col>
//                             <Col style={{ color: "green" }}><FaTicketAlt onClick={onButtonclick} /><br />Pass</Col>
//                         </Row>

//                     </Container>

//                     <div className="userDate row">
//                         <label for="colFormLabel" className="col-xs-12 col-md-6 col-form-label">From</label>
//                         <div className="col-sm-10 usre-sourc">
//                             <input type="email" className="user_input" id="colFormLabel" placeholder="Enter Source" />
//                         </div>
//                         <label for="colFormLabel" className="col-xs-12 col-md-6 col-form-label">To</label>
//                         <div className="col-sm-10 user_input">
//                             <input type="email" className="user_input" id="colFormLabel" placeholder="Enter Source" />
//                         </div>
//                     </div>
//                     <div className="" style={{ height: "50px" }}></div>

//                     <div className="userdata row" >
//                         <label for="colFormLabel" className="col-xs-12 col-md-6 col-form-label">Journey Date</label>
//                         <div className="col-sm-10 user_input pt-0">
//                             < DatePicker className="col-sm-10 user_input"
//                                 selected={startDate}
//                                 onChange={(date) => setStartDate(date)} />

//                         </div>
//                     </div>
//                 </div><br />
//                 <div className="text-center">
//                     <button type="submit" class="btn btn-success">Submit</button>
//                 </div>


//             </Container>


//         </div>
//     )
// }

// export default SelectBooking;


import React from 'react'

function SelectBooking() {
    return (
        <div>
            <h1>helloo</h1>
        </div>
    )
}

export default SelectBooking
