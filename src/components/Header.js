import React, { useState } from "react";
import {
  Container,
  Offcanvas,
  Nav,
  Navbar,
  Button,
  NavDropdown,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { HiMenu } from "react-icons/hi";
import logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import { FaUser, FaSistrix } from "react-icons/fa";
import Saly from "../pages/travesaly/Saly";
import Search from "../pages/travesaly/Search";
import { useHistory } from "react-router-dom";
import SelectBooking from "../pages/selectbooking/SelectBooking";

export default function Header() {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState(false);
  const [explore,setExpolre] =useState(false);
  const[booking,setBooking] =useState(false);

  const [searching, setSearching] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();

  const onSearchClick = () => {
    console.log("hiii");
    history.push('/search')
  };

  const onSearchingHolder = () => {
    console.log("hellllooo");
  };

  const onExploreClick = () => {
    setExpolre(true)
    history.push('/explore')
  }
  const onBookingClick = () => {
    SelectBooking(true)
    history.push('/buspass')
  }


  return (
    <>
      <Container className="d-md-none">
        <header style={{ flexDirection: "row" }}>
          <HiMenu onClick={handleShow} className="sidebar__toggler" />
          <div style={{ textAlign: "center", marginTop: 10 }}>
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
              <Nav.Link className="sidebar__navlink" href="/">
                HOME
              </Nav.Link>
              <Nav.Link className="sidebar__navlink" href="/explore">
                EXPLORE
              </Nav.Link>
              <Nav.Link className="sidebar__navlink" href="/booking">
                BOOKING
              </Nav.Link>
              <Nav.Link className="sidebar__navlink" href="/pricing">
                TICKETS
              </Nav.Link>
              <Nav.Link className="sidebar__navlink" href="/pricing">
                CONTACT
              </Nav.Link>
              <Nav.Link className="sidebar__navlink" href="/pricing">
                ABOUT
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>

      <Container fluid className="header_div d-none d-md-block">
        <Navbar expand="lg" style={{ height: "80px"}}>
          <Navbar.Brand href="#">
            <div style={{ marginLeft: "100%"}}>
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
              <Nav.Link className="sidebar_item" href="/">
                HOME
              </Nav.Link>
              <Nav.Link className="sidebar_item" href="/explore">
                EXPLORE
              </Nav.Link>
              <Nav.Link className="sidebar_item" href="/booking">
                BOOKING
              </Nav.Link>
              <Nav.Link className="sidebar_item" href="/pricing">
                TICKETS
              </Nav.Link>
              <Nav.Link className="sidebar_item" href="/pricing">
                CONTACT
              </Nav.Link>
              <Nav.Link className="sidebar_item" href="/pricing">
                ABOUT
              </Nav.Link>
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
                {/* {search === true ? (
                  <div className="mt-4">
                    <InputGroup>
                      <FormControl className="mb-2"
                        id="inlineFormInputGroup"
                        onChange={onSearchingHolder}
                        placeholder="Search..."
                      />
                    </InputGroup>
                  </div>
                ) : null} */}
              </div>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
}
