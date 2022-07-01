import React from 'react';

interface Props {
    temp: string,
    feel: string,
    humidity: string,
    windSpeed: string
}

const TempContent: React.FC<Props> = ( { temp, feel, humidity, windSpeed } ) =>
{
    return (
        <section className='temp-section'>
            <img src='http://openweathermap.org/img/w/04n.png' width={120} alt='logo'/>
            <p className='temp'>{`${temp}°`}</p>
            <div>
                <p className='description'>{`+ Real feel: ${feel}°`}</p>
                <p className='description'>{`+ Humidity: ${humidity}%`}</p>
                <p className='description'>{`+ Wind: ${windSpeed} km/h`}</p>
            </div>
        </section>
    );
};

export default TempContent;
