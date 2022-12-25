import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { loggedIn } from './utils/fetching.js';

function Header() {
  let [loggedInStatus, setLoggedInStatus] = useState(false)

  async function updateLoggedInStatus() { 
    const status = await loggedIn()
    setLoggedInStatus(status)
  }
  useEffect(() => {
    updateLoggedInStatus()
  }, [])
  if (loggedInStatus) {
    return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">M-M.Institute</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/students">Students</Nav.Link>
            <Nav.Link href="/feed">Feed</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/compose">Compose</Nav.Link>
            <Nav.Link href="/me">Me</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
    }
    else {
      return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">M-M.Institute</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/students">Students</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      );
    }
}

export default Header;