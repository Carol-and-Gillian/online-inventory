import React, {Component} from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";

export default class App extends Component {
  render() {
    return (
        <Navbar default fixedTop inverse>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">St. Mark's Online Bookstore</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem href="#">Home</NavItem>
                <NavItem href="#">Authors</NavItem>
                <NavDropdown title="More...">
                   <MenuItem>Apparel</MenuItem>
                    <MenuItem >Snacks</MenuItem>
                    <MenuItem >Stationary</MenuItem>
                    <MenuItem >Textbook</MenuItem>
                    <MenuItem >Others</MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar>


    );
  }
}

