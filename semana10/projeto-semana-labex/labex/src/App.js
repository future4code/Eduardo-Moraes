import React from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyles";
import PaginaHome from "./Pages/PaginaHome";

const Div = styled.div`
height: 80vh;
`

const App = () => {
  return (
    
      <Div>
        <GlobalStyle />
       <PaginaHome />
      </Div>
    
  );
}

export default App;
