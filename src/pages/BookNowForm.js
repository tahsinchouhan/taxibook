import { useState, useEffect } from "react";
import { API_PATH } from "../Path/Path";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { IoCloseOutline } from "react-icons/io5";
import axios from "axios";

import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import validator from "validator";
import LoginModal from "../components/modal/LoginModal";

const BookNowForm = ({ item, show, handleModal, user_data }) => {
  const history = useHistory();

  // date for setting start date as today
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let today = `${day}/${month}/${year}`;

  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState("");
  const [modalShow, setModalShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm();

  const { error, loading, message } = useSelector(
    (state) => state.commonReducer
  );

  const handleLoginClose = () => {
    setModalShow(false);
  };

  const takeToBusPage = (id) => {
    history.push({
      pathname: `/bus-detail/${id}`,
    });
  };

  const onSubmit = async (data) => {
    const body = JSON.stringify({
      packages_id: item._id,
      customer_id: user_data.user.customer_id,
      // customer_id: "61a8b36ee5163d51d37bfc09",
      start_date: data.startDate,
      end_date: data.endDate,
      email: data.email,
      number_of_travellers: data.visitors,
      amount: item.price,
      basic_details: [
        {
          name: data.name,
          age: "",
          adhhar: "",
          gender: "",
        },
      ],
    });

    try {
      const response = await fetch(`${API_PATH}/api/v1/packages/booking`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: body,
      });
      const json = await response.json();
      console.log("RESPONSE: ", json.data);

      // console.log("book now from the form clicked");
      reset();

      takeToBusPage(json.data.booking_Id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {user_data ? (
        <div>
          {loading ? <Loader /> : null}
          {message ? <Message msg={message} type="success" /> : null}
          {error ? <Message msg={error} type="error" /> : null}
          <Modal show={show} size="md">
            <div
              className="d-flex mb-2 book-now__form"
              style={{
                height: "fit-content",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Modal.Body style={{ position: "relative" }}>
                <IoCloseOutline
                  style={{
                    position: "absolute",
                    top: "5%",
                    right: "5%",
                    width: "1.5rem",
                    height: "1.5rem",
                    cursor: "pointer",
                  }}
                  onClick={() => handleModal(false)}
                />
                <Container>
                  <Row className="book-now__form-main-row">
                    <Col className="book-now__form-container">
                      <h1 style={{ fontSize: "2rem" }}>Book now</h1>
                      <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                          <Form.Group
                            as={Col}
                            className="mb-3"
                            controlId="formBasicStartDate"
                          >
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control
                              type="date"
                              {...register("startDate", {
                                required: "Please enter date in this field",
                              })}
                              onKeyUp={() => {
                                trigger("startDate");
                              }}
                              onChange={(e) => {
                                if (!validator.isAfter(e.target.value)) {
                                  setStartDate("");
                                }
                                setStartDate(e.target.value);
                              }}
                            />
                            {errors.startDate && (
                              <p className="text-danger">
                                {errors.startDate.message}
                              </p>
                            )}
                            {!validator.isAfter(startDate) && (
                              <p className="text-danger">
                                Start date should be valid
                              </p>
                            )}
                          </Form.Group>
                          <Form.Group
                            as={Col}
                            className="mb-3"
                            controlId="formBasicEndDate"
                          >
                            <Form.Label>End Date</Form.Label>
                            <Form.Control
                              type="date"
                              {...register("endDate", {
                                required: "Please enter date in this field",
                              })}
                              onKeyUp={() => {
                                trigger("endDate");
                              }}
                              onChange={(e) => {
                                if (
                                  !validator.isAfter(e.target.value, startDate)
                                ) {
                                  setEndDate("");
                                }
                                setEndDate(e.target.value);
                              }}
                            />
                            {errors.endDate && (
                              <p className="text-danger">
                                {errors.endDate.message}
                              </p>
                            )}
                            {!validator.isAfter(endDate, startDate) && (
                              <p className="text-danger">
                                End date should be valid
                              </p>
                            )}
                          </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridNum">
                          <Form.Label>
                            Enter no. of travellers who are going to visit
                          </Form.Label>
                          <Form.Control
                            type="number"
                            {...register("visitors", {
                              required: "This field is Required",
                              min: {
                                value: 1,
                                message: "Minimum visitors allowed is 1",
                              },
                              max: {
                                value: 15,
                                message: "Maximum visitors allowed is 15",
                              },
                            })}
                            onKeyUp={() => {
                              trigger("visitors");
                            }}
                          />
                          {errors.visitors && (
                            <p className="text-danger">
                              {errors.visitors.message}
                            </p>
                          )}
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          controlId="formGridName"
                          className="mb-3"
                        >
                          <Form.Label>Name:</Form.Label>
                          <Form.Control
                            type="text"
                            value={user_data.user.name}
                            placeholder="Enter name"
                            {...register("name", {
                              required: "Name is Required",
                            })}
                            onKeyUp={() => {
                              trigger("name");
                            }}
                          />
                          {errors.name && (
                            <p className="text-danger">{errors.name.message}</p>
                          )}
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          controlId="formGridEmail"
                          className="mb-3"
                        >
                          <Form.Label>Email:</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={user_data.user.email}
                            {...register("email", {
                              required: "Email is Required",
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address",
                              },
                            })}
                            onKeyUp={() => {
                              trigger("email");
                            }}
                          />
                          {errors.email && (
                            <p className="text-danger">
                              {errors.email.message}
                            </p>
                          )}
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          controlId="formGridNumber"
                          className="mb-3"
                        >
                          <Form.Label>Phone Number:</Form.Label>
                          <Form.Control
                            type="tel"
                            value={user_data.user.mobile}
                            placeholder="Enter phone number"
                            {...register("phone", {
                              required: "Please enter your phone number",
                            })}
                            pattern="((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}"
                            onKeyUp={() => {
                              trigger("phone");
                            }}
                            maxLength="10"
                          />
                          {errors.phone && (
                            <p className="text-danger">
                              {errors.phone.message}
                            </p>
                          )}
                        </Form.Group>
                        <div className="mt-1">
                          <Button
                            variant="primary"
                            type="submit"
                            style={{ width: "100%" }}
                          >
                            Book Now
                          </Button>
                        </div>
                      </Form>
                    </Col>
                  </Row>
                </Container>
              </Modal.Body>
            </div>
          </Modal>
        </div>
      ) : (
        <div>
          <Modal show={show} onHide={() => handleModal(false)}>
            <IoCloseOutline
              style={{
                position: "absolute",
                top: "15%",
                right: "5%",
                width: "1.5rem",
                height: "1.5rem",
                cursor: "pointer",
                zIndex: "10",
              }}
              onClick={() => handleModal(false)}
            />
            <Modal.Body
              style={{
                position: "relative",
                fontSize: "1.2rem",
                fontWeight: "500",
              }}
            >
              You need to signup first and login!
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="success"
                onClick={() => {
                  handleModal(false);
                  setModalShow(true);
                }}
              >
                Signup
              </Button>
            </Modal.Footer>
          </Modal>
          <LoginModal show={modalShow} handleClose={handleLoginClose} />
        </div>
      )}
    </>
  );
};

export default BookNowForm;
