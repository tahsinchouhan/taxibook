import PromotionalContent1 from "../../assets/img/promotionalContent1.jpeg";
import PromotionalContent2 from "../../assets/img/promotionalContent2.jpeg";
import PromotionalContent3 from "../../assets/img/promotionalContent3.jpeg";
import PromotionalContent4 from "../../assets/img/promotionalContent4.jpeg";
import PromotionalContent5 from "../../assets/img/promotionalContent5.jpeg";
import PromotionalContent6 from "../../assets/img/promotionalContent6.jpeg";
import PromotionalContent7 from "../../assets/img/promotionalContent7.jpeg";
import PromotionalContent8 from "../../assets/img/promotionalContent8.jpeg";
import PromotionalContent9 from "../../assets/img/promotionalContent9.jpeg";
import PromotionalContent10 from "../../assets/img/promotionalContent10.jpeg";
import PromotionalContent11 from "../../assets/img/promotionalContent11.jpeg";

// components and pages
import React from "react";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { Carousel } from "react-responsive-carousel";
import { useHistory } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const PromotionalContent = () => {
  return (
    <div>
      <Header />

      <div className="promotional-content-page px-3 my-4">
        <Row>
          <Col lg={3} md={12}>
            <img src={PromotionalContent1} className="img-fluid mb-4" alt="" />
            <img src={PromotionalContent2} className="img-fluid mb-4" alt="" />
          </Col>

          <Col lg={3} md={12}>
            <img src={PromotionalContent3} className="img-fluid mb-4" alt="" />
            <img src={PromotionalContent4} className="img-fluid mb-4" alt="" />
          </Col>

          <Col lg={3} md={12}>
            <img src={PromotionalContent5} className="img-fluid mb-4" alt="" />
            <img src={PromotionalContent7} className="img-fluid mb-4" alt="" />
          </Col>

          <Col lg={3} md={12}>
            <img src={PromotionalContent8} className="img-fluid mb-4" alt="" />
            <img src={PromotionalContent9} className="img-fluid mb-4" alt="" />
          </Col>

          <Col lg={3} md={12}>
            <img src={PromotionalContent10} className="img-fluid mb-4" alt="" />
          </Col>

          <Col lg={3} md={12}>
            <img src={PromotionalContent6} className="img-fluid mb-4" alt="" />
          </Col>

          <Col lg={3} md={12}>
            <img src={PromotionalContent11} className="img-fluid mb-4" alt="" />
          </Col>
        </Row>
        {/*<!--Grid row-->*/}
      </div>

      <Footer />
    </div>
  );
};

export default PromotionalContent;
