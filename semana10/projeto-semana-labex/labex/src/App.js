import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import PaginaHome from "./Pages/PaginaHome";
import Routes from "./routes/Routes";

const App = () => {
  return (
    
      <div>
        <GlobalStyle />
       <Routes />
      </div>
    
  );
}

export default App;
