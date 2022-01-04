import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Container, Form } from "react-bootstrap";
import { API_PATH } from "../Path/Path";
import { Homestays } from "../Path/PackageCategories";
import { useHistory } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import HomestayCard from "./HomestayCard";
import Loader from "../components/Loader";
import Footer from "./travesaly/Footer";
import Geocode from "react-geocode";


Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API);
Geocode.setLanguage("en");
Geocode.setRegion("in");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();

function HomestaysInBastar() {
  const history = useHistory();

  const [packages, setPackages] = useState([]);
  const [location, setLoation] = useState([]);
  const [selected, setSelected] = useState("");
  // const [highToLow, sethighToLow] = useState([]);

  const getCurrentLocation = async () => {
    await window.navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
      setLoation(pos.coords);
    });
  }; 

  const getPackages = async () => {
    try {
      const res = await fetch(`${API_PATH}/api/v1/packages/list?category=${Homestays}`);
      const json = await res.json();
      setPackages(json.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    getPackages();
    // hightToLowPrice();
    window.scrollTo(0, 0);
  }, [location]);

  const searchingData = (value) => {
    fetch(API_PATH + `/api/v1/search/package?searchvalue=${value}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.data !== undefined) {
          console.log(json.data.packages);
          setPackages(json.data.packages);
        }
      })
      .catch((e) => console.log(e));
  };

  const renderPackages = (e) => {
    setSelected(e.target.value);
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
          // console.log("hightToLowPrice Genre Data", res.data);
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
          // console.log("lowToHighPrice  Data", res.data);
        })
        .catch((error) => console.log("Genre Lookup Err::", error));
    }
  };

  return (
    <React.Fragment>
      <Header />
      <Container>
        <div className="mt-5 mb-5">
          <div className="explore-search">
            <form className="d-flex position-relative">
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
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <h2 className="package__title mb-5">
            <span>Homestays In Bastar</span>
          </h2>

          <div>
            {/* <h6><span>Sort By Price :</span></h6> */}
            <Form>
              <Form.Group
                controlId="formGridState"
                className="d-flex align-items-center"
              >
                <Form.Label style={{ width: "100%" }}>
                  Sort By Price :
                </Form.Label>
                <Form.Select
                  value={selected}
                  onChange={(e) => renderPackages(e)}
                >
                  <option value="">sort</option>
                  <option value="highToLow">High to Low</option>
                  <option value="lowToHigh">Low to High</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom: 100,
          }}
        >
          <div className="d-flex flex-wrap align-items-center justify-content-around">
            {packages.length > 0 ? packages.map((item) => <HomestayCard key={item._id} item={item} />) : (
              <div className="d-flex flex-wrap align-items-center justify-content-center">
                <Loader />
              </div>
            )}
          </div>
        </div>
        <></>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default HomestaysInBastar;
