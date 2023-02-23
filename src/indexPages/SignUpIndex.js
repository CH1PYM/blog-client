import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState("");
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, password: password }),
  };
  const signUp = (e) => {
    console.log(username);
    console.log(password);
    e.preventDefault();
    fetch("https://blog-api-jakub.herokuapp.com/catalog/sign-up", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.token) {
          setRegistrationStatus(
            `You have successfully logged in ${data.user.username}`
          );
        } else {
          setRegistrationStatus(data.message);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Box>
      <Form
        style={{
          width: "350px",
          height: "400px",
          margin: "100px",
          padding: "60px",
          backgroundColor: "white",
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
          <Form.Text className="text-muted"></Form.Text>
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
        <Button variant="primary" onClick={signUp} /*type="submit"*/>
          Submit
        </Button>
      </Form>
      <div
        style={{
          marginTop: "-200px",
        }}
      >
        {registrationStatus ? JSON.stringify(registrationStatus) : null}
      </div>
    </Box>
  );
}

export default SignUpPage;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #9fd3c7;
`;
