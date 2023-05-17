import { NavLink, Link } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Logout } from "../store/authSlice";

const Navigationbar = () => {
  const dispatch = useAppDispatch();
  const { isLogin } = useAppSelector((state) => state.auth);

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
            {isLogin ? (
              <Button variant="danger" onClick={() => dispatch(Logout())}>
                Logout
              </Button>
            ) : (
              <NavLink to="/login" className="btn btn-primary">
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
