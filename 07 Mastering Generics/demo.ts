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


