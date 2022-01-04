import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
// import Message from "../Message";
import { AvForm, AvField } from "availity-reactstrap-validation";
import {getEnquire} from "../../redux/actions";

function EnquireModal({ show, handleClose, packages }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const onClick = () => {
    const data = {
      name: name,
      email: email,
      mobile: number,
      description: comment,
      package_id: packages._id,
      destination_id: packages.destinations,
      type: "",
    };
    if (!name === "" && !email === "" && !number === "" && !comment === "") {
      dispatch(getEnquire(data))
    }
  };

  return (
    <>
      <div>
        <Modal show={show} size="lg">
          <Modal.Header onClick={handleClose} closeButton>
            <h3 className="" style={{ fontWeight: "600" }}>
              Enquire Page
            </h3>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <div className="col-sm-6 offset-sm-3">
              <AvForm>
                <Form.Group
                  className="review_input mb-3"
                  controlId="formBasicEmail"
                >
                  <AvField
                    type="name"
                    name="name"
                    value={name}
                    onChange={(text) => setName(text.target.value)}
                    placeholder="Enter Your Name"
                    className="position-relative"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "Enter your Name",
                      },
                    }}
                  />
                  <br />
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
                  <br />

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

                  <br />
                  <AvField
                    onChange={(text) => setComment(text.target.value)}
                    value={comment}
                    name="message"
                    type="text"
                    className="position-relative"
                    placeholder="Enter Your message (Destination)"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: "Enter Message",
                      },
                    }}
                  />
                  <br />
                </Form.Group>
                <Button
                  className="col-sm-6 offset-sm-3"
                  variant="primary"
                  type="submit"
                  onClick={onClick}
                >
                  Submit
                </Button>
              </AvForm>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default EnquireModal;
