import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

const BlogContent = (props) => {
  const [blogPosts, setBlogPosts] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://blog-api-jakub.herokuapp.com/user/homePost/${props.pageNumberProp}`,
          {
            mode: "cors",
          }
        );
        const blogPosts = await response.json();
        await console.log(blogPosts);
        setBlogPosts(blogPosts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, [props.pageNumberProp]);

  return (
    <ContainerForPosts>
      {blogPosts?.map((post) => {
        return (
          <Card style={{ width: "18rem", backgroundColor: "#E3E2DF" }}>
            <Card key={post._id} />
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
                {post.text.length > 25
                  ? post.text.substring(0, 25) + "..."
                  : post.text}
              </Card.Text>
              <Link to="/post" state={{ id: post._id }}>
                <Button variant="primary">Enter post</Button>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </ContainerForPosts>
  );
};
export default BlogContent;

const ContainerForPosts = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 100px;
  padding-right: 100px;
  background: #9fd3c7;
  color: #1f2833;
  display: flex;
  flex-direction: row;
  gap: 0px;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
`;
