import React, { useState } from 'react';
import { Container, Nav, Navbar, Button, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Cart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import useAuth from '../../Pages/hooks/useAuth';
import OffCart from '../OffCart/OffCart';



// import useFirebase from '../../pages/hooks/useFirebase';

const Header = () => {
    const { user, Logout } = useAuth()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
        <Navbar style={{backgroundColor: 'rgb(13, 202, 240)'}} expand="lg">
        <Container>
            <Navbar.Brand as={Link} to={'/home'} className='fs-2 fw-bold text-light'>Happy Tours</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
                <NavDropdown title="Tours" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to={'/add-tour'}>Add Tour</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to={'/manage-all-order'}>Manage All Order</Nav.Link>
                <Nav.Link as={Link} to={'/contact'}>Contact</Nav.Link>
                <Button onClick={handleShow} variant="outline-dark"><Cart></Cart></Button>
                
                {
                    user.email ? 
                <>
                <Nav.Link as={Link} to={'/my-orders'}>My Orders</Nav.Link>
                <p className='m-2'> <span className='text-light'>User:</span> <b>{user.displayName}</b></p>
                <Button onClick={Logout} variant="outline-dark">Log Out</Button>
                </>
                : 
                <>
                <Nav.Link as={Link} to={'/register'}>Register</Nav.Link>
                <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
                </>
                }

            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        
        <>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <OffCart></OffCart>
              </Offcanvas.Body>
            </Offcanvas>
        </>
        </>

    );
};

export default Header;