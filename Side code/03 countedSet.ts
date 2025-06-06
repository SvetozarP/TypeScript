interface CountableSet<T> {
    add(item: T): void;
    remove(item: T): void;
    contains(item: T): boolean;
    getNumberOfCopies(item: T): number;
}


class CountedSet<T> implements CountableSet<T> {
    private map = new Map<T, number>;

    constructor() {
        this.map = new Map<T, number>()
    }

    add(item: T): void {
        const count = this.map.get(item) ?? 0;
        this.map.set(item, count+1);
    }

    remove(item: T): void {
        const count = this.map.get(item);
        if (count && count > 0) {
            this.map.set(item, count - 1);
        }
    }

    contains(item: T): boolean {
        const count = this.map.get(item);
        return !!count && count > 0;
    }

    getNumberOfCopies(item: T): number {
        return this.map.get(item) ?? 0;
    }
}


const countedSet = new CountedSet<string>();

countedSet.add("apple");
countedSet.add("apple");
countedSet.add("banana");

console.log(countedSet.getNumberOfCopies("apple"));   // Expected: 2
console.log(countedSet.getNumberOfCopies("banana"));  // Expected: 1
console.log(countedSet.getNumberOfCopies("cherry"));  // Expected: 0

console.log(countedSet.contains("apple"));   // Expected: true
console.log(countedSet.contains("cherry"));  // Expected: false

countedSet.remove("apple");
console.log(countedSet.getNumberOfCopies("apple"));   // Expected: 1
console.log(countedSet.contains("apple"));            // Expected: true

countedSet.remove("apple");
console.log(countedSet.getNumberOfCopies("apple"));   // Expected: 0
console.log(countedSet.contains("apple"));            // Expected: false

countedSet.remove("apple");  // Should do nothing
console.log(countedSet.getNumberOfCopies("apple"));   // Expected: 0
