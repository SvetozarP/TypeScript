type PrinterInputType<T> = 
    T extends string[] ? string[] :
    T extends number[] ? number[] :
    T extends boolean[] ? boolean[] :
    never



function arrayPrinter<T>(arg: PrinterInputType<T>) {
    if (Array.isArray(arg)) {
        if (typeof arg[0] === 'number') {      
            (arg as number[]).forEach(e => console.log(e * 2));
        } else if (typeof arg[0] === 'string') {
            (arg as string[]).forEach(e => console.log(e.toUpperCase()));
            
        } else if (typeof arg[0] === 'boolean') {
            (arg as boolean[]).forEach(b => console.log(b ? "TRUE": "FALSE"));
        } else {
            console.log("Unsupported type");
            
        }

    } else {
        console.log("Unsupported type");
        
    }
}

arrayPrinter<string[]>(['hello', 'world']);
arrayPrinter<number[]>([1, 2, 3]);
