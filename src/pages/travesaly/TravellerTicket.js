import React from "react";
import {
  Button,
  Row,
  Col,
  Form,
  Container,
  Card,
  Image,
} from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import Carousel from "react-multi-carousel";

function TravellerTicket() {
  const history = useHistory();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  const data = [
    {
      img: "https://img.icons8.com/ios/452/passenger-with-baggage.png",
      name: "Travel Pass",
      path: "/dmpass",
      style:{
        width:63,
      },
    },
    {
      img: "https://cdn3.iconfinder.com/data/icons/transport-icons-2/512/BT_c3side-512.png",
      name: "Vehicle Pass",
      path: "/dmpass",
      width:74,
      style:{
        width:74,
      },
    },
    {
      img: "https://static.thenounproject.com/png/61798-200.png",
      name: "Bus Ticket",
      path: "/buspass",
      style:{
        width:74,
      },
    },    
 
    {
      img: "https://www.iconpacks.net/icons/2/free-parking-sign-icon-1641-thumb.png",
      name: "Parking",
      path: "/tickets",
      style:{
        width:74,
        marginLeft:"20px",
      },
      
    },
    {
      img: "https://cdn3.iconfinder.com/data/icons/common-sports/4096/oarsmanship-512.png",
      name: "Boating",
      path: "/tickets",
      style:{
        width:74,
      },
    },
    {
      img: "https://cdn4.iconfinder.com/data/icons/nature-solid-icons-vol-3/72/108-512.png",
      name: "Nature Trekking",
      path: "/tickets",
      style:{
        width:63,
      },
    }
  ]
  return (
    <>
      <Carousel partialVisible itemClass="image-item" responsive={responsive}>

        {data.map((item, index) => (
          <div key={item} className="p-3 text-center" onClick={() => history.push(item.path)}>
            <div style={{ display: "flex", width: "100%" }}>
              <Col className="d-flex flex-column justify-content-between align-items-center" style={{minHeight:"114px"}}>
                <Image style={item.style} src={item.img} />
                <p className="text-center">{item.name}</p>
              </Col>
            </div>
          </div>
        ))}
        
      </Carousel>
      {/* <Carousel partialVisible itemClass="image-item" responsive={responsive}> */}
      {/* <div >
        <div style={{display:"inline-flex"}}>
           {data.map((item, index) => (
          <div className="p-5 " onClick={() => history.push(item.path)}>
            <div style={{ display: "flex", width: "100%" }}>
              <Col>
                <Image style={{ width: 50 }} src={item.img} />
                <p style={{ marginLeft: -10 }}>{item.name}</p>
              </Col>
            </div>
          </div>
        ))} 
        </div>
        <div style={{display:"flex"}}>
           {dataOne.map((item, index) => (
          <div className="p-5 " onClick={() => history.push(item.path)}>
            <div style={{ display: "flex", width: "100%" }}>
              <Col>
                <Image style={{ width: 50 }} src={item.img} />
                <p style={{ marginLeft: -10 }}>{item.name}</p>
              </Col>
            </div>
          </div>
        ))} 
        </div>

        
      </div> */}

      {/* </Carousel> */}
    </>
  );
}

export default TravellerTicket;
