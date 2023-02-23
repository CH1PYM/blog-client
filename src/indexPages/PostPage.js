import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";


const isUniq = (item, array) => {
  array.forEach((itemArray) => {
    if (itemArray._id === item._id) {
      return false;
    }
  });
  return true;
};
const PostPage = () => {
  let location = useLocation();
  const [blogPost, setBlogPost] = useState();
  const [comments, setComments] = useState([]);

  const fetchPost = async () => {
    try {
      const response = await fetch(
        "https://blog-api-jakub.herokuapp.com/user/homePost/detail/" + location.state.id,
        {
          mode: "cors",
        }
      );
      const blogPostFetched = await response.json();
      await setBlogPost(blogPostFetched);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchComment = () => {
    blogPost.comments.forEach(async (commentId) => {
      const response = await fetch(
        `https://blog-api-jakub.herokuapp.com/user/homePost/detail/${commentId}/comment`,
        {
          mode: "cors",
        }
      );
      const comment = await response.json();
      await console.log(comment, "komenty");

        await setComments((prevComments) => [...prevComments, comment]);
      
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);
  useEffect(() => {
    if (blogPost) {
      fetchComment();
    }
  }, [blogPost]);

  useEffect(() => {
    const filtredComments = comments.filter((value, index, self) => {
      return self.findIndex((v) => v._id === value._id) === index;
    });
    if(filtredComments.length !== comments.length){
    setComments(filtredComments);
    }
  }, [comments]);

  return (
    <ContainerBody>
      <ContainerForPost>
        <PostH1>{blogPost ? blogPost.title : null}</PostH1>
        <ContainerForText>{blogPost ? blogPost.text : null}</ContainerForText>
      </ContainerForPost>

        {comments.length > 1
          ? comments.map((comment) => {
              return (
                <ContainerForComments>
                <div>
                  {comment.text}<p>{comment.date}</p>
                </div>
                </ContainerForComments>
              );
            })
          : null}
    </ContainerBody>
  );
};

export default PostPage;

const ContainerForPost = styled.div`
  padding-top: 80px;

  padding-left: 100px;
  padding-right: 100px;
  background: #9fd3c7;
  color: #1f2833;
  display: flex;
  flex-direction: column;
  gap: 0px;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  width: 100%;
  height: 100%;
`;
const PostH1 = styled.h1`
  padding-bottom: 30px;
`;
const ContainerForText = styled.div`
  padding-left: 300px;
  padding-right: 300px;
  padding-bottom: 50px;
`;
const ContainerForComments = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 500px;
  margin-right: 500px;
  margin-top:20px;
  background-color: #ececec;
  padding-bottom: 50px;
  border: 1px solid #e7eaf6;
  border-radius: 5px;
`;

const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  background: #9fd3c7;
`;
