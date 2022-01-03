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
import { NavLink, useHistory } from "react-router-dom";
import Header from "../../components/Header";
import "../../assets/css/profile.css";
import axios from "axios";
import men from "../../assets/img/men.jpg";
import { Link } from "react-router-dom";

function BookingProfile() {
  const [busTickets, setBusTickets] = useState();
  const [hotelTickets, setHotelTickets] = useState();
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
  useEffect(() => {
    axios
      .post(API_PATH + `/api/v1/busticket/search`, {
        mobile,
      })
      .then((res) => {
        res.data.data.forEach((element, index) => {
          res.data.data[index].booking_type = "Bus Ticket";
        });
        setBusTickets(res.data.data);
        // setCommonTickets([...commonTickets, res.data.data])
        setCommonTickets((prev) => [...prev, res.data.data]);
        common();
      })
      .catch((e) => console.log(e));
  }, []);

  // hotel ticket api
  useEffect(() => {
    axios
      .get(API_PATH + `/api/v2/booking/search?mobile=${mobile}`)
      .then((res) => {
        res.data.data.forEach((element, index) => {
          res.data.data[index].date = element.check_in;
          res.data.data[index].booking_Id = element.booking_id;
          res.data.data[index].booking_type = "Hotel Ticket";
          if (element.hotel_id) {
            res.data.data[index].name = element.hotel_id.hotel_name;
          } else {
            delete res.data.data[index];
          }
        });
        setHotelTickets(res.data.data);
        setCommonTickets((prev) => [...prev, res.data.data]);
        common();
      })
      .catch((e) => console.log(e));
  }, []);

  bothTickets = commonTickets.flat();

  const common = (bothTickets) => {
    if (bothTickets && bothTickets.length) {
      bothTickets = bothTickets.sort(function (a, b) {
        return (
          Date.parse(new Date(b.date.split("/").reverse().join("-"))) -
          Date.parse(new Date(a.date.split("/").reverse().join("-")))
        );
      });
    }
  };

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
            <div className="col-md-4 ">
              <Card className="w-50 ">
                <Card.Img
                  variant="top"
                  src={men}
                  alt="men"
                  className="w-75 mt-3 mx-4 rounded"
                />
                <div
                  className="d-flex justify-content-end "
                  style={{
                    position: "absolute",
                    left: "85%",
                    top: "31%",
                    color: "#10c910",
                  }}
                >
                  <FaPencilAlt />
                </div>

                <Card.Title
                  className="h6 text-center mt-3 "
                  style={{ fontWeight: "bolder", fontSize: "14px" }}
                >
                  {profile?.data?.name}
                </Card.Title>
                <Card.Body>
                  <Card.Text>
                    <div className="border-bottom pb-2">
                      <div className="d-flex">
                        <FaIdCardAlt className="mx-3 icons-1" />

                        <div style={{ fontSize: "12px", fontWeight: "600" }}>
                          profile
                        </div>
                      </div>
                    </div>
                  </Card.Text>
                  <Card.Text>
                    <div className="border-bottom pb-2">
                      <div className="d-flex">
                        <FaSuitcaseRolling className="mx-3 icons-1" />

                        <div style={{ fontSize: "12px", fontWeight: "600" }}>
                          Booking
                        </div>
                      </div>
                    </div>
                  </Card.Text>

                  <Card.Text>
                    <div className="border-bottom pb-2">
                      <div className="d-flex">
                        <FaSignInAlt className="mx-3 icons-1" />

                        <div style={{ fontSize: "12px", fontWeight: "600" }}>
                          Login Details
                        </div>
                      </div>
                    </div>
                  </Card.Text>

                  <Card.Text>
                    <div className="d-flex">
                      <FaSignOutAlt className="mx-3 icons-1" />

                      <div style={{ fontSize: "12px", fontWeight: "600" }}>
                        Logout
                      </div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-8 p-1">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-2">
                      <FaIdCardAlt style={{ color: "green" }} size="2x" />
                    </div>
                    <h2 className="col-md-10">Booking Details</h2>
                  </div>
                </div>
                <div className=" col-md-6">
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
                </div>
              </div>
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
                  {bothTickets?.map((item, index) => {
                    return (
                      <tr>
                        <td className="text-center">{item?.booking_Id}</td>
                        <td className="text-center">{item.booking_type}</td>
                        <td className="text-center">{item.name}</td>
                        <td className="text-center">
                          {moment(item?.date).format("DD-MM-YYYY")}
                        </td>
                        <td className="text-center">{item?.amount}</td>
                        <td className="text-center">
                          {item.check_in ? (
                             <Link to={`/bus-detail/${item?.booking_Id}`}>
                              View Ticket
                            </Link>
                          ) : (
                            <Link to={`/bus-detail/${item?.booking_Id}`}>
                              View Ticket
                            </Link>
                          )}
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
    </>
  );
}

export default BookingProfile;
