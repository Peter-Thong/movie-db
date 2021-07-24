import React, { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import API from "../API";
import Button from "./Button";

import { Wrapper } from "./Login.styles";

import { Context } from "../context";

const Login = () => {
  return (
    <Wrapper>
      <label>Username:</label>
      <input
        type="text"
        value="state value"
        name="username"
        onChange={handleInput}
      />
    </Wrapper>
  );
};

export default Login;
