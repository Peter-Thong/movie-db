import React from "react";
//routing

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//styles
import { GlobalStyle } from "./GlobalStyle";

//Components
import Header from "./components/Header";
import Home from "./components/home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

import Login from "./components/login";

//context

import UserProvider from "./context";

const App = () => (
  <Router>
    <UserProvider>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </UserProvider>
  </Router>
);

export default App;
