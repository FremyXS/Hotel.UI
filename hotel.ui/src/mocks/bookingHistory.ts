import { BookingHistory } from "../types";

enum BookingHistoryStatus{
    cancelled = "Бронь отменена",
    isOver = "Время брони закончилось",
    inMotion = "В действии"
}

enum BookingCurrentStatus{
    canСanceled = "Можно отменить",
    cannotUndone = "Нельзя отменить"
}

export const BookingHistoryMock: BookingHistory[] = [
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
];

export const BookingCurrent : BookingHistory = {
    hotelId: 1,
        name: 'Отель 1',
        address: 'Москва',
        status: BookingCurrentStatus.canСanceled,
        room: {
            id: 1,
            name: 'Комната 12',
            price: 18888,
        }
}