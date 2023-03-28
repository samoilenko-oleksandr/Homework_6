// Homework 6 - PART 1

let birthYear = prompt("Введіть рік Вашого народження:");
let city = prompt("Введіть місто, в якому Ви живете:");
let sport = prompt("Введіть свій улюблений вид спорту:");

let age = 2023 - birthYear;

let message;

if (city === "Київ") {
  message = `Ти живеш у столиці України`;
} else if (city === "Вашингтон") {
  message = `Ти живеш у столиці США`;
} else if (city === "Лондон") {
  message = `Ти живеш у столиці Великої Британії`;
} else {
  message = `Ти живеш у місті ${city}`;
}

alert(`Твій вік: ${age}\n${message}`);


// Homework 6 - PART 2

let sportTypes = ["футбол", "баскетбол", "теніс"];
let champions = {
  "футбол": "Ліонель Мессі",
  "баскетбол": "Леброн Джеймс",
  "теніс": "Новак Джокович"
};

let input = prompt("Введіть вид спорту:");

if (input) {
  if (sportTypes.includes(input)) {
    let champion = champions[input];
    alert(`Круто! Хочеш стати ${champion}?`);
  } else {
    alert("Ви ввели невірний вид спорту!");
  }
} else {
  alert("Шкода, що Ви не захотіли ввести вид спорту!");
}
