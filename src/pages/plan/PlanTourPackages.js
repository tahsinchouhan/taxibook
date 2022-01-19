import React, { useEffect, useState } from "react";
import { API_PATH } from "../../Path/Path";
import { TourPackages } from "../../Path/PackageCategories";
import Geocode from "react-geocode";

import "./package-card.css";

// components and pages
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import QuickLinks from "../../components/QuickLinks";
import FooterIcons from "../../Footer/FooterIcons";
import PackageCard from "./PackageCard";
import Footer from "../travesaly/Footer";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API);
Geocode.setLanguage("en");
Geocode.setRegion("in");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();

const PlanHomeStays = () => {
  const [packages, setPackages] = useState([]);

  const getPackages = async () => {
    try {
      const res = await fetch(
        `${API_PATH}/api/v1/packages/list?category=${TourPackages}`
      );
      const json = await res.json();
      setPackages(json.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPackages();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div>
        <QuickLinks Position={"relative"} Top={"10%"} />
      </div>
      <div
        className="page-width plan-header"
        style={{ margin: "2rem auto 0 " }}
      >
        <div className="searchBox-container">
          <input
            type="search"
            className="searchBox"
            placeholder="Search for TourPackages"
          />
          <svg
            className="searchIcon"
            // onClick={onSearchClick}
            style={{ cursor: "pointer" }}
            viewBox="0 0 25 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.6582 21.6162L19.79 16.748C19.5703 16.5283 19.2725 16.4062 18.96 16.4062H18.1641C19.5117 14.6826 20.3125 12.5146 20.3125 10.1562C20.3125 4.5459 15.7666 0 10.1562 0C4.5459 0 0 4.5459 0 10.1562C0 15.7666 4.5459 20.3125 10.1562 20.3125C12.5146 20.3125 14.6826 19.5117 16.4062 18.1641V18.96C16.4062 19.2725 16.5283 19.5703 16.748 19.79L21.6162 24.6582C22.0752 25.1172 22.8174 25.1172 23.2715 24.6582L24.6533 23.2764C25.1123 22.8174 25.1123 22.0752 24.6582 21.6162ZM10.1562 16.4062C6.7041 16.4062 3.90625 13.6133 3.90625 10.1562C3.90625 6.7041 6.69922 3.90625 10.1562 3.90625C13.6084 3.90625 16.4062 6.69922 16.4062 10.1562C16.4062 13.6084 13.6133 16.4062 10.1562 16.4062Z"
              fill="#C4C4C4"
            />
          </svg>
        </div>
        <h1 className="package__title">Book TourPackages In Bastar</h1>
      </div>

      <div className="package-card-container page-width">
        {packages.length ? (
          packages.map((item, idx) => <PackageCard key={idx} item={item} />)
        ) : (
          <Loader />
        )}
      </div>
      <div fluid="true" className="d-sm-none">
        <FooterIcons />
      </div>
      <Footer />
    </>
  );
};

export default PlanHomeStays;
