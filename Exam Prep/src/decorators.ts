import { PartialMessageEncoder } from "./contracts/implemented/partialMessageEncoder";

export function decorator1<T extends {new (...args: any[]): {}}>(constructor: T){
    return class extends constructor {
        protected _offset: number = 3;
    }
}

export function decorator2(    
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
): void {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const forbidden = PartialMessageEncoder.forbiddenSymbols;
        if (typeof args[0] === 'string') {
            forbidden.forEach(symbol => {
                args[0] = args[0].split(symbol).join('');
            });
        }
        return originalMethod.apply(this, args);
    };
}

export function decorator3(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
): void {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const forbidden = PartialMessageEncoder.forbiddenSymbols;
        if (typeof args[0] === 'string') {
            forbidden.forEach(symbol => {
                args[0] = args[0].split(symbol).join('');
            });
        }
        return originalMethod.apply(this, args);
    };
}

export function decorator4<T extends typeof PartialMessageEncoder>(constructor: T){
    if (!constructor.forbiddenSymbols.includes('"')) {
        constructor.forbiddenSymbols.push('"', "'");
    }
    return constructor;
}
