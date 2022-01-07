import React, { useEffect } from 'react'
import "../../assets/css/audioJourneyDetail.css"
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAudioJourneyFile } from "../../redux/audioJourney/actions"
import ReactAudioPlayer from 'react-audio-player';
import { Container, Row } from "react-bootstrap";

const AudioJourneyDetail = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()
    const { audioJourneyFile } = useSelector((state) => state.audioJourneyReducer);

    useEffect(() => {
        const result = location.pathname.split("/")
        console.log('result[2]',result[2])
        console.log('61d2ef6437b54d212c80e4cb')
        dispatch(getAudioJourneyFile(result[2]))
    }, [])

    console.log('audioJourneyFile',audioJourneyFile)


    const goBack = () => {
        history.goBack()
    }

    return(
        <>
        <div className="audio_journey_detail">
            <p className="audio_journey_detail_center">
            {audioJourneyFile?.destination?.title}
            </p>
        </div>
        <div className="top_right" onClick={goBack}>X</div>
        <Container>
            <Row>
            <div className="audio_journey_detail_player">
            <ReactAudioPlayer
              src={audioJourneyFile?.file}
              autoPlay
              controls
            />
            </div>
            </Row>
        </Container>
        </>
    )
}

export default AudioJourneyDetail