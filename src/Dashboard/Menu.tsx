import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import mainSetter from "../store/actions/mainSetter";

const selectHandler = (e: string) => mainSetter.change(e);

function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav justify defaultActiveKey="contract" onSelect={selectHandler} className="flex-column navbar">
          <Nav.Item>
            <Nav.Link eventKey="account">Баги</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="users">Пользователи</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
