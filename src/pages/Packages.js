import React,{useEffect} from 'react'
import { Container, Col, Form, Row,Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Footer from '../pages/travesaly/Footer';
import hill2 from "../assets/img/hill2.jpg";
import Header from '../components/Header'

function Packages() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
          <div className="package-block">
            <h2 class="package__title package__title_ "><span>Packages</span></h2>
            <div className="sort__element">
              <label>Sort By Price : &nbsp; </label>
              <select> 
                <option>Relevance</option>
                <option value="heigh">High to Low</option>
                <option value="low">Low to High</option>
              </select>
            </div>
          </div>
            <Row>          
              {/* _package && _package.map(item => ( */}
                <Col md={2} sm={6} xs={6} className="mb-3">
                 {/* <Link className="code mb-3" to={`/package_details/${item.id}`}>  */}
                 <Link className="code mb-3" >
                  <Link className="code mb-3">
                  <div id="package__sort">
                    <Image
                      draggable={false}
                      style={{ width: "100%", height: "100%" }}
                      src={hill2}
                    />
                    <h6 className="packages__block-title_ mt-3 mb-0">Kanger Valley National Park Day Tour</h6>
                    <small className="packages__block-subtitle ">₹ 90000</small>
                  </div>
                  </Link>
                  </Link>
                </Col>
              {/* )) */}
           
            </Row>
          </>   
        </Container>
        <Footer/>
      </React.Fragment>
    )
}

export default Packages
