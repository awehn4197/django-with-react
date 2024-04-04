import React from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

function Header() {
  return (
    <div>
        <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>ProShop</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <L to="/"></L */}
                        <Nav.Link to="/cart"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                        <Nav.Link to="/login"><i className="fas fa-user"></i>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
    </div>
  )
}

export default Header
