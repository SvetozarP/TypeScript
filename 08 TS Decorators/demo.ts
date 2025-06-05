// Legacy Class Decorator
function LogClass(constructor: Function) {
  console.log(`Class decorated: ${constructor.name}`);
}

// Legacy Property Decorator
function LogProperty(target: any, propertyKey: string) {
  console.log(`Property decorated: ${propertyKey}`);
}

// Legacy Accessor Decorator
function LogAccessor(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log(`Accessor decorated: ${propertyKey}`);
}

// Legacy Method Decorator
function LogMethod(target: any, methodKey: string, descriptor: PropertyDescriptor) {
  console.log(`Method decorated: ${methodKey}`);
}

@LogClass
class User {

    @LogProperty
    name: string;

    private _email!: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    @LogAccessor
    get email() {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    @LogMethod
    getInfo(condensed: boolean): string {
        return condensed ? `Person ${this.name}` : `Person ${this.name} with email ${this.email}`
    }

}