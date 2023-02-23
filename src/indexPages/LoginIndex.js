import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, password: password }),
  };

  const logIn = (e) => {
    console.log(username);
    console.log(password);
    e.preventDefault();
    fetch("https://blog-api-jakub.herokuapp.com/catalog/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt-odin-blog", data.token);
          setLoginStatus(
            `You have successfully logged in ${data.user.username}`
          );
        } else {
          setLoginStatus(data.message);
        }
      });
  };
  return (
    <Box>
      <Form
        style={{
          width: "350px",
          height: "400px",
          marginTop: "100px",
          /*border: "3px solid black",*/
          backgroundColor: "white",
          padding: "60px",
          borderRadius: "10px",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User name</Form.Label>
          <Form.Control
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" onClick={logIn} /*type="submit"*/>
          Submit
        </Button>
      </Form>
      <div
        style={{
          marginTop: "-100px",
        }}
      >
      {loginStatus ? JSON.stringify(loginStatus) : null}
      </div>
    </Box>
  );
}

export default LoginPage;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #9fd3c7;
`;
