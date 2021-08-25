import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import { Container, Col, Form, Row, Image } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { API_PATH } from "../../Path/Path";

function Search() {
  const [destinations, setDestinations] = useState([]);
  const [packages, setPackages] = useState([]);

  const [search, setSearch] = useState();

  const history = useHistory();
  useEffect(() => {
    getDestinations();
    getPackages();
    window.scrollTo(0, 0);
  }, []);

  const getDestinations = () => {
    fetch(API_PATH + "/api/v1/destinations/list")
      .then((response) => response.json())
      .then((json) => {
        if (json.data !== undefined) setDestinations(json.data);
        console.log(json.data);
      })
      .catch((e) => console.log(e));
  };
  const getPackages = () => {
    fetch(API_PATH + "/api/v1/packages/list")
      .then((response) => response.json())
      .then((json) => {
        if (json.data !== undefined) setPackages(json.data);
        console.log(json.data);
      })
      .catch((e) => console.log(e));
  };

  const searchingData = (value) => {
    fetch(API_PATH + `/api/v1/search?searchvalue=${value}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.data !== undefined) setSearch(json.data);
        console.log(json.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Header />
      <Container>
        <div className="mt-5 mb-5">
          <div className="explore-search">
            <div className="d-flex" style={{ position: "relative" }}>
              <Form.Control
                type="text"
                name="search"
                placeholder="Search...."
                style={{ marginTop: "-10px" }}
                onChange={(e) => searchingData(e.target.value)}
              />
              <button
                className="form__search-btn"
                type="button"
                style={{
                  position: "absolute",
                  top: 6,
                  right: 0,
                  background: "none",
                  border: "none",
                }}
              >
                <BsSearch style={{ marginTop: -20 }} color="grey" size="25px" />
              </button>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <div className="col-sm-3">
            <div
              style={{
                backgroundColor: "#864BD8",
                borderRadius: "5px",
                color: "#FFF",
                height: "41px",
                textAlign: "center",
                paddingTop: "10px",
                // alignItems:"center"
              }}
            >
              Destinations
            </div>
          </div>
          <div className="col-sm-3">
            <div
              style={{
                backgroundColor: "#0FA453",
                borderRadius: "5px",
                color: "#FFF",
                height: "41px",
                textAlign: "center",
                paddingTop: "10px",
              }}
            >
              Packages
            </div>
          </div>
          <div className="col-sm-3">
            {" "}
            <div
              style={{
                backgroundColor: "#FF4A68",
                borderRadius: "5px",
                color: "#FFF",
                height: "41px",
                textAlign: "center",
                paddingTop: "10px",
              }}
            >
              Traveller Pass
            </div>
          </div>

          <div className="col-sm-3">
            <div
              style={{
                backgroundColor: "#FF814A",
                borderRadius: "5px",
                color: "#FFF",
                height: "41px",
                textAlign: "center",
                paddingTop: "10px",
              }}
            >
              Tickets
            </div>
          </div>
        </div>

        <>
          {search ? (
            <div>
              <h2 className="package__title mb-5 mt-3">
                <span>Search Result</span>
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  marginBottom: 100,
                  marginTop: -100,
                }}
              >
                {console.log(search)}
                {!search.destinations == []
                  ? search.destinations.map((item) => {
                      return (
                        <div
                          onClick={() =>
                            history.push({
                              pathname: `/destination_details/${item.title}`,
                              id: item._id,
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
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: 10,
                            }}
                            src={item.upload_images}
                          />
                          <div
                            style={{ color: "black" }}
                            className="package__trip"
                          >
                            <h6 className="packages__block-title mt-3 mb-0">
                              {item.title}
                            </h6>
                            <small className="packages__block-subtitle">
                              {item.sub_title}
                            </small>
                          </div>
                        </div>
                      );
                    })
                  : null}

                {!search.packages == []
                  ? search.packages.map((item) => {
                      return (
                        <div
                          onClick={() =>
                            history.push({
                              pathname: `/destination_details/${item.title}`,
                              id: item._id,
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
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: 10,
                            }}
                            src={item.upload_images}
                          />
                          <div
                            style={{ color: "black" }}
                            className="package__trip"
                          >
                            <h6 className="packages__block-title mt-3 mb-0">
                              {item.title}
                            </h6>
                            <small className="packages__block-subtitle">
                              {item.sub_title}
                            </small>
                          </div>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          ) : null}
        </>

        <h2 className="package__title mb-5">
          <span>Packages</span>
        </h2>
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
          </div>
        </>
        <hr />
        <>
          <h2 className="package__title mb-5">
            <span>Destinations</span>{" "}
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              marginBottom: 100,
              marginTop: -100,
            }}
          >
            {destinations.map((item) => {
              return (
                <div
                  onClick={() =>
                    history.push({
                      pathname: `/destination_details/${item.title}`,
                      id: item._id,
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
                    style={{ width: "100%", height: "100%", borderRadius: 10 }}
                    src={item.upload_images}
                  />
                  <div style={{ color: "black" }} className="package__trip">
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
          </div>
        </>
      </Container>
      <Footer />
    </>
  );
}

export default Search;
