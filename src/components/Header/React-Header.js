// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';

// Vanilla CSS
import "../../App.css";
import "./Header.css";

// icons
import {  FaUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";



function NavScrollExample () {
    return (
        <Navbar expand="lg" sticky="top" className="pb-3 pt-3  header" style={ { borderBottom: "0.1rem solid hsl(23, 61%, 86%)" } }>
            <Container>
                <Navbar.Toggle aria-controls="navbarScroll" className='toggle' />
                <div className='logo'>
                    <Navbar.Brand href="#">Mi-Foodie<span>.</span></Navbar.Brand>

                </div>
                <Nav className='cart-container-sm'>
                    <Nav.Link href="#action2">
                        <BsCart3 style={ { fontSize: "1.5rem" } } />
                    </Nav.Link>
                    <div className='cart-notice-lg'>0</div>

                </Nav>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={ { marginLeft: "auto" } }
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Menu</Nav.Link>
                        <Nav.Link href="#action2">About Us</Nav.Link>
                        <Nav.Link href="#action2">Blog</Nav.Link>
                        <Nav.Link href="#action2">Contact</Nav.Link>

                    </Nav>
                    <Form className="d-flex me-auto">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                    <Nav>
                        <Nav.Link href="#action2" className='me-auto'>
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className='header-icon-container'>
                                    <FaUser /> <div className='header-account'>Account</div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='drop-menu'>
                                    <Dropdown.Item href="#/action-1">My Account</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">Register</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Login</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Orders</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Link>
                    </Nav>
                    <Nav className='cart-container-lg'>
                        <Nav.Link href="#action2">
                            <BsCart3 style={ { fontSize: "1.5rem" } } />
                        </Nav.Link>
                        <div className='cart-notice-lg'>0</div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;