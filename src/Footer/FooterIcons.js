import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Container, Image } from "react-bootstrap";
import Header from "../components/Header";
// import Footer from "../pages/travesaly/Footer";

import exploreIcon from "../assets/icons/explore.svg";
import experienceIcon from "../assets/icons/experience.svg";
import planIcon from "../assets/icons/plan.svg";
import supportIcon from "../assets/icons/support.svg";

import exploreActiveIcon from "../assets/icons/exploreActive.svg";
import experienceActiveIcon from "../assets/icons/experienceActive.svg";
import planActiveIcon from "../assets/icons/planActive.svg";
// import supportActiveIcon from "../assets/icons/supportActive.svg";

import "../assets/css/footerIcons.css";

const FooterIcons = () => {
  const location = useLocation()
  console.log(location.pathname)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const iconsArr = [
    {
      icon: exploreIcon,
      route: "/explore",
      activeIcon: exploreActiveIcon,
      title: "Explore",
    },
    {
      icon: experienceIcon,
      activeIcon: experienceActiveIcon,
      route: "/curatedexperiences",
      title: "Experience",
    },
    {
      icon: planIcon,
      activeIcon: planActiveIcon,
      route: "/plan",
      title: "Plan",
    },
  ];


  return (
    <>
      <Header />
      <Container>
        <div className="footerIcons_container">
          {
            [...iconsArr].map((item, i) => (
              <span key={i} className="footerIcons_items">
                <NavLink to={item.route}>
                  {
                    location.pathname === item.route ? (
                      <>
                        <Image src={item.activeIcon} alt={item.title} />
                        <p style={{ color: "#000" }}>{item.title}</p>
                      </>
                    ) : (
                      <>
                        <Image src={item.icon} alt={item.title} />
                        <p style={{ color: "#999" }}>{item.title}</p>
                      </>
                    )
                  }
                </NavLink>
              </span>
            ))
          }
          <span className="footerIcons_items">
            <a href="https://api.whatsapp.com/send/?phone=+916267020580&text&app_absent=0">
              <>
                <Image src={supportIcon} alt="Support" />
                <p style={{ color: "#999" }}>Support</p>
              </>
            </a>
          </span>
        </div>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default FooterIcons;
