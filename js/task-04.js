"use strict";

let credits = 23580;
let pricePerDroid = 3000;
let droid = prompt("Скільки дроїдів купити?");
let totalPrice;

if (droid === null) {
  droid = "Скасовано користувачем!";
} else {
  totalPrice = pricePerDroid * droid;
}
if (credits < totalPrice) {
  console.log("недостатньо коштів на рахунку");
} else {
  credits -= totalPrice;
}

alert(`ви купили ${droid}, на рахунку залишилося ${credits} кредитів`);
