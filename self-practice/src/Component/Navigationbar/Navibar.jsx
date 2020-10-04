import React from "react";

import { LinkPage } from "../Navigationbar/LinkPage/LinkPage";
import { ContactPage } from "../Navigationbar/ContactPage/ContactPage";
import { AboutPage } from "../Navigationbar/AboutPage/AboutPage";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export const Navibar = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="home">
          <span className="text-color:Success">PickupBizz</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="link">Link</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Router>
        <Switch>
          <Route path="/link">
            <LinkPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>{" "}
        </Switch>
      </Router>
    </React.Fragment>
  );
};
