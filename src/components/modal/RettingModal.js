import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Message from "../Message";
import { FaStar } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { AvForm, AvField } from "availity-reactstrap-validation";
import {getReview} from "../../redux/actions";

function RettingModal({ show, handleClose }) {
  const { error, loading, message} = useSelector(
    (state) => state.commonReducer
  );
  const [stars, setStars] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const ratingChanged = (newRating) => {
    setStars(newRating);
  };

  const onsubmit = () => {
    const data = {
      star_rating: stars,
      mobile: number,
      email: email,
      comments: comment,
    };
    if(!data.mobile == "" && !data.email == ""){
      dispatch(getReview(data))
      console.log("object",data)
    }
  };
  
  return (
    <>
      <div>
        {loading ? <Loader /> : null}
        {message ? <Message msg={message} type="success" /> : null}
        {error ? <Message msg={error} type="error" /> : null}
        <Modal show={show} size="lg">
          <div className="review_modal">
            <Modal.Header onClick={handleClose} closeButton>
              <h3 className="review_header" style={{ fontWeight: "600" }}>
                Review
              </h3>
            </Modal.Header>
            <Modal.Body className="">
              <div className="col-sm-6 offset-sm-3">
                <AvForm>
                  <div
                    className="review_input mb-3"
                    controlId="formBasicEmail"
                  >
                    <div className="d-flex">
                      <Form.Label className="dm-ticket">
                        Star Rating:
                      </Form.Label>
                      <div style={{ color: "#FF8700", fontSize: "22px" }}>
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={24}
                          isHalf={true}
                          emptyIcon={<FaStar />}
                          halfIcon={<FaStar />}
                          fullIcon={<FaStar />}
                          activeColor="#ffd700"
                        />
                      </div>
                    </div>
                    <Form.Label className="dm-ticket">Enter Number</Form.Label>

                    <AvField
                      onChange={(text) => setNumber(text.target.value)}
                      value={number}
                      name="number"
                      type="number"
                      className="position-relative"
                      errorMessage="Invalid Number"
                      placeholder="Enter Your Mobile"
                      maxLength="10"
                      validate={{
                        required: {
                          value: true,
                          errorMessage: "Enter your number",
                        },
                        pattern: {
                          value: "^[0-9]",
                          errorMessage: "Your Number only be 10 numbers",
                        },
                        minLength: {
                          value: 10,
                          errorMessage: "Only 10 digit number",
                        },
                      }}
                    />

                    <Form.Label className="dm-ticket">
                      Enter Your Email:
                    </Form.Label>
                    <AvField
                      type="email"
                      name="email"
                      value={email}
                      onChange={(text) => setEmail(text.target.value)}
                      placeholder="Enter Your Email"
                      className="position-relative"
                      errorMessage="Invalid Number"
                      validate={{
                        required: {
                          value: true,
                          errorMessage: "Enter your Email",
                        },
                        pattern: {
                          value:
                            "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/",
                          errorMessage: "Please Enter Your Vailid Email",
                        },
                      }}
                    />

                    <Form.Label className="dm-ticket">Comment:</Form.Label>
                    <Form.Control
                      value={comment}
                      onChange={(text) => setComment(text.target.value)}
                      as="textarea"
                      rows={4}
                      placeholder="Comments"
                    />
                  </div>
                  <Button
                  type="submit"
                    className="col-sm-6 offset-sm-3"
                    variant="primary"
                    onClick={() => onsubmit()}
                  >
                    Submit
                  </Button>
                </AvForm>
              </div>
            </Modal.Body>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default RettingModal;
