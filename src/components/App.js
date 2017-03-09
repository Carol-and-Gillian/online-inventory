import React, {Component} from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";

import MainPageComponents from "./MainPage";
import '../../src/CSS/Style.css';

export default class App extends Component {
  render() {
    return (
        <div>
        <Navbar default fixedTop inverse>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">St. Mark's Online Bookstore</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem href="/" eventKey={1}>Home</NavItem>
                <NavItem eventKey={2} href="#">Authors</NavItem>
                <NavDropdown eventKey={3} id="foo" title="More...">
                    <LinkContainer to="/apparel/general">
                        <MenuItem eventKey={3.1}>Apparel</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/snacks/general">
                    <MenuItem eventKey={3.2}>Snacks</MenuItem>
                    </LinkContainer>
                        <LinkContainer to="/stationary/general">
                    <MenuItem eventKey={3.3}>Stationary</MenuItem>
                        </LinkContainer>
                            <LinkContainer to="/textbook/general">
                    <MenuItem eventKey={3.4}>Textbook</MenuItem>
                            </LinkContainer>
                                <LinkContainer to="/others/general">
                    <MenuItem eventKey={3.5}>Others</MenuItem>
                                </LinkContainer>
                </NavDropdown>
            </Nav>
        </Navbar>

            {(this.props.children==null ? <MainPageComponents/> : this.props.children)}

        </div>
    );
  }
}

