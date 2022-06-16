import React from "react";
import { AiFillStar } from "react-icons/ai";

// img and css
import "../../assets/css/badal.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import BadalLogo from "../../assets/img/BadalLogo.png";
import BadalArrow from "../../assets/icons/BadalArrow.png";
import BadalWelcome from "../../assets/img/BadalWelcome.png";
import BadalFeatured1 from "../../assets/img/BadalFeatured1.png";
import BadalFeatured2 from "../../assets/img/BadalFeatured2.jpg";
import BadalFeatured3 from "../../assets/img/BadalFeatured3.jpg";
import BadalFeatured4 from "../../assets/img/BadalFeatured4.jpg";
import BadalTribalWoman from "../../assets/img/BadalTribalWoman.png";

// components and pages
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { Carousel } from "react-responsive-carousel";
import { useHistory } from "react-router-dom";

const Badal = () => {
  const history = useHistory();

  const FeaturesList = [
    "6 Luxury Cottages",
    "2 Dormitories",
    "2 Art Galleries",
    "1 Dance Pavilion",
    "1 Open Air Theatre",
    "1 State-of-the-Art Music Studio",
  ];

  const FeaturesListImg = [
    BadalFeatured1,
    BadalFeatured2,
    BadalFeatured3,
    BadalFeatured4,
  ];

  return (
    <>
      <Header />
      <div className="badal-page">
        <div className="logo">
          <img src={BadalLogo} alt="Badal" />
        </div>

        <section className="welcome-section">
          <div className="text">
            <h2>
              Welcome to <span>BADAL</span>
            </h2>
            <p>
              We enable sustainable livelihood through Cultural Presentation
            </p>
            <button
              onClick={() => history.push("/packages_details/Stay-at-BADAL")}
            >
              Book stay at BADAL
              <img src={BadalArrow} alt="badal" className="icon" />
            </button>
          </div>

          <div className="image">
            <img src={BadalWelcome} alt="Badal" />
          </div>
        </section>
        {/*** Welcome section ends ***/}

        <section className="cover-banner-section">
          <h2>Bastar Academy of Dance, Art & Literature</h2>
        </section>
        {/*** Cover Banner section ends ***/}

        <section className="features-section">
          <div className="text">
            <h3>Spread over a Sprawling 5-acre campus</h3>
            <p>
              Badal is an academy which gives training in tribal dance, arts,
              music and literature. The aim of BADAL is to preserve these art
              forms, provide livelihood and showcase Bastar to world.
            </p>

            <h4>
              Now anyone can access and learn Bastar tribal arts, be it a local
              or a tourist.
            </h4>

            <div className="list">
              {[...FeaturesList].map((item, idx) => (
                <div className="list-item" key={idx}>
                  <AiFillStar className="icon" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel">
            <Carousel
              showIndicators={false}
              showStatus={false}
              swipeable={true}
              infiniteLoop={true}
            >
              {[...FeaturesListImg].map((image, idx) => (
                <div className="featured-img" key={idx}>
                  <img src={image} alt="Badal" />
                </div>
              ))}
            </Carousel>
          </div>
        </section>
        {/*** Features section ends ***/}

        <section className="preservation-banner-section">
          <div className="image">
            <img src={BadalTribalWoman} alt="badal" />
          </div>
          <div className="text">
            <h3>Preservation through institutionalization</h3>
            <p>
              Both historically and culturally, Bastar holds a significant
              position in place. It is a land of tribal art, dialects, music and
              culture. However, folk art, languages and dance forms are fast
              going extinct.
            </p>

            <h4>
              Of 36 dialects, only 5 have survived. Folk dances like Dandari,
              Mandari, Kakasad and musical instruments like tudbudi, nishan,
              mohri have been lost to modern times.
            </h4>

            <p>
              Further, the area where BADAL is now situated was inaccessible due
              to the perception of threat to safety due to Naxalism. This
              compound was a motel in older times that was in a state of
              dilapidation. It had also become a hub for anti-social elements.
              BADAL transformed this area and breathed new life into it by
              turning it into an opportunity for boosting livelihoods and the
              economy both in line with tribal welfare and development.
            </p>

            <button
              onClick={() => history.push("/packages_details/Stay-at-BADAL")}
            >
              Book stay at BADAL
              <img src={BadalArrow} alt="badal" className="icon" />
            </button>
          </div>
        </section>
        {/*** Preservation Banner section ends ***/}

        <section className="stay-at-badal-section">
          <h2>
            Stay @ <span>BADAL</span>
          </h2>

          <p>
            Learn, explore and experience the tribal life with homestays and
            campus stay options.
          </p>

          <button
            onClick={() => history.push("/packages_details/Stay-at-BADAL")}
          >
            Book stay at BADAL
            <img src={BadalArrow} alt="badal" className="icon" />
          </button>

          <p>
            BADAL Stays powered by
            <span> Travel Bastar</span>
          </p>
        </section>
        {/*** Stay at badal section ends ***/}
      </div>
      <Footer />
    </>
  );
};

export default Badal;
