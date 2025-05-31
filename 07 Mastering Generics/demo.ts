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



