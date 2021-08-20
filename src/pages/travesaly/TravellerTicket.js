import React from "react";
import { Button, Row, Col, Form, Container, Card,Image } from "react-bootstrap";
import Travel from "../../assets/img/ticket.png";
import bus from "../../assets/img/bus.png";

import Carousel from "react-multi-carousel";

function TravellerTicket() {
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
    },
    {
      img: "https://cdn3.iconfinder.com/data/icons/transport-icons-2/512/BT_c3side-512.png",
      name: "Vehical Pass",
    },
    {
      img: "https://static.thenounproject.com/png/61798-200.png",
      name: "Bus Pass",
    },
    {
      img: "https://www.iconpacks.net/icons/2/free-parking-sign-icon-1641-thumb.png",
      name: "Parking",
    },
    {
      img: "https://cdn3.iconfinder.com/data/icons/common-sports/4096/oarsmanship-512.png",
      name: "Boating",
    },
    {
      img: "https://cdn4.iconfinder.com/data/icons/nature-solid-icons-vol-3/72/108-512.png",
      name: "Nature Treck",
    },
  ];
  return (
    <>
      <Carousel partialVisbile itemClass="image-item" responsive={responsive}>
      {data.map((item, index) => (
        <div
          className="p-5"
        >
          <div style={{ display: "flex", width: "100%" }}>
            
              <Col>
              <Image
                    style={{width: 50}}
                    src={item.img}
                  />
                <p  style={{marginLeft: -10}}>
                  {item.name}
                </p>
              </Col>
          </div>
        </div>
        ))}
      </Carousel>
    </>
  );
}

export default TravellerTicket;
