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


// Polymorphism - objects can have parts of their functionality. Need structure and types to be compatible

type Greeter = { greet(): string; }
class Person2 {
    constructor(public name: string){}
    greet() {return `${this.name} says hello`};
}

let person1: Greeter = new Person2('John'); // person1 is type Greeter and instance of class Person2
console.log(person1.greet());

// Method override - Circle overrides draw() from Shape (implicit override) - change of noImplicitOverride in tsconfig can forbid implicit override and leave
// only explicit overrides
class Shape {
    draw(): void {console.log('Shape has been drawn');
    }
}
class Circle extends Shape {
    draw() {console.log('This is a circle');
    }
}
class Circle1 extends Shape {
    draw() {console.log(`${super.draw()} + Draw circle`); // calls the parent method and overrides
    }
}

class Circle2 extends Shape {
    override draw() {console.log(`${super.draw()} + Draw circle`); // Explicit overriding
    }
}


