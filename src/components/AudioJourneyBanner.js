import React from 'react';
import { Button } from 'react-bootstrap'
import "../assets/css/audioJourneyBanner.css";
import { useHistory } from "react-router-dom";

const AudioJourneyBanner = () => {
    const history = useHistory();
    
    const handleClickPlayNow = () => {
        history.push('/audioJourney')
    }
    
    return (
        <div className="audioJourney_banner">
            <p className="audioJourney_banner_center">
                <span style={{fontSize: '12px'}}>INTRODUCING</span>
                <br/>
                <span style={{fontSize: '24px'}}>AUDIO JOURNEYS</span>
                <br/>
                <span style={{fontSize: '10px'}}>An Immensive audio walkthrough of Baster's hidden gems</span>
                <Button variant="success" onClick={handleClickPlayNow}>PLAY NOW</Button>
            </p>
            {/* <button onClick={handleClickPlayNow}>PLAY NOW</button> */}
        </div>
    )
}

export default AudioJourneyBanner