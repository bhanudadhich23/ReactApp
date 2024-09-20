import React, { useState } from "react";

export default function TextForm() {
  let [text, setText] = useState("enter text here");

  let texthange = (e) => {
    setText(e.target.value);
  };
  function toUpperCase() {
    setText(text.toUpperCase());
  }
  function resetText() {
    setText("");
  }
  function toLowerCase() {
    setText(text.toLowerCase());
  }
  function clear() {
    setText("");
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  return (
    <>
      <div className="container">
        <h1>Here is text utilites App</h1>
        <div className="mb-3">
          <textarea
            id="myBox"
            className="form-control"
            rows="8"
            value={text}
            onChange={texthange}
            onClick={resetText}
          ></textarea>
        </div>

        <div className="container">
          <button className="btn btn-primary" onClick={toUpperCase}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-3" onClick={toLowerCase}>
            Convert to LowerCase
          </button>
          <button className="btn btn-danger " onClick={clear}>
            Clear Text
          </button>
        </div>
        <button onClick={speak} className="btn btn-warning mx-2 my-2">
          Speak
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
