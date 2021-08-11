import React, { useEffect, useState } from "react";
import { Container, Form, Row, Image } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import Footer from "../pages/travesaly/Footer";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";
import { API_PATH } from "../Path/Path";

function Packages() {
  const history = useHistory();
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    getPackages();
  }, []);

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
    <React.Fragment>
      <Header />
      <Container>
        <div className="mt-5 mb-5">
          <div className="explore-search">
            <form className="d-flex" style={{ position: "relative" }}>
              <Form.Control
                type="text"
                name="search"
                placeholder="search...."
                style={{ marginTop: "-10px" }}
              />
              <button
                className="form__search-btn"
                type="submit"
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
            </form>
          </div>
        </div>
        <h2 class="package__title mb-5">
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
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default Packages;
