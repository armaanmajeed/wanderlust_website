import React from 'react';
import { Navbar,Nav,FormControl,Form,Button,NavDropdown } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

import './style.css';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
            <Nav.Link><NavLink to="/" class="nav-items">Wanderlust</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/home" class="nav-items">Home</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/aboutus" class="nav-items">AboutUs</NavLink></Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown" style={{fontSize: '1.3em'}}>
                <NavDropdown.Item><NavLink to="/north" style={{textDecoration: 'none'}}>North India</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to="/south" style={{textDecoration: 'none'}}>South India</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to="/east" style={{textDecoration: 'none'}}>East India</NavLink></NavDropdown.Item>
                <NavDropdown.Item><NavLink to="/west" style={{textDecoration: 'none'}}>West India</NavLink></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><NavLink to="/admin" class="nav-items">Admin</NavLink></Nav.Link>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
            <Button variant="outline-success" style={{marginLeft: '10px', alignItems: 'center'}}>Search</Button>
            </Nav>
        </Navbar>
    );
}
 
export default NavBar;