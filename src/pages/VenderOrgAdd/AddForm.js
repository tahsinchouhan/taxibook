import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { Stepper } from "react-form-stepper";
import { API_PATH } from "../../Path/Path";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { FaWhatsapp } from "react-icons/fa";
import runmen from "../../assets/img/runmen.png";
import { useSelector } from "react-redux";

const schema = yup.object().shape({
  vendorSchema: yup.object().shape({
    serial: yup.string().required(),
    venderName: yup.string().required(),
    vender_mobile: yup.string().required(),
    vendor_category: yup.string(),
    email: yup.string().required(),
    id_proof: yup.string().required(),
    service_name: yup.string(),
  }),
  orgSchema: yup.object().shape({
    serial_number: yup.string().required(),
    org_name: yup.string().required(),
    address: yup.string().required(),
    name: yup.string().required(),
    org_email: yup.string().required(),
    phone: yup.string().required(),
    acc_name: yup.string().required(),
    acc_number: yup.string().required(),
    ifsc_code: yup.string().required(),
    acc_type: yup.string().required(),
    upi_id: yup.string().required(),
    pan_number: yup.string().required(),
    adhaar_number: yup.string().required()
  }),
});


function AddForm() {
  const history = useHistory();
  const [show, setShow] = useState(0);
  const [catg, setCatg] = useState([]);
  const [serviceNm, setServiceNm] = useState([]);
  const { data: apiData, tripData, booking_id } = useSelector(state => state.busReducer)
  const goHome = () => {
    history.push("/");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    vendorCategory();
    serviceName();
  }, []);


  const onsubmitVendor = (values) => {
    console.log("submit vender");
    fetch(API_PATH + "/api/v1/vendor/create", {
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
  };
  const backToVender = () => {
    setShow(0);
  };

  const onSubmitOrg = (values) => {

    fetch(API_PATH + "/api/v1/organization/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("org Register successFully", res);
        if (res.status === "CREATED") {
          history.push("/CongratulationPage");
        } else {
          console.log("Error:::::::");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const vendorCategory = () => {
    fetch(API_PATH + "/api/v1/vendorcategory/list", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setCatg(res.data);
        console.log("Book Genre Data", res.data);
      })
      .catch((error) => console.log("Genre Lookup Err::", error));

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

  return (
    <>
      <Header />
      <Stepper
        steps={[{ label: "Vender Registration" }, { label: "organization Registration" }, { label: "Congratulations" }]}
        activeStep={show}
      />
      <div className="container" style={{ width: "70%" }}>
        {show == 0 ?
          <Formik
            validationSchema={schema.vendorSchema}
            onSubmit={(values) => onsubmitVendor(values)}

            initialValues={{
              serial: '',
              venderName: '',
              vender_mobile: '',
              vendor_category: '',
              email: '',
              id_proof: '',
              service_name: ''
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
                  < Col xs={12} md={12}>
                    <Form.Group
                      md="4"
                      controlId="validationFormik101"
                      className="position-relative mb-3"
                    >
                      <Form.Label>Serial Number:</Form.Label>
                      <Form.Control
                        type="number"
                        name="serial"
                        value={values.serial}
                        onChange={handleChange}
                        isInvalid={!!errors.serial}
                      />
                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.serial}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  < Col xs={12} md={12}>
                    <Form.Group

                      md="4"
                      controlId="validationFormik102"
                      className="position-relative mb-3"
                    >
                      <Form.Label>Vendor Name:</Form.Label>
                      <Form.Control
                        type="text"
                        name="venderName"
                        placeholder="Vendor Name"
                        value={values.venderName}
                        onChange={handleChange}
                        isInvalid={!!errors.venderName}
                      />

                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.venderName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>


                  < Col xs={12} md={12}>
                    <Form.Group
                      md="6"
                      controlId="validationFormik103"
                      className="position-relative mb-3"
                    >
                      <Form.Label>Vendor Phone number:</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Vendor phone number"
                        name="vender_mobile"
                        value={values.vender_mobile}
                        onChange={handleChange}
                        isInvalid={!!errors.vender_mobile}
                      />

                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.vender_mobile}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  < Col xs={12} md={12}>
                    <Form.Group

                      md="3"
                      controlId="validationFormik104"
                      className="position-relative mb-3"
                    >
                      <Form.Label>Vendor Category:</Form.Label>
                      <Form.Select
                        placeholder="Vendor Category"
                        name="vendor_category"
                        value={values.vendor_category}
                        onChange={handleChange}
                        isInvalid={!!errors.vendor_category}
                      >
                        {/* <option >Select</option> */}
                        {catg.map((item, key) => {
                          return (
                            <option key={key}>{item.category_name}</option>

                          )
                        })}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.vendor_category}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  < Col xs={12} md={12}>
                    <Form.Group

                      md="3"
                      controlId="validationFormik105"
                      className="position-relative mb-3"
                    >
                      <Form.Label>Vendor Email Id:</Form.Label>
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
                  < Col xs={12} md={12}>
                    <Form.Group

                      md="3"
                      controlId="validationFormik105"
                      className="position-relative mb-3"
                    >
                      <Form.Label>Id Proof</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Please Enter your Id proof"
                        name="id_proof"
                        value={values.id_proof}
                        onChange={handleChange}
                        isInvalid={!!errors.id_proof}
                      />

                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.id_proof}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  < Col xs={12} md={12}>
                    <Form.Group
                      md="3"
                      controlId="validationFormik104"
                      className="position-relative mb-3"
                    >
                      <Form.Label>Service Name:</Form.Label>
                      <Form.Select
                        placeholder="Service Name"
                        name="service_name"
                        onChange={handleChange}
                        //value={values.service_name}
                        isInvalid={!!errors.service_name}
                      >
                        <option  >Select</option>
                        {serviceNm.map((item, key) => {
                          return (
                            <option key={key} value={item.service_name} >{item.service_name}</option>
                          )
                        })}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.service_name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>


                </Row>
                <Button type="submit" className="locationpass-btn mt-3 mb-5" >Next</Button>
              </Form>
            )}
          </Formik>
          : show == 1 ?
            <>
              <Formik
                validationSchema={schema.orgSchema}
                onSubmit={(values) => onSubmitOrg(values)}
                initialValues={{
                  serial_number: '',
                  org_name: '',
                  acc_name: '',
                  address: '',
                  name: '',
                  org_email: '',
                  phone: '',
                  acc_name: '',
                  acc_number: '',
                  ifsc_code: '',
                  acc_type: '',
                  upi_id: '',
                  pan_number: '',
                  adhaar_number: '',
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
                      < Col xs={12} md={12}>
                        <Form.Group
                          md="4"
                          controlId="validationFormik101"
                          className="position-relative mb-3"
                        >
                          <Form.Label>Serial Number:</Form.Label>
                          <Form.Control
                            type="text"
                            name="number"
                            value={values.serial_number}
                            onChange={handleChange}
                            isInvalid={!!errors.serial_number}
                          />
                          <Form.Control.Feedback type="invalid" tooltip>
                            {errors.serial_number}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      < Col xs={12} md={12}>
                        <Form.Group
                          md="4"
                          controlId="validationFormik102"
                          className="position-relative mb-3"
                        >
                          <Form.Label>Name of organization:</Form.Label>
                          <Form.Control
                            type="name"
                            name="org_name"
                            placeholder="Name of organization"
                            value={values.org_name}
                            onChange={handleChange}
                            isInvalid={!!errors.org_name}
                          />

                          <Form.Control.Feedback type="invalid" tooltip>
                            {errors.org_name}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>


                      < Col xs={12} md={12}>
                        <Form.Group
                          md="6"
                          controlId="validationFormik103"
                          className="position-relative mb-3"
                        >
                          <Form.Label>Address:</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Address"
                            name="address"
                            value={values.address}
                            onChange={handleChange}
                            isInvalid={!!errors.address}
                          />

                          <Form.Control.Feedback type="invalid" tooltip>
                            {errors.address}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      < Col xs={12} md={12}>
                        <Form.Group

                          md="3"
                          controlId="validationFormik104"
                          className="position-relative mb-3"
                        >
                          <Form.Label>Name:</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            isInvalid={!!errors.name}
                          />
                          <Form.Control.Feedback type="invalid" tooltip>
                            {errors.name}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      < Col xs={12} md={12}>
                        <Form.Group

                          md="3"
                          controlId="validationFormik105"
                          className="position-relative mb-3"
                        >
                          <Form.Label>Org Email Id:</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter Email Address"
                            name="org_email"
                            value={values.org_email}
                            onChange={handleChange}
                            isInvalid={!!errors.org_email}
                          />

                          <Form.Control.Feedback type="invalid" tooltip>
                            {errors.org_email}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      < Col xs={12} md={12}>
                        <Form.Group
                          md="3"
                          controlId="validationFormik105"
                          className="position-relative mb-3"
                        >
                          <Form.Label>Phone</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Please Enter a valid Phone Number"
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

                      <Col xs={12} md={12}>
                        <Form.Group
                          md="3"
                          controlId="validationFormik105"
                          className="position-relative mb-3"
                        >
                          <Form.Label>Name on Account Number</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter The Name on Account Number"
                            name="acc_name"
                            value={values.acc_name}
                            onChange={handleChange}
                            isInvalid={!!errors.acc_name}
                          />

                          <Form.Control.Feedback type="invalid" tooltip>
                            {errors.acc_name}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={12}>
                        <Form.Group
                          md="3"
                          controlId="validationFormik105"
                          className="position-relative mb-3"
                        >
                          <Form.Label>Account Number</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your Account Number"
                            name="acc_number"
                            value={values.acc_number}
                            onChange={handleChange}
                            isInvalid={!!errors.acc_number}
                          />

                          <Form.Control.Feedback type="invalid" tooltip>
                            {errors.acc_number}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col xs={12} md={12}>
                        <Form.Group
                          md="3"
                          controlId="validationFormik105"
                          className="position-relative mb-3"
                        >
                          <Form.Label>IFSC Code</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your IFSC code"
                            name="ifsc_code"
                            value={values.ifsc_code}
                            onChange={handleChange}
                            isInvalid={!!errors.ifsc_code}
                          />

                          <Form.Control.Feedback type="invalid" tooltip>
                            {errors.ifsc_code}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col xs={12} md={12}>
                        <Form.Group
                          md="3"
                          controlId="validationFormik105"
                          className="position-relative mb-3"
                        >
                          <Form.Label>Account Type</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your Account Type"
                            name="acc_type"
                            value={values.acc_type}
                            onChange={handleChange}
                            isInvalid={!!errors.acc_type}
                          />

                          <Form.Control.Feedback type="invalid" tooltip>
                            {errors.acc_type}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col xs={12} md={12}>
                        <Form.Group
                          md="3"
                          controlId="validationFormik105"
                          className="position-relative mb-3"
                        >
                          <Form.Label>UPI Id</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter your UPI Id"
                            name="upi_id"
                            value={values.upi_id}
                            onChange={handleChange}
                            isInvalid={!!errors.upi_id}
                          />

                          <Form.Control.Feedback type="invalid" tooltip>
                            {errors.upi_id}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col xs={12} md={12}>
                        <Form.Group
                          md="3"
                          controlId="validationFormik105"
                          className="position-relative mb-3"
                        >
                          <Form.Label>PAN Number</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter your pan Card Number "
                            name="pan_number"
                            value={values.pan_number}
                            onChange={handleChange}
                            isInvalid={!!errors.pan_number}
                          />

                          <Form.Control.Feedback type="invalid" tooltip>
                            {errors.pan_number}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col xs={12} md={12}>
                        <Form.Group
                          md="3"
                          controlId="validationFormik105"
                          className="position-relative mb-3"
                        >
                          <Form.Label>Adhaar Number </Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter your adhaar card Number"
                            name="adhaar_number"
                            value={values.adhaar_number}
                            onChange={handleChange}
                            isInvalid={!!errors.adhaar_number}
                          />

                          <Form.Control.Feedback type="invalid" tooltip>
                            {errors.adhaar_number}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                    {/* <Button type="button" className="locationpass-btn mt-3 mb-5" onClick={backToVender} >Back</Button> */}
                    <Button type="submit" className="locationpass-btn mt-3 mb-5" >Submit</Button>

                  </Form>
                )}
              </Formik>
            </>
            : <>
              <div className="d-none d-md-block">
                <Header />
                <Container style={{ width: "70%", paddingTop: "50px" }}>
                  <Row>
                    <Col>
                      <div>
                        <img src={runmen} alt="" />
                      </div>
                    </Col>
                    <Col>
                      <div style={{ paddingTop: "60px" }}>
                        <div style={{ marginBottom: "20px" }}>
                          <h3 style={{ fontWeight: "bolder" }}>CONGRATULATIONS!</h3>
                          <span style={{ color: "black" }}>Your booking has been confirmed</span>

                          {/* <h3 style={{ fontWeight: "bolder" }}>Order ID</h3>
                     <span style={{ color: "black", marginBottom: "50px" }}>{booking_id}</span> */}
                          {/* <span style={{color:"black", marginBottom:"50px"}}>{apiData?.order_id}</span> */}
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
                <Footer />
              </div>

              {/*mobile-view*/}
              <div fluid className="d-md-none">
                <div
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
                      Booking Confirmed!
                    </h5>
                  </div>
                </div>
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                  <span style={{ fontWeight: "700", fontSize: "22px" }}>CONGRATULATIONS!</span><br />
                  <span style={{ fontSize: "13px" }}>Your booking has been confirmed</span>
                </div>
                <div>
                  <img src={runmen} alt="" style={{ width: "90%" }} />
                </div>
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ fontWeight: "bolder", marginBottom: "20px" }}>Order ID</h3>
                  <span style={{ color: "black", marginBottom: "50px" }}>{booking_id}</span>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div >
                    <Button
                      className="btn btn-success"
                      style={{
                        width: "186px",
                        textAlign: "center",
                        height: "52px",
                        borderRadius: "9px",
                        backgroundColor: "#0fa453",
                        fontWeight: "bold",
                        marginBottom: "20px"
                      }}
                    ><FaWhatsapp style={{ fontWeight: "bold", fontSize: "30px" }} />
                      <span> Whatsapp Link</span></Button>
                  </div>
                  <div>
                    <Button style={{
                      width: "186px",
                      textAlign: "center",
                      height: "52px",
                      borderRadius: "9px",
                      backgroundColor: " #FF4A68",
                      fontWeight: "bold",
                      marginBottom: "20px"
                    }}
                    >Download E-ticket</Button>
                  </div>
                  <div>
                    <Button style={{
                      width: "186px",
                      textAlign: "center",
                      height: "52px",
                      borderRadius: "9px",
                      backgroundColor: "",
                      fontWeight: "bold",
                      marginBottom: "20px"
                    }}
                    >Sent by Email</Button>
                  </div>
                  <div>
                    <Button style={{
                      width: "186px",
                      textAlign: "center",
                      height: "52px",
                      borderRadius: "9px",
                      backgroundColor: "#864BD8",
                      fontWeight: "bold",
                      marginBottom: "20px"
                    }}
                      onClick={goHome}
                    >Back to Home</Button>
                  </div>
                </div>
              </div>
            </>}
      </div>
      <Footer />

    </>
  );
}

export default AddForm;
// {show == 0? <h1>rhjrrh</h1> : show ==1 ? <h1>fjnjfn</h1>: <h1></h1>}