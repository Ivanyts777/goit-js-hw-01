"use strict";

const total = 100;
const ordered = 10;

if (total >= ordered) {
  console.log("Замовлення оформлено, з вами зв'яжеться менеджер");
}

if (ordered > total) {
  console.log("На складі недостатньо товарів!");
}
