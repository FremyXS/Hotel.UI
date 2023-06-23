import react, { ChangeEvent, useState } from 'react';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { SearchType } from '../../types';
import { Link, useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../halpers/useTypedSelector';
import { useActions } from '../../halpers/useActions';

import './SearchPage.scss';

function SearchPage() {
    const { search } = useTypedSelector(state => state);
    const { setTodoPage } = useActions();

    const navigate = useNavigate();
    const [data, setData] = useState<SearchType>({
        direction: search.direction,
        checkIn: search.checkIn,
        checkOut: search.checkOut,
    })

    function onChangeData(event: ChangeEvent<HTMLInputElement>) {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    function onNavigateToHostelsListPage() {
        // setTodoPage({ ...search, ...data});
        navigate(`hotels-list/${data.direction}`)
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
                <Button type='button'
                    onClick={() => onNavigateToHostelsListPage()}
                >Найти</Button>
                <Link className='search-page-window__link' to='/booking-history'>
                    Или посмотреть историю?
                </Link>
            </div>
        </div>
    );
}

export default SearchPage;