"use strict";
let age = 5;
const firstName = 'Felipe';
const isValid = true;
let idk = 5;
idk = '12';
idk = true;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true, false];
const nomes = ["Joao", "Joana", "Gabriel"];
//TUPLA
const person = [1, "Jane"];
//Lista de tuplas
const peoples = [
    [1, "jane"],
    [2, "Joe"],
];
//Intersections
const productId = '1';
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Up;
console.log(direction);
