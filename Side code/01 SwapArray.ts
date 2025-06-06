function swapInArray<T> (arr: T[], index1: number, index2: number): void {
    let val: T = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = val;
}

const numbers = [10, 20, 30, 40];
swapInArray(numbers, 1, 3);
console.log(numbers); // Expected output: [10, 40, 30, 20]

const strings = ['apple', 'banana', 'cherry'];
swapInArray(strings, 0, 2);
console.log(strings); // Expected output: ['cherry', 'banana', 'apple']
