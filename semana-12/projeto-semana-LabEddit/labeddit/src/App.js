import { ThemeProvider } from "@material-ui/styles";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import theme from "./constants/theme";
import Router from "./routes/Router";


const App = () => {
  const token = localStorage.getItem("token")
  const [textoDoBotao, setTextoDoBotao] = useState(token ? "logout" : "login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header textoDoBotao={textoDoBotao} setTextoDoBotao={setTextoDoBotao} />
        <Router setTextoDoBotao={setTextoDoBotao} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;