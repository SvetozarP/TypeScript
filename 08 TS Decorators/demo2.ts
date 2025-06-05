function FreezeClass(constructor: Function) {
    console.log(`Freeze applied`);
    Object.freeze(constructor);
    Object.freeze(constructor.prototype)
}




@FreezeClass
class User {

    name: string;
    age: number;

    private _email!: string;

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

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

console.log(Object.isFrozen(User));
console.log(Object.isFrozen(User.prototype));
