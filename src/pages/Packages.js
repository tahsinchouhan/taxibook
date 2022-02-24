import React, { useEffect, useState } from "react";
import { Container, Form, Image } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import Footer from "../pages/travesaly/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useHistory } from "react-router-dom";
import { API_PATH } from "../Path/Path";
import Geocode from "react-geocode";
import FooterIcons from "../Footer/FooterIcons";
import Sandals from "../assets/img/sandals.png";
import Map from "../assets/img/Map.png";
import Camera from "../assets/img/Camera.png";
import Backpack from "../assets/img/Backpack.png";

import "../assets/css/experiencePage.css";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API);
Geocode.setLanguage("en");
Geocode.setRegion("in");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();

function Packages() {
  const history = useHistory();
  const [packages, setPackages] = useState([]);
  const [location, setLoation] = useState([]);
  const [selected, setSelected] = useState("");
  // const [highToLow, sethighToLow] = useState([]);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    await window.navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
      setLoation(pos.coords);
    });
  };

  const experienceJSON = [
    {
      icon: Sandals,
      type: "leisure",
      title: "Leisure",
    },
    {
      icon: Camera,
      type: "culture",
      title: "Culture",
    },
    {
      icon: Backpack,
      type: "adventure",
      title: "Adventure",
    },
    {
      icon: Map,
      type: "religious",
      title: "Heritage",
    },
  ];

  useEffect(() => {
    getPackages("adventure");
    // hightToLowPrice();
    window.scrollTo(0, 0);
  }, [location]);

  const getPackages = async (type) => {
    try {
      const res = await fetch(`${API_PATH}/api/v1/packages/list?${type}=true`);
      const json = await res.json();
      // console.log(json);
      setPackages(json.data.filter(elem => elem.package_type === 0));
      // setPackages(json.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const searchingData = (value) => {
  //   fetch(API_PATH + `/api/v1/search/package?searchvalue=${value}`)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       if (json.data !== undefined) {
  //         console.log(json.data.packages);
  //         setPackages(json.data.packages);
  //       }
  //     })
  //     .catch((e) => console.log(e));
  // };

  // const renderPackages = (e) => {
  //   setSelected(e.target.value);
  //   console.log("object", e.target.value);
  //   if (e.target.value === "highToLow") {
  //     fetch(API_PATH + "/api/v1/packages/srt?sort=-price", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((res) => {
  //         setPackages(res.data);
  //         console.log("hightToLowPrice Genre Data", res.data);
  //       })
  //       .catch((error) => console.log("Genre Lookup Err::", error));
  //   } else {
  //     fetch(API_PATH + "/api/v1/packages/srt?sort=price", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((res) => {
  //         setPackages(res.data);
  //         console.log("lowToHighPrice  Data", res.data);
  //       })
  //       .catch((error) => console.log("Genre Lookup Err::", error));
  //   }
  // };

  const icons = {
    border: " 1px solid rgba(0, 0, 0, 0.25)",
    display: "flex",
    flexDirection: "column",
    padding: "5px",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "8px",
    cursor: "pointer",
  };
  const img = {
    margin: "0",
    height: "35px",
  };
  return (
    <React.Fragment>
      <Header />
      <Container>
        <div className="mt-5 mb-5">
          {/*  <div className="explore-search">
            <form className="d-flex" style={{ position: "relative" }}>
              <Form.Control
                type="text"
                name="search"
                placeholder="search packages"
                style={{ marginTop: "-10px" }}
                onChange={(e) => searchingData(e.target.value)}
              />
              <div
                className="form__search-btn"
                type="button"
                style={{
                  position: "absolute",
                  top: 6,
                  right: 10,
                  background: "none",
                  border: "none",
                }}
              >
                <BsSearch style={{ marginTop: -20 }} color="grey" size="25px" />
              </div>
            </form>
              </div>  */}
        </div>
        <div className="d-flex justify-content-between">
          <div className="page-width" style={{ margin: "0 auto" }}>
            <h2 className="package__title mb-5" style={{ fontWeight: "bold" }}>
              <span>Travel Packages and itneraries </span>
            </h2>
          </div>

          <div>
            {/* <h6><span>Sort By Price :</span></h6> */}
            {/* <Form>
              <Form.Group controlId="formGridState" className="d-flex">
                <Form.Label style={{width:"100%"}}>Sort By Price :</Form.Label>
                <Form.Select value={selected}
                  onChange={(e) => renderPackages(e)}                >
                  <option value="">sort</option>
                  <option value="highToLow">High to Low</option>
                  <option value="lowToHigh">Low to High</option>
                </Form.Select>
              </Form.Group>
            </Form>
           */}
          </div>
        </div>
        <div
          className="d-flex justify-content-around page-width"
          style={{ margin: "0 auto" }}
        >
          {[...experienceJSON].map((item, i) => (
            <div
              className="experiencepage-icon-container"
              style={icons}
              onClick={() => getPackages(item.type)}
            >
              <img src={item.icon} style={img} alt={item.title} />
              <p style={{ margin: "0.4rem 0.4rem 0" }}>{item.title}</p>
            </div>
          ))}
        </div>

        <>
          <div
            className="page-width"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "2rem auto",
              flexWrap: "wrap",
            }}
          >
            {packages.map((item, i) => {
              return (
                <div
                  key={i}
                  className="experiencePage-card"
                  onClick={() =>
                    history.push({
                      pathname: `/packages_details/${item.title
                        .split(" ")
                        .join("-")}`,
                      item: item._id,
                    })
                  }
                  style={{
                    width: "50%",
                    height: "fit-content",
                    margin: "1rem 0",
                    border: "1px solid #d4d4d4",
                    borderRadius: "7px",
                  }}
                >
                  <Image
                    draggable={false}
                    // className="img-fluid"
                    style={{
                      width: "100%",
                      height: "170px",
                      borderTopLeftRadius: "7px",
                      borderTopRightRadius: "7px",
                    }}
                    src={item.upload_images}
                  />
                  <div
                    style={{
                      borderTop: "1px solid #d4d4d4",
                      borderBottomLeftRadius: "7px",
                      borderBottomRightRadius: "7px",
                    }}
                  >
                    <h6
                      className="packages__block-title_"
                      style={{ margin: "0.5rem 0.5rem 0" }}
                    >
                      {item.title.slice(0, 25) + "..."}
                    </h6>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        margin: "0.2rem 0.5rem",
                      }}
                    >
                      {item.seo_description
                        ? item.seo_description.slice(0, 25) + "..."
                        : ""}
                    </p>
                    <div
                      style={{
                        backgroundColor: "#F8F8F8",
                        borderRadius: "2px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0 0.5rem",
                      }}
                    >
                      <div>
                        {" "}
                        <p style={{ margin: 0 }}> {item.duration}</p>
                      </div>
                      <div>
                        {" "}
                        <p
                          style={{
                            fontSize: "1.5rem",
                            color: "#0fa453",
                            fontWeight: "bold",
                            margin: 0,
                          }}
                        >
                          ₹ {item.price}
                        </p>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      </Container>
      <div fluid="true" className="d-sm-none">
        <FooterIcons />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Packages;
