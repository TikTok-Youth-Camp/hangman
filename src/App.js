import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import { showNotification as show } from "./helpers/helpers";
import Popup from "./components/Popup";
import Notification from "./components/Notification";

import "./App.css";

var randomWords = require("random-words");
let selectedWord = randomWords({exactly: 1, maxLength: 6})[0];
console.log(selectedWord);

function App() {
  const [nextRound, setNextRound] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [attempted, setAttempted] = useState(false);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (nextRound && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setAttempted);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setAttempted);
          }
        }
      }
    };
    <textInput autoFocus={true}></textInput>;
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, nextRound]);

  function playAgain() {
    setNextRound(true);
    setNextRound(true);

    //Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);
    selectedWord = randomWords({exactly: 1, maxLength: 6})[0];
    console.log(selectedWord);
  }

  return (
    <>
      <div className="page">
        <Header />
        <div className="game-container">
          <WrongLetters wrongLetters={wrongLetters} />
          <Figure wrongLetters={wrongLetters} />
          <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        </div>
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setNextRound={setNextRound}
        playAgain={playAgain}
      />
      <Notification attempted={attempted} />
    </>
  );
}

export default App;
