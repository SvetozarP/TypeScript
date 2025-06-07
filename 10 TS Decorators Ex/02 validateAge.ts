function AgeValidator(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const origSetter = descriptor.set
    descriptor.set = function(val: number) {
        if (val < 1 || val > 200 || !val) {
            throw new Error('Age must be between 1 and 200')
        }

        origSetter?.call(this, val)
    }

    return descriptor
}

class Age {
    private _age!: number;
    constructor(age: number){ 
        this.age = age;
     }

    @AgeValidator
    set age(val: number){ this._age = val; }
    get age() { return this._age;  }
}


let ageVal = new Age(10);
ageVal.age = -10;
console.log(ageVal.age);

