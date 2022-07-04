import React from 'react';

interface Props {
    temp: string,
    feel: string,
    humidity: string,
    windSpeed: string,
    icon: string,
    alt: string
}

const TempContent: React.FC<Props> = ( { temp, feel, humidity, windSpeed, icon, alt } ) =>
{
    return (
        <section className='temp-section'>
            <div className='temp-main'>
                <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} width={150} alt={alt}/>
                <p className='temp'>{`${temp}°`}</p>
            </div>
            <div className='temp-details'>
                <p className='description'>{`+ Real feel: ${feel}°`}</p>
                <p className='description'>{`+ Humidity: ${humidity}%`}</p>
                <p className='description'>{`+ Wind: ${windSpeed} km/h`}</p>
            </div>
        </section>
    );
};

export default TempContent;
