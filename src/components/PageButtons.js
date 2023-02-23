import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { getNumberOfPages } from "./utils";

function ToolbarBasicExample({ changePage, pageNumberProp }) {
  const [pageNumber, setPageNumber] = useState();

  const fetchDocumentCount = async (pageNumber) => {
    try {
      const response = await fetch(
        "https://blog-api-jakub.herokuapp.com/user/homePost/postCount",
        {
          mode: "cors",
        }
      );
      const pageNumberFetched = await response.json();
      let count = [];
      const pageCount = getNumberOfPages(pageNumberFetched, 5);
      for (let i = 0; i < pageCount; i++) {
        count.push(1);
      }
      console.log(count);
      await setPageNumber(count);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDocumentCount();
  }, []);

  return (
    <Container>
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="me-2" aria-label="First group">
          {pageNumber?.map((item, index) => {
            return (
              <div key={index}>
                <Button onClick={() => changePage(index)}>{index + 1}</Button>
              </div>
            );
          })}
        </ButtonGroup>
      </ButtonToolbar>
    </Container>
  );
}

export default ToolbarBasicExample;

const Container = styled.div`
  background-color: #9fd3c7;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
