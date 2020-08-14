import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import Col from "react-bootstrap/Col";

class HeaderComponent extends Component {
    render() {
        return (
            <Col>
                <Navbar bg={'light'} expand={'lg'}>
                    <Navbar.Brand>Ryan Croxford</Navbar.Brand>
                    <Navbar.Toggle aria-controls={"basic-navbar-nav"}/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navbar-nav ml-auto">
                            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/projects"}>Projects</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
        );
    }
}

export default HeaderComponent;
