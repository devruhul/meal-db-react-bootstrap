import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <header>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container className='fluid'>
                        <Navbar.Brand  >
                            <Link className='logo-text' to="/">Meal DB</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className='ms-auto logo-text' >
                                <Link className='logo-text' to="/">Home</Link>
                                <Link className='logo-text' to="/about">About Us</Link>
                                <Link className='logo-text' to="/meals">Meals</Link>
                                <Link className='logo-text' to="/contact">Contact Us</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

        </div>
    );
};

export default Header;