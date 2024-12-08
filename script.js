console.groupCollapsed("Amžius");
console.log("Paulius" === "Paulius");

console.groupEnd();

console.groupCollapsed("Skaičius vs eilutė");
let number = 10;
let text = "10";
console.log(number > text);
console.log(number == text);
console.log(number === text);

console.groupEnd();

console.groupCollapsed("Balansas");
let currentBalance = 50;
let transaction = -50;
const result = currentBalance + transaction >= 0;
console.log(result);

console.groupEnd();

console.groupCollapsed("Skaičius su liekana");
let a = 20;
let b = 4;
const c = a % b === 0;
console.log(c);
console.groupEnd();

// console.groupCollapsed("Mažiausia šalis");
// let city = prompt("Kokia yra mažiausia pasaulyje šalis?");
// if (city == "Vatikanas") {
//   alert("Teisingai");
// } else {
//   alert("Rimtai? Taigi Vatikanas!");
// }
// console.groupEnd();

// console.groupCollapsed("Pilnamečiai");
// let legalAge = 20;
// let clientAge = prompt("Kiek jums yra metų?");

// if (clientAge >= legalAge) {
//   alert("Pasiekęs");
// } else {
//   alert("Nepasiekęs");
// }

// console.groupEnd();

const name = "Paulius";
if (name.length > 6) {
  console.log("Ilgas vardas");
}

const myAge = 20;
if (myAge >= 100 || myAge < 0) {
  console.log("Invalid age");
} else if (myAge < 18) {
  console.log("Child");
} else {
  console.log("Adult");
}

const car = "VW";
if (
  car === "VW" ||
  car === "Audi" ||
  car === "Bentley" ||
  car === "Bugatti" ||
  car === "Lamborghini" ||
  car === "Porsche"
) {
  console.log("VW Group");
} else if (car === "BMW" || car === "Mini" || car === "Rolls-Royce") {
  console.log("BMW Group");
} else {
  console.log("Nei vienam");
}

const vardas = "Paulius";
console.log(vardas.length < 5 ? "Short Name" : "Long Name");

// const clientAge = 14;
// const legalAge = 18;
// clientAge >= legalAge ? console.log("Can drive") : console.log("Can't drive");

const clientAge = 16;
const legalAge = 18;
clientAge < 0 || clientAge > 120
  ? console.log("Invalid age")
  : clientAge >= legalAge
  ? console.log("Can drive")
  : console.log("Can't drive");
