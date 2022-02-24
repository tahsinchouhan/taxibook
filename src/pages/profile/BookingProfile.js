import React, { useEffect, useState } from "react";
import {
  FaIdCardAlt,
  FaPencilAlt,
  FaSignInAlt,
  FaSignOutAlt,
  FaSuitcaseRolling,
} from "react-icons/fa";
import { DatePicker, Space } from "antd";
import { API_PATH } from "../../Path/Path";
import moment from "moment";
import {
  Card,
  FormControl,
  InputGroup,
  Table,
  Dropdown,
} from "react-bootstrap";
// import { NavLink, useHistory } from "react-router-dom";
import Header from "../../components/Header";
import "../../assets/css/profile.css";
import axios from "axios";
import men from "../../assets/img/men.jpg";
import { Link } from "react-router-dom";

function BookingProfile() {
  // const [busTickets, setBusTickets] = useState();
  // const [hotelTickets, setHotelTickets] = useState();
  const [commonTickets, setCommonTickets] = useState([]);
  const [profile, setProfile] = useState([]);
  let bothTickets = [];

  const { RangePicker } = DatePicker;
  const mobile = JSON.parse(localStorage.getItem("mobile"));
  // customer details api
  useEffect(() => {
    const customerID = JSON.parse(localStorage.getItem("customer_id"));
    axios
      .get(API_PATH + `/api/v1/customer/${customerID}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  // bus tickets api
  // useEffect(() => {
  //   axios
  //     .post(API_PATH + `/api/v1/busticket/search`, {
  //       mobile,
  //     })
  //     .then((res) => {
  //       res.data.data.forEach((element, index) => {
  //         res.data.data[index].booking_type = "Bus Ticket";
  //       });
  //       setBusTickets(res.data.data);
  //       // setCommonTickets([...commonTickets, res.data.data])
  //       setCommonTickets((prev) => [...prev, res.data.data]);
  //       common();
  //     })
  //     .catch((e) => console.log(e));
  // }, []);

  // hotel ticket api
  useEffect(() => {
    axios
      .get(API_PATH + `/api/v2/booking/search?mobile=${mobile}`)
      .then((res) => {
        // console.log('busticket', res.data.busticket)
        // console.log('res.data', res.data.hotel_bookings)
        console.log('res.data', res.data.package_bookings)
        let ticketArray = [];
        res.data.busticket.map(element => ticketArray.push({
          date:element?.date || '',
          booking_type: "Bus Ticket",
          booking_Id: element?.booking_Id || '',
          name: element?.name || '',
          amount: element?.amount || '',
          status: element?.status || ''
        }))

        res.data.hotel_bookings.map(element => ticketArray.push({
          date:element?.check_in || '',
          booking_type: "Hotel Ticket",
          booking_Id: element?.booking_id || '',
          name: element?.email || '',
          amount: element?.amount || '',
          status: element?.status || ''
        }))

        res.data.package_bookings.map(element => ticketArray.push({
          date:element?.start_date || '',
          booking_type: "Package Ticket",
          booking_Id: element?.booking_Id || '',
          name: element?.email || '',
          amount: element?.amount || '',
          status: element?.status || ''
        }))
        
        if(ticketArray.length){
          bothTickets = ticketArray.sort(function (a, b) {
            return (
              Date.parse(new Date(b.date.split("/").reverse().join("-"))) -
              Date.parse(new Date(a.date.split("/").reverse().join("-")))
            );
          });
        }
        setCommonTickets(bothTickets)
        // common();
      }).catch((e) => console.log(e));
  }, [])

  // bothTickets = commonTickets.flat();

  // const common = (commonTickets) => {
  //   if (commonTickets && commonTickets.length) {
  //     bothTickets = commonTickets.sort(function (a, b) {
  //       return (
  //         Date.parse(new Date(b.date.split("/").reverse().join("-"))) -
  //         Date.parse(new Date(a.date.split("/").reverse().join("-")))
  //       );
  //     });
  //     console.log('object :>> ', bothTickets);
  //   }
  // };
  

  return (
    <>
      <Header />
      <div
        style={{
          borderRadius: "10px",
          border: "none",
          background: "transparent",
        }}
      >
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-4">
              <Card className="w-100">
                <Card.Img
                  variant="top"
                  src={men}
                  alt="men"
                  className="p-2 rounded"
                />
                <Card.Title
                  className="h6 text-center mt-3 "
                  style={{ fontWeight: "bolder", fontSize: "14px" }}
                >
                <FaPencilAlt style={{color: "#10c910"}} />  {profile?.data?.name}
                </Card.Title>
                <Card.Body>
                  <Card.Text>
                    <div className="border-bottom pb-2">
                      <div className="d-flex align-items-center">
                        <FaIdCardAlt className="mx-3 icons-1" style={{ fontSize: "1rem" }} />
                        <div style={{ fontSize: "1rem" }}>
                          Profile
                        </div>
                      </div>
                    </div>
                  </Card.Text>
                  <Card.Text>
                    <div className="border-bottom pb-2">
                      <div className="d-flex align-items-center">
                        <FaSuitcaseRolling className="mx-3 icons-1" style={{ fontSize: "1rem" }}/>
                        <div style={{ fontSize: "1rem"}}>
                          Booking
                        </div>
                      </div>
                    </div>
                  </Card.Text>

                  <Card.Text>
                    <div className="border-bottom pb-2">
                      <div className="d-flex align-items-center">
                        <FaSignInAlt className="mx-3 icons-1" style={{ fontSize: "1rem" }} />
                        <div style={{ fontSize: "1rem" }}>
                          Login Details
                        </div>
                      </div>
                    </div>
                  </Card.Text>

                  <Card.Text>
                    <div className="d-flex align-items-center">
                      <FaSignOutAlt className="mx-3 icons-1" style={{ fontSize: "1rem" }}/>
                      <div style={{ fontSize: "1rem" }}>
                        Logout
                      </div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-8 p-1">
              <div className="row">
                <h2 className="text-center text-md-start my-4 my-md-1"><FaIdCardAlt style={{ color: "green", fontSize:'40px' }} className="cart-alt-icon" /> Booking Details</h2>
                {/* <div className=" col-md-6">
                  <div className="row">
                    <RangePicker className="col-md-9" />
                    <Dropdown className="col-md-3">
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Status
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          on Going
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Completed
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Cancelled
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div> */}
              </div>
              <div className="table-responsive">
                <Table bordered hover className="card-table table" size="md">
                  <thead>
                    <tr>
                      <th className="text-center">Booking id</th>
                      <th className="text-center">Booking type</th>
                      <th className="text-center">Name</th>
                      <th className="text-center">Date</th>
                      <th className="text-center">Amount</th>
                      <th className="text-center">View Ticket</th>
                      <th className="text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {commonTickets?.map((item, index) => {
                      return (
                        <tr>
                          <td className="text-center">{item?.booking_Id}</td>
                          <td className="text-center">{item.booking_type}</td>
                          <td className="text-center">{item.name}</td>
                          <td className="text-center">{moment(item?.date).format("DD-MM-YYYY")}</td>
                          <td className="text-center">{item?.amount}</td>
                          <td className="text-center">
                          {item.booking_type === 'Bus Ticket' ? <Link to={`/bus-detail/${item?.booking_Id}`}>View Ticket</Link> : ''}
                          {item.booking_type === 'Hotel Ticket' ? <Link to={`/hotel-details-book/${item?.booking_Id}`}>View Ticket</Link> : ''}
                          {item.booking_type === 'Package Ticket' ? <Link to={`/packages-detail/${item?.booking_Id}`}>View Ticket</Link> : ''}
                          </td>
                          <td className="text-center">Reserved</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingProfile;
