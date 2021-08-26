import React from "react";
import { Container, Col, Form, Row, Image, Button } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { NavLink, useHistory } from "react-router-dom";
// import Carousel from "react-multi-carousel";

const data = [
  {
    
    // src="https://www.youtube.com/embed/s_W9hNCaZak",
    // title="YouTube video player",
    // frameborder="0",
    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    // allowfullscreen
  },
  {
    // width="100%",
    // height="100%",
    // src="https://www.youtube.com/embed/7_PdY3bPfmM?start=2",
    //  title="YouTube video player",
    // frameborder="0",
    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    // allowfullscreen
  },
];

function SearchFelid() {
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

  const onChange = () => {};
  const onClickItem = () => {};
  const onClickThumb = () => {};
  return (
    <>
      <div>        
        <Carousel className="pt-5"
          showArrows={true}
          onChange={onChange}
          onClickItem={onClickItem}
          onClickThumb={onClickThumb}
        >
          <div>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/s_W9hNCaZak"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/7_PdY3bPfmM?start=2"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-Dw4_Gf1Plo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default SearchFelid;
