import { Log } from "../utils/decorators";


export abstract class ApiService<T, CreateT = T> {
    protected baseServiceUrl: string;

    constructor(url: string) {
        this.baseServiceUrl = url;
    }

    @Log
    async getAll(): Promise<T[]>{
        const res = await fetch(this.baseServiceUrl);
        return await res.json();
    }

    @Log
    async create(itemData: T): Promise<CreateT> {
        const res = await fetch(this.baseServiceUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemData)
        });
        return await res.json();
    }

    @Log
    async update(id: number, itemData: T): Promise<T> {
        const res = await fetch(`${this.baseServiceUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemData)
        });
        return await res.json();
    }

    @Log
    async delete(id: number): Promise<void> {
        await fetch(`${this.baseServiceUrl}/${id}`, {
            method: 'DELETE'
        });
    }
}