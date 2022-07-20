import React, { useEffect, useState } from "react";
import Buttons from "../Buttons";
import "./styles.scss";

const QuoteBox = () => {
  window.addEventListener("resize", () => {
    changeHover(window.innerWidth, screen.width);
  });

  const author = "Chuck Norris";

  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;

  const [color, setColor] = useState(randomNumber(0, 321));
  const [phrase, setPhrase] = useState("");

  const changeColor = () => {
    setColor(randomNumber(0, 321));
  };

  document.documentElement.style.setProperty(
    `--color-one`,
    `hsl(${color}, 80%, 58%)`
  );

  document.documentElement.style.setProperty(
    `--color-two`,
    `hsl(${color}, 70%, 80%)`
  );

  const changeHover = (wnWidth, scWidth) => {
    const aRef = document.getElementsByClassName("ref-link");
    if (wnWidth <= 620 || scWidth <= 620) {
      aRef[0].classList.remove("ref-link-hover");
    } else {
      aRef[0].classList.add("ref-link-hover");
    }
  };

  useEffect(() => {
    changeHover(window.innerWidth, screen.width);
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
    <>
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
      <div className="ref">
        <p className="ref-text">
          Coded by <b>Steven Lucano</b>
        </p>
        <a
          className="ref-link ref-link-hover"
          href="https://github.com/stevenLucano"
          target="_blank"
        >
          <span className="icon">
            <ion-icon name="logo-github"></ion-icon>
          </span>
          <span className="title">stevenLucano</span>
        </a>
      </div>
    </>
  );
};

export default QuoteBox;
