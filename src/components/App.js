import React, {Component} from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";

export default class App extends Component {
  render() {
    return (
        <div>
        <Navbar default fixedTop inverse>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">St. Mark's Online Bookstore</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="#">Home</NavItem>
                <NavItem eventKey={2} href="#">Authors</NavItem>
                <NavDropdown eventKey={3} title="More...">
                    <LinkContainer to="/apparel/1">
                        <MenuItem eventKey={3.1}>Apparel</MenuItem>
                    </LinkContainer>
                    <MenuItem eventKey={3.2}>Snacks</MenuItem>
                    <MenuItem >Stationary</MenuItem>
                    <MenuItem >Textbook</MenuItem>
                    <MenuItem >Others</MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar>

            {this.props.children}

        </div>
    );
  }
}

