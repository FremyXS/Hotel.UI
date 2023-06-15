import react, { ChangeEvent, useState } from 'react';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { SearchDataType } from '../../types';

import './SearchPage.scss';
import { useNavigate } from 'react-router-dom';

function SearchPage() {
    const navigate = useNavigate();
    const [data, setData] = useState<SearchDataType>({
        direction: "",
        checkIn: "",
        checkOut: "",
        guests: 2
    })

    function onChangeData(event: ChangeEvent<HTMLInputElement>) {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className='search-page'>
            <div className='search-page-window'>
                <div className='search-page-window__title'>Поиск отелей</div>
                <Input
                    labelName='Направление'
                    type="text"
                    value={data.direction!!}
                    name='direction'
                    onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeData(event)} />
                <Input
                    labelName='Заезд'
                    type="date"
                    value={data.checkIn!!}
                    name='checkIn'
                    onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeData(event)} />
                <Input
                    labelName='Выезд'
                    type="date"
                    value={data.checkOut!!}
                    name='checkOut'
                    onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeData(event)} />
                <Input
                    labelName='Гости'
                    type="number"
                    value={data.guests!!.toString()} 
                    name='guests'
                    onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeData(event)}/>
                {/* <SwitchGuests
                    labelName='Гости' data={data.guests} /> */}
                <Button type='button'
                onClick={() => navigate(`hotels-list?direction=${data.direction}&checkIn=${data.checkIn}&checkOut=${data.checkOut}&guests=${data.guests}`)} 
                >Найти</Button>
            </div>
        </div>
    );
}

export default SearchPage;