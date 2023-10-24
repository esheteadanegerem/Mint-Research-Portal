import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import '../assets/css/Navbar.css'
const Navbarr = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <Navbar expand="lg" bg="light">
      <Navbar.Brand to="/">
        <img src={logo} alt="mint logo" id="logo" className="h-50 w-55 rounded" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" onClick={toggleDropdown} />
      <Navbar.Collapse id="navbarNav">
        <Nav className="mr-auto active">
          <Nav.Link href="/" id="home" >
            Home
          </Nav.Link>
          <Nav.Link href="/about" id="annoucement">
            Announcements
          </Nav.Link>
          <NavDropdown title="Resources" id="resource" show={isDropdownOpen} onClick={toggleDropdown}>
            <NavDropdown.Item href="/resources/application" id="application">
              Applications
            </NavDropdown.Item>
            <NavDropdown.Item href="/resources/laboratory">Laboratories</NavDropdown.Item>
            <NavDropdown.Item href="/resources/institute">Institutes</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/collaborations" id="collaboration">
            Collaborations
          </Nav.Link>
          <Nav.Link href="/aboutus" id="about">
            About Us
          </Nav.Link>
          <Nav.Link href="/news" id="new">
            News
          </Nav.Link>
        </Nav>
        <div className="row">
        <div className='col mr-3'>  <Nav.Link href="/login" className="nav-link btn mr-3" style={{ background: '#008080', color: 'white' }}>
            Login
          </Nav.Link></div>
        <div className='col mr-3'>
        <Nav.Link href="/register" className="btn nav-link mr-3" style={{ background: '#008080', color: 'white' }}>
            Register
          </Nav.Link>
        </div>
        </div>
      </Navbar.Collapse>

    </Navbar>
  );
};

export default Navbarr;
