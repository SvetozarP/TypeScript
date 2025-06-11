type DimsnsionsType = {
    width: number;
    height: number;
    depth: number
}


type WMConstraint = {
    id: number;
    name: string;
    dimensions: DimsnsionsType;
    weight: number
}


class WarehouseManager<T extends DimsnsionsType> {
    store(item: T): void {
        // storing logic
    }
}