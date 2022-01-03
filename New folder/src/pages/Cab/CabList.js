import React from "react";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import List from "./List";
import { Row, Col, Form } from "react-bootstrap";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const CabList = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        {" "}
        <p style={{ fontSize: "15px", padding: "0 10px" }}> Low Price</p>
      </Menu.Item>
      <Menu.Item key="1">
        {" "}
        <p style={{ fontSize: "15px", padding: "0 10px" }}> Hign Price</p>
      </Menu.Item>
    </Menu>
  );
  return (
    <div
      style={{
        width: "100%",
        marginTop: "0",
        top: "0",
        background: "white",
        backgroundColor: "white",
      }}
    >
      <Header />
      <div
        className="d-none d-md-block"
        style={{
          backgroundColor: "white",
          width: "80%",
          maxWidth: "1040px",
          margin: "40px auto",
        }}
      >
        <Row style={{ paddingBottom: "20px" }}>
          <Col md={9}>
            <h3
              className="fontweight"
              style={{
                fontSize: "19px",
                color: "#0FA453",
                fontWeight: 900,
              }}
            >
              Jagdalur To Bastar
            </h3>
            <span style={{ color: "black", fontWeight: 900, fontSize: "17px" }}>
              Change
            </span>
          </Col>
          <Col>
            <Form.Label
              className=""
              style={{
                fontSize: "33px",
                fontWeight: 900,
                marginLeft: "4px",
                color: "#a5a5a5",
                float: "right",
                paddingRight: "20px",
              }}
            >
              <Dropdown overlay={menu} trigger={["click"]}>
                <p
                  style={{
                    color: "gray",
                    fontSize: "18px",
                    fontWeight: "lighter",
                  }}
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Sort By <DownOutlined />
                </p>
              </Dropdown>
            </Form.Label>
          </Col>
        </Row>
      </div>
      <div>
        <List />
        <List />
        <List />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CabList;
