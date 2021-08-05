/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generateExcuse() {
    let who = ["The dog", "Her grandma", "My cat", "My lama"];
    let action = ["ate", "peed", "screamed", "broke"];
    let what = ["my homework", "the keys", "the car", "my food"];
    let when = [
      "before the funeral",
      "right on time",
      "when I finished",
      "while I was crying"
    ];
    let positionWho = Math.floor(Math.random() * 4);

    let positionAction = Math.floor(Math.random() * 4);

    let positionWhat = Math.floor(Math.random() * 4);

    let positionWhen = Math.floor(Math.random() * 5);

    let excuse =
      who[positionWho] +
      " " +
      action[positionAction] +
      " " +
      what[positionWhat] +
      " " +
      when[positionWhen];
    document.getElementById("excuse").innerHTML = excuse;
  }
  generateExcuse();
};
