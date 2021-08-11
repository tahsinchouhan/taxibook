import React from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import bus1 from "../../assets/img/bus.png";
import city1 from "../../assets/img/city.png";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { useHistory } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import runmen from "../../assets/img/runmen.png";

function CongratulationPage() {
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col>
            <div>
                <img src={runmen} alt=""/>
            </div>
            </Col>
            <Col>
              <div>
                <div>
                  <h3>CONGRATULATIONS!</h3>
                  <span>Your booking has been confirmed</span>

                  <h3>Order ID</h3>
                  <span>BAS05493</span>
                </div>
                <div>
                     <div>
                     <Button><FaWhatsapp/>
                       Whatsapp Link</Button>
                     </div>
                 <div>
                 <Button>Download E-ticket</Button>
                 </div>
                   <div>
                   <Button>Sent by Email</Button>
                   </div>
                   <div>
                   <Button>Back to Home</Button>
                   </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CongratulationPage;
