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
        <p style={{ fontSize: "0.9rem", margin: "0" }}>INTRODUCING</p>

        <p className="heading" style={{ fontSize: "2.5rem", margin: "0", fontWeight: "bold" }}>
          AUDIO JOURNEYS
        </p>

        <p className="text" style={{ fontSize: "0.8rem", width: "50%", margin: "0 auto 0.5rem" }}>
          An Immensive audio walkthrough of Baster's hidden gems
        </p>
        <Button variant="success" className="play-now-btn" onClick={handleClickPlayNow}>
          PLAY NOW
        </Button>
      </div>
      {/* <button onClick={handleClickPlayNow}>PLAY NOW</button> */}
      <div>{/* <QuickLinks /> */}</div>
    </div>
  );
};

export default AudioJourneyBanner;
