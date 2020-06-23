"use strict";

const credits = 23580;
const pricePerDroid = 3000;
const droid = prompt("Скільки дроїдів купити?");
console.log(` droid : `, droid);
const totalPrice = droid * pricePerDroid;
console.log(` totalPrice : `, totalPrice);
const value = credits - totalPrice;
console.log(` value : `, value);

if (droid === null) {
  console.log("скасовано користувачем!");
} else if (totalPrice >= credits) {
  console.log("недостатньо коштів на рахуну");
} else {
  console.log(
    `Ви купили ${droid} дроїдів, на рахунку залишилося ${value} кредитів`
  );
}
