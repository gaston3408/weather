import React from 'react';

interface Props {
    day: string;
    icon: string;
    tempMin: string;
    tempMax: string;
    alt: string;
}

const Card: React.FC<Props> = ( { day, icon, tempMin, tempMax, alt } ) =>
{
    return (
        <div className='card-temp'>
            <p>{day}</p>
            <img className='img-card' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={alt} loading='eager'/>
            <div className='container-temp-days'>
                <p>{`min: ${tempMin}°`}</p>
                <p>{`max: ${tempMax}°`}</p>
            </div>
        </div>
    );
};

export default Card;
