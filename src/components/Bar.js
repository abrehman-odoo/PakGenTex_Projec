import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import gen from '../Assets/gen.jpeg'

export default function Bar() {
  return (
    <div style={{backgroundColor:'#3e7bb3'}}>
      <Navbar expand="lg" className="container-fluid">
        &nbsp;
        &nbsp;
          <Navbar.Brand className="brand"> <img
              src={gen}
              alt="logo"
              height="60"
              width="160"
              style={{borderRadius:'5px'}}
            /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
          <br/>
          <Navbar.Collapse>
            
            <Nav className="ms-auto justify-content-center p-1 navbar">
              <strong>
                <Nav.Link href="/" className="text-white">Corpora</Nav.Link>
              </strong>
              <strong>
                <Nav.Link href="/Search" className="text-white">Guides</Nav.Link>
              </strong>
              <strong>
                <Nav.Link href="/Search" className="text-white">Related Resources</Nav.Link>
              </strong>
              <strong>
                <Nav.Link href="/Search" className="text-white">Users</Nav.Link>
              </strong>
              <strong>
                <Nav.Link href="/Search" className="text-white">My Account</Nav.Link>
              </strong>
              
              <strong>
                <Nav.Link href="/LogReg" className="text-warning">Upgrade</Nav.Link>
              </strong>
              <strong>
                <Nav.Link href="#link" className="text-white">Help</Nav.Link>
              </strong>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
