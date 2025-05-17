let firstName: string = 'First';
let lastName: string = 'Second';
let age: number = 20;
let hasPower: boolean = false;
let skills: string[] = ['JS', 'HTML'] // Array
let certified: [string, number, boolean] = [
    'mysql',
    2,
    true
] // Tuple
let strNumArr: (string | number)[] = ['haha', 65] // Mixed array - string / number

enum DaysOfTheWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

let point = { x: 0, y: 0};

enum Directions {
    Up,
    Down,
    Left,
    Right
}

function movePoint(point: {x: number, y: number}, moveDirection: Directions) {
    if (moveDirection === Directions.Up) {
        return {x: point.x, y: point.y + 1};
    } else if (moveDirection === Directions.Down) {
        return {x: point.x, y: point.y - 1};
    }
} // enum - Object with numbered constants

console.log(movePoint(point, Directions.Up))

function greetUser (username: string, addHello?: boolean) : string { // Optional parameter: addHello, typing of the return parameter -> string
    if (addHello === true) {
        return `Hello ${username}`;
    } else {
        return username;
    }
}

console.log(greetUser('User', true));
console.log(greetUser('User2')); 

// type void = when function does not return
// type Unknown - when type of var is unknown at this stage.

// Assertion

let val: unknown = 20;
let str = val as string;
console.log(str.length);
console.log((<string>val).length);

//console.log(str * 20);
console.log(typeof str);


// type guards:

function formatData(a: string | number, b: string | number) { // Type narrowing
    if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
        
    } else {
        console.log(`${a}<->${b}`);
        
    }
}

function isNumber(val: string | number): val is number { // type narrowing - predicate function
    return typeof val === 'number'
}

function formatDataPredicate(a: string | number, b: string | number) { // Type narrowing
    if (isNumber(a) && isNumber(b)) {
        console.log(a + b);
        
    } else {
        console.log(`${a}<->${b}`);
        
    }
}