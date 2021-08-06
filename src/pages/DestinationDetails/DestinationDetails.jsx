import React, {useEffect, useState} from 'react';

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import Header from "../../components/Header";
import { LoadingStatus } from "../../store/types";
import Layout from "../Layout";

import { Row, Col, ProgressBar } from "react-bootstrap";
import { Container } from "reactstrap";
import Block from "../../components/Block";

import loc from "../../assets/location.svg";

import GoogleMapReact from 'google-map-react';
import ReactPlayer from 'react-player'


import Loader from "react-loader-spinner";

import Review from '../../components/Review';
import Title from '../../components/Title';
import { selectDestinationData, selectDestinationStatus } from '../../store/ducks/destination/selectors';
import { fetchDestinationData } from '../../store/ducks/destination/actionCreator';



const Marker = props => {
  return <div className="SuperAwesomePin"></div>
}




const DestinationDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
  
    const loadingStatus = useSelector(selectDestinationStatus);
    const packageDetail = useSelector(selectDestinationData)
    const isLoaded = loadingStatus !== LoadingStatus.NEVER && loadingStatus !== LoadingStatus.LOADING;
  
  
    const [center, setCenter] = useState({lat: 11.0168, lng: 76.9558 });
    const [zoom, setZoom] = useState(11);
  
    useEffect(() => {
      dispatch(fetchDestinationData(id))
    },[])
    
    return (
      <Layout >
       
      {/* <h1> {packageDetail ?JSON.stringify(packageDetail):null}</h1> */}

    
  
        { isLoaded ? 
        <>
        <Header bg={packageDetail.images}>
          <Container className="pt-5 _container">
            <Title 
              title={packageDetail.title}
            />
          </Container>
        </Header>

        <Block 
          title="About"
          title_="the Destination"
          boolean={true}
        >
          <p className="pt-3">{packageDetail.description}</p>
        </Block>
        {
              packageDetail.videoURL ? 
              <Container>
                <h4 className="block__title know__more mb-4 pt-4">
                  <span>Know More</span>
                </h4>
                <ReactPlayer
    url={packageDetail.videoURL}
    controls
    playbackRate = {2}
    width = "100%"
    height = "500px"
/>
              </Container> : null
            }


        <Block title="Location" boolean={true}>
        <Row>
          <Col sm={6}>
            <div className="location__address" style={{height: 200,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <p className="pt-3">{packageDetail.location}</p>
              <span className="text-info">
                <img src={loc} height="40" width="45"/>
                  <b><a className="get__direction" href={`https://maps.google.com/?q=${packageDetail.latitude},${packageDetail.longitude}`} target="_blank">Get Directions</a></b></span>
            </div>
          </Col>
          <Col sm={6} className="google__map">
          <GoogleMapReact 
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API}}
          defaultCenter={{
            lat: parseFloat(packageDetail.latitude),
            lng: parseFloat(packageDetail.longitude)
          }}
          defaultZoom={zoom}
        >
          <Marker
            lat = {parseFloat(packageDetail.latitude)}
            lng = {parseFloat(packageDetail.longitude)}
            name="My Marker"
            color="blue"
          />
        </GoogleMapReact>
          </Col>
        </Row>
      </Block>

          <br/>
          <br/>    <br/>    <br/>
        {/*
        <Block title="Inclusions" title_="and Exclusions">
          <Row>
            <Col sm={6}>
              <ul className="inclusionn__iteml pt-3">  
                  {JSON.parse(packageDetail.inclusion).map(inclusion =>
                    <li className="inclusionn__item-list">
                    {inclusion}
                    </li>
                  )}
              </ul>
            </Col>
            <Col sm={6}>
              <ul className="inclusionn__itemr">
                  {JSON.parse(packageDetail.exclusion).map(exclusion =>
                    <li className="inclusionn__item-list">
                      {exclusion}
                    </li>
                  )}
              </ul>
            </Col>
          </Row>
        </Block>
        <Block title="Reviews">
          <Review />
        </Block> */}
        </>:
          <div className="loader_center">
           <Loader 
             type="Circles"
             color="#b8b4fc"
             height={40}
             width={70}
             timeout={3000}
           />
          </div> 
      }
      </Layout>
    );
  }
   
export default DestinationDetails;