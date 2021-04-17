import React from 'react';
import '../components/Navigation.css';

import { Navbar, Nav, NavItem, NavDropdown,FormControl,Form,Button, MenuItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       


    <div className="Nav_link">
    <Navbar className="nav">
    <Navbar.Brand href="#home">Pitch Coach</Navbar.Brand>
    <Nav className="mr-auto">
      <NavLink className="navsH" to="/">Home</NavLink>
      <NavLink className="navs" to="/about">About</NavLink>
      <NavLink className="navs" to="/contact">Contact</NavLink>
      <NavLink className="navs" to="/meet">Meet our Team</NavLink>

    </Nav>
    <Form inline>
     
      <li className="signLine" ><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li className="signLine"><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    
    </Form>
  </Navbar>
  </div>



);
}
 
export default Navigation;

//<NavLink to="/">Home</NavLink>
//<NavLink to="/about">About</NavLink>
//<NavLink to="/contact">Contact</NavLink>