import React from "react";
import FilmHome from "./HomePage/FilmHome";
import Choices from "./HomePage/Choices";

const Home = ({ props }) => {
  return (
    <div>
      <FilmHome />
      <Choices />
    </div>
  );
};

export default Home;
