import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import Header from "../../components/Header";
import FooterIcons from '../../Footer/FooterIcons'
import Footer from "../travesaly/Footer";
import bg from "../../assets/img/bg_12.jpg";
import { useHistory, useParams } from "react-router-dom";
import Heritage from "../../assets/img/Heritage.jpg";
import Adventure from "../../assets/img/Adventure.jpg";
import { API_PATH } from "../../Path/Path";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Geocode from "react-geocode";
import { useDispatch } from "react-redux";
import {exportid} from '../../redux/actions'
import SeoData from '../../SeoData.json'
import AudioJourneyBanner from '../../components/AudioJourneyBanner'
import QuickLinks from '../../components/QuickLinks'

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API);
Geocode.setLanguage("en");
Geocode.setRegion("in");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();

const Explores = () => {
  let { id } = useParams();
  const history = useHistory();
  const [destinations, setDestinations] = useState([]);
  const [packages, setPackages] = useState([]);
  const [location, setLoation] = useState([]);
  const dispatch = useDispatch()

  const getCurrentLocation = async () => {
    await window.navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
      setLoation(pos.coords);
    });
  };

  useEffect(() => {
    getCurrentLocation();

    document.title = SeoData.explore.page_title || 'Travel Bastar';
    document.querySelector("meta[name='description']").setAttribute('content', (SeoData.explore.meta_description || ''));
    document.querySelector("meta[name='keywords']").setAttribute('content', (SeoData.explore.meta_keywords || ''));
  }, []);

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
      items: 3.5,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  useEffect(() => {
    getPackages();
    getDestinations();
    window.scrollTo(0, 0);
  }, [location]);

  const getDestinations = () => {
    dispatch(exportid(id))
    if (id !== undefined) {
      if(id == 'heritage') id = 'religious'
      fetch(`${API_PATH}/api/v1/destinations/list?${id}=true`)
        .then((response) => response.json())
        .then((json) => {
          if (json.data !== undefined) {
            setDestinations(json.data);
          }
        })
        .catch((e) => console.log(e));
    } else {
      fetch(API_PATH + "/api/v1/destinations/location", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          latitude: location.latitude,
          longitude: location.longitude,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.data !== undefined)
            setDestinations(json.data);
        })
        .catch((e) => console.log(e));
    }
  };


  const getPackages = () => {
    console.log("objectabc", id)
    if (id !== undefined) {
      if(id == 'heritage') id = 'religious'
      fetch(`${API_PATH}/api/v1/packages/list?${id}=true`)
        .then((response) => response.json())
        .then((json) => {
          if (json.data !== undefined) {
            setPackages(json.data);
          }
        })
        .catch((e) => console.log(e));
    } else {
      fetch(`${API_PATH}/api/v1/packages/location`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          latitude: location.latitude,
          longitude: location.longitude,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.data !== undefined) {
            setPackages(json.data);
          }
        })
        .catch((e) => console.log(e));
    };
  }

  const onDestinations = (value) => {
    history.push({
      pathname: `/destination_details/${value.title}`,
      id: value._id,
    });
  };

  const goToSearch = () => {
    history.push("/search")
  }

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
        {/* <Container className="py-5">
          <div className="search my-5 py-5">
            <h1 className="search__title pt-5">Explore Bastar's <span style={{textTransform:"capitalize"}} >{id}</span></h1> */}

            {/* <h1 className="search__title pt-5">Near You</h1> */}
            
            {/* <div className="search__inner">
              <div className="search__block">
                <div className="block__location" onClick={goToSearch}>
                  <label className="block--text code" >
                    Search Destinations
                  </label>
                </div>
                <div className="search__btn">
                  <BsSearch color="#C4C4C4" size="25px" />
                </div>
              </div>
            </div>
          </div> 
        </Container>*/}
        <AudioJourneyBanner />
        <QuickLinks />
      </div>
      <Container>
        <div className="mb-5 mt-5">
          <h2 className="package__title pt-1">
            <span>Tour</span> Maps
          </h2>
        </div>
        {tripPackage.length > 0
          ? tripPackage.map((_item, index) => {
            return (
              <div key={index} style={{ display: "inline-block", width: "min(90vw,348px)", height: 170, marginRight: "20px" }} className="mt-4">
                <Image
                  draggable={false}
                  className="img-fluid"
                  style={{ borderRadius: 15 }}
                  src={_item.url}
                />
                <a href={_item.pdf} target="_blank" className="package__trip">
                  <h6 className="packages__block-title mt-3 mb-0">
                    {_item.title}
                  </h6>
                  <small className="packages__block-subtitle mt-3 mb-0" style={{ color: "#757575", fontSize: "-0.125em" }}>
                    {_item.subtTitle}
                  </small>
                </a>
              </div>
            );
          })
          : null}
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
        {packages.length > 0 ? (
          <Carousel
            ssr
            partialVisible
            itemClass="image-item"
            responsive={responsive}
          >
            {packages.length > 0
              ? packages.map((item, key) => {
                return (
                  <div
                    key={key}
                    onClick={() =>
                      history.push({
                        pathname: `/packages_details/${item.title}`,
                        item: item._id,
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
                        {/* <h6
                            style={{
                              background: "#BEBEBE",
                              display: "inline",
                              padding: "3px",
                              borderRadius: "4px",
                              fontSize: "14px",
                            }}
                          >
                            {item.category.category_name}
                          </h6> */}
                      </div>
                      <div>
                        <small className="packages__block-subtitle">
                          ₹ {item.price}
                        </small>
                      </div>
                    </div>
                  </div>
                );
              })
              : null}
          </Carousel>
        ) : null}
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
                <h2 className="package__title" style={{color:"white"}}>
                  <span>Popular</span> Destinations
                </h2>
                <h6 style={{ color: "white" }}>
                  The best tourist locations across Bastar, rated and curated by travellers.
                </h6>
              </div>

              <h6
                style={{ cursor: "pointer",color:"white" }}
                onClick={() => history.push("/populardestinations")}
                className="package__title pt-5"
              >
                View All
              </h6>
            </div>
          </div>
          {destinations.length > 0 ? (
            <Carousel
              ssr
              partialVisible
              itemClass="image-item"
              responsive={responsive}
            >
              {destinations.map((item, key) => {
                return (
                  <div key={key} onClick={() => onDestinations(item)}>
                    <Image
                      draggable={false}
                      style={{ width: "100%", height: "100%" }}
                      src={item.upload_images}
                    />

                    <div style={{ color: "white" }} className="package__trip">
                      <h6 className="packages__block-title mt-3 mb-0" style={{ color: "white" }}>
                        {item.title}
                      </h6>
                      <small className="packages__block-subtitle" style={{ color: "white" }}>
                        {item.sub_title}
                      </small>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          ) : null}
        </Container>
      </div>
      <div fluid="true" className="d-sm-none">
        <FooterIcons />
      </div>
      <Footer />
    </>
  );
};

export default Explores;
