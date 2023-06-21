import { BookingHistory } from "../types";

enum BookingHistoryStatus{
    cancelled = "Бронь отменена",
    isOver = "Время брони закончилось",
    inMotion = "В действии"
}

const BookingHistoryMock: BookingHistory[] = [
    {
        hotelId: 1,
        name: 'Отель 1',
        address: 'Москва',
        status: BookingHistoryStatus.cancelled,
        room: {
            id: 1,
            name: 'Комната 12',
            price: 18888,
        }
    },
    {
        hotelId: 1,
        name: 'Отель 1',
        address: 'Москва',
        status: BookingHistoryStatus.isOver,
        room: {
            id: 1,
            name: 'Комната 12',
            price: 18888,
        }
    },
    {
        hotelId: 1,
        name: 'Отель 1',
        address: 'Москва',
        status: BookingHistoryStatus.cancelled,
        room: {
            id: 1,
            name: 'Комната 12',
            price: 18888,
        }
    },
    {
        hotelId: 1,
        name: 'Отель 1',
        address: 'Москва',
        status: BookingHistoryStatus.isOver,
        room: {
            id: 1,
            name: 'Комната 12',
            price: 18888,
        }
    }
]

export default BookingHistoryMock;