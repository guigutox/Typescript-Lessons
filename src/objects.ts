//Type

type Order = {
    productId: string;
    price: number;
}

type User = {
    firstName: string;
    // O ? indica que é opcional
    age?: number;
    email: string;
    password: string;
    orders: Order[];
    register(): string;
};

const user: User ={
    firstName: "Ana",
    //age: 20,
    email: "Ana@gmail.com",
    password: "123",
    orders:[{productId:'1', price:200}],
    register(){
        return "a";
    },
}


user.age

const printlog = (idade: number) =>{
}

printlog(user.age!);

//Unions
type Author = {
    books: string[]
}


//UNIR DOIS TIPOS
const author: Author & User ={

    books: ['1'],
    email: 'author@gmail.com',
    firstName: 'Felipe',
    orders: [],
    password: '123',
    register(){
        return "a";
    },
   
}

//Interfaces
interface UserInterface{
    //Readyonly permite apenas leitura usando interface
    readonly firstName: string,
    email: string,
    login():string;
}

const emailUser: UserInterface = {
    email: "guijogos@gmail.com",
    firstName: "Felipe",
    login(){
        return "a";
    },
};


interface AuthorInterface{
    books: string[]
}

//União de interfaces
const newAuthor: UserInterface & AuthorInterface ={
    email: "guijogos@gmail.com",
    firstName: "Felipe",
    books: [],
    login(){
        return "a";
    },
}

type Grade = number|string ; 
const grade: Grade = 1;