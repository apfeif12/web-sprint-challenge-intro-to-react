import "./App.css";
import React, { useState, useEffect } from "react";
import Character from "./components/Character.js";
import axios from "axios";
import Header from "./components/Header.js";

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
      <Header />
      <Character charData={charData} />
    </div>
  );
};

export default App;
