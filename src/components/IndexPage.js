import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
function CaruselFrontPage() {
  return (
    <Carousel>
      <Carousel.Item>
        <Container>Frontend</Container>
        <Carousel.Caption>
          <h3>Free Speech</h3>
          <p>You can write everything here.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Container>Blog API</Container>

        <Carousel.Caption>
          <h3>Behind the scenes: </h3>
          <p>
            a day in the life of a professional food photographer 🍴📸
            #foodphotography #foodblog"
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Container>CRUD operations</Container>
        <Carousel.Caption>
          <h3>🎉 It's official! Our new collection is now available.</h3>
          <p>
            Swipe to see our latest designs and get 20% off your first purchase
            🛍️💕 #fashionblogger #newcollection
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CaruselFrontPage;

const Container = styled.div`
  background: #1f2833;
  color: #66fcf1;
  height: 25vw;
  width: 100vw;
  text-align: center;
  font-size: 8em;
  padding-top: 90px;
  font-family: Georgia, "Times New Roman", Times, serif;
`;
