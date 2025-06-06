function copyBetweenArrays<T> (source: T[], sourceIndex: number, target: T[], targetIndex: number): void {
    target[targetIndex] = source[sourceIndex];
}


const array1 = [1, 2, 3];
const array2 = [9, 8, 7];
copyBetweenArrays(array1, 0, array2, 2);
console.log(array2); // Expected output: [9, 8, 1]

const words1 = ['red', 'green', 'blue'];
const words2 = ['cyan', 'magenta', 'yellow'];
copyBetweenArrays(words1, 2, words2, 0);
console.log(words2); // Expected output: ['blue', 'magenta', 'yellow']
