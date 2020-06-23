"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let massage;

massage = prompt("Пароль");
if (massage === null) {
  massage = "Скасовано користувачем!";
} else if (massage === ADMIN_PASSWORD) {
  massage = "Ласкаво просимо!";
} else {
  massage = "Доступ заборонений, невірний пароль!";
}

alert(massage);
