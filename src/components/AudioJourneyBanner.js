import React from "react";
import { Button } from "react-bootstrap";
import "../assets/css/audioJourneyBanner.css";
import { useHistory } from "react-router-dom";
import QuickLinks from "./QuickLinks";
const AudioJourneyBanner = () => {
  const history = useHistory();

  const handleClickPlayNow = () => {
    history.push("/audioJourney");
  };

  return (
    <div className="audioJourney_banner">
      <div className="audioJourney_banner_center">
        <p style={{ fontSize: "12px", margin: "0"}}>INTRODUCING</p>

        <p style={{ fontSize: "24px", margin: "0", fontWeight: "bold" }}>
          AUDIO JOURNEYS
        </p>

        <p style={{ fontSize: "10px", lineHeight: "0px" }}>
          An Immensive audio walkthrough of Baster's hidden gems
        </p>
        <Button variant="success" onClick={handleClickPlayNow}>
          PLAY NOW
        </Button>
      </div>
      {/* <button onClick={handleClickPlayNow}>PLAY NOW</button> */}
      <div>{/* <QuickLinks /> */}</div>
    </div>
  );
};

export default AudioJourneyBanner;
