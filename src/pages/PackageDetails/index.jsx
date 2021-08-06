import Layout from "../Layout";
import { Row, Col, ProgressBar, Form, Modal } from "react-bootstrap";
import { Container } from "reactstrap";


import Button from "@material-ui/core/Button";


import whapp from "../../assets/whatsapp.svg";
import chat from "../../assets/messenger.svg";

import { useHistory } from "react-router";


import bg from "../../assets/camping-02.jpg";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Block from "../../components/Block";

import loc from "../../assets/location.svg";
import Review from "../../components/Review";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPackageData } from "../../store/ducks/package/actionCreators";
import { selectPackageStatus, selectPackageData } from "../../store/ducks/package/selectors";
import { LoadingStatus } from "../../store/types";

import Loader from "react-loader-spinner";
import GoogleMapReact from 'google-map-react';
import ReactPlayer from 'react-player'
import ModalBox from "../../components/ModalBox";
import { selectModalData } from "../../store/ducks/modal/selectors";
import { setModalStatus } from "../../store/ducks/modal/actionCreators";
import { useForm } from "react-hook-form";
import { equiryRequest } from "../../services/api/packageApi";


import swal from 'sweetalert';


const Marker = props => {
  return <div className="SuperAwesomePin"></div>
}

const PackageDetails = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const loadingStatus = useSelector(selectPackageStatus);
  const packageDetail = useSelector(selectPackageData)
  const isLoaded = loadingStatus !== LoadingStatus.NEVER && loadingStatus !== LoadingStatus.LOADING;

  const modal = useSelector(selectModalData);
  const [center, setCenter] = useState({lat: 11.0168, lng: 76.9558 });
  const [zoom, setZoom] = useState(11);



  const { handleSubmit, errors, register} = useForm();


  useEffect(() => {
    dispatch(fetchPackageData(id))
  },[])


  const onSubmit = (data) => {
    const obj = {
      adminuserId: packageDetail.aduser.id,
      pkgId: packageDetail.id,
      message: data.message
    }

    equiryRequest({
      adminuserId: packageDetail.aduser.id,
      pkgId: packageDetail.id,
      message: data.message
    }).then(() => {
      swal("Good job!", "You clicked the button!", "success");
    })
    .catch(() => {
      swal("Error", "Some Error", "error");
    })

  }
  
  return (
    <Layout bg={bg}>
     
    {/* <h1> {packageDetail ?JSON.stringify(packageDetail):null}</h1> */}

      {isLoaded ? 
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
        title_="the Package"
        boolean={true}
      >
        <p className="pt-3">{packageDetail.description}</p>
      </Block>
      <Block boolean={false}>
        <Row>
          <Col sm={6}>
          <div>
          <h4 className="block__title">
                  <span>Price</span>
                </h4>
             <h5 className="price__title pt-3 mb-1">₹{packageDetail.price}</h5>
             <p>{packageDetail.type}</p>
          </div>
          </Col>
          <Col sm={6}>
            {
              packageDetail.videoURL ? 
              <div>
                <h4 className="block__title know__more mb-4">
                  <span>Know More</span>
                </h4>
                <ReactPlayer
                  url={packageDetail.videoURL}
                  controls
                  playbackRate = {2}
                  width = "546px"
                  height = "250px"
                />
              </div> : null
            }
          </Col>
        </Row>
      </Block>
    
     
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
      <Block title="Inclusions" title_="and Exclusions" boolean={true}>
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
      <Block title="Contact Details" boolean={true}>
        <h5 className="price__title pt-3 mb-1">{packageDetail.aduser.name}</h5>
        <a className="code" href={`tel:${packageDetail.aduser.mobile}`}>+91 {packageDetail.aduser.mobile}</a><br/>
        <a className="code" href={`mailto:${packageDetail.aduser.email}`}>{packageDetail.aduser.email}</a>
      
      </Block>
      {/* <Block title="Reviews" boolean={true}>
        <Review object={packageDetail.aduser.mobile}/>
      </Block> */}



      <div>
      <div className="mt-5 d-flex justify-content-center">
        <Button style={{
          border: '2px solid #7868e6',
          textTransform: 'capitalize'
          }}  className="m-2" variant="outlined"
          
          onClick={() => dispatch(setModalStatus('Enquiry'))}
          >
          {/* <img src={chat} height="30" width="60"/> */}
             
          {/* <a href="https://www.tripadvisor.com/Attractions-g800435-Activities-Jagdalpur_Bastar_District_Chhattisgarh.html" className="web__whatsapp" target="_blank"> */}
          <span style={{
              fontSize: 17,
              color: '#7868e6'
            }}>TripAdvisor Reviews</span>
            {/* </a> */}
          </Button>
        <Button style={{
          background: '#7868e6',
          textTransform: 'capitalize'
          }} className="m-2" variant="outlined"
          >
            <a href={`https://api.whatsapp.com/send/?phone=+91${packageDetail.aduser.mobile}&text&app_absent=0`} className="web__whatsapp" target="_blank">
              <img src={whapp} height="30" width="60"/>
          
            <span className="text-white" style={{
              fontSize: 17
            }}>Whatsapp</span>
          </a>
          </Button>
      </div>
      <br/>
      </div>
      </>
      : <div className="loader_center">
         <Loader 
           type="Circles"
           color="#b8b4fc"
           height={40}
           width={70}
           timeout={3000}
         />
        </div>
    }

    <Modal size="SM" show={modal === "Enquiry"} onHide={()=>dispatch(setModalStatus(undefined))}>
      <Modal.Header closeButton>Enter Query</Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Control ref={register({ required: true })} name="message" as="textarea"/>
            {errors.message && <span className="text-danger">required</span>}
          </Form.Group>
          <Button size="sm" style={{
      background: '#222',
      border: '1px solid #222',
      color: '#fff'
    }} className="m-1" 
    type="submit"
    //onClick={_handleSubmit}
    >Submit</Button>

        </form>
      </Modal.Body>
    </Modal>

    </Layout>
  );
}
 
export default PackageDetails;