import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../assets/logo.svg";

import "./Header.styles.css";

const Header = () => {
  return (
    <div>
      <header>
        <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
          <LinkContainer to="/">
            <Navbar.Brand style={{ float: "left" }}>GShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/products">
                <Nav.Link>
                  <i className="fas"></i>Products
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas"></i>Login
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/register">
                <Nav.Link>
                  <i className="fas"></i>Register
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/checkout">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Checkout
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/shipping">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Shipping
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/place-order">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Place Order
                </Nav.Link>
              </LinkContainer>

              <NavDropdown title="User" id="username">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
