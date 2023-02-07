interface IPerson{
    id: number;
    sayMyName(): string;
}

class Person implements IPerson{
    //Modificadores de acesso
    //Readonly = apenas permite a leitura da var
    //Protected = so pode ser acessada dentro de sua classe e subclasses
    //Private =  so pode ser acessada dentro de sua classe


    readonly id: number;
    protected name: string;
    private age: number;

    constructor(id: number, nome: string, age: number){
        this.id = id;
        this.name = nome;
        this.age = age;
    }


    sayMyName(): string{
        return this.name
    }
}

const felipe = new Person(1, "Felipe", 21);


class Employee extends Person{
    constructor(id: number, nome: string, age: number){
        super(id, nome, age);
    }

    whoAmI(){
        return this.name;
    }
}