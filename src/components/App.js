import React, { Component, useState } from "react";
import "../styles/App.css";

const App = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const title = slides[currentIndex].title;
  const text = slides[currentIndex].text;
  const handleClick = (doNext) => {
    if (doNext === 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (doNext === -1) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(0);
    }
  };
  return (
    <>
      <h1 data-testid="title">{title}</h1>
      <p data-testid="text">{text}</p>
      <button
        data-testid="button-next"
        onClick={() => {
          handleClick(1);
        }}
        disabled={currentIndex === slides.length - 1 ? true : false}
      >
        Next
      </button>
      <button
        data-testid="button-prev"
        onClick={() => {
          handleClick(-1);
        }}
        disabled={currentIndex !== 0 ? false : true}
      >
        Prev
      </button>
      <button
        data-testid="button-restart"
        onClick={() => {
          handleClick(0);
        }}
        disabled={currentIndex !== 0 ? false : true}
      >
        Restart
      </button>
    </>
  );
};

export default App;
