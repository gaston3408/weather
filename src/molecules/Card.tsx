import React from 'react';

interface Props {
    day: string;
    icon: string;
    tempMin: string;
    tempMax: string;
}

const Card: React.FC<Props> = ( { day, icon, tempMin, tempMax } ) =>
{
    return (
        <div className='card-temp'>
            <p>{day.split( ',' )[0]}</p>
            <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt='weather'/>
            <div className='container-temp-days'>
                <p>{`min: ${tempMin}°`}</p>
                <p>{`max: ${tempMax}°`}</p>
            </div>
        </div>
    );
};

export default Card;
