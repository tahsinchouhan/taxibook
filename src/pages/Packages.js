import React, { useEffect, useState } from "react";
import { Container, Form, Image } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import Footer from "../pages/travesaly/Footer";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";
import { API_PATH } from "../Path/Path";
import Geocode from "react-geocode";
import FooterIcons from '../Footer/FooterIcons';
import Sandals from "../assets/img/sandals.png";
import Map from "../assets/img/Map.png";
import Camera from "../assets/img/Camera.png";
import Backpack from "../assets/img/Backpack.png";

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

  useEffect(() => {
    getPackages();
    // hightToLowPrice();
    window.scrollTo(0, 0);
  }, [location]);

  const getPackages = () => {
    fetch(API_PATH + "/api/v1/packages/location", {
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
          console.log(json.data)
          setPackages(json.data);
        }
      })
      .catch((e) => console.log(e));
  };


  const searchingData = (value) => {
    fetch(API_PATH + `/api/v1/search/package?searchvalue=${value}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.data !== undefined) {
          console.log(json.data.packages);
          setPackages(json.data.packages)
        };
      })
      .catch((e) => console.log(e));
  };

  const renderPackages = (e) => {
    setSelected(e.target.value)
    console.log("object", e.target.value)
    if (e.target.value === "highToLow") {
      fetch(API_PATH + "/api/v1/packages/srt?sort=-price", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setPackages(res.data);
          console.log("hightToLowPrice Genre Data", res.data);
        })
        .catch((error) => console.log("Genre Lookup Err::", error));
    } else {
      fetch(API_PATH + "/api/v1/packages/srt?sort=price", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setPackages(res.data);
          console.log("lowToHighPrice  Data", res.data);
        })
        .catch((error) => console.log("Genre Lookup Err::", error));
    }
  }

  const icons = {
    border: " 1px solid rgba(0, 0, 0, 0.25)",
    height: "90px",
    boxSizing: "borderBox",
    padding: "5px",
    alignItems: "center",
    borderRadius: "8px"
  }
  const img = {
    width: "60%",
    height: "40px",
    marginLeft: "10px",
    marginTop: "10px"
  }
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
          <div>
            <h2 className="package__title mb-5" style={{ marginTop: "-10px", fontWeight: "bold" }}>
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
           */ }
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div style={icons} > <img src={Sandals} style={img} alt="image" /> <p style={{ marginLeft: "5px" }}> Leisure </p> </div>
          <div style={icons}> <img src={Camera} style={img} alt="image" /> <p style={{ marginLeft: "5px" }}> Culture </p>  </div>
          <div style={icons}>  <img src={Backpack} style={img} alt="image" /> <p style={{ marginLeft: "5px" }}> Adventure </p></div>
          <div style={icons}> <img src={Map} style={img} alt="image" /> <p style={{ marginLeft: "5px" }}> Heritage </p></div>
        </div>


        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              marginBottom: 100,
              marginTop: -100,
            }}
          >
            {packages.map((item) => {
              return (
                <div
                  onClick={() =>
                    history.push({
                      pathname: `/packages_details/${item.title.split(" ").join("-")}`,
                      item: item._id,
                    })
                  }
                  style={{
                    width: 300,
                    height: 200,
                    marginLeft: "15px",
                    marginTop: "140px"
                  }}
                >
                  <Image
                    draggable={false}
                    // className="img-fluid"
                    style={{ width: "100%", height: "100%", borderRadius: 10 }}
                    src={item.upload_images}
                  />
                  <div>
                    <h6 className="packages__block-title_ mt-3 mb-0">
                      {item.title}
                    </h6>
                    <p style={{ fontSize: "15px", height: "50px", overflow: "hidden" }}> {item.description} </p>
                    <div
                      style={{
                        paddingTop: 2,
                      }}
                    >
                    </div>
                    <div style={{ backgroundColor: "#f0f0f0", marginTop: "-15px", borderRadius: "2px", display: "flex" }}>
                      <div style={{ marginTop: "8px" }}>  <p> {item.duration}</p> </div>
                      <div style={{ marginLeft: "100px" }}>  <p style={{ fontSize: "26px", color: "#0fa453", fontWeight: "bold" }}>
                        ₹ {item.price}
                      </p> </div>
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
