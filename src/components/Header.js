import React, { useState } from "react";
import {
  Container,
  Offcanvas,
  Nav,
  Navbar,
  Form,
  InputGroup,
  FormControl,
  Image,
} from "react-bootstrap";
import { HiMenu } from "react-icons/hi";
// import logo from "../assets/img/logo1.png";
import logo from "../assets/img/logo.png";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "../components/modal/LoginModal";
import { logout } from "../redux/actions";
function Header() {
  const [modalShow, setModalShow] = useState(false);

  const modalHadler = () => {
    setModalShow(true);
  };
  const handleLoginClose = () => {
    setModalShow(false);
  };

  const dispatch = useDispatch();

  const { user_data } = useSelector((state) => state.loginReducer);

  const [show, setShow] = useState(false);
  const [search, setSearch] = useState(false);
  // const [explore, setExpolre] = useState(false);
  // const [booking, setBooking] = useState(false);

  // const [searching, setSearching] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();

  const onSearchClick = () => {
    history.push("/search");
  };

  const onSearchingHolder = () => {
    console.log("hellllooo");
  };

  const goHome = () => {
    history.push("/");
  };

  return (
    <>
      <Container className="d-md-none header_div">
        <header style={{ flexDirection: "row" }}>
          <HiMenu onClick={handleShow} className="sidebar__toggler" />
          <div style={{ textAlign: "center" }}>
            <Image onClick={goHome} className="image-fluid" src={logo} style={{ height: "100px", width: "88px" }} alt="Travel Bastar" />
            {/* <FaSistrix onClick={onSearchClick} className="searchIcon" /> */}
            <svg
              className="searchIcon"
              onClick={onSearchClick}
              style={{ cursor: "pointer" }}
              width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.6582 21.6162L19.79 16.748C19.5703 16.5283 19.2725 16.4062 18.96 16.4062H18.1641C19.5117 14.6826 20.3125 12.5146 20.3125 10.1562C20.3125 4.5459 15.7666 0 10.1562 0C4.5459 0 0 4.5459 0 10.1562C0 15.7666 4.5459 20.3125 10.1562 20.3125C12.5146 20.3125 14.6826 19.5117 16.4062 18.1641V18.96C16.4062 19.2725 16.5283 19.5703 16.748 19.79L21.6162 24.6582C22.0752 25.1172 22.8174 25.1172 23.2715 24.6582L24.6533 23.2764C25.1123 22.8174 25.1123 22.0752 24.6582 21.6162ZM10.1562 16.4062C6.7041 16.4062 3.90625 13.6133 3.90625 10.1562C3.90625 6.7041 6.69922 3.90625 10.1562 3.90625C13.6084 3.90625 16.4062 6.69922 16.4062 10.1562C16.4062 13.6084 13.6133 16.4062 10.1562 16.4062Z" fill="#C4C4C4" />
            </svg>
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
            {user_data !== null ? (
              <Offcanvas.Title onClick={() => dispatch(logout())}>
                LOGOUT
              </Offcanvas.Title>
            ) : (
              <Offcanvas.Title onClick={() => modalHadler()}>
                LOGIN
              </Offcanvas.Title>
            )}
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto sidebar__nav">
              <NavLink to="/" className="sidebar__navlink">
                HOME
              </NavLink>
              <NavLink className="sidebar__navlink" to="/explore">
                EXPLORE
              </NavLink>
              {/* <NavLink className="sidebar__navlink" to="/select-booking"> */}
              <NavLink className="sidebar__navlink" to="/dmpass">
                TRAVEL PASS
              </NavLink>
              <NavLink className="sidebar__navlink" to="/select-booking">
                BOOKING
              </NavLink>
              <NavLink className="sidebar__navlink" to="/hotelsearch">
               HOTEL BOOKING
              </NavLink>
              {/* <NavLink className="sidebar__navlink" to="/tickets_sraech"> */}
              <NavLink className="sidebar__navlink" to="/tickets">
                TICKETS
              </NavLink>
              <NavLink className="sidebar__navlink" to="/buspass">
                BUS TICKETS
              </NavLink>
              {/* {user_data !== null ? (
                <NavLink className="sidebar__navlink" to="/search#Tickets">
                  VIEW TICKETS
                </NavLink>
              ) : null} */}
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>

      <Container fluid className="header_div d-none d-md-block">
        <Navbar expand="lg">
          <NavLink to="/">
            <div style={{ marginLeft: "44%", marginTop: "0%" }}>
              <Image src={logo} style={{ height: "97px", width: "85px" }} alt="Travel Bastar" />
            </div>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" className="toggle-icon" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{
                maxHeight: "100px",
                // justifyContent: "center",
                alignItems: "center",
                flex: "1",
              }}
              navbarScroll
            >
              <div style={{ marginLeft: "6%" }}>
                <NavLink className="sidebar_item" to="/">
                  HOME
                </NavLink>
                <NavLink className="sidebar_item" to="/explore">
                  EXPLORE
                </NavLink>

                <NavLink className="sidebar_item" to="/dmpass">
                  TRAVEL PASS
                </NavLink>
                {/* <NavLink className="sidebar_item" to="/select-booking"> */}
                <NavLink className="sidebar_item" to="/select-booking">
                  BOOKING
                </NavLink>
                <NavLink className="sidebar_item" to="/hotelsearch">
               HOTEL BOOKING
              </NavLink>
                {/* <NavLink className="sidebar_item" to="/tickets_sraech"> */}
                <NavLink className="sidebar_item" to="/tickets">
                  TICKETS
                </NavLink>
                <NavLink className="sidebar_item" to="/buspass">
                  BUS TICKETS
                </NavLink>
                {/* {user_data !== null ? (
                  <NavLink className="sidebar_item" to="/search#Tickets">
                    VIEW TICKETS
                  </NavLink>
                ) : null} */}
                {/* <NavLink className="sidebar_item" to="#">
                CONTACT
              </NavLink>
              <NavLink className="sidebar_item" to="#">
                ABOUT
              </NavLink> */}
              </div>
            </Nav>
            <Form className="" style={{ marginRight: "70px" }}>
              <div className="header_right d-flex">
                <div className="header_info d-flex align-items-center">
                  {/* <FaUser
                    style={{
                      fontSize: "21px",
                      color: "#864BD8",
                      marginRight: "10px",
                    }}
                  /> */}
                  <svg
                    style={{
                      marginRight: "10px",
                    }}
                    width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 11.8125C13.7607 11.8125 16.4062 9.16699 16.4062 5.90625C16.4062 2.64551 13.7607 0 10.5 0C7.23926 0 4.59375 2.64551 4.59375 5.90625C4.59375 9.16699 7.23926 11.8125 10.5 11.8125ZM15.75 13.125H13.49C12.5795 13.5434 11.5664 13.7812 10.5 13.7812C9.43359 13.7812 8.42461 13.5434 7.50996 13.125H5.25C2.3502 13.125 0 15.4752 0 18.375V19.0312C0 20.1182 0.881836 21 1.96875 21H19.0312C20.1182 21 21 20.1182 21 19.0312V18.375C21 15.4752 18.6498 13.125 15.75 13.125Z" fill="#864BD8" />
                  </svg>

                  {user_data !== null ? (
                    <h4
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        color: "#864BD8",
                        margin: "0",
                        marginRight: "40px",
                        cursor: "pointer",
                      }}
                      onClick={() => dispatch(logout())}
                    >
                      LOGOUT
                    </h4>
                  ) : (
                    <h4
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        color: "#864BD8",
                        margin: "0",
                        marginRight: "40px",
                        cursor: "pointer",
                      }}
                      onClick={() => modalHadler()}
                    >
                      LOGIN
                    </h4>
                  )}
                </div>
                <div>
                  <svg
                    onClick={onSearchClick}
                    style={{ cursor: "pointer" }}
                    width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.6582 21.6162L19.79 16.748C19.5703 16.5283 19.2725 16.4062 18.96 16.4062H18.1641C19.5117 14.6826 20.3125 12.5146 20.3125 10.1562C20.3125 4.5459 15.7666 0 10.1562 0C4.5459 0 0 4.5459 0 10.1562C0 15.7666 4.5459 20.3125 10.1562 20.3125C12.5146 20.3125 14.6826 19.5117 16.4062 18.1641V18.96C16.4062 19.2725 16.5283 19.5703 16.748 19.79L21.6162 24.6582C22.0752 25.1172 22.8174 25.1172 23.2715 24.6582L24.6533 23.2764C25.1123 22.8174 25.1123 22.0752 24.6582 21.6162ZM10.1562 16.4062C6.7041 16.4062 3.90625 13.6133 3.90625 10.1562C3.90625 6.7041 6.69922 3.90625 10.1562 3.90625C13.6084 3.90625 16.4062 6.69922 16.4062 10.1562C16.4062 13.6084 13.6133 16.4062 10.1562 16.4062Z" fill="#C4C4C4" />
                  </svg>

                  {/* <FaSistrix
                    style={{
                      fontSize: "21px",
                      color: "#C4C4C4",
                      fontWeight: "700",
                      fontStyle: "bold",
                      marginRight: "10px",
                    }}
                    onClick={onSearchClick}
                  /> */}
                </div>
              </div>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <LoginModal show={modalShow} handleClose={handleLoginClose} />
    </>
  );
}

export default Header;
