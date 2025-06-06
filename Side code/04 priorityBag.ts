interface PrioritizableBag<T> {
    add(item: T, priority: number): void;
    remove(item: T): void;
    getPriority(item: T): number | null;
    has(item: T): boolean;
}


class PriorityBag<T> implements PrioritizableBag<T> {

    private map = new Map<T, number>

    constructor() {
        this.map = new Map<T, number>
    }

    add(item: T, priority: number): void {
        
        let itemPriority: number = this.map.get(item) ?? 0;

        if (!itemPriority || itemPriority === 0) {
            this.map.set(item, priority);
        } else if (itemPriority < priority) {
            this.map.set(item, priority);
        }

    }

    remove(item: T): void {
        let itemExists = this.map.get(item) ?? 0;

        if (itemExists && itemExists > 0) {
            this.map.delete(item);
        }
    }

    getPriority(item: T): number | null {
        const priority =  this.map.get(item) ?? null;
        return priority;
    }

    has(item: T): boolean {
        const itemExists = this.map.get(item)
        return !!itemExists && itemExists > 0;
    }
}


const bag = new PriorityBag<string>();

bag.add("task1", 2);
bag.add("task2", 5);
bag.add("task1", 4);  // Higher priority, should update

console.log(bag.getPriority("task1")); // Expected: 4
console.log(bag.getPriority("task2")); // Expected: 5
console.log(bag.getPriority("task3")); // Expected: null

console.log(bag.has("task1")); // Expected: true
console.log(bag.has("task3")); // Expected: false

bag.add("task2", 3);  // Lower priority, should NOT update
console.log(bag.getPriority("task2")); // Expected: 5

bag.remove("task1");
console.log(bag.has("task1")); // Expected: false
console.log(bag.getPriority("task1")); // Expected: null
