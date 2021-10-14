import React from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyles";
import PaginaHome from "./Pages/PaginaHome";

const Div = styled.div`

`

const App = () => {
  return (
    
      <div>
        <GlobalStyle />
       <PaginaHome />
      </div>
    
  );
}

export default App;
