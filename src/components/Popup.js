import React, { useEffect } from "react";
import { checkWin } from "../helpers/helpers";

const Popup = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setNextRound,
  playAgain,
}) => {
  let resMessage = "";
  let wordMessage = "";
  let nextRound = true;
  let shareMessageList = [
    "Hangman\n____\n|    |\n|\n|\n|\n|___\nCorrect Letters:",
    "Hangman\n____\n|    |\n|    o\n|\n|\n|___\nCorrect Letters:",
    "Hangman\n____\n|    |\n|    o\n|    |\n|\n|___\nCorrect Letters:",
    "Hangman\n____\n|    |\n|    o\n|   /|\n|\n|___\nCorrect Letters:",
    "Hangman\n____\n|    |\n|    o\n|   /|)\n|\n|___\nCorrect Letters:",
    "Hangman\n____\n|    |\n|    o\n|   /|)\n|    /\n|___\nCorrect Letters:",
    "Hangman\n____\n|    |\n|    o\n|   /|)\n|    /|\n|___\nCorrect Letters:",
  ];
  let shareMessage =
    shareMessageList[wrongLetters.length] +
    correctLetters.length +
    "/" +
    selectedWord.length;

  console.log(shareMessageList[1]);
  console.log(correctLetters.length);
  console.log(wrongLetters.length);
  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    resMessage = "CONGRATULATIONS!! You have saved the hanged man :D";
    nextRound = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    resMessage = "Oh no! You lost :( ";
    wordMessage = `... the word is: ${selectedWord}`;
    nextRound = false;
  }

  useEffect(() => setNextRound(nextRound));

  return (
    <div
      className="popup-container"
      style={resMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{resMessage}</h2>
        <h3>{wordMessage}</h3>
        <button onClick={playAgain}>Play Again</button>
        <h3> </h3>
        <button
          onClick={() => {
            navigator.clipboard.writeText(shareMessage);
          }}
        >
          Copy Results
        </button>
      </div>
    </div>
  );
};

export default Popup;
