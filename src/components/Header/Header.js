import React from "react";
// import notificationlogo from "../../assets/images/notificationlogo.jpg";
// import profilelogo from "../../assets/images/profilelogo.jpeg";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import Profile from "../../assets/images/profile.png";
import AddUser from "../../assets/images/addUser.svg";

import "./HeaderStyle.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../ContextAPI/AuthContextAPI";

const Header = () => {
  const { doLogout } = useAuthContext();

  return (
    <Navbar expand="lg" className="dashboard_header">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          id="navbarScroll"
          className=" header_menu justify-content-between"
        >
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="flex_between">
            <Link to="/create-patient" className="create_patient">
              <span>
                <img src={AddUser} alt="" />
              </span>
              <small>Create Patient</small>
            </Link>
            <div className="notification">
              <i className="far fa-bell"></i>
            </div>
            <img src={Profile} alt="" />
            <Nav className="ms-lg-2 mr-5">
              <NavDropdown
                title={
                  <span>
                    <i class="fas fa-sort-down"></i>
                  </span>
                }
                id="navbarScrollingDropdown"
                className="mr-5 profile_dropdown"
              >
                <NavDropdown.Item href="#Profile">
                  View Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => doLogout()}>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
