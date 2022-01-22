import React, { useEffect, useState } from "react";
import { Button, Row, Container, Image } from "react-bootstrap";
import ImageDesk from "./Desktopimage";
// import Salyimg from "../../assets/img/Saly-1.png";
// import Layer11 from "../../assets/img/hil.svg";
// import Layer12 from "../../assets/img/adivash.svg";
// import doodle1 from "../../assets/img/doodle.png";
import "./../assets/css/saly.css";
import Header from "../components/Header";
// import MarqueeComponent from './marquee'
import Logo from '.././assets/img/new_Logo.png'
import Marquee from "react-fast-marquee";
import { useHistory } from "react-router-dom";
import checkimage from "../assets/TravelBastar-desktop/checkimage.png";
import { useDispatch } from "react-redux";
import { setinterestprehome } from '../redux/actions'
import SeoData from '../SeoData.json'
import FooterIcons from "../Footer/FooterIcons"

const PreHome = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const [adventure11, setAdventure] = useState(0);
  const [culture11, setCulture] = useState(0);
  const [heritage11, setHeritage] = useState(0);
  const [leisure11, setLeisure] = useState(0);
  const [imageCounter, setImageCounter] = useState([]);
  // const [getMAxValue, setGetMAxValue] = useState([]);
  // const [status, setStatus] = useState(false);
  const selectImageCategory = async (category, key, classN, e) => {
    console.log({ category })
    key = parseInt(key);
    let status = false
    if (imageCounter.length > 0) {
      if (imageCounter.includes(key)) {
        // setStatus(false)
        let aaa = imageCounter;
        let newarry = aaa.filter(elem => elem !== key)
        await setImageCounter([...newarry]);
      } else {
        // setStatus(true)
        status = true
        let arr = imageCounter;
        arr.push(key)
        await setImageCounter(arr);
      }
    } else {
      // setStatus(true)
      status = true
      let arr = imageCounter;
      arr.push(key)
      await setImageCounter(arr);
    }
    switch (category) {
      case "Adventure":
        if (status === true) setAdventure(adventure11 + 1);
        else setAdventure(adventure11 - 1);
        break;
      case "Culture":
        if (status === true) setCulture(culture11 + 1);
        else setCulture(culture11 - 1);

        break;
      case "Heritage":
        if (status === true) setHeritage(heritage11 + 1);
        else setHeritage(heritage11 - 1);

        break;
      case "Leisure":
        if (status === true) setLeisure(leisure11 + 1);
        else setLeisure(leisure11 - 1);

        break;
      default:
        break;
    }
    console.log(adventure11, culture11, heritage11, leisure11)
    let x, i, overlay3;
    x = document.querySelectorAll("." + classN);
    overlay3 = document.querySelectorAll(".overlay3" + key);
    for (i = 0; i < x.length; i++) {
      if (status === true) {
        x[i].style.border = "3px solid green";
        overlay3[i].style.display = "block";
      } else {
        x[i].style.border = "none";
        overlay3[i].style.display = "none";
      }
    }
  };

  useEffect(() => {
    document.title = SeoData.home.page_title || 'Travel Bastar';
    document.querySelector("meta[name='description']").setAttribute('content', (SeoData.home.meta_description || ''));
    document.querySelector("meta[name='keywords']").setAttribute('content', (SeoData.home.meta_keywords || ''));
  }, [])

  const getmaxCategory = async () => {
    dispatch(setinterestprehome({
      adventure: adventure11 * 25,
      culture: culture11 * 25,
      religious: heritage11 * 25,
      leisure: leisure11 * 25,
    }))
    history.push('/explore')
  };

  return (
    <>
      <Container
        fluid="true"
        className="d-none d-md-block"
        style={{ padding: 0, margin: 0 }}
      >
        <Header />
        {/* <MarqueeComponent /> */}
        <Marquee speed="30" direction="right">
          <div style={{ cursor: "pointer" }} onClick={() => history.push("/audioJourney")} >
            <span style={{ margin: "0 0.5rem 0 5rem" }} >Audio Journeys</span>
            <img src={Logo} style={{ height: '35px' }} alt="new" />
          </div>
          <div style={{ cursor: "pointer" }} onClick={() => history.push("/buspass")} >
            <span style={{ margin: "0 0.5rem 0 5rem" }}>Book Bus Tickets</span>
            <img src={Logo} style={{ height: '35px' }} alt="new" />
          </div>
        </Marquee>

        <Row className="saly_div w-100  m-0 ">
          <div
            className="container"
            style={{ paddingLeft: "10%", paddingRight: "10%" }}
          >
            <div className="homepage-top_title">
              <h1 className="top_title123">Travel Bastar</h1>
              <center>
                To create a curated experience for you on this site,please
                select our preference from the options below. You can select as
                few or as many options as you like.
              </center>
            </div>
            <div className="row ">
              {ImageDesk?.slice(0, 16).map((item, key) => {
                return (
                  <div
                    key={key}
                    className="col-sm-3 container123"
                    style={{ marginTop: "10px" }}
                  >
                    <div className="mainImgContainer">
                      <Image
                        className={`homepage borderImage${key} container1234`}
                        draggable={false}
                        style={{ width: "100%", height: "100%" }}
                        src={item.image}
                        alt={item.title}
                      />
                      <div
                        className="overlay"
                        chek="DeskView"
                        onClick={(e) =>
                          selectImageCategory(
                            item.category,
                            key,
                            `borderImage${key}`,
                            e
                          )
                        }
                      >
                        <div className="textHover">
                          <b>{item.title}</b>
                        </div>
                      </div>
                      <div
                        style={{ display: "none" }}
                        className={`overlay3 overlay3${key}`}
                        chek="DeskView"
                        onClick={(e) =>
                          selectImageCategory(
                            item.category,
                            key,
                            `borderImage${key}`,
                            e
                          )
                        }
                      >
                        <Image src={checkimage} className="checkimage" />
                        <div className="textHover">
                          <b>{item.title}</b>
                        </div>
                      </div>
                    </div>


                  </div>
                );
              })}
            </div>
            <div style={{ marginTop: "30px" }}>
              <center>
                <Button
                  style={{
                    padding: "10px",
                    paddingLeft: "60px",
                    paddingRight: "60px",
                  }}
                  className="btn btn-block btn-success"
                  onClick={() => getmaxCategory()}
                // onClick={() => history.push("/explore")}
                >
                  CONTINUE
                </Button>
              </center>
            </div>
          </div>
        </Row>
      </Container>

      {/* Mobile View */}
      <div fluid="true" className="d-md-none">
        <Header />
        <Marquee speed="30" direction="right">
          <div style={{ cursor: "pointer" }} onClick={() => history.push("/audioJourney")} >
            <span style={{ margin: "0 0.5rem 0 5rem" }} >Audio Journeys</span>
            <img src={Logo} style={{ height: '35px' }} alt="new" />
          </div>
          <div style={{ cursor: "pointer" }} onClick={() => history.push("/buspass")} >
            <span style={{ margin: "0 0.5rem 0 5rem" }}>Book Bus Tickets</span>
            <img src={Logo} style={{ height: '35px' }} alt="new" />
          </div>
        </Marquee>

        <div fluid="true" style={{ padding: 0, margin: 0 }}></div>
        <Row className="saly_div w-100  m-0 p-0 pt-5 ">
          <div
            className="container"
            style={{ paddingLeft: "10%", paddingRight: "10%", margin: "0 0 3rem" }}
          >
            <div className="homepage-top_title">
              <h1 className="top_title">Travel Bastar</h1>
              <center>
                {" "}
                To create a curated experience for you on this site,please
                select our preference from the options below.
                <br />
                You can select as few or as many options as you like.
              </center>
            </div>
            <div style={{ margin: "0 0 2rem" }} className="row ">
              {ImageDesk?.slice(0, 16).map((item, key) => {
                return (
                  <div
                    key={key}
                    className="container123"
                    style={{ width: "50%", height: "50%" }}
                  >
                    <div className="mainImgContainer">

                      <Image
                        className={`homepage1 borderImage${key} container1234 `}
                        draggable={false}
                        style={{
                          width: "100%",
                          height: "120%",
                          marginTop: "10px",
                        }}
                        src={item.image}
                        alt={item.title}
                      />
                      <div
                        className="overlay2"
                        style={{ width: "100%", height: "89%", marginTop: "10px" }}
                        chek="mobileView"
                        onClick={(e) =>
                          selectImageCategory(
                            item.category,
                            key,
                            `borderImage${key}`,
                            e
                          )
                        }
                      >
                        <div className="textHover">
                          <b>{item.title}</b>
                        </div>
                      </div>
                      <div
                        style={{ display: "none", width: "100%", height: "89%", marginTop: "10px", marginBottom: "10px" }}
                        className={`overlay3 overlay3${key}`}
                        chek="mobileView"
                        onClick={(e) =>
                          selectImageCategory(
                            item.category,
                            key,
                            `borderImage${key}`,
                            e
                          )
                        }
                      >
                        {" "}
                        <Image src={checkimage} className="checkimage" />
                        <div className="textHover">
                          <b>{item.title}</b>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "fixed", left: "0", bottom: "66.77px", width: "100%", boxShadow: "0 0 10px rgba(0,0,0,0.5" }}>
              <Button
                style={{
                  padding: "14px 60px", width: "70%", borderRadius: "0", border: "none"
                }}
                className="btn btn-block btn-success"
                onClick={() => getmaxCategory()}
              // onClick={() => history.push("/explore")}
              >
                CONTINUE
              </Button>
              <button
                onClick={() => history.push("/curatedexperiences")}
                style={{ width: "30%", color: "purple", borderRadius: "0", border: "0", padding: "13px 0 14px", textTransform: "uppercase", fontSize: "1rem" }}>Skip</button>
            </div>
            <FooterIcons />
          </div>
        </Row>
      </div>
    </>
  );
};

export default PreHome;
