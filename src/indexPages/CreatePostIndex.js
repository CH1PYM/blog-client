import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [postStatus, setPostStatus] = useState("");

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt-odin-blog")}`,
    },
    body: JSON.stringify({ title: title, text: text }),
  };

  const postBlogPost = (e) => {
    e.preventDefault();
    fetch("https://blog-api-jakub.herokuapp.com/user/createPost", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPostStatus("You are successful post");
      })
      .catch((err) => {
        console.log(err);
        setPostStatus("You are not logged in");
      });
  };
  return (
    <Box>
      <Form
        style={{
          width: "450px",
          height: "450px",
          marginTop: "100px",
          backgroundColor: "white",
          padding: "60px",
          borderRadius: "10px",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            name="title"
            placeholder="Title"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Text1</Form.Label>
          <Form.Control
            onChange={(e) => {
              setText(e.target.value);
            }}
            name="text"
            type="text"
            placeholder="Text"
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Button variant="primary" onClick={postBlogPost}>
          Submit
        </Button>
      </Form>
      <div
        style={{
          marginTop: "-100px",
        }}
      >
      {postStatus ? postStatus : null}
      </div>
    </Box>
  );
}

export default CreatePost;

const Box = styled.div`
flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #9fd3c7;
`;
