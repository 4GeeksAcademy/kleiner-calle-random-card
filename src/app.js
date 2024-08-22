/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function newCard() {
  const suits = ["♠", "♥", "♦", "♣"];
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let IndexSuit = Math.floor(Math.random() * suits.length);
  let IndexNumber = Math.floor(Math.random() * numbers.length);

  let top = document.querySelector("#top");
  let end = document.querySelector("#end");
  let number = document.querySelector("#number");

  top.innerHTML = suits[IndexSuit];
  end.innerHTML = suits[IndexSuit];
  number.innerHTML = numbers[IndexNumber];

  let currentClass =
    suits[IndexSuit] === "♥" || suits[IndexSuit] === "♦"
      ? "text-danger"
      : "text-dark";

  top.className = currentClass;
  end.className = currentClass;
  number.className = currentClass;
}

window.onload = function() {
  newCard();
};
