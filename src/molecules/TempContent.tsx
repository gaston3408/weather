import React from 'react';

interface Props {
    temp: string,
    feel: string,
    humidity: string,
    windSpeed: string,
    icon: string
}

const TempContent: React.FC<Props> = ( { temp, feel, humidity, windSpeed, icon } ) =>
{
    return (
        <section className='temp-section'>
            <div className='temp-main'>
                <img src={`http://openweathermap.org/img/w/${icon}.png`} width={150} alt='logo'/>
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
