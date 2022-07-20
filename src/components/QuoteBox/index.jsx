import React, { useEffect, useState } from "react";
import Buttons from "../Buttons";
import "./styles.scss";

const QuoteBox = () => {
  const author = "Chuck Norris";

  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;

  const [color, setColor] = useState(randomNumber(0, 321));
  const [phrase, setPhrase] = useState("");

  const changeColor = () => {
    setColor(randomNumber(0, 321));
  };

  useEffect(() => {
    const body = document.getElementsByClassName("App");
    body[0].style.backgroundColor = `hsl(${color}, 60%, 58%)`;

    let text = document.getElementsByClassName("txt");
    text = [...text];
    text.forEach((element) => {
      element.style.color = `hsl(${color}, 60%, 58%)`;
      element.style.opacity = "0";
    });
    setTimeout(() => {
      fetch("https://api.chucknorris.io/jokes/random")
        .then((res) => res.json())
        .then((data) => {
          setPhrase(data.value);
        })
        .then(() => {
          text.forEach((element) => {
            element.style.opacity = "1";
          });
        });
    }, 500);
  }, [color]);

  return (
    <main id="quote-box">
      <p className="txt" id="text">
        <i className="bi bi-quote txt-quote"></i>
        {phrase}
      </p>
      <p className="txt" id="author">
        --{author}
      </p>
      <Buttons color={color} fncColor={changeColor} />
    </main>
  );
};

export default QuoteBox;
