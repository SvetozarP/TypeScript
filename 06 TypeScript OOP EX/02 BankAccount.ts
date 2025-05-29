class BankAccount {
    
    private _balance: number
    
    constructor(balance: number) {
        this._balance = balance
    }

    public deposit(amount: number): void {
        this._balance += amount
    }

    public withdraw(amount: number): void {
        if (this._balance >= amount) {
            this._balance -= amount
        } 
    }

    public getBalance(): number {
        return this._balance
    }

}

const account1 = new BankAccount(100);
account1.deposit(50);
account1.withdraw(30);
console.log(account1.getBalance());


const account = new BankAccount(20);
account.withdraw(30);
console.log(account.getBalance());

