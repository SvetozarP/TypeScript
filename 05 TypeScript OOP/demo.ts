// Types typing in object

let test = {name: 'Someone', age: 20};

type a = typeof test; // type object
type b = keyof typeof test; // b is either name or age
type c = {
    [k in keyof typeof test]: typeof test[k];
} // c is object that copies copletely test

// class review

class Dog1 {
    private name: string;
    private age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    bark() {
        return `${this.name} woofed friendly`;
    }
}

let tommy = new Dog1('Tommy', 6);
console.log(tommy);
console.log(tommy.bark());

// Abstraction - classes implement interfaces (partial types)

interface Human {
    greet(): string;
}

class Person1 implements Human {
    greet(): string {
        return 'Hello There!'
    }
}

console.log(Person1);

// Inheritance

class Animal1 {
    sound: string;

    constructor(sound: string) {
        this.sound = sound
    }

    makesound(): void {
        console.log(this.sound);
        
    }
}

class Dog2 extends Animal1 {
    constructor() {
        super('Bark');
    }
}

let dog1 = new Dog2();
dog1.makesound(); // barks, inherited from Animal1

