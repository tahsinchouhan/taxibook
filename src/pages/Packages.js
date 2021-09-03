import React, { useEffect, useState } from "react";
import { Container, Form, Row, Image } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import Footer from "../pages/travesaly/Footer";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";
import { API_PATH } from "../Path/Path";
import Geocode from "react-geocode";

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
  const [highToLow, sethighToLow] = useState([]);

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

  return (
    <React.Fragment>
      <Header />
      <Container>
        <div className="mt-5 mb-5">
          <div className="explore-search">
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
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <h2 className="package__title mb-5">
              <span>Packages</span>
            </h2>

          </div>

          <div>
            {/* <h6><span>Sort By Price :</span></h6> */}
            <Form>
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
          </div>
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
                      pathname: `/packages_details/${item.title}`,
                      item: item._id,
                    })
                  }
                  style={{
                    width: 300,
                    height: 200,
                    marginRight: 15,
                    marginTop: 100,
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
            })}
          </div>
        </>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default Packages;
