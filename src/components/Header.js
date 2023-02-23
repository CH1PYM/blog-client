import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";


const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            Blog
          </Navbar.Brand>
          <div>
          <Navbar.Brand href="/log-in">
            Login
          </Navbar.Brand>
          <Navbar.Brand href="/sign-up">
            Sign-up
          </Navbar.Brand>
          <Navbar.Brand href="/create-post">
            Create Post
          </Navbar.Brand>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
