import React, { useState, useEffect } from "react";
import { Button, Row, Col, Form, Container, Modal } from "react-bootstrap";
import calendar from "../../assets/img/calendar.png";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";
import ticket from "../../assets/ticketpage.svg";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getBookHotel } from "../../redux/actions";
import { API_PATH } from "../../Path/Path";
import hotel from "../../assets/img/hotel.png";
import { FaSearchLocation, FaTrash, FaPlusCircle } from "react-icons/fa";
import { BiLeftArrowAlt } from "react-icons/bi";

import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";
import { ToastContainer, toast } from "react-toastify";
import AvField from "availity-reactstrap-validation/lib/AvField";
import moment from "moment";
import { DatePicker, Menu, Dropdown as ANTDropdown } from "antd";
import { FiEdit2 } from "react-icons/fi";

const Searchbar = ({ getStartData }) => {
  const history = useHistory();

  console.log({ getStartData });

  const check_in = moment(getStartData.startDate).format("DD-MMM");
  const check_out = moment(getStartData.endDate).format("DD-MMM");

  return (
    <>
      <Container
        style={{
          width: "100%",
          paddingTop: "28px",
        }}
      >
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col xs={12} className="mt-2">
            <Form.Group className="" controlId="exampleForm.ControlInput1">
              <div
                style={{
                  backgroundColor: "#f5f5f5",
                  border: 0,
                  padding: "3px",
                  width: "100%",
                  height: "55px",
                }}
              >
                <b>
                  <h4
                    style={{
                      fontWeight: "bold",
                    }}
                    onClick={() => {
                      history.push("/hotelsearch");
                    }}
                  >
                    {" "}
                    <BiLeftArrowAlt />{" "}
                    {getStartData?.sendlocation === undefined
                      ? "jagdalpur"
                      : getStartData?.sendlocation}
                    <FiEdit2
                      style={{ float: "right", margin: "20px", color: "blue" }}
                      onClick={() => {
                        history.push("/hotelsearch");
                      }}
                    />
                  </h4>
                </b>
                <p
                  style={{
                    display: "flex",
                    fontSize: "12px",
                    padding: "15px 2px 0 2px",
                    marginTop: "-20px",
                  }}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {`${check_in}-${check_out}`}&nbsp;&nbsp;&nbsp;
                  {getStartData.noOfRoom} Room, {getStartData.noOfGuest} Guests
                </p>
                <p></p>
              </div>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Searchbar;
