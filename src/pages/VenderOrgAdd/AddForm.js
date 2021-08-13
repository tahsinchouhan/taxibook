import React, { useState,useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { Stepper } from "react-form-stepper";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button } from "reactstrap";
import { API_PATH } from "../../Path/Path";
import { useHistory } from "react-router-dom";

function AddForm() {
  const history = useHistory();

  const [show, setShow] = useState(0);
  const [sNo, setSno] = useState("");
  const [vName, setVName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [idProof, setIdProof] = useState("");

  const [categoryName, setCategoryName] = useState("");
  const [serialNo, setSerialNo] = useState("");
  const [orgName, setOrgName] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [oEmail, setOEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [accName, setAccName] = useState("");
  const [accNo, setAccNo] = useState("");
  const [ifscNo, setIfscNo] = useState("");
  const [accType, setAccType] = useState("");
  const [upiId, setUpiId] = useState("");
  const [panNo, setPanNo] = useState("");
  const [aadharNo, setAadharNo] = useState("");


  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);


  const onsubmitVendor = () => {
    console.log("fhhgjf");
    const venderDetails = {
      name: vName,
      email: email,
      mobile: mobile,
      category_name: categoryName,
      serialnumber: sNo,
    };
    if (
      venderDetails.name &&
      venderDetails.email &&
      venderDetails.mobile &&
      venderDetails.category_name &&
      venderDetails.serialnumber
    ) {
      // if (!venderDetails == "") {
        fetch(API_PATH + "/api/v1/vendor/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ venderDetails }),
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
      // } else {
      //   console.log("Error:::eroor");
      // }
    } else {
      console.log("Errror:::::::::");
    }
  };

  const backToVender = () => {
    setShow(0);
  };

  const onSubmitOrg = () => {
    const orgDetails = {
      nameoforganization: orgName,
      address: address,
      name: name,
      email: oEmail,
      mobile: phone,
      account_type: accType,
      account_number: accNo,
      upi_id: upiId,
      aadhar_number: aadharNo,
      pan_number: panNo,
    };

    fetch(API_PATH + "/api/v1/organization/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orgDetails }),
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
          <AvForm onSubmit={onsubmitVendor}>
            <AvField
              name="serial"
              label="Serial Number:"
              type="number"
              className=""
              errorMessage="Invalid Serial Number"
              value={sNo}
              onChange={(e) => setSno(e.target.value)}
              validate={{
                required: {
                  value: true,
                  errorMessage: "Please enter Serial Number",
                },
              }}
            />

            <AvField
              name="name"
              label="Vendor Name:"
              type="text"
              errorMessage="Enter Vendor Name"
              placeholder="Vendor Name"
              value={vName}
              onChange={(e) => setVName(e.target.value)}
              validate={{
                required: {
                  defaultValue: true,
                  errorMessage: "Please enter Vendor Name",
                },
              }}
            />

            <AvField
              name="mobile"
              label="Vendor phone number:"
              type="number"
              errorMessage="Enter Vendor phone number"
              placeholder="Vendor phone number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              validate={{
                required: {
                  defaultValue: true,
                  errorMessage: "Please enter Vendor Phone Number",
                },
              }}
            />

            <AvField
              type="select"
              name="select"
              label="Vendor Category:"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            >
              <option>VendorUpdate</option>
              <option>Cab Drive</option>
            </AvField>

            <AvField
              name="email"
              label=" Vendor Email Id:"
              type="email"
              errorMessage="Invalid mail Id"
              // className="custom-inputField"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              title="Email"
              validate={{
                required: {
                  value: true,
                  errorMessage: "Please enter your Email Address",
                },
              }}
            />

            <AvField
              name="id"
              label="Id Proof"
              type="number"
              errorMessage="Please your Id proof"
              //className="custom-inputField"
              placeholder="Id Proof"
              value={idProof}
              onChange={(e) => setIdProof(e.target.value)}
              validate={{
                required: {
                  value: true,
                  errorMessage: "Please enter Valid Id Proof",
                },
              }}
            />

            <Button type="submit" color="success">
              Next
            </Button>
          </AvForm>
        ) : (
          <AvForm onSubmit={onSubmitOrg}>
            <AvField
              name="serialNo"
              label="Serial Number:"
              type="number"
              className=""
              errorMessage="Invalid Serial Number"
              value={serialNo}
              onChange={(e) => setSerialNo(e.target.value)}
              validate={{
                required: {
                  value: true,
                  errorMessage: "Please enter your Serial Number",
                },
              }}
            />

            <AvField
              name="org"
              label="Name of organization"
              type="text"
              errorMessage="Enter organization Name"
              placeholder="Name of organization"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              validate={{
                required: {
                  defaultValue: true,
                  errorMessage: "Please enter organization Name",
                },
              }}
            />

            <AvField
              name="address"
              label="Address"
              type="text"
              errorMessage="Enter Your Address"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              validate={{
                required: {
                  defaultValue: true,
                  errorMessage: "Please enter Address",
                },
              }}
            />

            <AvField
              name="name"
              label="Name"
              type="text"
              errorMessage="Enter Your Name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              validate={{
                required: {
                  defaultValue: true,
                  errorMessage: "Please enter Name",
                },
              }}
            />

            <AvField
              name="oEmail"
              label=" Vendor Email Id:"
              type="email"
              errorMessage="Invalid mail Id"
              // className="custom-inputField"
              placeholder="Enter Email Address"
              value={oEmail}
              onChange={(e) => setOEmail(e.target.value)}
              title="Email"
              validate={{
                required: {
                  value: true,
                  errorMessage: "Please enter your Email Address",
                },
              }}
            />

            <AvField
              name="phone"
              label="Phone"
              type="number"
              errorMessage="Please a valid Phone number"
              //className="custom-inputField"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              validate={{
                required: {
                  value: true,
                  errorMessage: "Please enter 10 digit Mobile number",
                },
              }}
            />

            <AvField
              name="AccName"
              label="Name on Account Number"
              type="text"
              errorMessage="Enter The Name on Account Number"
              placeholder="Name on Account Number"
              value={accName}
              onChange={(e) => setAccName(e.target.value)}
              validate={{
                required: {
                  defaultValue: true,
                  errorMessage: "Please enter Name on Account Number",
                },
              }}
            />

            <AvField
              name="AccNo"
              label="Account Number"
              type="number"
              className=""
              errorMessage="Invalid Account Number"
              value={accNo}
              onChange={(e) => setAccNo(e.target.value)}
              validate={{
                required: {
                  value: true,
                  errorMessage: "Please enter Account Number",
                },
              }}
            />

            <AvField
              name="ifsc"
              label="IFSC Code"
              type="number"
              className=""
              errorMessage="Enter Valid IFSC Code"
              value={ifscNo}
              onChange={(e) => setIfscNo(e.target.value)}
              validate={{
                required: {
                  value: true,
                  errorMessage: "Please enter IFSC Code",
                },
              }}
            />

            <AvField
              type="select"
              name="select"
              label="Account Type"
              value={accType}
              onChange={(e) => setAccType(e.target.value)}
            >
              <option>Saving</option>
              <option>Current</option>
            </AvField>

            <AvField
              name="upiId"
              label="UPI Id"
              type="text"
              errorMessage="Enter UPI Id"
              placeholder="UPI Id"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              validate={{
                required: {
                  defaultValue: true,
                  errorMessage: "Please enter UPI Id",
                },
              }}
            />

            <AvField
              name="panNo"
              label="Pan Number"
              type="number"
              className=""
              errorMessage="Enter Your Pan Number"
              value={panNo}
              onChange={(e) => setPanNo(e.target.value)}
              validate={{
                required: {
                  value: true,
                  errorMessage: "Please enter Valid Pan Number",
                },
              }}
            />

            <AvField
              name="aadharNo"
              label="Aadhar Number"
              type="number"
              className=""
              errorMessage="Enter Your Aadhar Number"
              value={aadharNo}
              onChange={(e) => setAadharNo(e.target.value)}
              validate={{
                required: {
                  value: true,
                  errorMessage: "Please enter Valid Aadhar Number",
                },
              }}
            />

            <Button type="button" color="success" onClick={backToVender}>
              Back
            </Button>

            <Button type="submit" color="success">
              Submit
            </Button>
          </AvForm>
        )}
      </div>
      <Footer />
    </>
  );
}

export default AddForm;
