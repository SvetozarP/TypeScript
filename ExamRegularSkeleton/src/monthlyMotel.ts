import { PartialMonthlyMotel } from "./contracts/partialMonthlyMotel";
import { SummerMonth, WinterMonth } from "./contracts/util"
import { Room } from "./contracts/room"

type AllowedMonth = WinterMonth | SummerMonth;

export type RoomNumber = Room['roomNumber'];;
export type BookingSet<T extends AllowedMonth> = Set<T>;
export type BookingsMap<T extends AllowedMonth> = Map<RoomNumber, BookingSet<T>>;
export type RoomsMap = Map<RoomNumber, Room>;

const winterMonthsSet: Set<string> = new Set(Object.values(WinterMonth));
const summerMonthsSet: Set<string> = new Set(Object.values(SummerMonth));

export class MonthlyMotel<T extends AllowedMonth> extends PartialMonthlyMotel {
    private rooms: RoomsMap = new Map();
    private bookings: BookingsMap<T> = new Map();
    private totalBudget: number = 0;

    addRoom(room: Room): string {
        if (this.rooms.has(room.roomNumber)) {
            return `Room '${room.roomNumber}' already exists.`;
        }
        this.rooms.set(room.roomNumber, room);
        this.bookings.set(room.roomNumber, new Set());
        return `Room '${room.roomNumber}' added.`;
    }

    bookRoom(roomNumber: RoomNumber, bookedMonth: T): string {
        if (!this.rooms.has(roomNumber)) {
            return `Room '${roomNumber}' does not exist.`;
        }
        const bookings = this.bookings.get(roomNumber)!;
        if (bookings.has(bookedMonth)) {
            return `Room '${roomNumber}' is already booked for '${bookedMonth}'.`;
        }
        bookings.add(bookedMonth);
        this.totalBudget += this.rooms.get(roomNumber)!.totalPrice;
        return `Room '${roomNumber}' booked for '${bookedMonth}'.`;
    }

    cancelBooking(roomNumber: RoomNumber, bookedMonth: T): string {
        if (!this.rooms.has(roomNumber)) {
            return `Room '${roomNumber}' does not exist.`;
        }
        const bookings = this.bookings.get(roomNumber)!;
        if (!bookings.has(bookedMonth)) {
            return `Room '${roomNumber}' is not booked for '${bookedMonth}'.`;
        }
        bookings.delete(bookedMonth);
        this.totalBudget -= this.rooms.get(roomNumber)!.cancellationPrice;
        return `Booking cancelled for Room '${roomNumber}' for '${bookedMonth}'.`;
    }

    override getTotalBudget(): string {
        return `Motel: ${PartialMonthlyMotel.MotelName}\nTotal budget: $${this.totalBudget.toFixed(2)}`;
    }
}