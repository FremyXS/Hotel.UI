import react from 'react';

import './SearchPage.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

function SearchPage() {
    return (
        <div className='search-page'>
            <div className='search-page-window'>
                <div className='search-page-window__title'>Поиск отелей</div>
                <Input labelName='Направление' type="text" value='fdsfds'/>
                <Input labelName='Заезд' type="date" value='fdsfds'/>
                <Input labelName='Выезд' type="date" value='fdsfds'/>
                <Input labelName='Гости' type="number" value='fdsfds'/>
                <Button type='button'>Найти</Button>
            </div>
        </div>
    )
}

export default SearchPage;