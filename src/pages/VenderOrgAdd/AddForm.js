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

  // const onSubmitOrg = () => {
  //   const orgDetails = {
  //     nameoforganization: orgName,
  //     address: address,
  //     name: name,
  //     email: oEmail,
  //     mobile: phone,
  //     account_type: accType,
  //     account_number: accNo,
  //     upi_id: upiId,
  //     adhaar_number: adhaarNo,
  //     pan_number: panNo,
  //   };

  //   fetch(API_PATH + "/api/v1/organization/create", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ orgDetails }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log("org Register successFully", res);
  //       if (res.status === "CREATED") {
  //         history.push("/CongratulationPage");
  //       } else {
  //         console.log("Error:::::::");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //     });
  // };

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
            onSubmit={(values)=>onsubmitVendor(values)}
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
          <h1>dnjd</h1>
          // <AvForm onSubmit={onSubmitOrg}>
          //   <AvField
          //     name="serialNo"
          //     label="Serial Number:"
          //     type="number"
          //     className=""
          //     errorMessage="Invalid Serial Number"
          //     value={serialNo}
          //     onChange={(e) => setSerialNo(e.target.value)}
          //     validate={{
          //       required: {
          //         value: true,
          //         errorMessage: "Please enter your Serial Number",
          //       },
          //     }}
          //   />

          //   <AvField
          //     name="org"
          //     label="Name of organization"
          //     type="text"
          //     errorMessage="Enter organization Name"
          //     placeholder="Name of organization"
          //     value={orgName}
          //     onChange={(e) => setOrgName(e.target.value)}
          //     validate={{
          //       required: {
          //         defaultValue: true,
          //         errorMessage: "Please enter organization Name",
          //       },
          //     }}
          //   />

          //   <AvField
          //     name="address"
          //     label="Address"
          //     type="text"
          //     errorMessage="Enter Your Address"
          //     placeholder="Address"
          //     value={address}
          //     onChange={(e) => setAddress(e.target.value)}
          //     validate={{
          //       required: {
          //         defaultValue: true,
          //         errorMessage: "Please enter Address",
          //       },
          //     }}
          //   />

          //   <AvField
          //     name="name"
          //     label="Name"
          //     type="text"
          //     errorMessage="Enter Your Name"
          //     placeholder="Name"
          //     value={name}
          //     onChange={(e) => setName(e.target.value)}
          //     validate={{
          //       required: {
          //         defaultValue: true,
          //         errorMessage: "Please enter Name",
          //       },
          //     }}
          //   />

          //   <AvField
          //     name="oEmail"
          //     label=" Vendor Email Id:"
          //     type="email"
          //     errorMessage="Invalid mail Id"
          //     // className="custom-inputField"
          //     placeholder="Enter Email Address"
          //     value={oEmail}
          //     onChange={(e) => setOEmail(e.target.value)}
          //     title="Email"
          //     validate={{
          //       required: {
          //         value: true,
          //         errorMessage: "Please enter your Email Address",
          //       },
          //     }}
          //   />

          //   <AvField
          //     name="phone"
          //     label="Phone"
          //     type="number"
          //     errorMessage="Please a valid Phone number"
          //     //className="custom-inputField"
          //     placeholder="Enter Phone Number"
          //     value={phone}
          //     onChange={(e) => setPhone(e.target.value)}
          //     validate={{
          //       required: {
          //         value: true,
          //         errorMessage: "Please enter 10 digit Mobile number",
          //       },
          //     }}
          //   />

          //   <AvField
          //     name="AccName"
          //     label="Name on Account Number"
          //     type="text"
          //     errorMessage="Enter The Name on Account Number"
          //     placeholder="Name on Account Number"
          //     value={accName}
          //     onChange={(e) => setAccName(e.target.value)}
          //     validate={{
          //       required: {
          //         defaultValue: true,
          //         errorMessage: "Please enter Name on Account Number",
          //       },
          //     }}
          //   />

          //   <AvField
          //     name="AccNo"
          //     label="Account Number"
          //     type="number"
          //     className=""
          //     errorMessage="Invalid Account Number"
          //     value={accNo}
          //     onChange={(e) => setAccNo(e.target.value)}
          //     validate={{
          //       required: {
          //         value: true,
          //         errorMessage: "Please enter Account Number",
          //       },
          //     }}
          //   />

          //   <AvField
          //     name="ifsc"
          //     label="IFSC Code"
          //     type="number"
          //     className=""
          //     errorMessage="Enter Valid IFSC Code"
          //     value={ifscNo}
          //     onChange={(e) => setIfscNo(e.target.value)}
          //     validate={{
          //       required: {
          //         value: true,
          //         errorMessage: "Please enter IFSC Code",
          //       },
          //     }}
          //   />

          //   <AvField
          //     type="select"
          //     name="select"
          //     label="Account Type"
          //     value={accType}
          //     onChange={(e) => setAccType(e.target.value)}
          //   >
          //     <option>Saving</option>
          //     <option>Current</option>
          //   </AvField>

          //   <AvField
          //     name="upiId"
          //     label="UPI Id"
          //     type="text"
          //     errorMessage="Enter UPI Id"
          //     placeholder="UPI Id"
          //     value={upiId}
          //     onChange={(e) => setUpiId(e.target.value)}
          //     validate={{
          //       required: {
          //         defaultValue: true,
          //         errorMessage: "Please enter UPI Id",
          //       },
          //     }}
          //   />

          //   <AvField
          //     name="panNo"
          //     label="Pan Number"
          //     type="number"
          //     className=""
          //     errorMessage="Enter Your Pan Number"
          //     value={panNo}
          //     onChange={(e) => setPanNo(e.target.value)}
          //     validate={{
          //       required: {
          //         value: true,
          //         errorMessage: "Please enter Valid Pan Number",
          //       },
          //     }}
          //   />

          //   <AvField
          //     name="adhaarNo"
          //     label="Adhaar Number"
          //     type="number"
          //     className=""
          //     errorMessage="Enter Your Adhaar Number"
          //     value={adhaarNo}
          //     onChange={(e) => setAdhaarNo(e.target.value)}
          //     validate={{
          //       required: {
          //         value: true,
          //         errorMessage: "Please enter Valid Adhaar Number",
          //       },
          //     }}
          //   />

          //   <Button type="button" color="success" onClick={backToVender}>
          //     Back
          //   </Button>

          //   <Button type="submit" color="success">
          //     Submit
          //   </Button>
          // </AvForm>
        )}
      </div>
      <Footer />
    </>
  );
}

export default AddForm;
