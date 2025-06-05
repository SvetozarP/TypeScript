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

    getInfo(condensed: boolean): string {
        return condensed ? `Person ${this.name}` : `Person ${this.name} is ${this.age} old with email ${this.email}`
    }

}

const user1 = new User('one', 23, 'one@bar.com')
const user2 = new User('two', 30, 'two@bar.com')

// const user3 = new User('one', 23, 'on') - error due to validation from the decorator

console.log(Object.isFrozen(User));
console.log(Object.isFrozen(User.prototype));
