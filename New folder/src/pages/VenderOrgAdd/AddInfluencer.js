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

function AddInfluencer() {
    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
        designation: yup.string().required("Designation is required"),
        phone: yup.string().required("Phone Number is required"),
        email: yup.string().required("Email is required"),
        about_you: yup.string().required("Agency Name is required"),
        address: yup.string().required("Address is required"),
        city: yup.string().required("City is required"),
        about_you: yup.string(),
        area_of_interest: yup.string(),
        profile_url: yup.string(),
        page_url: yup.string(),
        channel_name: yup.string(),
        no_of_followers: yup.string(),
        // document: yup.mixed().required("Document File is required"),
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
                console.log("object", data)
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
            fetch(API_PATH + "/api/v2/influencer/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log("Vendor Register successFully", res, { ...values});
                    if (res.status === "CREATED") {
                        setMessage(res.message)
                        resetForm()
                    } else {
                        console.log("Error:::::::", res);
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
                    <span>Registration</span> Form For Influencer
                </h4>
                <Formik
                    validationSchema={schema}
                    onSubmit={(values, { resetForm }) =>{ onSubmit(values,resetForm);}}
                    initialValues={{
                        name: '',
                        designation: '',
                        phone: '',
                        email: '',
                        about_you: '',
                        address: '',
                        city: '',
                        about_you: '',
                        area_of_interest: '',
                        profile_url: '',
                        page_url: '',
                        channel_name: '',
                        no_of_followers: '',
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
                                        md="4"
                                        controlId="validationFormik102"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>About You</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="about_you"
                                            placeholder="About You"
                                            value={values.about_you}
                                            onChange={handleChange}
                                            isInvalid={!!errors.about_you}
                                        />

                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.about_you}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                < Col xs={12} md={6}>
                                    <Form.Group
                                        md="4"
                                        controlId="validationFormik102"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>Area Of Interest</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="area_of_interest"
                                            placeholder="Area Of Interest"
                                            value={values.area_of_interest}
                                            onChange={handleChange}
                                            isInvalid={!!errors.area_of_interest}
                                        />

                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.area_of_interest}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                < Col xs={12} md={6}>
                                    <Form.Group
                                        md="4"
                                        controlId="validationFormik102"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>Profile URL</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="profile_url"
                                            placeholder="Profile URL"
                                            value={values.profile_url}
                                            onChange={handleChange}
                                            isInvalid={!!errors.profile_url}
                                        />
                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.profile_url}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                < Col xs={12} md={6}>
                                    <Form.Group
                                        md="4"
                                        controlId="validationFormik102"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>Page URL</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="page_url"
                                            placeholder="Page URL"
                                            value={values.page_url}
                                            onChange={handleChange}
                                            isInvalid={!!errors.page_url}
                                        />

                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.page_url}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                < Col xs={12} md={6}>
                                    <Form.Group
                                        md="4"
                                        controlId="validationFormik102"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>Channel</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="channel_name"
                                            placeholder="Channel"
                                            value={values.channel_name}
                                            onChange={handleChange}
                                            isInvalid={!!errors.channel_name}
                                        />

                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.channel_name}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                < Col xs={12} md={6}>
                                    <Form.Group
                                        md="4"
                                        controlId="validationFormik102"
                                        className="position-relative mb-3"
                                    >
                                        <Form.Label>No of Followers</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="no_of_followers"
                                            placeholder="No of Followers"
                                            value={values.no_of_followers}
                                            onChange={handleChange}
                                            isInvalid={!!errors.no_of_followers}
                                        />

                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {errors.no_of_followers}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                {/* < Col xs={12} md={6}>
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
                                </Col> */}
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

export default AddInfluencer;