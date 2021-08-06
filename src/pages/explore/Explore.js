import React from 'react'
import { Container, Col, Form, Row,Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Inform from '../travesaly/Inform';
import hill from "../../assets/img/hil.svg";
import hill2 from "../../assets/img/hill2.jpg";
import adivashi from "../../assets/img/adivash.svg";
import tree from '../../assets/img/tree.jpg';
import {FaArrowLeft, FaSistrix } from "react-icons/fa";




function Explore() {
    
    return (
        <React.Fragment>
        <Container>
        <div className="mt-5 mb-5">
          <div>
             <div className="mr-1 ml-1 search">
            
              <form className="d-flex">
              <FaArrowLeft style={{backgroundColor:"red",color:"black",margin:"12px"}}/>
                <Form.Control type="text" name="search" placeholder="search...." 
                style={{marginTop:"-10px"}}/>
                <button className="form__search-btn"  type="submit" style={{position: 'absolute',top: 6, right: 0, background: 'none',border: 'none'}}>
                  {/* <img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/> */}
                  <BsSearch 
                    // value={{ color: 'blue', size: '1000px' }}
                    color="grey"
                    size="25px"
                  />
                </button>
              </form>
            </div>
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
            <hr/>
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
  
          : <>
             {/* <h2 class="package__title package__title_ "><span>Packages</span></h2> */}
             <h2 class="package__title mb-4 mt-4"><span>Packages</span> </h2>
                <Row>
                {/* {
                  searchByPackgeItem.map(item => ( */}
                    <Col md={2} sm={6} xs={6} className="mb-3 mt-3">
                      {/* <Link className="code" to={`/package_details/${item.id}`}> */}                      
                      <Link className="code">
                        <div id="package__sort">
                          <Image
                            draggable={false}
                            style={{ width: "100%", height: "100%" }}
                            src={hill2}
                          />
                          <h6 className="packages__block-title_ mt-3 mb-0">Mendri Ghumar</h6>
                          <small className="packages__block-subtitle">Mendri Ghumar</small>
                        </div>
                      </Link>
                    </Col>
                  {/* )) 
                } */}
            </Row>
            {/* <h2 class="package__title package__title_ "><span>Destinations</span></h2> */}
            <h2 class="package__title mb-4 mt-4"><span>Destinations</span> </h2>
            <br/>
                <Row>
                {/* {
                  searchByDestinationItem.map(item => ( */}
                    <Col md={2} sm={6} xs={6} className="mb-3">
                      {/* <Link className="code" to={`/destination_details/${item.id}`}> */}
                      <Link className="code">
                        <div id="package__sort">
                          <Image
                            draggable={false}
                            style={{ width: "100%", height: "100%" }}
                            src={tree}
                          />
                          <h6 className="packages__block-title_ mt-3 mb-0">Michnar Hills</h6>
                          <small className="packages__block-subtitle_ mb-3">Michnar Hills</small>
                        </div>
                      </Link>
                    </Col>
                  {/* )) 
                } */}
            </Row>
          </>   
        </Container>
        <Inform/>
      </React.Fragment>
    )
}

export default Explore
