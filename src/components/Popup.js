import React, { useEffect } from "react";
import { checkWin } from "../helpers/helpers";

const Popup = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
}) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;
  let shareMessageList = [
    ,
    "Hangman\n____\n|    |\n|\n|\n|\n|___\nCorrect Letters:",
    "Hangman\n____\n|    |\n|    o\n|\n|\n|___\nCorrect Letters:",
    "Hangman\n____\n|    |\n|    o\n|    |\n|\n|___\nCorrect Letters:",
    "Hangman\n____\n|    |\n|    o\n|   /|\n|\n|___\nCorrect Letters:",
    "Hangman\n____\n|    |\n|    o\n|   /|)\n|\n|___\nCorrect Letters:",
    "Hangman\n____\n|    |\n|    o\n|   /|)\n|    /\n|___\nCorrect Letters:",
    "Hangman\n____\n|    |\n|    o\n|   /|)\n|    /|\n|___\nCorrect Letters:",
  ];
  let shareMessage =
    shareMessageList[wrongLetters.length + 1] +
    correctLetters.length +
    "/" +
    selectedWord.length;

  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "Congratulations! You won!";
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = "Unfortunately you lost.";
    finalMessageRevealWord = `... the word was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => setNextRound(nextRound));

  return (
    <div
      className="popup-container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{resMessage}</h2>
        <h3>{wordMessage}</h3>
        <button onClick={playAgain}>Play Again</button>
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
