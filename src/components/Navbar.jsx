import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

function NavbarFunc() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <Navbar bg="light" expand="lg">
      {user && (
        <Container>
          <Navbar.Brand href="/">Fourty Thieves</Navbar.Brand>
          <Navbar.Brand>{user.username}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <NavDropdown title="Yours" id="basic-nav-dropdown">
                {user.artist && (
                  <NavDropdown.Item href={`/gallery/${user.username}`}>
                    Your Gallery
                  </NavDropdown.Item>
                )}
                <NavDropdown.Item href="/profile">
                  Your Profile
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button variant="outline-success" onClick={logOutUser}>
              Logout
            </Button>
          </Navbar.Collapse>
        </Container>
      )}
      {!isLoggedIn && (
        <Container>
          <Navbar.Brand href="/">Fourty Thieves</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/gallery">General Gallery</Nav.Link>
              <NavDropdown title="Login" id="basic-nav-dropdown">
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      )}
    </Navbar>
  );
}

export default NavbarFunc;
