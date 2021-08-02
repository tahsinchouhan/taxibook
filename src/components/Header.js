import React, { useState } from 'react'
import { Container, Offcanvas, Nav } from "react-bootstrap";
import { HiMenu } from 'react-icons/hi'
import logo from '../assets/img/logo.png'
export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
          Launch
        </Button> */}
            <Container>
                <header className="header">
                    <HiMenu onClick={handleShow} className="sidebar__toggler" />
                    <img className="logo" src={logo} />
                </header>

                <Offcanvas show={show} onHide={handleClose} className="sidebar" >
                    <Offcanvas.Header closeButton style={{ flexDirection: "row-reverse" }}>
                        <Offcanvas.Title>Login</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="me-auto sidebar__nav">
                            <Nav.Link className="sidebar__navlink" href="#explore">EXPLORE</Nav.Link>
                            <Nav.Link className="sidebar__navlink" href="#booking">BOOKING</Nav.Link>
                            <Nav.Link className="sidebar__navlink" href="#pricing">TICKETS</Nav.Link>
                            <Nav.Link className="sidebar__navlink" href="#pricing">CONTACT</Nav.Link>
                            <Nav.Link className="sidebar__navlink" href="#pricing">ABOUT</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </>
    );
}
