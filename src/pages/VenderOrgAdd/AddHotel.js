import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { API_PATH } from "../../Path/Path";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { useSelector } from "react-redux";
import S3FileUpload from "react-s3";

const config = {
  bucketName: "travelbastar",
  dirName: "destination-images",
  region: "ap-south-1",
  accessKeyId: "AKIA6Q57UD6XELBTX2LM",
  secretAccessKey: "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",
};

function AddForm() {
    const schema = yup.object().shape({
        name: yup.string().required(),
        designation: yup.string().required(),
        phoneNumber: yup.string().required(),
        email: yup.string().required(),
        hotelName: yup.string().required(),
        address: yup.string(),
        location: yup.string(),
        gst: yup.string().required(),
    })

    const history = useHistory();
    const [show, setShow] = useState(0);
    const [id, setId] = useState([]);
    const [catg, setCatg] = useState([]);
    const [serviceNm, setServiceNm] = useState([]);
    const { data: apiData, booking_id } = useSelector(state => state.busReducer)
    const goHome = () => {
        history.push("/");
    };
    let ID;
    useEffect(() => {
        window.scrollTo(0, 0);
        vendorCategory();
        serviceName();
    }, []);

    const [upload, setUpload] = useState();

    const handleImageChange = (event) => {
        event.preventDefault();
        let file = event.target.files[0];
        S3FileUpload.uploadFile(file, config)
          .then((data) => {
            if (data.result.ok) {
                setUpload(data.location);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      };

    const onSubmit = (values) => {
        console.log("submit vender", values,{...values,upload});
        if (values !== "") {
            fetch(API_PATH + "/api/v1/hotel/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log("Vendor Register successFully", res);
                    if (res.status === "CREATED") {
                        setShow(1);
                    } else {
                        console.log("Error:::::::");
                    }
                })
                .catch((error) => {
                    console.log("error", error);
                });
        } else {
            console.log("errorrrrrrrrrrr");
        }
        values = ""
    };

    const vendorCategory = () => {
        fetch(API_PATH + "/api/v1/location/list", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setCatg(res.data);

            })
            .catch((error) => console.log("Vendor Lookup Err::", error));

    };
    const serviceName = () => {
        fetch(API_PATH + "/api/v1/services/list", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setServiceNm(res.data);
                console.log("Book Genre Data", res.data);
            })
            .catch((error) => console.log("Genre Lookup Err::", error));
    };
    const RegID = localStorage.getItem("Reg ID")
    console.log("IDregLocal", RegID)

    return (
        <>
            <Header />
            <div className="container" style={{ width: "70%" }}>
                <Formik
                    validationSchema={schema}
                    onSubmit={(values) => onSubmit(values)}
                    initialValues={{
                        name: '',
                        designation: '',
                        phoneNumber: '',
                        email: '',
                        hotelName: '',
                        address: '',
                        location: '',
                        gst: '',
                    }}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors,
                    }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Row>
                                < Col xs={12} md={6}>
                                    <Form.Group
                                        md="4"
                                        controlId="validationFormik101"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            isInvalid={!!errors.name}
                                            placeholder=" Name"
                                        />
                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.name}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                < Col xs={12} md={6}>
                                    <Form.Group

                                        md="3"
                                        controlId="validationFormik104"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>Designation</Form.Label>
                                        <Form.Select
                                            placeholder="Designation"
                                            name="designation"
                                            value={values.designation}
                                            onChange={handleChange}
                                            isInvalid={!!errors.designation}
                                        >
                                            <option value="manager">Manager</option>
                                            <option value="owner">Owner</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.designation}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                < Col xs={12} md={6}>
                                    <Form.Group
                                        md="6"
                                        controlId="validationFormik103"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="Phone Number"
                                            name="phoneNumber"
                                            value={values.phoneNumber}
                                            onChange={handleChange}
                                            isInvalid={!!errors.phoneNumber}
                                        />

                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.phoneNumber}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                < Col xs={12} md={6}>
                                    <Form.Group
                                        md="3"
                                        controlId="validationFormik105"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>Email Id</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter Email Address"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            isInvalid={!!errors.email}
                                        />

                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.email}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                < Col xs={12} md={6}>
                                    <Form.Group
                                        md="4"
                                        controlId="validationFormik102"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>Hotel Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="hotelName"
                                            placeholder="Hotel Name"
                                            value={values.hotelName}
                                            onChange={handleChange}
                                            isInvalid={!!errors.hotelName}
                                        />

                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.hotelName}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                < Col xs={12} md={6}>
                                    <Form.Group
                                        md="4"
                                        controlId="validationFormik102"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>Hotel Address</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="address"
                                            placeholder="Address"
                                            value={values.address}
                                            onChange={handleChange}
                                            isInvalid={!!errors.address}
                                        />

                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.address}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                < Col xs={12} md={6}>
                                    <Form.Group
                                        md="4"
                                        controlId="validationFormik102"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>Location</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="location"
                                            placeholder="Location"
                                            value={values.location}
                                            onChange={handleChange}
                                            isInvalid={!!errors.location}
                                        />

                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.location}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    
                                </Col>
                                < Col xs={12} md={6}>
                                    <Form.Group
                                        md="3"
                                        controlId="validationFormik105"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>Upload GST (PDF Format)</Form.Label>
                                        <Form.Control
                                            type="file"
                                            placeholder="Please Upload GST"
                                            name="gst"
                                            value={values.gst}
                                            // onChange={handleChange}
                                            onChange={handleImageChange}
                                            onChange={(e) => {handleChange(e);handleImageChange(e)}}
                                            isInvalid={!!errors.gst}
                                        />

                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.gst}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div style={{ textAlign: "center" }}>
                                <Button type="submit" className="vendor-btn mt-3 mb-5" >Submit</Button>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>
            <Footer />
        </>
    );
}

export default AddForm;