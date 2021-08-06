import React from 'react'
import { Container, Col, Form, Row,Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Footer from '../pages/travesaly/Footer';
import hill2 from "../assets/img/hill2.jpg";
import tree from '../assets/img/tree.jpg';
import Header from '../components/Header'

function Destination() {
    
    return (
        <React.Fragment>
          <Header />
        <Container>
        <div className="mt-5 mb-5">
             <div className="explore-search" >
              <form className="d-flex" style={{position:"relative"}}>              
                <Form.Control type="text" name="search" placeholder="search...." 
                style={{marginTop:"-10px"}}/>
                <button className="form__search-btn"  type="submit" style={{position: 'absolute',top: 6, right: 0, background: 'none',border: 'none'}}>
                  <BsSearch
                    style={{marginTop: -20}}
                    color="grey"
                    size="25px"
                  />
                </button>
              </form>
          </div>
        </div>
          <>
          <h2 class="package__title mb-5"><span>Destinations</span> </h2>
            <Row>
            {/* {
              _destination && _destination.map(item => ( */}
                <Col md={2} sm={6} xs={6} className="mb-3">
                  {/* <Link className="code" to={`/destination_details/${item.id}`}> */}
                  <Link className="code">                
                  <div id="package__sort">
                    <Image
                      draggable={false}
                      style={{ width: "100%", height: "100%" }}
                      src={hill2}
                    />
                    <h6 className="packages__block-title_ mt-3 mb-0">Teerathgarh Falls</h6>
                    <small className="packages__block-subtitle_ ">Kanger Valley National Park </small>
                  </div>
                  </Link>
                </Col>
              {/* ))
            } */}
            </Row>
          </>   
        </Container>
        <Footer/>
      </React.Fragment>
    )
}

export default Destination
