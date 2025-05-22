function multiply(param1? : string | number, param2?: string | number, param3?: string | number): number {
    let num1 = param1 == undefined ? 1: Number(param1); // check if param1 is undefined and if it is, then equate to 1 otherwise translate to number.
    let num2 = param2 == undefined ? 1: Number(param2);
    let num3 = param3 == undefined ? 1: Number(param3);
    
    let result: number = num1 * num2 * num3

    return result;
};

console.log(multiply('3', 5, '10'));
console.log(multiply('2','2'));
console.log(multiply(undefined, 2, 3));
console.log(multiply(7, undefined, '2'));
console.log(multiply());




