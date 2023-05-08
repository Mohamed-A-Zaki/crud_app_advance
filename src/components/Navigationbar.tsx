import { NavLink, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const Navigationbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          Crud App
        </Link>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="shadow-none border-white"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/posts/add" className="nav-link">
              Add Post
            </NavLink>
          </Nav>
          <Nav>
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
