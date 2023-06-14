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
        ],
        rooms: [
            {
                id: 21,
                name: 'Двухместный номер',
                photos: [
                    'https://kartinkin.net/uploads/posts/2022-03/1647279996_52-kartinkin-net-p-kartinki-zabroshki-55.jpg',
                    'https://kartinkin.net/uploads/posts/2022-03/1647280032_66-kartinkin-net-p-kartinki-zabroshki-70.jpg',
                    'http://funart.pro/uploads/posts/2021-04/1618688687_35-funart_pro-p-strashnie-mesta-krasivie-mesta-foto-35.jpg',
                ],
                tariffes: [
                    {
                        id: 31,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                    {
                        id: 32,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                    {
                        id: 33,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                ]
            },
            {
                id: 22,
                name: 'Двухместный номер',
                photos: [
                    'https://kartinkin.net/uploads/posts/2022-03/1647279996_52-kartinkin-net-p-kartinki-zabroshki-55.jpg',
                    'https://kartinkin.net/uploads/posts/2022-03/1647280032_66-kartinkin-net-p-kartinki-zabroshki-70.jpg',
                    'http://funart.pro/uploads/posts/2021-04/1618688687_35-funart_pro-p-strashnie-mesta-krasivie-mesta-foto-35.jpg',
                ],
                tariffes: [
                    {
                        id: 32,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                    {
                        id: 32,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                    {
                        id: 33,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                ]
            },
            {
                id: 23,
                name: 'Двухместный номер',
                photos: [
                    'https://kartinkin.net/uploads/posts/2022-03/1647279996_52-kartinkin-net-p-kartinki-zabroshki-55.jpg',
                    'https://kartinkin.net/uploads/posts/2022-03/1647280032_66-kartinkin-net-p-kartinki-zabroshki-70.jpg',
                    'http://funart.pro/uploads/posts/2021-04/1618688687_35-funart_pro-p-strashnie-mesta-krasivie-mesta-foto-35.jpg',
                ],
                tariffes: [
                    {
                        id: 33,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                    {
                        id: 32,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                    {
                        id: 33,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                ]
            }
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
        ],
        rooms: [
            {
                id: 21,
                name: 'Двухместный номер',
                photos: [
                    'https://kartinkin.net/uploads/posts/2022-03/1647279996_52-kartinkin-net-p-kartinki-zabroshki-55.jpg',
                    'https://kartinkin.net/uploads/posts/2022-03/1647280032_66-kartinkin-net-p-kartinki-zabroshki-70.jpg',
                    'http://funart.pro/uploads/posts/2021-04/1618688687_35-funart_pro-p-strashnie-mesta-krasivie-mesta-foto-35.jpg',
                ],
                tariffes: [
                    {
                        id: 31,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                    {
                        id: 32,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                    {
                        id: 33,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                ]
            },
            {
                id: 22,
                name: 'Двухместный номер',
                photos: [
                    'https://kartinkin.net/uploads/posts/2022-03/1647279996_52-kartinkin-net-p-kartinki-zabroshki-55.jpg',
                    'https://kartinkin.net/uploads/posts/2022-03/1647280032_66-kartinkin-net-p-kartinki-zabroshki-70.jpg',
                    'http://funart.pro/uploads/posts/2021-04/1618688687_35-funart_pro-p-strashnie-mesta-krasivie-mesta-foto-35.jpg',
                ],
                tariffes: [
                    {
                        id: 32,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                    {
                        id: 32,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                    {
                        id: 33,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                ]
            },
            {
                id: 23,
                name: 'Двухместный номер',
                photos: [
                    'https://kartinkin.net/uploads/posts/2022-03/1647279996_52-kartinkin-net-p-kartinki-zabroshki-55.jpg',
                    'https://kartinkin.net/uploads/posts/2022-03/1647280032_66-kartinkin-net-p-kartinki-zabroshki-70.jpg',
                    'http://funart.pro/uploads/posts/2021-04/1618688687_35-funart_pro-p-strashnie-mesta-krasivie-mesta-foto-35.jpg',
                ],
                tariffes: [
                    {
                        id: 33,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                    {
                        id: 32,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                    {
                        id: 33,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                ]
            }
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
        ],
        rooms: [
            {
                id: 21,
                name: 'Двухместный номер',
                photos: [
                    'https://kartinkin.net/uploads/posts/2022-03/1647279996_52-kartinkin-net-p-kartinki-zabroshki-55.jpg',
                    'https://kartinkin.net/uploads/posts/2022-03/1647280032_66-kartinkin-net-p-kartinki-zabroshki-70.jpg',
                    'http://funart.pro/uploads/posts/2021-04/1618688687_35-funart_pro-p-strashnie-mesta-krasivie-mesta-foto-35.jpg',
                ],
                tariffes: [
                    {
                        id: 31,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                    {
                        id: 32,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                    {
                        id: 33,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                ]
            },
            {
                id: 22,
                name: 'Двухместный номер',
                photos: [
                    'https://kartinkin.net/uploads/posts/2022-03/1647279996_52-kartinkin-net-p-kartinki-zabroshki-55.jpg',
                    'https://kartinkin.net/uploads/posts/2022-03/1647280032_66-kartinkin-net-p-kartinki-zabroshki-70.jpg',
                    'http://funart.pro/uploads/posts/2021-04/1618688687_35-funart_pro-p-strashnie-mesta-krasivie-mesta-foto-35.jpg',
                ],
                tariffes: [
                    {
                        id: 32,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                    {
                        id: 32,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                    {
                        id: 33,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                ]
            },
            {
                id: 23,
                name: 'Двухместный номер',
                photos: [
                    'https://kartinkin.net/uploads/posts/2022-03/1647279996_52-kartinkin-net-p-kartinki-zabroshki-55.jpg',
                    'https://kartinkin.net/uploads/posts/2022-03/1647280032_66-kartinkin-net-p-kartinki-zabroshki-70.jpg',
                    'http://funart.pro/uploads/posts/2021-04/1618688687_35-funart_pro-p-strashnie-mesta-krasivie-mesta-foto-35.jpg',
                ],
                tariffes: [
                    {
                        id: 33,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                    {
                        id: 32,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                    {
                        id: 33,
                        tags: ['Двуспальная кровать',
                            'Односпальная кровать',
                            'Питание не включено',
                            'Сейфа нет'
                        ],
                        price: 17999,
                    },
                ]
            }
        ]
    }
]

export default HotelsMock;