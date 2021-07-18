import React from "react";

//styles
import { GlobalStyle } from "./GlobalStyle";

//Components
import Header from "./components/Header";
const App = () => {
  return (
    <div className="App">
      <Header />
      <GlobalStyle />
    </div>
  );
};

export default App;
