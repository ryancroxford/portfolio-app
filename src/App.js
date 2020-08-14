import React from 'react';
import './App.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {BrowserRouter as Router} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import HeaderComponent from "./components/Header";
import RouterComponent from "./components/Router";

function App() {
  return (
      <Router>
        <Container>
          <Row>
            <Col>
              <HeaderComponent/>
            </Col>
          </Row>
          <Row>
            <Col>
              <RouterComponent/>
            </Col>
          </Row>
        </Container>
      </Router>
  );
}

export default App;
