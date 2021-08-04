import React, { useState } from 'react'
import { Container, Offcanvas, Nav, Navbar, Button, NavDropdown, Form, FormControl } from "react-bootstrap";
import { HiMenu } from 'react-icons/hi'
import logo from '../assets/img/logo.png'
import { NavLink } from 'react-router-dom';
import { FaUser, FaSistrix } from "react-icons/fa";
import Saly from '../pages/travesaly/Saly';



export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Container fluid className="header_div">
                {/* <Button variant="primary" onClick={handleShow}>
          Launch
        </Button> */}

                {/* <Container>
                <header classNameName="header">
                    <HiMenu onClick={handleShow} className="sidebar__toggler" />
                    <img className="logo" src={logo} />
                </header>

                <Offcanvas show={show} onHide={handleClose} className="sidebar" >
                    <Offcanvas.Header closeButton style={{ flexDirection: "row-reverse" }}>
                        <Offcanvas.Title>Login</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="me-auto sidebar__nav">
                            <Nav.Link className="sidebar_item" href="#explore">EXPLORE</Nav.Link>
                            <Nav.Link className="sidebar_item" href="#booking">BOOKING</Nav.Link>
                            <Nav.Link className="sidebar__navlink" href="#pricing">TICKETS</Nav.Link>
                            <Nav.Link className="sidebar__navlink" href="#pricing">CONTACT</Nav.Link>
                            <Nav.Link className="sidebar__navlink" href="#pricing">ABOUT</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container> */}

                {/* <Navbar className="mr-auto" bg="light" >
                    <Navbar.Brand href="#">
                        <div  style={{marginLeft:"30px"}}>
                            <img className="logo" src={logo} style={{ height: "90px",}} />
                        </div></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="sidebar__nav mr-auto my-2 my-lg-0 d-flex"
                            // style={{ maxHeight: '100px',justifyContent:"center",alignItems:"center",flex:"1" }}
                            navbarScroll
                        >
                            <Nav.Link className="sidebar_item" href="#explore">EXPLORE</Nav.Link>
                            <Nav.Link className="sidebar__navlink" href="#booking">BOOKING</Nav.Link>
                            <Nav.Link className="sidebar__navlink" href="#pricing">TICKETS</Nav.Link>
                            <Nav.Link className="sidebar__navlink" href="#pricing">CONTACT</Nav.Link>
                            <Nav.Link className="sidebar__navlink" href="#pricing">ABOUT</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                       
                        <div className="header_right ">
                            <Form className="d-flex mr-2" >
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="mr-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar> */}
                <Navbar expand="lg" style={{ height: "60px",marginTop:"20px"}}>
                    <Navbar.Brand href="#">
                        <div style={{ marginLeft: "30px" }}>
                            <img className="logo" src={logo} style={{ height: "60px", }} />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" className="toggle-icon" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px', justifyContent: "center", alignItems: "center", flex: "1" }}
                            navbarScroll
                        >
                            <Nav.Link className="sidebar_item" href="#home">HOME</Nav.Link>
                            <Nav.Link className="sidebar_item" href="#explore">EXPLORE</Nav.Link>
                            <Nav.Link className="sidebar_item" href="#booking">BOOKING</Nav.Link>
                            <Nav.Link className="sidebar_item" href="#pricing">TICKETS</Nav.Link>
                            <Nav.Link className="sidebar_item" href="#pricing">CONTACT</Nav.Link>
                            <Nav.Link className="sidebar_item" href="#pricing">ABOUT</Nav.Link>
                        </Nav>
                        <Form className="" style={{ marginRight: "70px" }}>
                        <div className="header_right d-flex">
                            <div className="header_info d-flex">
                                <FaUser   style={{fontSize:"21px",color:"purple",marginRight:"10px"}} />
                                <h4 style={{fontSize:"18px",color:"purple",marginRight:"10px"}}>login</h4>
                            </div>
                            <div>
                                <FaSistrix style={{fontSize:"21px",
                                color:"grey" ,
                                fontWeight:"600",
                                fontStyle:"bold",
                                marginRight:"10px"}}/>
                            </div>
                        </div>
                        </Form>
                       
                        {/* <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button> */}
                    </Navbar.Collapse>
                </Navbar>


                <header classNameName="header">
                    {/* <div style={{ textAlign: 'center' }}><img className="logo" src={logo} /></div> */}
                </header>                
            </Container>
            <Saly/>
           
        </>
    );
}
