import React, { useEffect, useState } from "react";
import { Button, Row, Col, Container, Image } from "react-bootstrap";
import ImageDesk from "./Desktopimage"
// import Salyimg from "../../assets/img/Saly-1.png";
// import Layer11 from "../../assets/img/hil.svg";
// import Layer12 from "../../assets/img/adivash.svg";
// import doodle1 from "../../assets/img/doodle.png";
import "./../assets/css/saly.css";
import Header from "../components/Header";
import { Link, useHistory } from "react-router-dom";
const PreHome = () => {
    const history = useHistory()
  const [adventure11, setAdventure] = useState(1);
  const [culture11, setCulture] = useState(1);
  const [heritage11, setHeritage] = useState(1);
  const [leisure11, setLeisure] = useState(1);
  const [imageCounter, setImageCounter] = useState([]);
  const [getMAxValue, setGetMAxValue] = useState([]);
  const selectImageCategory = async (category,key,classN) => {
    let status;
    if(await imageCounter.includes(key)){
      let aaa = imageCounter;
     let keyIndex= await aaa.findIndex((keyInd)=>keyInd == key);
      status=false;
      aaa.splice(keyIndex,0)
      setImageCounter(aaa)

    }else{
      status=true;
      await setImageCounter([...imageCounter,key])
    }
    switch (category) {
      case "Adventure":
        if(status===true)
        setAdventure(adventure11+1);
      
        else 
        setAdventure(adventure11-1);
        break;
      case "Culture":
        if(status===true)
        setCulture(culture11+1);
        else 
        setCulture(culture11-1);
        break;
      case "Heritage":
        if(status===true)
        setHeritage(heritage11+1);
        else
        setHeritage(heritage11-1);

        break;
      case "Leisure":
        if(status===true)
        setLeisure(leisure11+1);
        else
        setLeisure(leisure11-1);

        break;
      default:
        break;
    }
    setGetMAxValue([adventure11,culture11,heritage11,leisure11])
    console.log({classN})
      let x, i;
  x = document.querySelectorAll('.'+classN);
  for (i = 0; i < x.length; i++) {
    if(status===true)
    x[i].style.border = "3px solid green";
    else
    x[i].style.border = "none";
  }
  
    console.log(getMAxValue)

  };
  const getmaxCategory=()=>{
    console.log(getMAxValue)
  let maxvalue= Math.max(...getMAxValue)
  console.log(maxvalue)
  let getIndex = getMAxValue.findIndex((keyInd)=>keyInd == maxvalue);
    if(getIndex===0)
  history.push('/interest')
  else if(getIndex===1)
  history.push('/interest')
  else if(getIndex===2)
  history.push('/interest')
  else if(getIndex===3)
  history.push('/interest')
  }

    return (
        <>
        <Container
        fluid="true"
        className="d-none d-md-block"
        style={{ padding: 0, margin: 0 }}
      >
        <Header />
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
                      <Image
                        className={`homepage borderImage${key}`}
                        draggable={false}
                        style={{ width: "100%", height: "100%" }}
                        src={item.image}
                        alt={item.title}
                      />
                      <div
                        className="overlay"
                        onClick={() => selectImageCategory(item.category,key,`borderImage${key}`)}
                      >
                        <div className="textHover">
                          <b>{item.title}</b>
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
                    onClick={()=>getmaxCategory()}
                  >
                    CONTINUE
                  </Button>
                </center>
              </div>
            </div>
            {/* <Col xs={12} md={6}>
                <div>
                  {/* <div style={{ paddingTop: "8%" }}> *
                  <div className="video_div">
                    <iframe
                      style={{ borderRadius: "10px" }}
                      // className="search_view"
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/V_JZZ1glvkA"
                      title="YouTube video player"
                      frameBorder="0"
                      // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </Col> */}
            {/* <Col xs={12} md={6}>
              <div className="rocket-image"
                style={{
                  position: "absolute",
                  width: "689px",
                  minHeight: "590px",
                  top: "14%",
                  left: "4%"
                }}>
                <img src={Salyimg} alt="saly" style={{ width: "100%" }} />
              </div>
            </Col> */}

            {/* <Col xs={12} md={6} className="quiz_div">
                {
                  (quizStarted)
                    ?
                    questions.map((item, i) => {
                      if (item.is_current) {
                        return <div key={i} className="on_quiz" >
                          <div className="quiz_gif">
                            <img src={item.gif} />
                          </div>
                          <p className="quiz_question">{item.question}</p>
                          <div className="quiz_answer">
                            <button className="btn quiz_no_btn" onClick={() => onAnswer(i, false)}>No </button>
                            <button className="btn quiz_yes_btn" onClick={() => onAnswer(i, true)}>Yes </button>
                            <div className="quiz_skip_btn" onClick={() => dispatch(setQuizEnded(true))}>SKIP QUIZ &gt; </div>
                          </div>
                        </div>
                      }
                    })
                    :
                    <div className="start_quiz" >
                      <div className="quiz_title">Welcome <span>Traveller,</span> </div>
                      <p className="quiz_content_header">Want to know what kind of traveller you are?</p>
                      <p >  Take the quiz to get your travel personality and have curated experiences suggested to you.</p>
                      <div className="quiz_start_btn" onClick={() => dispatch(setQuizStarted(true))}>START THE QUIZ &gt; </div>
                    </div>
                }
              </Col> */}
          </Row>  
      </Container>
          


          {/* Mobile View */}
          <div fluid="true" className="d-md-none">
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
                      <div className="container123" style={{ width: "50%", height: "75%" ,}}
                      >
                        <Image
                        className={`homepage1 borderImage${key}`}
                        draggable={false}
                          style={{ width: "100%", height: "100%" ,marginTop: "10px" }}
                          src={item.image}
                          alt={item.title}
                        />
                        <div className="overlay2"
                          onClick={() => selectImageCategory(item.category,key,`borderImage${key}`)}
                                                >
                          <div className="textHover">
                            <b>{item.title}</b>
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
                      onClick={()=>getmaxCategory()}

                    >
                      CONTINUE
                    </Button>
                  </center>
                </div>
              </div>
              {/* <Col xs={12} md={6}>
                <div>
                  <div className="video_div">
                    <iframe
                      style={{ borderRadius: "10px" }}
                      // className="search_view"
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/V_JZZ1glvkA"
                      title="YouTube video player"
                      frameBorder="0"
                      // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </Col> */}

              {/* <Col xs={12} md={6} className="quiz_div">
                  {
                    (quizStarted)
                      ?
                      questions.map((item, i) => {
                        if (item.is_current) {
                          return <div key={i} className="on_quiz  p-3 py-4" >
                            <div className="quiz_gif">
                              <img style={{ height: "175px" }} src={item.gif} />
                            </div>
                            <p className="quiz_question">{item.question}</p>
                            <div className="quiz_answer">
                              <button className="btn quiz_no_btn" onClick={() => onAnswer(i, false)}>No </button>
                              <button className="btn quiz_yes_btn" onClick={() => onAnswer(i, true)}>Yes </button>
                            </div>
                            <div className="quiz_skip_btn" style={{ position: "relative", float: "initial", right: "initial", textAlign: "center", marginTop: "5%" }} onClick={() => dispatch(setQuizEnded(true))}>SKIP QUIZ &gt; </div>
                          </div>
                        }
                      })
                      :
                      <div className="start_quiz" >
                        <div className="quiz_title">Welcome <span>Traveller,</span> </div>
                        <p className="quiz_content_header" style={{ paddingInlineEnd: "22vw" }}>Want to know what kind of traveller you are?</p>
                        <p >  Take the quiz to get your travel personality and have curated experiences suggested to you.</p>
                        <div className="quiz_start_btn" onClick={() => dispatch(setQuizStarted(true))}>START THE QUIZ &gt; </div>
                      </div>
                  }
                </Col> */}
            </Row>
            </div>
        </>
    )
}

export default PreHome
