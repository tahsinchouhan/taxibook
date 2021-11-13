import React, { useState } from "react";
import { Tabs, DatePicker } from "antd";
import moment from "moment";
import "../../index.css";

const CabForm = () => {
  const { TabPane } = Tabs;

  const [activeTab, setActiveTab] = useState("1");

  function callback(key) {
    console.log(key);
    setActiveTab(key);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "350px",
          borderRadius: "5px",
          border: "1px solid gray",
        }}
      >
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane
            tab={
              activeTab === "1" ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "60px",
                    color: "white",
                    width: "116px",
                    border: "1px solid gray",
                    fontWeight: "bold",
                    backgroundColor: "#0fa453",
                  }}
                >
                  OUT STATION
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "60px",
                    width: "116px",
                    fontWeight: "bold",
                    color: "#0fa453",
                    border: "1px solid #0fa453",
                    // backgroundColor: "#9CFFC9",
                  }}
                >
                  {" "}
                  OUT STATION
                </div>
              )
            }
            key="1"
          >
            <div style={{ padding: "0 20px" }}>
              <div
                style={{
                  display: "flex",
                  marginBottom: "10px",
                  justifyContent: "space-evenly",
                }}
              >
                <div>
                  <input type="radio" name="oneway" id="" checked="checked" />
                  <span style={{ fontSize: "16px", margin: "10px" }}>
                    One Way
                  </span>
                </div>
                <div>
                  <input type="radio" name="oneway" id="" />
                  <span style={{ fontSize: "16px", margin: "10px" }}>
                    Round Trip
                  </span>
                </div>
              </div>

              <div style={{ display: "flex" }}>
                <h4
                  style={{
                    marginRight: "20px",
                    fontSize: "18px",
                    width: "70px",
                  }}
                >
                  From
                </h4>{" "}
                <input
                  style={{
                    width: "240px",
                    border: "1px solid gray",
                    borderRadius: "5px",
                    padding: "0 10px",
                  }}
                  type="text"
                  placeholder="Enter Starting Location"
                />
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <h4
                  style={{
                    marginRight: "20px",
                    fontSize: "18px",
                    width: "70px",
                  }}
                >
                  To
                </h4>{" "}
                <input
                  style={{
                    width: "240px",
                    border: "1px solid gray",
                    borderRadius: "5px",
                    padding: "0 10px",
                  }}
                  type="text"
                  placeholder="Enter Destination"
                />
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <h4
                  style={{
                    marginRight: "20px",
                    fontSize: "18px",
                  }}
                >
                  Pick Up
                </h4>
                <div>
                  <DatePicker
                    style={{
                      width: "220px",
                      border: "1px solid gray",
                      borderRadius: "5px",
                      padding: "5px",
                    }}
                    format="YYYY-MM-DD HH:mms"
                    showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "20px 0",
                }}
              >
                {/* <div
                  style={{
                    backgroundColor: "#0fa453",
                    width: "160px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    // fontWeight: "bold",
                    fontSize: "18px",
                    borderRadius: "8px",
                  }}
                >
                  Select Car
                </div> */}
              </div>
            </div>
          </TabPane>
          <TabPane
            tab={
              activeTab === "2" ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "60px",
                    color: "white",
                    width: "116px",
                    border: "1px solid gray",
                    fontWeight: "bold",
                    backgroundColor: "#0fa453",
                  }}
                >
                  LOCAL
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "60px",
                    width: "116px",
                    fontWeight: "bold",
                    color: "#0fa453",
                    border: "1px solid #0fa453",
                    // backgroundColor: "#9CFFC9",
                  }}
                >
                  LOCAL
                </div>
              )
            }
            key="2"
          >
            <div style={{ padding: "0 20px" }}>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <h4
                  style={{
                    marginRight: "20px",
                    fontSize: "18px",
                    width: "70px",
                  }}
                >
                  City
                </h4>{" "}
                <input
                  style={{
                    width: "240px",
                    border: "1px solid gray",
                    borderRadius: "5px",
                    padding: "0 10px",
                  }}
                  type="text"
                  placeholder="Enter City"
                />
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <h4
                  style={{
                    marginRight: "20px",
                    fontSize: "18px",
                  }}
                >
                  Pick Up
                </h4>
                <div>
                  <DatePicker
                    style={{
                      width: "220px",
                      border: "1px solid gray",
                      borderRadius: "5px",
                      padding: "5px",
                    }}
                    format="YYYY-MM-DD HH:mms"
                    showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "20px 0",
                }}
              >
                {/* <div
                  style={{
                    backgroundColor: "#0fa453",
                    width: "160px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",

                    fontSize: "18px",
                    borderRadius: "8px",
                  }}
                >
                  Select Car
                </div> */}
              </div>
            </div>
          </TabPane>
          <TabPane
            tab={
              activeTab === "3" ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "60px",
                    color: "white",
                    width: "116px",
                    border: "1px solid gray",
                    fontWeight: "bold",
                    backgroundColor: "#0fa453",
                  }}
                >
                  AIR PORT
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "60px",
                    width: "116px",
                    fontWeight: "bold",
                    color: "#0fa453",
                    border: "1px solid #0fa453",
                    // backgroundColor: "#9CFFC9",
                  }}
                >
                  {" "}
                  AIR PORT
                </div>
              )
            }
            key="3"
          >
            <div style={{ padding: "0 20px" }}>
              <div style={{ display: "flex" }}>
                <h4
                  style={{
                    marginRight: "20px",
                    fontSize: "18px",
                    width: "70px",
                  }}
                >
                  City
                </h4>{" "}
                <input
                  style={{
                    width: "230px",
                    border: "1px solid gray",
                    borderRadius: "5px",
                    padding: "0 10px",
                  }}
                  type="text"
                  placeholder="Enter City"
                />
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <h4
                  style={{
                    marginRight: "20px",
                    fontSize: "18px",
                    width: "70px",
                  }}
                >
                  Trip
                </h4>{" "}
                <select
                  style={{
                    width: "230px",
                    border: "1px solid gray",
                    borderRadius: "5px",
                    padding: "0 10px",
                  }}
                  name=""
                  id=""
                >
                  <option value="">Cab From Airport</option>
                  <option value="">Cab To Airport</option>
                </select>
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <h4
                  style={{
                    marginRight: "20px",
                    fontSize: "18px",
                    width: "70px",
                  }}
                >
                  From
                </h4>{" "}
                <input
                  style={{
                    width: "230px",
                    border: "1px solid gray",
                    borderRadius: "5px",
                    padding: "0 10px",
                  }}
                  type="text"
                  placeholder="Enter Starting Location"
                />
              </div>

              <div style={{ display: "flex", marginTop: "20px" }}>
                <h4
                  style={{
                    marginRight: "20px",
                    fontSize: "18px",
                  }}
                >
                  Pick Up Time
                </h4>
                <div>
                  <DatePicker
                    style={{
                      width: "220px",
                      border: "1px solid gray",
                      borderRadius: "5px",
                      padding: "5px",
                    }}
                    format="YYYY-MM-DD HH:mms"
                    showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "20px 0",
                }}
              >
                {/* <div
                  style={{
                    backgroundColor: "#0fa453",
                    width: "160px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    // fontWeight: "bold",
                    fontSize: "18px",
                    borderRadius: "8px",
                  }}
                >
                  Select Car
                </div> */}
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default CabForm;
