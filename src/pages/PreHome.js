import React, { useEffect, useState } from "react";
import { Button, Row, Col, Container, Image } from "react-bootstrap";
import ImageDesk from "./Desktopimage";
// import Salyimg from "../../assets/img/Saly-1.png";
// import Layer11 from "../../assets/img/hil.svg";
// import Layer12 from "../../assets/img/adivash.svg";
// import doodle1 from "../../assets/img/doodle.png";
import "./../assets/css/saly.css";
import Header from "../components/Header";
import MarqueeComponent from './marquee'
import { Link, useHistory } from "react-router-dom";
import checkimage from "../assets/TravelBastar-desktop/checkimage.png";

const PreHome = () => {
  const history = useHistory();
  const [adventure11, setAdventure] = useState(1);
  const [culture11, setCulture] = useState(1);
  const [heritage11, setHeritage] = useState(1);
  const [leisure11, setLeisure] = useState(1);
  const [imageCounter, setImageCounter] = useState([]);
  const [getMAxValue, setGetMAxValue] = useState([]);
  const selectImageCategory = async (category, key, classN, e) => {
    let status=true ;
    key = parseInt(key);
    if(imageCounter.length>0){
      if (await imageCounter.includes(key)) {
        let aaa = imageCounter;
        let keyIndex = await aaa.findIndex((keyInd) => keyInd === key);
        status = false;
        aaa= await  aaa.splice(keyIndex, 1);
       await setImageCounter(aaa);
      } else {
        status = true;
        let arr = imageCounter;
        arr.push(key)
       await   setImageCounter(arr);
      }
    }else{
      let arr = imageCounter;
      arr.push(key)
     await   setImageCounter(arr);
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
    setGetMAxValue([adventure11, culture11, heritage11, leisure11]);
    let x, i, overlay3;
    x = document.querySelectorAll("." + classN);
    overlay3 = document.querySelectorAll(".overlay3" + key);
    for (i = 0; i < x.length; i++) {
      if (status === true) {
        x[i].style.border = "3px solid green";
        overlay3[i].style.display = "block";
      } else {
        x[i].style.border = "none";
        overlay3[i].style.display ="none";
      }
    }
  };
  const getmaxCategory = () => {
    console.log(getMAxValue);
    let maxvalue = Math.max(...getMAxValue);
    console.log(maxvalue);
    let getIndex = getMAxValue.findIndex((keyInd) => keyInd == maxvalue);
    if (getIndex === 0) history.push("/interest");
    else if (getIndex === 1) history.push("/interest");
    else if (getIndex === 2) history.push("/interest");
    else if (getIndex === 3) history.push("/interest");
  };

  return (
    <>
      <Container
        fluid="true"
        className="d-none d-md-block"
        style={{ padding: 0, margin: 0 }}
      >
        <Header />
        <MarqueeComponent/>
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
        <MarqueeComponent/>

        <div fluid="true" style={{ padding: 0, margin: 0 }}></div>
        <Row className="saly_div w-100  m-0 p-0 pt-5 ">
          <div
            className="container"
            style={{ paddingLeft: "10%", paddingRight: "10%" }}
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
            <div className="row ">
              {ImageDesk?.slice(0, 16).map((item, key) => {
                return (
                  <div
                    className="container123"
                    style={{ width: "50%", height: "75%" }}
                  >
                     <div className="mainImgContainer">
                    
                    <Image
                      className={`homepage1 borderImage${key} container1234 `}
                      draggable={false}
                      style={{
                        width: "100%",
                        height: "100%",
                        marginTop: "10px",
                      }}
                      src={item.image}
                      alt={item.title}
                    />
                    <div
                      className="overlay2"
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
                      style={{ display: "none" }}
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
                >
                  CONTINUE
                </Button>
              </center>
            </div>
          </div>
        </Row>
      </div>
    </>
  );
};

export default PreHome;
