import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Container, Image } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../pages/travesaly/Footer";
import exploreIcon from "../assets/icons/ExploreActive.png";
import exploreInactiveIcon from "../assets/icons/ExploreNotActive.png";
import experienceIcon from "../assets/icons/ExperienceActive.png";
import experienceInactiveIcon from "../assets/icons/ExperienceNotActive.png";
import planIcon from "../assets/icons/PlanActive.png";
import planInactiveIcon from "../assets/icons/PlanNotActive.png";
import supportIcon from "../assets/icons/SupportActive.png";
import supportInactiveIcon from "../assets/icons/SupportNotActive.png";
import "../assets/css/footerIcons.css";

const FooterIcons = () => {
  const location = useLocation()
  console.log(location.pathname)

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
              {
                location.pathname == '/explore' ? (
                  <Image src={exploreIcon} alt="explore" />
                ) : (
                  <Image src={exploreInactiveIcon} alt="explore" />
                )
              }
            </NavLink>
          </span>
          <span className="footerIcons_items">
            <NavLink className="" to="/curatedexperiences">
              {
                location.pathname == '/curatedexperiences' ? (
                  <Image src={experienceIcon} alt="experience" />
                ) : (
                  <Image src={experienceInactiveIcon} alt="experience" />
                )
              }
            </NavLink>
          </span>
          <span className="footerIcons_items">
            <NavLink className="" to="/plan">
              {
                location.pathname == '/plam' ? (
                  <Image src={planIcon} alt="plan" />
                ) : (
                  <Image src={planInactiveIcon} alt="plan" />
                )
              }
            </NavLink>
          </span>
          <span className="footerIcons_items">
            <NavLink className="" to="/support">
              {
                location.pathname == '/support' ? (
                  <Image src={supportIcon} alt="support" />
                ) : (
                  <Image src={supportInactiveIcon} alt="support" />
                )
              }
            </NavLink>
          </span>
        </div>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default FooterIcons;
