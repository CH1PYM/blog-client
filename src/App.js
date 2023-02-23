import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CaruselFrontPage from "./components/IndexPage";
import BlogContent from "./components/BlogContent";
import styled from "styled-components";
import ToolbarBasicExample from "./components/PageButtons";
import { useState} from "react";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const changePage = (number) => {
    setPageNumber(number);
    console.log("pricetlo +1");
  };
  return (
    <ContainerBody>
      <CaruselFrontPage />
        <BlogContent pageNumberProp={pageNumber}/>
      <ContainerForPages>
        <ToolbarBasicExample changePage={changePage} pageNumberProp={pageNumber}/>
      </ContainerForPages>
    </ContainerBody>
  );
}

export default App;
const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContainerForPages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
