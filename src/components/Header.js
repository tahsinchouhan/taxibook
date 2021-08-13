import React, { useState } from "react";
import {
  Container,
  Offcanvas,
  Nav,
  Navbar,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { HiMenu } from "react-icons/hi";
import logo from "../assets/img/logo.png";
import { NavLink, useHistory } from "react-router-dom";
import { FaUser, FaSistrix } from "react-icons/fa";
import { useDispatch, connect } from "react-redux";
import LoginModal from "../components/modal/LoginModal";
import Modal from 'react-bootstrap'

function Header() {
  const [modalShow, setModalShow] = useState(false);

const modalHadler=()=>{
  setModalShow(true)
  console.log("helllo")
}
const  handleLoginClose=()=>{
  setModalShow(false)
}

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState(false);
  const [explore, setExpolre] = useState(false);
  const [booking, setBooking] = useState(false);

  const [searching, setSearching] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();

  const onSearchClick = () => {
    console.log("hiii");
    history.push("/search");
  };

  const onSearchingHolder = () => {
    console.log("hellllooo");
  };

  return (
    <>
      <Container className="d-md-none header_div">
        <header style={{ flexDirection: "row" }}>
          <HiMenu onClick={handleShow} className="sidebar__toggler" />
          <div style={{ textAlign: "center" }}>
            <img className="logo" style={{ width: 80 }} src={logo} />
            <FaSistrix onClick={onSearchClick} className="searchIcon" />
          </div>
        </header>

        {search === true ? (
          <div className="">
            <InputGroup>
              <FormControl
                id="inlineFormInputGroup"
                onChange={onSearchingHolder}
                placeholder="Search..."
              />
            </InputGroup>
          </div>
        ) : null}

        <Offcanvas show={show} onHide={handleClose} className="sidebar">
          <Offcanvas.Header style={{ flexDirection: "row-reverse" }}>
            <HiMenu onClick={handleClose} className="sidebar__toggler" />
            <Offcanvas.Title>Login</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto sidebar__nav">
              <NavLink to="/" className="sidebar__navlink">
                HOME
              </NavLink>
              <NavLink className="sidebar__navlink" to="/explores">
                EXPLORE
              </NavLink>
              {/* <NavLink className="sidebar__navlink" to="/select-booking"> */}
              <NavLink className="sidebar__navlink" to="/buspass">
                BOOKING
              </NavLink>
              <NavLink className="sidebar__navlink" to="/dmpass">
                DM PASS
              </NavLink>
              <NavLink className="sidebar__navlink" to="/tickets_sraech">
                TICKETS
              </NavLink>
              <NavLink className="sidebar__navlink" to="/pricing">
                CONTACT
              </NavLink>
              <NavLink className="sidebar__navlink" to="/pricing">
                ABOUT
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>

      <Container fluid className="header_div d-none d-md-block">
        <Navbar expand="lg" style={{ height: "80px" }}>
          <Navbar.Brand href="#">
            <div style={{ marginLeft: "100%" }}>
              <img className="logo" src={logo} />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="toggle-icon" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{
                maxHeight: "100px",
                justifyContent: "center",
                alignItems: "center",
                flex: "1",
              }}
              navbarScroll
            >
              <NavLink className="sidebar_item" to="/">
                HOME
              </NavLink>
              <NavLink className="sidebar_item" to="/explores">
                EXPLORE
              </NavLink>
              {/* <NavLink className="sidebar_item" to="/select-booking"> */}
              <NavLink className="sidebar_item" to="/buspass">
                BOOKING
              </NavLink>
              <NavLink className="sidebar_item" to="/dmpass">
                DM PASS
              </NavLink>
              <NavLink className="sidebar_item" to="/tickets_sraech">
                TICKETS
              </NavLink>
              <NavLink className="sidebar_item" to="#">
                CONTACT
              </NavLink>
              <NavLink className="sidebar_item" to="#">
                ABOUT
              </NavLink>
            </Nav>
            <Form className="" style={{ marginRight: "70px" }}>
              <div className="header_right d-flex">
                <div className="header_info d-flex">
                  <FaUser
                    style={{
                      fontSize: "21px",
                      color: "purple",
                      marginRight: "10px",
                    }}
                  />
                  <h4
                    style={{
                      fontSize: "18px",
                      color: "purple",
                      marginRight: "10px",
                    }}
                    onClick={() =>  modalHadler()}
                  >                                   
                    login
                  </h4>
                </div>
                <div>
                  <FaSistrix
                    style={{
                      fontSize: "21px",
                      color: "grey",
                      fontWeight: "600",
                      fontStyle: "bold",
                      marginRight: "10px",
                    }}
                    onClick={onSearchClick}
                  />
                </div>
              </div>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <LoginModal show={modalShow} handleClose={handleLoginClose}/>    
    </>
  );
}

export default Header;
