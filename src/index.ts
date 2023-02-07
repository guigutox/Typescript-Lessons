let age: number = 5;
const firstName: string = 'Felipe';
const isValid: boolean = true;


let idk: any = 5;
idk = '12';
idk = true;

const ids:number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true, false];
const nomes: string[] = ["Joao", "Joana", "Gabriel"];

//TUPLA
const person: [number, string] = [1, "Jane"];

//Lista de tuplas
const peoples: [number, string][] =[
    [1,"jane"],
    [2, "Joe"],
];


//Intersections
const productId: string | number | boolean = '1';

//Enum
enum Direction{
    Up = 1,
    Down = 2,
    Left = 'Esquerda',
    Rigth = 'Direita'
}

const direction = Direction.Up
console.log(direction);


//Type Assertions
const productName: any = 'Boné';

let itemId = productName as String;
let item = <string>productName;

