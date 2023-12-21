import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import { getCartTotal, logout } from "../features/cartSlice";
import { Link, useNavigate } from "react-router-dom";

import { Navbar, Nav, Badge, Container, Stack } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

const App = () => {
  const { cart, wishlist } = useSelector((state) => state.allCart);
  // const auth = useSelector((state) => state.allCart.isAuthenticated);
  const auth = JSON.parse(localStorage.getItem("isAuthentication"));
  const navigate = useNavigate();

  let usr = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    // localStorage.removeItem("user");
  };

  let curDate = new Date();
  curDate = curDate.getHours();
  let greeting = "";
  let styleCss = {};

  if (curDate >= 1 && curDate < 12) {
    greeting = " Good Morning";
    styleCss.color = "green";
  } else if (curDate >= 12 && curDate < 18) {
    greeting = " Good Afternoon";
    styleCss.color = "orange";
  } else {
    greeting = " Good Evening";
    styleCss.color = "Black";
  }

  return (
    <>
      {auth ? (
        <div className="main-navbar sticky-top">
          <div className="top_nav bg-primary ">
            <Navbar collapseOnSelect expand="lg" variant="primary">
              <Container fluid>
                <Navbar.Brand className="header " href="/home">
                  WELCOME TO KAP MART
                </Navbar.Brand>
                <Navbar.Brand className="header " href="/home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ms-auto" style={{ padding: "10px" }}>
                    <Nav.Link as={Link} to="/cart" className="mx-3">
                      <i
                        className="fa fa-shopping-cart"
                        style={{ bacgroundColor: "black" }}
                      ></i>
                      <Badge className="position-absolute translate-middle badge rounded-pill bg-danger">
                        {cart.length}
                      </Badge>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/wishlist" className="mx-3">
                      <i className="fa fa-heart" style={{ color: "black" }}></i>
                      <Badge className="position-absolute translate-middle badge rounded-pill bg-danger">
                        {wishlist.length}
                      </Badge>
                    </Nav.Link>
                    <NavDropdown
                      title={<i className="fa fa-user"></i>}
                      id="collasible-nav-dropdown"
                      align="end"
                    >
                      <NavDropdown.Item as={Link} to="/profile">
                        <i
                          className="fa fa-user"
                          style={{ color: "black" }}
                        ></i>
                        Profile
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/wishlist">
                        <i
                          className="fa fa-heart"
                          style={{ color: "black" }}
                        ></i>{" "}
                        My Wishlist
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/cart">
                        <i
                          className="fa fa-shopping-cart"
                          style={{ bacgroundColor: "black" }}
                        ></i>
                        My Cart
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} onClick={handleLogout}>
                        <i
                          className="fa fa-user"
                          style={{ color: "black" }}
                        ></i>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>

          <nav className="second_navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand d-block d-sm-block d-md-none d-lg-none">
                KAP Mart
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav   mb-2 mb-lg-0">
                  <Stack direction="horizontal" gap={3}>
                    <li className="nav-item">
                      <Link to="/home" className="nav-link">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/product" className="nav-link">
                        All Categories
                      </Link>
                    </li>
                  </Stack>
                </ul>
                <h3 style={{ marginLeft: "22rem" }}>
                  <span style={{ styleCss }}>
                    {greeting},{usr.name}
                  </span>
                </h3>
              </div>
            </div>
          </nav>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default App;
