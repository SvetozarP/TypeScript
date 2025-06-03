interface CountableSet<T> {
    add(item:T): void;
    remove(item: T): void;
    contains(item: T): boolean;
    getNumberOfCopies(item: T): number;
}


class CountedSet<T> implements CountableSet<T> {
  private map: Map<T, number>;

  constructor() {
    this.map = new Map<T, number>();
  }

  add(item: T): void {
    const count = this.map.get(item) ?? 0;
    this.map.set(item, count + 1);
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


// let countedSet = new CountedSet<string>();
// countedSet.add('test');
// countedSet.add('test');
// console.log(countedSet.contains('test'));
// console.log(countedSet.getNumberOfCopies('test'));
// countedSet.remove('test')
// countedSet.remove('test')
// countedSet.remove('test')
// console.log(countedSet.getNumberOfCopies('test'));
// console.log(countedSet.contains('test'));


// let codesCounterSet = new CountedSet<200 | 301 | 404 | 500>();
// codesCounterSet.add(404);
// codesCounterSet.add(200);
// console.log(codesCounterSet.contains(404));
// console.log(codesCounterSet.getNumberOfCopies(200));

// codesCounterSet.add(205);   //TS Error
// codesCounterSet.getNumberOfCopies(350);    //TS Error
