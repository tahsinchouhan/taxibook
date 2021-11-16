import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { Stepper } from "react-form-stepper";
import { API_PATH } from "../../Path/Path";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import runmen from "../../assets/img/runmen.png";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import S3FileUpload from "react-s3";
import '../../assets/css/registration.css'

const sub_categories = [
    {
        "category": "adventure",
        "sub_category": "Sightseeing",
    },
    {
        "category": "adventure",
        "sub_category": "Trekking",
    },
    {
        "category": "culture",
        "sub_category": "Tribal Homestays",
    },
    {
        "category": "heritage",
        "sub_category": "Religious Mandir",
    },
    {
        "category": "leisure",
        "sub_category": "Shopping Mall",
    },
    {
        "category": "leisure",
        "sub_category": "Hotel",
    },
    {
        "category": "leisure",
        "sub_category": "Restaurent",
    },
]

function Registration() {
    // for step 1
    const schema = yup.object().shape({
        userType: yup.string().required("User Type is required"),
        name: yup.string().required("Name is required"),
        phone: yup.string().required("Phone Number is required"),
        email: yup.string().required("Email is required"),
        password: yup.string().min(6).required('Password is required'),
        passwordConfirmation: yup.string().min(6)
            .oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
    })

    // for step 2
    const hotelSchema = yup.object().shape({
        designation: yup.string().required("Designation is required"),
        hotel_name: yup.string().required("Hotel Name is required"),
        address: yup.string().required("Address is required"),
        city: yup.string().required("City is required"),
        gst_upload: yup.mixed().required("GST File is required"),
    })

    const taxiSchema = yup.object().shape({
        designation: yup.string().required("Designation is required"),
        driver_name: yup.string().required("Driver Name is required"),
        driver_license_number: yup.string().required("Driver's License Number is required"),
        address: yup.string("Address is required"),
        city: yup.string().required("City is required"),
        car_number: yup.string().required("Taxi Number is required"),
        car_model: yup.string().required("Taxi Model is required"),
        rc_book_upload: yup.mixed().required(" RC Book is required"),
        // .test("FILE_SIZE", "Uploaded file is too big.", 
        //     value => { console.log("val",value.size); return !value || (value && value.size <= 1000000)} )
        // .test("FILE_FORMAT", "Uploaded file has unsupported format.", 
        //     value => !value || (value && ["pdf","png"].includes(value.type))),
        password: yup.string().min(6).required('Password is required'),
        passwordConfirmation: yup.string().min(6)
            .oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
    })

    const travelSchema = yup.object().shape({
        designation: yup.string().required("Designation is required"),
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

    const influencerSchema = yup.object().shape({
        designation: yup.string().required("Designation is required"),
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
    const history = useHistory();
    const [show, setShow] = useState(0);
    const [id, setId] = useState([]);
    const [Type, setType] = useState("")

    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const goHome = () => {
        history.push("/");
    };
    let ID;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [show]);

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

    const onsubmitRegistration = (values) => {
        console.log("submit regiration", values);
        setLoading(true)
        // setShow(1);
        setType(values.userType)
        if (values !== "") {
            fetch(API_PATH + "/api/v2/users/add", {
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
                        setId(res?.data?._id)
                        localStorage.setItem("RegID", res?.data?._id)
                        setMessage(res.message)
                    } else {
                        console.log("Error:::::::", res.message);
                        setError(res.message)
                    }
                    setLoading(false)
                })
                .catch((error) => {
                    console.log("error", error);
                    setLoading(false)
                });
        } else {
            console.log("errorrrrrrrrrrr");
            setLoading(false)
        }
        values = ""
    };

    const onSubmitHotel = (values) => {
        setLoading(true)
        console.log("ID", id)
        console.log("Hotel", values)
        fetch(API_PATH + "/api/v2/hotelregistration/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...values, user_id: id, gst_upload: upload }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.status === "CREATED") {
                    setShow(2);
                    setMessage(res.message)
                } else {
                    console.log("Error:::::::");
                    setError(res.message)
                }
                setLoading(false)
            })
            .catch((error) => {
                console.log("error", error);
                setLoading(false)
            });
    };

    const onSubmitTaxi = (values) => {
        setLoading(true)
        console.log("ID", id)
        console.log("Taxi", values)
        fetch(API_PATH + "/api/v2/taxiregistration/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...values, user_id: id, rc_book_upload: upload }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log("org Register successFully", res.data._id);
                if (res.status === "CREATED") {
                    setShow(2);
                    setMessage(res.message)
                } else {
                    console.log("Error:::::::");
                    setError(res.message)
                }
                setLoading(false)
            })
            .catch((error) => {
                console.log("error", error);
                setLoading(false)
            });
    };

    const onSubmitTravel = (values) => {
        setLoading(true)
        console.log("ID", id)
        console.log("Travel", values)
        fetch(API_PATH + "/api/v2/travelagent/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...values, user_id: id, document: upload  }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log("org Register successFully", res.data._id);
                if (res.status === "CREATED") {
                    setShow(2);
                    setMessage(res.message)
                } else {
                    console.log("Error:::::::");
                    setError(res.message)
                }
                setLoading(false)
            })
            .catch((error) => {
                console.log("error", error);
                setLoading(false)
            });
    };

    const onSubmitInfluencer = (values) => {
        setLoading(true)
        console.log("ID", id)
        console.log("Influencer", values)
        fetch(API_PATH + "/api/v2/influencer/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...values, user_id: id }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log("org Register successFully", res.data._id);
                if (res.status === "CREATED") {
                    setShow(2);
                    setMessage(res.message)
                } else {
                    console.log("Error:::::::");
                    setError(res.message)
                }
                setLoading(false)
            })
            .catch((error) => {
                console.log("error", error);
                setLoading(false)
            });
    };

    const RegID = localStorage.getItem("RegID")
    console.log("IDregLocal", RegID)

    const config = {
        bucketName: "travelbastar",
        dirName: "destination-images",
        region: "ap-south-1",
        accessKeyId: "AKIA6Q57UD6XELBTX2LM",
        secretAccessKey: "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",
    };


    const [filteredSub, setfilteredSub] = useState(sub_categories)
    const handleCategoryChange = (event) => {
        event.preventDefault();
        let cat = event.target.value;
        console.log(cat)
        let  resArr = sub_categories.filter((data) => {
            console.log(data)
            return data.category.toLowerCase().includes(cat.toLowerCase())
        });
        setfilteredSub(resArr)
    };

    return (
        <>
            <Header />
            {loading ? <Loader /> : null}
            {(message !== '') ? <Message msg={message} type="success" /> : null}
            {(error !== '') ? <Message msg={error} type="error" /> : null}
            <Stepper
                steps={[{ label: "Registration" }, { label: "Detail" }, { label: "Congratulations" }]}
                activeStep={show}
            />
            <div className="container reg_container" >
                {show === 0 ?
                    <Formik
                        validationSchema={schema}
                        onSubmit={(values) => onsubmitRegistration(values)}

                        initialValues={{
                            userType: '',
                            name: '',
                            phone: '',
                            email: '',
                            password: '',
                            passwordConfirmation: ''
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
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <Form.Group
                                            md="3"
                                            controlId="validationFormik104"
                                            className="position-relative mb-3"
                                        >
                                            <Form.Label>Type</Form.Label>
                                            <Form.Select
                                                placeholder="Type"
                                                name="userType"
                                                value={values.userType}
                                                onChange={handleChange}
                                                isInvalid={!!errors.userType}
                                            >
                                                <option value="">Select</option>
                                                <option value="Hotel">Hotel</option>
                                                <option value="Taxi">Taxi</option>
                                                <option value="Travel">Travel Agent</option>
                                                <option value="Influencer">Influencer</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid" tooltip>
                                                {errors.userType}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12} md={6}>
                                        <Form.Group
                                            md="4"
                                            controlId="validationFormik102"
                                            className="position-relative mb-3"
                                        >
                                            <Form.Label>Name:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                value={values.name}
                                                onChange={handleChange}
                                                required
                                                // isInvalid={!!errors.name}
                                            />
                                            <Form.Control.Feedback type="invalid" tooltip>
                                                {errors.name}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12} md={6}>
                                        <Form.Group
                                            md="6"
                                            controlId="validationFormik103"
                                            className="position-relative mb-3"
                                        >
                                            <Form.Label>Phone number:</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Phone Number"
                                                name="phone"
                                                value={values.phone}
                                                onChange={handleChange}
                                                required
                                                // isInvalid={!!errors.phone}
                                            />
                                            <Form.Control.Feedback type="invalid" tooltip>
                                                {errors.phone}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12} md={6}>
                                        <Form.Group
                                            md="3"
                                            controlId="validationFormik105"
                                            className="position-relative mb-3"
                                        >
                                            <Form.Label>Email Id:</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter Email Address"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                required
                                                // isInvalid={!!errors.email}
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
                                                required
                                                // isInvalid={!!errors.password}
                                            />
                                            <Form.Control.Feedback type="invalid" tooltip>
                                                {errors.password}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12} md={6}>
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
                                                required
                                                // isInvalid={!!errors.passwordConfirmation}
                                            />

                                            <Form.Control.Feedback type="invalid" tooltip>
                                                {errors.passwordConfirmation}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                </Row>
                                <div className="reg_submit_btn">
                                    <Button type="submit" className="locationpass-btn mt-3" >Next</Button>
                                </div>

                            </Form>
                        )}
                    </Formik>
                    : show === 1 ?
                        Type == "Hotel" ?
                            <Formik
                                validationSchema={hotelSchema}
                                onSubmit={(values) => onSubmitHotel(values)}
                                initialValues={{
                                    designation: '',
                                    hotel_name: '',
                                    address: '',
                                    city: '',
                                    gst_upload: '',
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
                                    <Form onSubmit={handleSubmit}>
                                        <div>
                                            <Row>
                                                <Col xs={12} md={6}>
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

                                                <Col xs={12} md={6}>
                                                    <Form.Group
                                                        md="4"
                                                        controlId="validationFormik102"
                                                        className="position-relative mb-3"
                                                    >
                                                        <Form.Label>Hotel Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name="hotel_name"
                                                            placeholder="Hotel Name"
                                                            value={values.hotel_name}
                                                            onChange={handleChange}
                                                            required
                                                            // isInvalid={!!errors.hotel_name}
                                                        />

                                                        <Form.Control.Feedback type="invalid" tooltip>
                                                            {errors.hotel_name}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>

                                                <Col xs={12} md={6}>
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
                                                            required
                                                            // isInvalid={!!errors.address}
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
                                                            required
                                                            // isInvalid={!!errors.city}
                                                        />
                                                        <Form.Control.Feedback type="invalid" tooltip>
                                                            {errors.city}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>

                                                </Col>

                                                <Col xs={12} md={6}>
                                                    <Form.Group
                                                        md="3"
                                                        controlId="validationFormik105"
                                                        className="position-relative mb-3"
                                                    >
                                                        <Form.Label>Upload GST (PDF Format)</Form.Label>
                                                        <Form.Control
                                                            type="file"
                                                            placeholder="Please Upload GST"
                                                            name="gst_upload"
                                                            // value={values.gst_upload}
                                                            // onChange={handleChange}
                                                            onChange={handleImageChange}
                                                            accept="application/pdf"
                                                            onChange={(e) => { handleChange(e); handleImageChange(e) }}
                                                            required
                                                            // isInvalid={!!errors.gst_upload}
                                                        />
                                                        <Form.Control.Feedback type="invalid" tooltip>
                                                            {errors.gst_upload}
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            <div className="reg_submit_btn">
                                                <Button type="submit" className="locationpass-btn mt-3" >Submit</Button>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                            :
                            Type == "Taxi" ?
                                <Formik
                                    validationSchema={taxiSchema}
                                    onSubmit={(values) => onSubmitTaxi(values)}
                                    initialValues={{
                                        designation: '',
                                        driver_name: '',
                                        driver_license_number: '',
                                        address: '',
                                        city: '',
                                        car_number: '',
                                        car_model: '',
                                        rc_book_upload: '',
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
                                        <Form onSubmit={handleSubmit}>
                                            <div>
                                                <Row>
                                                    <Col xs={12} md={6}>
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

                                                    <Col xs={12} md={6}>
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
                                                                // isInvalid={!!errors.address}
                                                                required
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
                                                                required
                                                                // isInvalid={!!errors.city}
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
                                                                required
                                                                // isInvalid={!!errors.driver_name}
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
                                                                name="driver_license_number"
                                                                placeholder="Driver License No"
                                                                value={values.driver_license_number}
                                                                onChange={handleChange}
                                                                required
                                                                // isInvalid={!!errors.driver_license_number}
                                                            />

                                                            <Form.Control.Feedback type="invalid" tooltip>
                                                                {errors.driver_license_number}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>

                                                    <Col xs={12} md={6}>
                                                        <Form.Group
                                                            md="4"
                                                            controlId="validationFormik101"
                                                            className="position-relative mb-3"
                                                        >
                                                            <Form.Label>Taxi Number</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                name="car_number"
                                                                value={values.car_number}
                                                                onChange={handleChange}
                                                                // isInvalid={!!errors.car_number}
                                                                required
                                                                placeholder=" Taxi Number"
                                                            />
                                                            <Form.Control.Feedback type="invalid" tooltip>
                                                                {errors.car_number}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>

                                                    <Col xs={12} md={6}>
                                                        <Form.Group
                                                            md="3"
                                                            controlId="validationFormik104"
                                                            className="position-relative mb-3"
                                                        >
                                                            <Form.Label>Taxi Model</Form.Label>
                                                            <Form.Select
                                                                placeholder="Taxi Model"
                                                                name="car_model"
                                                                value={values.car_model}
                                                                onChange={handleChange}
                                                                required
                                                                // isInvalid={!!errors.car_model}
                                                            >
                                                                <option value="">Select</option>
                                                                <option value="SUV">SUV</option>
                                                                <option value="sedan">Sedan</option>
                                                            </Form.Select>
                                                            <Form.Control.Feedback type="invalid" tooltip>
                                                                {errors.car_model}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>

                                                    <Col xs={12} md={6}>
                                                        <Form.Group
                                                            md="3"
                                                            controlId="validationFormik105"
                                                            className="position-relative mb-3"
                                                        >
                                                            <Form.Label>Upload RC Book</Form.Label>
                                                            <Form.Control
                                                                type="file"
                                                                placeholder="Please Upload RC Book"
                                                                name="rc_book_upload"
                                                                // value={values.rc_book_upload}
                                                                // onChange={handleChange}
                                                                onChange={handleImageChange}
                                                                accept="application/pdf"
                                                                onChange={(e) => { handleChange(e); handleImageChange(e) }}
                                                                // isInvalid={!!errors.rc_book_upload}
                                                                required
                                                            />
                                                            <Form.Control.Feedback type="invalid" tooltip>
                                                                {errors.rc_book_upload}
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>

                                                <div className="reg_submit_btn">
                                                    <Button type="submit" className="locationpass-btn mt-3" >Submit</Button>
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                                :
                                Type == "Travel" ?
                                    <Formik
                                        validationSchema={travelSchema}
                                        onSubmit={(values) => onSubmitTravel(values)}
                                        initialValues={{
                                            designation: '',
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
                                            <Form onSubmit={handleSubmit}>
                                                <div>
                                                    <Row>
                                                        <Col xs={12} md={6}>
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

                                                        <Col xs={12} md={6}>
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
                                                                    required
                                                                    // isInvalid={!!errors.agency_name}
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
                                                                    required
                                                                    // isInvalid={!!errors.address}
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
                                                                    required
                                                                    // isInvalid={!!errors.city}
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
                                                                    // onChange={handleChange}
                                                                    onChange={(e) => { handleChange(e); handleCategoryChange(e) }}
                                                                    required
                                                                    // isInvalid={!!errors.category}
                                                                >
                                                                    <option value="">Select</option>
                                                                    <option value="leisure">Leisure</option>
                                                                    <option value="adventure">Adventure</option>
                                                                    <option value="heritage">Heritage</option>
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
                                                                    required
                                                                    // isInvalid={!!errors.sub_category}
                                                                >
                                                                    <option value="">Select</option>
                                                                    {/* <option value="sightseeing">Sightseeing</option>
                                                                    <option value="trekking">Trekking</option> */}
                                                                    {
                                                                        filteredSub.map((item,key)=>(
                                                                            <option value={item.sub_category} key={key}>{item.sub_category}</option>

                                                                        ))
                                                                    }
                                                                </Form.Select>
                                                                <Form.Control.Feedback type="invalid" tooltip>
                                                                    {errors.sub_category}
                                                                </Form.Control.Feedback>
                                                            </Form.Group>
                                                        </Col>

                                                        <Col xs={12} md={6}>
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
                                                                    required
                                                                    // isInvalid={!!errors.document}
                                                                />
                                                                <Form.Control.Feedback type="invalid" tooltip>
                                                                    {errors.document}
                                                                </Form.Control.Feedback>
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>

                                                    <div className="reg_submit_btn">
                                                        <Button type="submit" className="locationpass-btn mt-3" >Submit</Button>
                                                    </div>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                    :
                                    <Formik
                                        validationSchema={influencerSchema}
                                        onSubmit={(values) => onSubmitInfluencer(values)}
                                        initialValues={{
                                            designation: '',
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
                                            <Form onSubmit={handleSubmit}>
                                                <div>
                                                    <Row>
                                                        <Col xs={12} md={6}>
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

                                                        <Col xs={12} md={6}>
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
                                                                    required
                                                                    // isInvalid={!!errors.address}
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
                                                                    required
                                                                    // isInvalid={!!errors.city}
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
                                                                    required
                                                                    // isInvalid={!!errors.about_you}
                                                                />

                                                                <Form.Control.Feedback type="invalid" tooltip>
                                                                    {errors.about_you}
                                                                </Form.Control.Feedback>
                                                            </Form.Group>
                                                        </Col>

                                                        <Col xs={12} md={6}>
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
                                                                    required
                                                                    // isInvalid={!!errors.area_of_interest}
                                                                />

                                                                <Form.Control.Feedback type="invalid" tooltip>
                                                                    {errors.area_of_interest}
                                                                </Form.Control.Feedback>
                                                            </Form.Group>
                                                        </Col>

                                                        <Col xs={12} md={6}>
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
                                                                    required
                                                                    // isInvalid={!!errors.profile_url}
                                                                />
                                                                <Form.Control.Feedback type="invalid" tooltip>
                                                                    {errors.profile_url}
                                                                </Form.Control.Feedback>
                                                            </Form.Group>
                                                        </Col>

                                                        <Col xs={12} md={6}>
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
                                                                    required
                                                                    // isInvalid={!!errors.page_url}
                                                                />

                                                                <Form.Control.Feedback type="invalid" tooltip>
                                                                    {errors.page_url}
                                                                </Form.Control.Feedback>
                                                            </Form.Group>
                                                        </Col>

                                                        <Col xs={12} md={6}>
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
                                                                    required
                                                                    // isInvalid={!!errors.channel_name}
                                                                />

                                                                <Form.Control.Feedback type="invalid" tooltip>
                                                                    {errors.channel_name}
                                                                </Form.Control.Feedback>
                                                            </Form.Group>
                                                        </Col>

                                                        <Col xs={12} md={6}>
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
                                                                    required
                                                                    // isInvalid={!!errors.no_of_followers}
                                                                />

                                                                <Form.Control.Feedback type="invalid" tooltip>
                                                                    {errors.no_of_followers}
                                                                </Form.Control.Feedback>
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>

                                                    <div className="reg_submit_btn">
                                                        <Button type="submit" className="locationpass-btn mt-3" >Submit</Button>
                                                    </div>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                        : <>
                            <div className="d-none d-md-block">
                                <Container style={{ width: "100%", paddingTop: "50px" }}>
                                    <Row>
                                        <Col md={2}>
                                            <div>
                                                <img src={runmen} alt="Congrats" />
                                            </div>
                                        </Col>
                                        <Col md={4}></Col>
                                        <Col md={6}>
                                            <div style={{ paddingTop: "60px" }}>
                                                <div style={{ marginBottom: "20px" }}>
                                                    <h3 style={{ fontWeight: "bolder" }}>Thank You For Registration!</h3>
                                                    <span style={{ color: "black" }}>Our team will contact with you soon</span>
                                                </div>

                                                <div>
                                                    <div>
                                                        <Button
                                                            style={{
                                                                width: "186px",
                                                                textAlign: "center",
                                                                height: "52px",
                                                                borderRadius: "9px",
                                                                backgroundColor: "#864BD8",
                                                                borderColor: "#864BD8",
                                                                fontWeight: "bold",
                                                                marginBottom: "20px"
                                                            }}
                                                            onClick={goHome}
                                                        >Back to Home</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>

                            {/*mobile-view*/}
                            <div fluid className="d-md-none">
                                {/* <div
                                    className="tatibandh d-flex"
                                    style={{
                                        height: "85px",
                                        backgroundColor: "#0FA453",
                                        color: "white",
                                        justifyContent: "center"
                                    }}
                                >
                                    <div>
                                        <h5
                                            style={{
                                                // marginLeft: "110px",
                                                paddingTop: "29px",
                                                fontSize: "17px",
                                                backgroundColor: "#0FA453",
                                                fontWeight: "bolder",
                                                color: "white",
                                                textAlign: "center",
                                            }}
                                        >
                                            Registration SuccessFully!
                                        </h5>
                                    </div>
                                </div> */}

                                <div style={{ marginTop: "20px", textAlign: "center" }}>
                                    <span style={{ fontWeight: "700", fontSize: "22px" }}>Thank You For Registration!</span><br />
                                    <span style={{ fontSize: "13px" }}>Our team will contact with you soon</span>
                                </div>

                                <div>
                                    <img src={runmen} alt="" style={{ width: "90%" }} />
                                </div>

                                <div style={{ textAlign: "center" }}>
                                    <div>
                                        <Button style={{
                                            width: "186px",
                                            textAlign: "center",
                                            height: "52px",
                                            borderRadius: "9px",
                                            backgroundColor: "#864BD8",
                                            borderColor: "#864BD8",
                                            fontWeight: "bold",
                                            marginBottom: "20px",
                                            marginTop: "20px"
                                        }}
                                            onClick={goHome}
                                        >Back to Home</Button>
                                    </div>
                                </div>
                            </div>
                        </>}
                {console.log("ididididididid", ID)}
            </div>

            <div className="d-none d-md-block">
                <Footer />
            </div>
            <div className="d-md-none" style={(show !== 2) ? { paddingBlockEnd: "80px" } : null}>
                <Footer />
            </div>
        </>
    );
}

export default Registration;