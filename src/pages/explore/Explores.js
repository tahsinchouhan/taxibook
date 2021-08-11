import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import bg from "../../assets/img/bg_12.jpg";
import { useHistory } from "react-router-dom";
import Heritage from "../../assets/img/Heritage.jpg";
import Adventure from "../../assets/img/Adventure.jpg";
import { API_PATH } from "../../Path/Path";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Explores = () => {
  const history = useHistory();
  const [destinations, setDestinations] = useState([]);
  const [packages, setPackages] = useState([]);

  const tripPackage = [
    {
      url: Adventure,
      title: "Adventure Map",
      subtTitle: "Download",
      pdf: "https://firebasestorage.googleapis.com/v0/b/flutterrdemo.appspot.com/o/Adventure%20Map.pdf?alt=media&token=eeafe1f1-a2c0-47cf-991a-d8be9eb8161d",
    },
    {
      url: Heritage,
      title: "Heritage Map",
      subtTitle: "Download",
      pdf: "https://firebasestorage.googleapis.com/v0/b/flutterrdemo.appspot.com/o/Heritage%20Map.pdf?alt=media&token=de4579b8-91c5-4a8a-8798-58a74a89317c",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.5,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1.5,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  useEffect(() => {
    getDestinations();
    getPackages();
  }, []);

  const getDestinations = () => {
    fetch(API_PATH + "/api/v1/destinations/list")
      .then((response) => response.json())
      .then((json) => {
        setDestinations(json.data);
        console.log(json.data);
      })
      .catch((e) => console.log(e));
  };

  const getPackages = () => {
    fetch(API_PATH + "/api/v1/packages/list")
      .then((response) => response.json())
      .then((json) => {
        setPackages(json.data);
        console.log(json.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header />
        <Container className="py-5">
          <div className="search my-5 py-5">
            <h1 className="search__title pt-5">Near You</h1>
            <div className="search__inner">
              <div className="search__block">
                <div className="block__location">
                  <label className="block--text code">
                    Search destinations
                  </label>
                </div>
                <button className="search__btn">
                  <BsSearch color="white" size="25px" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="mb-5 mt-5">
          <h2 className="package__title pt-1">
            <span>Tour</span> Maps
          </h2>
        </div>
        {tripPackage.map((_item, index) => {
          return (
            <div style={{ display: "inline-block" }}>
              <Image
                draggable={false}
                style={{ width: 250, height: 170, borderRadius: 15 }}
                src={_item.url}
              />
              <a href={_item.pdf} target="_blank" className="package__trip">
                <h6 className="packages__block-title mt-3 mb-0">
                  {_item.title}
                </h6>
                <small className="packages__block-subtitle">
                  {_item.subtTitle}
                </small>
              </a>
            </div>
          );
        })}
        <div className="mb-5 mt-5">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2 className="package__title pt-5">
              <span>Curated</span> Experiences
            </h2>
            <h6
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/curatedexperiences")}
              className="package__title pt-5"
            >
              View All
            </h6>
          </div>
        </div>
        <Carousel
          ssr
          partialVisbile
          itemClass="image-item"
          responsive={responsive}
        >
          {packages.map((item) => {
            return (
              <div
                onClick={() =>
                  history.push({
                    pathname: `/packages_details/${item.title}`,
                    item: item,
                  })
                }
              >
                <Image
                  draggable={false}
                  style={{ width: "100%", height: "100%" }}
                  src={item.upload_images}
                />
                <div>
                  <h6 className="packages__block-title_ mt-3 mb-0">
                    {item.title}
                  </h6>
                  <div
                    style={{
                      paddingTop: 2,
                    }}
                  >
                    <h6
                      style={{
                        background: "#BEBEBE",
                        display: "inline",
                        padding: "3px",
                        borderRadius: "4px",
                        fontSize: "14px",
                      }}
                    >
                      {item.sub_title}
                    </h6>
                  </div>
                  <div>
                    <small className="packages__block-subtitle">
                      ₹ {item.price}
                    </small>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </Container>

      <div
        className="py-5 mt-5"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <Container>
          <div className="mb-5">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h2 className="package__title">
                  <span>Popular</span> Destinations
                </h2>
                <h6>
                  The best tourist loactions across Bastar, rated and curated by
                  travellers.
                </h6>
              </div>

              <h6
                style={{ cursor: "pointer" }}
                onClick={() => history.push("/populardestinations")}
                className="package__title pt-5"
              >
                View All
              </h6>
            </div>
          </div>
          <Carousel
            ssr
            partialVisbile
            itemClass="image-item"
            responsive={responsive}
          >
            {destinations.map((item) => {
              return (
                <div
                  onClick={() =>
                    history.push(`/destination_details/${item.title}`)
                  }
                >
                  <Image
                    draggable={false}
                    style={{ width: "100%", height: "100%" }}
                    src={item.upload_images}
                  />
                  <div style={{ color: "white" }} className="package__trip">
                    <h6 className="packages__block-title mt-3 mb-0">
                      {item.title}
                    </h6>
                    <small className="packages__block-subtitle">
                      {item.sub_title}
                    </small>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Explores;
