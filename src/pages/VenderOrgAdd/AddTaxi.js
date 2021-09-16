import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { API_PATH } from "../../Path/Path";
import { Formik } from "formik";
import * as yup from "yup";
import S3FileUpload from "react-s3";
import Message from "../../components/Message";
import Loader from "../../components/Loader";

const config = {
    bucketName: "travelbastar",
    dirName: "destination-images",
    region: "ap-south-1",
    accessKeyId: "AKIA6Q57UD6XELBTX2LM",
    secretAccessKey: "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",
};

function AddTaxi() {
    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
        designation: yup.string().required("Designation is required"),
        phone: yup.string().required("Phone Number is required"),
        email: yup.string().required("Email is required"),
        driver_name: yup.string().required("Driver Name is required"),
        driver_license_no: yup.string().required("Driver's License Number is required"),
        address: yup.string("Address is required"),
        city: yup.string().required("City is required"),
        taxi_number: yup.string().required("Taxi Number is required"),
        taxi_model: yup.string().required("Taxi Model is required"),
        rc_book: yup.mixed().required(" RC Book is required"),
        // .test("FILE_SIZE", "Uploaded file is too big.", 
        //     value => { console.log("val",value.size); return !value || (value && value.size <= 1000000)} )
        // .test("FILE_FORMAT", "Uploaded file has unsupported format.", 
        //     value => !value || (value && ["pdf","png"].includes(value.type))),
        password: yup.string().min(6).required('Password is required'),
        passwordConfirmation: yup.string().min(6)
            .oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
    })

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const [upload, setUpload] = useState();

    const handleImageChange = (event) => {
        event.preventDefault();
        let file = event.target.files[0];
        S3FileUpload.uploadFile(file, config)
            .then((data) => {
                console.log("object",data)
                if (data.result.ok) {
                    setUpload(data.location);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const onSubmit = (values) => {
        console.log("submit vender", values, { ...values, upload });
        setLoading(true)
        if (values !== "") {
            fetch(API_PATH + "/api/v2/hotelregistration/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...values, rc_book: upload }),
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log("Vendor Register successFully", res,{ ...values, rc_book: upload });
                    if (res.status === "CREATED") {
                        setMessage('added')
                    } else {
                        console.log("Error:::::::",res);
                        setError('Something Went Wrong')
                    }
                    setLoading(false);
                })
                .catch((error) => {
                    console.log("error", error);
                    setError('Something Went Wrong')
                    setLoading(false);
                });
        } else {
            console.log("errorrrrrrrrrrr");
        }
        setLoading(false);
        values = ""
    };

    return (
        <>
            <Header />
            {loading ? <Loader /> : null}
            {message ? <Message msg={message} type="success" /> : null}
            {error ? <Message msg={error} type="error" /> : null}
            <div className="container" style={{ width: "70%" }}>
              <h4 className="block__title">
                <span>Registration</span> Form For Taxi Owner
              </h4>
                <Formik
                    validationSchema={schema}
                    onSubmit={(values) => onSubmit(values)}
                    initialValues={{
                        name: '',
                        designation: '',
                        phone: '',
                        email: '',
                        driver_name: '',
                        driver_license_no: '',
                        address: '',
                        city: '',
                        taxi_number: '',
                        taxi_model: '',
                        rc_book: '',
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
                                            <option value="">Select</option>
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
                                            name="phone"
                                            value={values.phone}
                                            onChange={handleChange}
                                            isInvalid={!!errors.phone}
                                        />

                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.phone}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                < Col xs={12} md={6}>
                                    <Form.Group
                                        md="3"
                                        controlId="validationFormik105"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>Email Id (User Id)</Form.Label>
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

                                <Col xs={12} md={6}>
                                    <Form.Group
                                        md="4"
                                        controlId="validationFormik102"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={values.password}
                                            onChange={handleChange}
                                            isInvalid={!!errors.password}
                                        />

                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.password}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                < Col xs={12} md={6}>
                                    <Form.Group
                                        md="4"
                                        controlId="validationFormik102"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="passwordConfirmation"
                                            placeholder="Confirm Password"
                                            value={values.passwordConfirmation}
                                            onChange={handleChange}
                                            isInvalid={!!errors.passwordConfirmation}
                                        />

                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.passwordConfirmation}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                < Col xs={12} md={6}>
                                    <Form.Group
                                        md="4"
                                        controlId="validationFormik102"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>Address</Form.Label>
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
                                        <Form.Label>City</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="city"
                                            placeholder="City"
                                            value={values.city}
                                            onChange={handleChange}
                                            isInvalid={!!errors.city}
                                        />
                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.city}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col xs={12} md={6}>
                                    <Form.Group
                                        md="4"
                                        controlId="validationFormik102"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>Driver Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="driver_name"
                                            placeholder="Driver Name"
                                            value={values.driver_name}
                                            onChange={handleChange}
                                            isInvalid={!!errors.driver_name}
                                        />

                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.driver_name}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col xs={12} md={6}>
                                    <Form.Group
                                        md="4"
                                        controlId="validationFormik102"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>Driver License No.</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="driver_license_no"
                                            placeholder="Driver License No"
                                            value={values.driver_license_no}
                                            onChange={handleChange}
                                            isInvalid={!!errors.driver_license_no}
                                        />

                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.driver_license_no}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                < Col xs={12} md={6}>
                                    <Form.Group
                                        md="4"
                                        controlId="validationFormik101"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>Taxi Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="taxi_number"
                                            value={values.taxi_number}
                                            onChange={handleChange}
                                            isInvalid={!!errors.taxi_number}
                                            placeholder=" Taxi Number"
                                        />
                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.taxi_number}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                < Col xs={12} md={6}>
                                    <Form.Group

                                        md="3"
                                        controlId="validationFormik104"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>Taxi Model</Form.Label>
                                        <Form.Select
                                            placeholder="Taxi Model"
                                            name="taxi_model"
                                            value={values.taxi_model}
                                            onChange={handleChange}
                                            isInvalid={!!errors.taxi_model}
                                        >
                                            <option value="">Select</option>
                                            <option value="SUV">SUV</option>
                                            <option value="sedan">Sedan</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.taxi_model}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                < Col xs={12} md={6}>
                                    <Form.Group
                                        md="3"
                                        controlId="validationFormik105"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>Upload RC Book</Form.Label>
                                        <Form.Control
                                            type="file"
                                            placeholder="Please Upload RC Book"
                                            name="rc_book"
                                            // value={values.rc_book}
                                            // onChange={handleChange}
                                            onChange={handleImageChange}
                                            accept="application/pdf"
                                            onChange={(e) => { handleChange(e); handleImageChange(e) }}
                                            isInvalid={!!errors.rc_book}
                                        />
                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.rc_book}
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

export default AddTaxi;