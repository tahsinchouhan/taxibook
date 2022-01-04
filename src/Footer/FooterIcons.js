import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Container, Image } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../pages/travesaly/Footer";
import exploreIcon from "../assets/icons/explore.png";
import experienceIcon from "../assets/icons/experience.png";
import planIcon from "../assets/icons/plan.png";
import supportIcon from "../assets/icons/support.png";
import "../assets/css/footerIcons.css";

const FooterIcons = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Container>
        <div className="footerIcons_container">
            <span className="footerIcons_items">
            <NavLink className="" to="/explore">
              <Image src={exploreIcon} alt="explore" />
                EXPLORE
            </NavLink>
            </span>
            <span className="footerIcons_items">
            <NavLink className="" to="/curatedexperiences">
              <Image src={experienceIcon} alt="experience" />
                EXPERIENCE
            </NavLink>
            </span>
            <span className="footerIcons_items">
            <NavLink className="" to="/select-booking">
              <Image src={planIcon} alt="plan" />
                PLAN
            </NavLink>
            </span>
            <span className="footerIcons_items">
            <NavLink className="" to="/support">
              <Image src={supportIcon} alt="support" />
                SUPPORT
            </NavLink>
            </span>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default FooterIcons;
