"use strict";

let nameCountry = prompt("Куди прямуєте?");
let priceTicket;

switch (nameCountry) {
  case "Китай":
    priceTicket = 100;
    alert(`Доставка в ${nameCountry} буде коштувати ${priceTicket} кредитів`);
    break;

  case "Чилі":
    priceTicket = 250;
    alert(`Доставка в ${nameCountry} буде коштувати ${priceTicket} кредитів`);
    break;

  case "Австралія":
    priceTicket = 170;
    alert(`Доставка в ${nameCountry} буде коштувати ${priceTicket} кредитів`);
    break;

  case "Індія":
    priceTicket = 80;
    alert(`Доставка в ${nameCountry} буде коштувати ${priceTicket} кредитів`);
    break;

  case "Ямайка":
    priceTicket = 120;
    alert(`Доставка в ${nameCountry} буде коштувати ${priceTicket} кредитів`);
    break;

  default:
    alert("У вашій країні доставка недоступна");
}
