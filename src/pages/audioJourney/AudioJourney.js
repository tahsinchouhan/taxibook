import React, { useState, useEffect } from "react";
import "../../assets/css/audioJourney.css";
import Header from "../../components/Header";
// import { API_PATH } from "../../Path/Path"
import { useDispatch, useSelector } from "react-redux";
import {
  getAudioJourneyFiles,
  getAudioJourneyFile,
} from "../../redux/audioJourney/actions";
import { Card, Container, Row, Col } from "react-bootstrap";
import ReactAudioPlayer from "react-audio-player";
import img from "../../assets/img/AudioJourney.png";
import playImg from "../../assets/icons/Play.png";
import { useHistory } from "react-router-dom";

const AudioJourney = () => {
  const history = useHistory();
  const [selectedAudio, setSelectedAudio] = useState("");
  const dispatch = useDispatch();
  const { audioJourneyFiles } = useSelector(
    (state) => state.audioJourneyReducer
  );
  const { audioJourneyFile } = useSelector(
    (state) => state.audioJourneyReducer
  );
  useEffect(() => {
    dispatch(getAudioJourneyFiles());
    dispatch(getAudioJourneyFile("61d2ef6437b54d212c80e4cb"));
  }, []);
  console.log("audioJourneyFiles", audioJourneyFiles);
  console.log("audioJourneyFile", audioJourneyFile);

  const handlePlayClicked = (audioJourney) => {
    console.log("selected audioJourney", audioJourney);
    setSelectedAudio(audioJourney.file);
  };

  const goToAudioJourneyDetail = (item) => {
    history.push("audioJourney/" + item._id);
  };

  return (
    <div className="audioJourney">
      <Header />
      <Container>
        <Row>
          <h4>INTRODUCING</h4>
        </Row>
        <Row>
          <h1 className="audioJourney_heading">Audio Journeys</h1>
        </Row>
        <Row>
          <p className="audioJourney_description">
            What is travel if not a story you experience? Immerse yourself in a
            guided journey as you walk through picturesque sceneries and rustic
            tribal homelands, or simply listen in from the comfort of your home.
            Listen closely, dear traveller, as we take you on a journey of a
            lifetime.
          </p>
        </Row>

        <div className="audiocard-container">
          {audioJourneyFiles.map((item) => (
            <Card className="audio-card" key={item._id}>
              <Card.Body>
                <Row  style={{ alignItems: "center" }}>
                  <Col xs={4}>
                    <Card.Img
                      variant="top"
                      src={img}
                      onClick={() => goToAudioJourneyDetail(item)}
                    />
                  </Col>
                  <Col xs={6}>
                    <Card.Title>{item.destination.title}</Card.Title>
                  </Col>
                  <Col xs={2} className="play_btn_center">
                    <Card.Img
                      variant="right"
                      src={playImg}
                      onClick={() => handlePlayClicked(item)}
                    />
                  </Col>
                </Row>

                {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text> */}
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          ))}
        </div>

        <div className="audio_journey_player">
          <ReactAudioPlayer src={selectedAudio} autoPlay controls />
        </div>
      </Container>
    </div>
  );
};

export default AudioJourney;
