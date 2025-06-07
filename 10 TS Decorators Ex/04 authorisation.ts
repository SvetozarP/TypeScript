class MockAuthorizationService {
    constructor(private userRole: 'Guest' | 'PersonalDataAdministrator' | 'Admin') { }

    canViewData(property: string) {
        switch (this.userRole) {
            case 'Admin': return true;
            case 'PersonalDataAdministrator': return ['name', 'age'].includes(property);
            default: return false;
        }
    }
}

let mockAuthorizationService = new MockAuthorizationService('Admin');
// let mockAuthorizationService = new MockAuthorizationService('PersonalDataAdministrator');
// let mockAuthorizationService = new MockAuthorizationService('Guest');

function authorizeUser(authService: MockAuthorizationService) {
    return function(target: any, propName: string, descriptor: PropertyDescriptor) {
        const originalGetter = descriptor.get;

        descriptor.get = function() {
            const hasAccess = authService.canViewData(propName)

            if (!hasAccess) {
                throw new Error('You are not authorized to view this information')
            }

            return originalGetter?.call(this);
        }

        return descriptor;
    }
}


class User {
    private _name!: string;
    private _age!: number;
    private _creditCardNumber!: string;

    constructor(name: string, age: number, creditCardNumber: string) {
        this._name = name;
        this._age = age;
        this._creditCardNumber = creditCardNumber;
    }

    @authorizeUser(mockAuthorizationService)
    public get name() {
        return this._name;
    }

    @authorizeUser(mockAuthorizationService)
    public get age() {
        return this._age;
    }

    @authorizeUser(mockAuthorizationService)
    public get creditCardNumber() {
        return this._creditCardNumber;
    }

}


const user1 = new User("John Doe", 30, 'ABCD-1234');
console.log(user1.name);
console.log(user1.age);
console.log(user1.creditCardNumber);


// const user1 = new User("John Doe", 30, 'ABCD-1234'); - data admin input - oK
// console.log(user1.name);
// console.log(user1.age);
// console.log(user1.creditCardNumber);

// const user1 = new User("John Doe", 30, 'ABCD-1234');
// console.log(user1.name);
// console.log(user1.age);
// console.log(user1.creditCardNumber);
