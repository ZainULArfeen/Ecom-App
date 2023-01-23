import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return(
    <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
          <Container>
            <Navbar.Brand>Urban SHoes</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/login">Men</Nav.Link>
                <Nav.Link href="/login">Women</Nav.Link>
              </Nav>
              <Nav className="ml-auto">
                <Nav.Link href="/login"><i className='fas fa-user'></i> Login</Nav.Link>
                <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
  
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </header>)
}

export default Header
