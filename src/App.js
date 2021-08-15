import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😀": "Smiling Face",
  "🤔": "Thinking Face",
  "😪": "Sleepy Face",
  "😢": "Crying Face",
  "🤯": "Exploding Head",
  "😵": "Dizzy Face",
  "😫": "Tired Face",
  "👽": "Alien",
  "🤡": "Clown Face",
  "👻": "Ghost"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our Database.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>EmojiPedia</h1>

      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h1>Emojis we know ...</h1>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
