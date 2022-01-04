import React from "react";
import city1 from "../../assets/img/city.png";
import { Tabs } from "antd";

const CabDetails = () => {
  const { TabPane } = Tabs;

  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={
            <div style={{ marginRight: "20px", fontSize: "17px" }}>
              Inclusion
            </div>
          }
          key="1"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                color: "grey",
                padding: "10px",
                fontSize: "16px",
                fontFamily: "sans-serif",
              }}
            >
              <div
                style={{
                  border: "1px solid green",
                  borderRadius: "100%",
                  width: "60px",
                  height: "60px",
                  marginRight: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <img
                  alt="img"
                  src={city1}
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              Basefare for 66 Km
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                color: "grey",
                padding: "10px",
                fontSize: "16px",
                fontFamily: "sans-serif",
              }}
            >
              <div
                style={{
                  border: "1px solid green",
                  borderRadius: "100%",
                  width: "60px",
                  height: "60px",
                  marginRight: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <img
                  alt="img"
                  src={city1}
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              Driver Allowance
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                color: "grey",
                padding: "10px",
                fontSize: "16px",
                fontFamily: "sans-serif",
              }}
            >
              <div
                style={{
                  border: "1px solid green",
                  borderRadius: "100%",
                  width: "60px",
                  height: "60px",
                  marginRight: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <img
                  alt="img"
                  src={city1}
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              State Tax and Toll
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                color: "grey",
                padding: "10px",
                fontSize: "16px",
                fontFamily: "sans-serif",
              }}
            >
              <div
                style={{
                  border: "1px solid green",
                  borderRadius: "100%",
                  width: "60px",
                  height: "60px",
                  marginRight: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <img
                  alt="img"
                  src={city1}
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              GST (5%)
            </span>
          </div>
        </TabPane>
        <TabPane
          tab={
            <div style={{ margin: "0 20px", fontSize: "17px" }}>Exclusion</div>
          }
          key="2"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                color: "grey",
                padding: "10px",
                fontSize: "16px",
                fontFamily: "sans-serif",
              }}
            >
              <div
                style={{
                  border: "1px solid green",
                  borderRadius: "100%",
                  width: "60px",
                  height: "60px",
                  marginRight: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <img
                  alt="img"
                  src={city1}
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              Pay ₹15/km after 66 km
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                color: "grey",
                padding: "10px",
                fontSize: "16px",
                fontFamily: "sans-serif",
              }}
            >
              <div
                style={{
                  border: "1px solid green",
                  borderRadius: "100%",
                  width: "60px",
                  height: "60px",
                  marginRight: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <img
                  alt="img"
                  src={city1}
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              Night Allowance (₹250)
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                color: "grey",
                padding: "10px",
                fontSize: "16px",
                fontFamily: "sans-serif",
              }}
            >
              <div
                style={{
                  border: "1px solid green",
                  borderRadius: "100%",
                  width: "60px",
                  height: "60px",
                  marginRight: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <img
                  alt="img"
                  src={city1}
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              Multiple pickups/drops
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                color: "grey",
                padding: "10px",
                fontSize: "16px",
                fontFamily: "sans-serif",
              }}
            >
              <div
                style={{
                  border: "1px solid green",
                  borderRadius: "100%",
                  width: "60px",
                  height: "60px",
                  marginRight: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <img
                  alt="img"
                  src={city1}
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              Breaks and detours
            </span>
          </div>
        </TabPane>
        <TabPane
          tab={
            <div style={{ margin: "0 20px", fontSize: "17px" }}>Facilities</div>
          }
          key="3"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                color: "grey",
                padding: "10px",
                fontSize: "16px",
                fontFamily: "sans-serif",
              }}
            >
              <div
                style={{
                  border: "1px solid green",
                  borderRadius: "100%",
                  width: "60px",
                  height: "60px",
                  marginRight: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <img
                  alt="img"
                  src={city1}
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              4 seater
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                color: "grey",
                padding: "10px",
                fontSize: "16px",
                fontFamily: "sans-serif",
              }}
            >
              <div
                style={{
                  border: "1px solid green",
                  borderRadius: "100%",
                  width: "60px",
                  height: "60px",
                  marginRight: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <img
                  alt="img"
                  src={city1}
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              2 bags
            </span>

            <span
              style={{
                display: "flex",
                alignItems: "center",
                color: "grey",
                padding: "10px",
                fontSize: "16px",
                fontFamily: "sans-serif",
              }}
            >
              <div
                style={{
                  border: "1px solid green",
                  borderRadius: "100%",
                  width: "60px",
                  height: "60px",
                  marginRight: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <img
                  alt="img"
                  src={city1}
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              AC
            </span>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default CabDetails;
