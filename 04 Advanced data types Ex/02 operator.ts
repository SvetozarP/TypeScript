function operate(param: string | number | string[], operation: 'Index' | 'Length' | 'Add', operand: number): string | number | undefined {
    switch(operation) {

        case 'Index':
            if (typeof param !== 'number') {
                return param[operand];
            };
        case 'Add':
            if (!Array.isArray(param)) {
                return Number(param) + operand;
            };
        case 'Length':
            if (typeof param !== 'number') {
                return param.length % operand;
            };
    };
    
};


console.log(operate(['First', 'Second', 'Third'], 'Index', 1));
console.log(operate('string', 'Index', 1));
console.log(operate(['Just', 'Two'], 'Length', 5));
console.log(operate('short string1', 'Length', 5));
console.log(operate('7', 'Add', 3));
console.log(operate(11, 'Add', 3));




