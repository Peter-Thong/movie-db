import React from "react";

//styles
import { GlobalStyle } from "./GlobalStyle";

//Components
import Header from "./components/Header";
import Home from "./components/home";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
};

export default App;
