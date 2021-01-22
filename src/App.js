import "./App.css";
import React, { useState, useEffect } from "react";
import Character from "./components/Character.js";
import axios from "axios";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: 50px;
  font-weight: bold;
  text-decoration: underline;
  color: white;
`;

const App = () => {
  const [charData, setCharData] = useState([]);
  useEffect(() => {
    const apiData = () => {
      axios
        .get("https://rickandmortyapi.com/api/character")
        .then((res) => {
          setCharData(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    apiData();
  }, []);

  return (
    <div className="App">
      <StyledH1 className="Header">Rick and Morrrrrrrrty Characters!</StyledH1>
      <Character charData={charData} />
    </div>
  );
};

export default App;
