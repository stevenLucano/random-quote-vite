import React, { useEffect, useState } from "react";
import "./styles.scss";

const Buttons = ({ color, fncColor }) => {
  window.addEventListener("resize", () => {
    changeHover(window.innerWidth);
  });

  document.documentElement.style.setProperty(
    `--color-btn`,
    `hsl(${color}, 60%, 58%)`
  );
  document.documentElement.style.setProperty(
    `--color-btn-hover`,
    `hsl(${color}, 60%, 80%)`
  );

  const changeHover = (width) => {
    let btns = document.getElementsByClassName("btn");
    btns = [...btns];
    if (width <= 620) {
      btns.forEach((el) => {
        el.classList.remove("btn-hover");
      });
    } else {
      btns.forEach((el) => {
        el.classList.add("btn-hover");
      });
    }
  };

  useEffect(() => {
    changeHover(window.innerWidth);
  }, []);

  return (
    <div className="buttons">
      <a
        title="Tweet this quote!"
        className="btn btn-tweet btn-hover"
        href="https://twitter.com/intent/tweet"
        target="_blank"
        id="tweet-quote"
      >
        <i className="bi bi-twitter"></i>
      </a>
      <button
        className="btn btn-quote btn-hover"
        id="new-quote"
        onClick={fncColor}
        onTouchEnd={() => {
          btnUp();
        }}
      >
        New quote
      </button>
    </div>
  );
};

export default Buttons;
