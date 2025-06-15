import { Room } from "./contracts/room";
import { RoomNumber } from "./monthlyMotel";

export class Apartment implements Room {
    private price: number;
    readonly roomNumber: RoomNumber;
    private numberOfGuests: number;

    constructor(
        price: number,
        roomNumber: RoomNumber,
        numberOfGuests: number
    ) {
        this.price = price;
        this.roomNumber = roomNumber;
        this.numberOfGuests = numberOfGuests;
    }

    get totalPrice(): number {
        return this.price * this.numberOfGuests;
    }

    get cancellationPrice(): number {
        return this.totalPrice * 0.8;
    }
}