import React from 'react'
// import { Container } from '@material-ui/core'
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";



function RatanCard() {
    return (
        <div>
            <Container>
                <Row>
                <Col xs={6} md={6}className="mansoon-row">
                  <div style={{ textAlign: "center", paddingTop: "10px" }}>
                    <span className="mansoon-item">MONSOON15</span>
                    <br />
                    <span className="mansoon-per"  style={{whiteSpace:"nowrap"}} >15% off in July 2021</span>
                   
                  </div>
                </Col>
                    <Col xs={6} md={6}>hello
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RatanCard

