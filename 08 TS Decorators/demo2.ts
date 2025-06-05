function FreezeClass(constructor: Function) {
    console.log(`Freeze applied`);
    Object.freeze(constructor);
    Object.freeze(constructor.prototype)
}


function ValidateStringAccessor(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const oldSetter = descriptor.set; // saving the original method to a var

    descriptor.set = function(val: string) { // new function to validate the input
        if(val.length < 3) {
            throw new Error("Length must be at least 3 characters");
        }

        oldSetter?.call(this, val); // assign validated function if error isn't called.
    }

    return descriptor // good practice
}

function DepricatedMethod(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        console.log(`Caution! Method ${methodName} is depricated! Consider using another one`);
        return originalMethod.apply(this, args); // when decorating methods, this needs to be returned
    }

    return descriptor
}

// Factory decorator

function DepricatedMethod1(message: string = 'Depricated method') {
    return function (target: any, methodName: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            console.log(`Caution! ${message}`);
            return originalMethod.apply(this, args); // when decorating methods, this needs to be returned
        }

        return descriptor
    }
}

// @FreezeClass
class User {

    name: string;
    age: number;

    private _email!: string;

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    @ValidateStringAccessor
    get email() {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    @DepricatedMethod1('Method is Depricated')
    getInfo(condensed: boolean): string {
        return condensed ? `Person ${this.name}` : `Person ${this.name} is ${this.age} old with email ${this.email}`
    }

}

const user1 = new User('one', 23, 'one@bar.com')
const user2 = new User('two', 30, 'two@bar.com')

// const user3 = new User('one', 23, 'on') - error due to validation from the decorator

// console.log(Object.isFrozen(User));
// console.log(Object.isFrozen(User.prototype));

console.log(user1.getInfo(true));