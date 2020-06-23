"use strict";

let input;
let total = 0;

while (true) {
  input = prompt("Введіть число,щоб додати");

  if (input === null) {
    break;
  }
  input = Number(input);
  total += input;
}

alert(`Загальна сума доданого ${total}`);
