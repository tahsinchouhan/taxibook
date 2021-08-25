import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";

import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { Stepper } from "react-form-stepper";

import { API_PATH } from "../../Path/Path";
import { useHistory } from "react-router-dom";
import { Formik, Field } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  serial: yup.string().required(),
  venderName: yup.string().required(),
  vender_mobile: yup.string().required(),
  vendor_category: yup.string().required(),
  email: yup.string().required(),
  id_proof: yup.string().required(),
  acc_number: yup.string().required(),
});

const schemaTwo = yup.object().shape({
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

});

function AddForm() {
  const history = useHistory();
  const [show, setShow] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const onsubmitVendor = (values) => {

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

  return (
    <>
      <Header />
      <Stepper
        steps={[{ label: "Step 1" }, { label: "Step 2" }]}
        activeStep={show}
      />
      <div className="container" style={{ width: "70%" }}>
        {show == 0 ? (
          <Formik
            validationSchema={schema}
            onSubmit={(values) => onsubmitVendor(values)}
            initialValues={{
              sNo: '',
              vName: '',
              username: '',
              city: '',
              state: '',
              zip: '',
              file: null,
              terms: false,
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
                      <Form.Label>Vendor phone number:</Form.Label>
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
                      <Form.Control
                        type="text"
                        placeholder="Vendor Category:"
                        name="vendor_category"
                        value={values.vendor_category}
                        onChange={handleChange}
                        isInvalid={!!errors.vendor_category}
                      />
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
                </Row>
                <Button type="submit" className="locationpass-btn mt-3 mb-5" >Next</Button>
              </Form>
            )}
          </Formik>
        ) : (
          <>
           
            <Formik
              validationSchema={schemaTwo}
              onSubmit={(values) =>onSubmitOrg(values)}
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
                  <Button type="button" className="locationpass-btn mt-3 mb-5"  onClick={backToVender} >Back</Button>
                  <Button type="submit" className="locationpass-btn mt-3 mb-5" >Submit</Button>
                  
                </Form>
              )}
            </Formik>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default AddForm;
