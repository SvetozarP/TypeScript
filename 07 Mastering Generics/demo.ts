// Generic basics

function getFirstElement<T>(arr: T[]): T {
    return arr[0]
}

// function works with strings
const firstEl = getFirstElement<string>(['Number one', 'Number two'])
console.log(firstEl);

// function works with numbers
const firstElNum = getFirstElement<number>([1, 2, 3])
console.log(firstElNum);


// TS Inference - no need to specify exact type param on function. Inferred by the input.
const firstElBool = getFirstElement([true, false])
console.log(firstElBool);


// Generic function with multiple types - the params must match exact types. They can also be the same type.

function makeTuple<T, U>(el1: T, el2: U): [T, U] {
    return [el1, el2]
}

const tuple1 = makeTuple('One', 'Two')
console.log(tuple1);

const tuple2 = makeTuple(1, 2)
console.log(tuple2);

const tuple3 = makeTuple<string, number>('one', 1)
console.log(tuple3);

const tuple4 = makeTuple<number, boolean>(2, false)
console.log(tuple4);


// Generic interfaces

interface Message<T> {
    sender: string
    recipient: string
    data: T
};

const message1: Message<string> = {
    sender: 'One',
    recipient: 'Two',
    data: 'Hello'
}

// Leave type param for the data attribute, and then define upon implementation. Can be done with type alias type MessageDataType = { text: string, timestamp: number }

const message2: Message<{ text: string, timestamp: number }> = {
    sender: 'Two',
    recipient: 'Two',
    data: { text: 'Hello', timestamp: 23435345 }
};


// Generics Type constraints - extends means that the attribute must have at least id

function logItemID<T extends {id: number}>(item: T): void {
    console.log(item);
}

// logItemID('One'); - error, not object, doesn't have ID
// logItemID(23);
// logItemID({name: 'Two'});
logItemID({id: 2, name: 'Two', age: 30}); // correct - is object has at least ID
logItemID({ id: 3, email: 'foo@bar.com'}) // correct - is object and has at least ID


// Class generics

class StorageBox<T>{
    items: T[]

    constructor(initialItems: T[]) {
        this.items = initialItems
    }

    getAllItems(): T[] {
        return this.items;
    }

    getFirstItem(): T {
        return this.items[0];
    }
    
    addItem(newItem: T): void {
        this.items.push(newItem);
    }

    reverseItems(): void {
        this.items.reverse();
    }

    removeItem(item: T): void {
        const index = this.items.indexOf(item);

        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}


const box1 = new StorageBox<string>(['One', 'Two']);
box1.addItem('Three');
box1.addItem('Four');
box1.getAllItems();


// Two types of Generics

class ApiResponse<T, U, V> {
    isSuccessful: T
    data: U | null
    error: V | null

    constructor( success: T, data: U | null, error: V | null){
        this.isSuccessful = success;
        this.data = data;
        this.error = error;
    }

    getResult(): U {

        if (!this.isSuccessful || this.data === null) {
            throw new Error(String(this.error))
        }

        return this.data
    }

}

// within classes, there is Inference. This does not exist with interfaces

const userResponse = new ApiResponse(true, 'The request is successfull', null)
console.log(userResponse.getResult());
const userResponse1 = new ApiResponse(true, ['One', 'Two', 'Three'], null)
console.log(userResponse1.getResult());
// const userResponse2 = new ApiResponse(false, null, 'Unknown error')
// console.log(userResponse2.getResult());


// Mapped types using generics

type User = {
    id: number;
    username: string;
    email: string;
}

type Point = {
    x: number;
    y: number;
}

// makes all props optional

type MakeOptionalProps<T> = {
    [K in keyof T]?: T[K]
}

type PartialUser = MakeOptionalProps<User>

type PartialPoint = MakeOptionalProps<Point>


// Conditional types

type Employee = {
    name: string;
    age: number;
    salary: number;
}


type Product = {
    title: string;
    price: number;
    inStock: boolean;
    rating: number;
}

type GetNumericKeys<T> = {
    [K in keyof T]: T[K] extends number ? K : never;
}[keyof T]

// name: never; age: 'age'; salary: 'salary'

type EmployeeNumericKeys = GetNumericKeys<Employee>;

// types only for numeric types are extracted

type ProductNumericKeys = GetNumericKeys<Product>;


