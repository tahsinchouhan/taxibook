import React from "react";
import { Button, Row, Col, Form, Container, Card,InputGroup,FormControl } from "react-bootstrap";
import {FaArrowLeft, FaSistrix } from "react-icons/fa";


function Search() {
  return (
    <div>
        <Container className="d-flex mt-4">
        <FaArrowLeft className="mt-3"/>
      <InputGroup className=" airoIcon my-2">
        <FormControl id="inlineFormInputGroup" placeholder="Search...."/>
      </InputGroup>
        </Container>
        <Container>
            <div className="">
            <Row className="destiIcon m-3">
                <Col xs={4} md={4}>
                <Button variant="primary">Destination</Button>
                </Col>
                <Col xs={4} md={4}>
                <Button variant="success">Destination</Button>
                </Col>
                <Col xs={4} md={4}>
                <Button variant="danger">Destination</Button>
                </Col>
            </Row>
            </div>
            </Container>
            <Container>
              
            </Container>
    </div>
  );
}

export default Search;

