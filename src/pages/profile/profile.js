import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaIdCardAlt,
  FaPencilAlt,
  FaSignInAlt,
  FaSignOutAlt,
  FaSuitcaseRolling,
} from "react-icons/fa";
import { DatePicker, Space } from "antd";
import { Card, FormControl, InputGroup, Table } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import Header from "../../components/Header";
import "../../assets/css/profile.css";
import men from "../../assets/img/men.jpg";
import { API_PATH } from "../../Path/Path";
import VerifyModal from "../../components/modal/VerifyModal";

function Profile() {
  const history = useHistory();
  const bookingHandler = () => {
    history.push("/bookingProfile");
  };
  const [profile, setProfile] = useState([]);
  const [showTab, setShowTab] = useState(0);

  useEffect(() => {
    const customerID = JSON.parse(localStorage.getItem("customer_id"));
    console.log("customerID", customerID);
    axios
      .get(API_PATH + `/api/v1/customer/${customerID}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const verifyEmail = () => {
    console.log('ehreh');
    setShowTab(1);
  };

  const handleVerifyClose = () => {
    setShowTab(0);
  };


  return (
    <>
      <Header />
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

                      <div
                        onClick={bookingHandler}
                        style={{ fontSize: "12px", fontWeight: "600" }}
                      >
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
          <div className="col-md-8">
            <Card className="p-4 ">
              <table class="table ">
                <thead>
                  <tr>
                    <th scope="col" className="profile">
                      {" "}
                      <FaIdCardAlt
                        style={{ color: "#10c910", fontSize: "23px" }}
                      />{" "}
                      Profile
                    </th>
                    <td scope="col" className="d-flex justify-content-end">
                      <button className="edit p-2">
                        {" "}
                        <FaPencilAlt /> Edit
                      </button>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Name</th>
                    <td>{profile?.data?.name}</td>
                  </tr>

                  <tr>
                    <th scope="row">Email</th>
                    <td>
                      {profile?.data?.email}{" "}
                      <span className="d-flex justify-content-end email">
                        {profile?.data?.email &&
                        profile?.data?.isEmailVerified == false ? (
                          <div
                            style={{ color: "red", cursor: "pointer" }}
                            onClick={() => verifyEmail()}
                          >
                            {" "}
                            Please Verify your email
                          </div>
                        ) : (
                          <div style={{ color: "red" }}>
                            Please Add and Verify Your Email
                          </div>
                        )}
                        {profile?.data?.email ? (
                          <span style={{ marginLeft: "2%" }}>Change Email</span>
                        ) : null}
                      </span>{" "}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Mobile</th>
                    <td>
                      {profile?.data?.mobile}
                      <span className="d-flex justify-content-end email">
                        {profile?.data?.isMobileVerified == false ? (
                          <div style={{ color: "red" }}>
                            {" "}
                            Please Verify your mobile
                          </div>
                        ) : null}
                        <span style={{ marginLeft: "2%" }}>Change Mobile</span>
                      </span>{" "}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Address</th>
                    <td>Fafadih Chowk, Raipur 492001</td>
                  </tr>
                  <tr>
                    <th scope="row">Password</th>
                    <td>
                      ********{" "}
                      <span className="d-flex justify-content-end password">
                        Change Password?
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </div>
        </div>
      </div>
      <VerifyModal showTab="showTab"
        handleClose={handleVerifyClose}></VerifyModal>
    </>
  );
}

export default Profile;
