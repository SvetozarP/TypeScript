interface Animal4 {
    makeSound1(): string
}

class Dog3 implements Animal4 {
    makeSound1(): string {
        return `Woof`
    }
}

const dog = new Dog3();
console.log(dog.makeSound1());
