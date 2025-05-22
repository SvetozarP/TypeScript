// Union type - function takes either string or array
function printGreeting(text: string | string[]): void {
    if (typeof text === 'string') {
        console.log(text);
    } else {
        console.log(text.join(' '));
        
    }
}

printGreeting('Hello');
printGreeting(['Hello', 'its', 'me']);

// Intersection type - object has both properties
function showContact(contactPerson: {name: string} & {email: string}) {
    return contactPerson;
}

let contactPerson: {name: string} & {email: string} = {
    name: 'Someone',
    email: 'foo@bar.com'
}

console.log(showContact(contactPerson));


// Literal type - limit the values for certain variable to only allowed ones
let state: 'success' | 'error';
state = 'success';


// Number literal - value can be only certain number
let demoNumber: 1 | 2| 3;
demoNumber = 2;


// Type aliases - create own type which can be primitive
type Id = number;

function greet(humanID: Id) {
    return humanID;
};

// Type person must have all these attributes - type of object
type Person = {
    id: Id,
    firstName: string,
    lastName: string,
    age: number
};

type PersonProfile = {
    height: number,
    nickname: string
}
// Intersection - completePerson must have all attributes from Person and personProfile; can have optional parameters, however need to check before use 
// otherwise gives "undefined"
type CompletePerson = Person & PersonProfile;

let onePerson: Person = {
    id: 1,
    firstName: 'fname',
    lastName: 'lname',
    age: 12
};

console.log(onePerson);


let twoPerson: CompletePerson = {
    id: 1,
    firstName: 'nameone',
    lastName: 'nametwo',
    age: 33,
    height: 170,
    nickname: 'two'
};

function printPersonInfo(someone: CompletePerson): void {
    console.log(`Person: ${someone.firstName} ${someone.lastName} Age: ${someone.age}`);
    
};

console.log(twoPerson);
printPersonInfo(twoPerson);


// keyof usage

type Point = {
    x: number,
    y: number
};

// defining a point of type Point
let originPoint: Point = {
    x: 0,
    y: 0
}

// type KeysOfPoint may only have keyof Point (x | y)
type KeysOfPoint = keyof Point;

function changeCoordinate(point: Point, coordinateName: KeysOfPoint, newValue: number) {
    point[coordinateName] = newValue
}

changeCoordinate(originPoint, 'x', 2);

console.log(originPoint);


//in usage - check if certain var has type

type A = {name: string};
type B = {age: number};
let valu: A|B = {
    name: 'ExampleName'
}

if ('age' in valu) console.log(valu.age);
if ('name' in valu) console.log(valu.name);

// ! Evaluating objects will give true, as they are both objects

// type mapping "for key in keyof Point, make all keys optional"

type PartialPoint = {
    [K in keyof Point]?: Point[K]
}

// Recursive types - we can set types of attributes same as the parent

type TreeNode = {
    value: number,
    leftChild?: TreeNode,
    rightChild?: TreeNode
}

let leftLeaf: TreeNode = {
    value: 5
}

let rightLead: TreeNode = {
    value: 4
}

const root: TreeNode = {
    value: 3,
    leftChild: leftLeaf,
    rightChild: rightLead
}


// Interfaces - DuckTyping

interface PersonInt {
    fullName: string,
    email: string
}

let thomas: PersonInt = {
    fullName: 'Thomas Bar',
    email: 'foo@bar.bar'
}

console.log(thomas.fullName);


// functions in interfaces

interface Animal {
    name: string;
    age: number;
    makeSound: (soundName: string) => void; // makeSound: (soundName: string): void;
}

class Dog implements Animal{
    public name: string;
    public age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    makeSound(soundName: string): void {
        console.log(soundName);
        
    }
}

const doggie = new Dog('Barky', 2);
doggie.makeSound('Bau');


// Interface extends - same as intersection

interface Person1 {
    id: Id,
    firstName: string,
    lastName: string,
    age: number
};

interface PersonProfile1 extends Person1 {
    height: number,
    nickname: string
};