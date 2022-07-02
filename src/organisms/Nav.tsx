import React from 'react';
import Button from '../atoms/Button';
import CityList from '../interfaces/CityList';

interface Props
{
    cityList: CityList,
    onClick: any
}

const Nav: React.FC<Props> = ( { cityList, onClick } ) =>
{
    return (
        <nav>
            {
                cityList.list.map( ( c, i: any ) => (
                    <Button
                        className='button-main'
                        disabled={i === cityList.selected}
                        key={c.city}
                        title={c.city}
                        onClick={() => onClick( i )}
                    />
                ) )
            }
        </nav>
    );
};

export default Nav;
