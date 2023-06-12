import { HotelType } from "../types";

const HotelsMock: HotelType[] = [
    {
        id: 1,
        name: "Отель 1",
        rating: 3.5,
        minCost: 1000,
        maxCost: 10000,
        numberRoomsAvailable: 123,
        photos: [
            "https://hotels.sletat.ru/i/f/112768_0.jpg",
            'https://www.milanweek.ru/wp-content/uploads/2018/10/Lefay-Resort-SPA-Lago-di-Garda-at-night_ISC317.jpg',
            'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/15355766.jpg?k=65628e3c027dac2fdd2d7b29fe46f7844bf0d04cb1106edf7f1fadf44e25ea21&o=',
            'https://classpic.ru/wp-content/uploads/2020/10/45046/otel-s-kvadratnym-bassejnom-i-shezlongami-vokrug-nego.jpg'
        ]
    },
    {
        id: 2,
        name: "Отель 2",
        rating: 4,
        minCost: 1000,
        maxCost: 10000,
        numberRoomsAvailable: 123,
        photos: [
            "https://hotels.sletat.ru/i/f/112768_0.jpg",
            'https://www.milanweek.ru/wp-content/uploads/2018/10/Lefay-Resort-SPA-Lago-di-Garda-at-night_ISC317.jpg',
            'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/15355766.jpg?k=65628e3c027dac2fdd2d7b29fe46f7844bf0d04cb1106edf7f1fadf44e25ea21&o=',
            'https://classpic.ru/wp-content/uploads/2020/10/45046/otel-s-kvadratnym-bassejnom-i-shezlongami-vokrug-nego.jpg'
        ]
    },
    {
        id: 3,
        name: "Отель 3",
        rating: 5,
        minCost: 1000,
        maxCost: 10000,
        numberRoomsAvailable: 123,
        photos: [
            "https://hotels.sletat.ru/i/f/112768_0.jpg",
            'https://www.milanweek.ru/wp-content/uploads/2018/10/Lefay-Resort-SPA-Lago-di-Garda-at-night_ISC317.jpg',
            'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/15355766.jpg?k=65628e3c027dac2fdd2d7b29fe46f7844bf0d04cb1106edf7f1fadf44e25ea21&o=',
            'https://classpic.ru/wp-content/uploads/2020/10/45046/otel-s-kvadratnym-bassejnom-i-shezlongami-vokrug-nego.jpg'
        ]
    }
]

export default HotelsMock;