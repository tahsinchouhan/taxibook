import React, { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Message from "../Message";
import { FaStar } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { getReview } from "../../redux/actions";
import S3FileUpload from "react-s3";

const config = {
  bucketName: "travelbastar",
  dirName: "destination-images",
  region: "ap-south-1",
  accessKeyId: "AKIA6Q57UD6XELBTX2LM",
  secretAccessKey: "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",
};

function RettingModal({ show, handleClose }) {
  const { error, loading, message } = useSelector(
    (state) => state.commonReducer
  );
  const [name, setName] = useState("");
  const [stars, setStars] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const [selectfile, setSelectfile] = useState();
  const [imageupload, setImageupload] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState();
  const fileInput = useRef(null);

  const dispatch = useDispatch();

  const ratingChanged = (newRating) => {
    setStars(newRating);
  };

  const onsubmit = () => {
    const data = {
      name: name,
      star_rating: stars,
      mobile: number,
      email: email,
      comments: comment,
      image: [imageupload],
    };
    if (!data.mobile == "" && !data.email == "") {
      handleClose();
      dispatch(getReview(data));
      console.log("object", data);
    }
  };

  const handleImageChange = (event) => {
    setSelectfile(event.target.files[0]);
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
    S3FileUpload.uploadFile(file, config)
      .then((data) => {
        if (data.result.ok) {
          setImageupload(data.location);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  let $imagePreview = null;
  if (imagePreviewUrl) {
    $imagePreview = (
      <img
        src={imagePreviewUrl}
        alt={selectfile ? selectfile.name : ""}
        height="200px"
      />
    );
  }

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
                  <div className="review_input mb-3" controlId="formBasicEmail">
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

                    <Form.Label className="dm-ticket">Enter Name</Form.Label>

                    <AvField
                      onChange={(text) => setName(text.target.value)}
                      value={number}
                      name="name"
                      type="ext"
                      className="position-relative"
                      placeholder="Enter Your Name"
                      validate={{
                        required: {
                          value: true,
                          errorMessage: "Enter your name",
                        },
                      }}
                    />
                    <Form.Group style={{ marginTop: 20 }}>
                      <div className="image-show">{$imagePreview}</div>
                      <Form.Control
                        type="file"
                        aria-describedby="inputGroupPrepend"
                        name="imageupload"
                        style={{ display: "none" }}
                        // value={imagePreviewUrl}
                        onChange={handleImageChange}
                        ref={fileInput}
                      />
                      <div
                        className="btn btn-primary"
                        onClick={() => fileInput.current.click()}
                      >
                        {selectfile ? "Change Photo" : "Choose Photo"}
                      </div>
                      <Form.Control.Feedback type="invalid">
                        Please Select Image
                      </Form.Control.Feedback>
                    </Form.Group>

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
