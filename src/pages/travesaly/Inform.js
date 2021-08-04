import React from 'react'
import { Button, Row, Col, Form, Container, Card } from 'react-bootstrap'
import covid from '../../assets/img/covid-19.png'
import map from '../../assets/img/Map.svg'
import images from '../../assets/img/image 1.svg'


function Inform() {
    return (
        <>
        <div>
            <Container className="p-5">
            <Row>
                <h2 className="pb-4">Important Information</h2>
                <Col>
               <img src={covid}/>
                </Col>
                <Col>
                <img src={map}/>
                </Col>
                <Col>
                <img src={images}/>
                <p>An initiative by District Administration, Bastar
Contact Us+91 6267020580</p>
                </Col>
            </Row>
            </Container>
        </div>
            
        </>
    )
}

export default Inform
