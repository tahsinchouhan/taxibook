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

function AddTravelAgent() {
    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
        designation: yup.string().required("Designation is required"),
        phone: yup.string().required("Phone Number is required"),
        email: yup.string().required("Email is required"),
        agency_name: yup.string().required("Agency Name is required"),
        address: yup.string().required("Address is required"),
        city: yup.string().required("City is required"),
        category: yup.string().required("Category is required"),
        sub_category: yup.string().required("Sub Category is required"),
        document: yup.mixed().required("Document File is required"),
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

    const onSubmit = (values,resetForm) => {
        console.log("submit vender", values, { ...values, upload });
        setLoading(true)
        if (values !== "") {
            fetch(API_PATH + "/api/v2/travelagent/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...values, document: upload }),
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log("Travel Agent Register successFully", res,{ ...values, document: upload });
                    if (res.status === "CREATED") {
                        setMessage(res.message)
                        resetForm()
                    } else {
                        console.log("Error:::::::",res);
                        setError(res.message)
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
            <div className="container" style={{ width: "80%" }}>
              <h4 className="block__title">
                <span>Registration</span> Form For Travel Agent
              </h4>
                <Formik
                    validationSchema={schema}
                    onSubmit={(values, { resetForm }) =>{ onSubmit(values,resetForm);}}
                    initialValues={{
                        name: '',
                        designation: '',
                        phone: '',
                        email: '',
                        agency_name: '',
                        address: '',
                        city: '',
                        category: '',
                        sub_category: '',
                        document: '',
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
                                            title="Password"
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
                                        <Form.Label>Agency Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="agency_name"
                                            placeholder="Agency Name"
                                            value={values.agency_name}
                                            onChange={handleChange}
                                            isInvalid={!!errors.agency_name}
                                        />

                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.agency_name}
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

                                <Col xs={12} md={6}>
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

                                        md="3"
                                        controlId="validationFormik104"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>Category</Form.Label>
                                        <Form.Select
                                            placeholder="Category"
                                            name="category"
                                            value={values.category}
                                            onChange={handleChange}
                                            isInvalid={!!errors.category}
                                        >
                                            <option value="">Select</option>
                                            <option value="leisure">Leisure</option>
                                            <option value="adventure">Adventure</option>
                                            <option value="religious">Religious</option>
                                            <option value="culture">Culture</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.category}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                <Col xs={12} md={6}>
                                    <Form.Group
                                        md="3"
                                        controlId="validationFormik104"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>Sub Category</Form.Label>
                                        <Form.Select
                                            placeholder="Sub Category"
                                            name="sub_category"
                                            value={values.sub_category}
                                            onChange={handleChange}
                                            isInvalid={!!errors.sub_category}
                                        >
                                            <option value="">Select</option>
                                            <option value="sightseeing">Sightseeing</option>
                                            <option value="trekking">Trekking</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.sub_category}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                < Col xs={12} md={6}>
                                    <Form.Group
                                        md="3"
                                        controlId="validationFormik105"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>Upload Document</Form.Label>
                                        <Form.Control
                                            type="file"
                                            placeholder="Please Upload Document"
                                            name="document"
                                            // value={values.document}
                                            // onChange={handleChange}
                                            onChange={handleImageChange}
                                            onChange={(e) => { handleChange(e); handleImageChange(e) }}
                                            isInvalid={!!errors.document}
                                        />
                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.document}
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

export default AddTravelAgent;