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


// Method overload

class Person3 {
    greet(num: number): void;
    greet (fName: string, lName: string): void;
    greet (a: number | string, b?: string): void {
        console.log(
            typeof a === 'number'
            ? `Your number: ${a}`
            : `Hello ${a} ${b}`
        );
        
    }
}

let person2 = new Person3();
person2.greet('John', 'Doe') // Greet person - strings for a and b
person2.greet(13) // Display number 13, as only a assigned as number
// person2.greet('John') - error, no such signature, because if a is string, we need to have b - row 106

// Interface restricts implementation, not declaration:

interface Barker {
    bark(person: Person3): string;
}

let obj: Barker = {bark() {return '20'}} // valid declaration
// obj.bark() // error - Interface restricting, bark should have person
console.log(obj.bark(person2)); // valid - person has been passed and matches the interface signature, regardless that bark method of object does not accept arguments.

// getters and setters

const fullNameMaxLength = 10;
class Employee {
    private _fullName!: string; // Definite assertion - guarantees that this var/property will be assigned

    get fullName(): string { // getter - accesses private property inside the class
        return this._fullName;
    }

    set fullName(newName: string) { // setter with validation to ensure newName does not exceed namelength
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error('fullName has a max length of ' + fullNameMaxLength);
        }

        this._fullName = newName;
    }
}

// Access modifiers - public, protected, private. Public = accessible from everywhere.

class Animal2 {
    constructor(protected _name: string){} // shorthand for declaration within constructor
}

class Bear extends Animal2 {
    roar() {return `${this._name} roars`} // able to access _name as it is protected and Bear inherits Animal. Cannot access private.
}


// Additional modifiers - abstract, static and readonly

class Manufacturing {
    public maker: string;
    public model: string;
    public static vehiclesCount = 0; // Class method

    constructor( maker: string, model: string ){
        this.maker = maker;
        this.model = model;
    }

    createVehicle() {
        let calls = ++Manufacturing.vehiclesCount; // increments times function is called in the class, not in the instance. All instances know about this.
        return `createVehicle called: ${calls} times`;
    }
}

// Abstract class cannot be instantiated directly, they can be inherited only. Can be applied to properties and methods too.

abstract class Departmnet {
    public depName: string;
    constructor(n: string) {this.depName = n;}
    abstract sayHello(): void;
}

class Engineering extends Departmnet {
    constructor(depName: string, public employee: string) {
        super(depName);
    }

    sayHello() { // Must implement abstract methods
        return `${this.employee} of ${this.depName} department says hi!`;
    }
}

// let dep = new Departmnet('Test') Department cannot be instantiated - it is abstract

let engineering = new Engineering('Engineers', 'Josh')
console.log(engineering.sayHello()); // inherited department and implemented abstract method


// Readonly protects value from being modified

class Animal3 {
    readonly name: string;
    constructor(n: string) {
        this.name = n;
    }
}

let animal = new Animal3('Martha');
// animal.name = 'Thomas'; - cannot modify readonly property


