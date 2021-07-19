import React, { useState, useEffect } from "react";

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//API
import API from "../API";

//Components
import HeroImage from "./HeroImage";
//Hook

import { useHomeFetch } from "../hooks/useHomeFetch";

//Image

import NoImg from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  console.log(state);

  return <HeroImage />;
};

export default Home;
