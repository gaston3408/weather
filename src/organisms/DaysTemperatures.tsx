import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import ContentDays from '../molecules/ContentDays';
import Card from '../molecules/Card';

interface Props {
    data: any;
}

const DaysTemperatures: React.FC<Props> = ( { data } ) =>
{
    const [ weatherDays, setWeatherDays ] = useState<any>( [] );
    const optionDate: any = { weekday: 'long' };

    useEffect( () =>
    {
        setWeatherDays( data.filter( (  item: any ) => item.dt_txt.includes( '12:00' ) ) );
    }, [ data ] );

    return (
        <section>
            <ContentDays
                title='Daily temperatures'
            >
                {
                    weatherDays.map( (  day: any, i: number ) => (
                        <Card
                            key={i}
                            day={new Date( day.dt_txt.replace( /-/g, '/' ) ).toLocaleDateString( 'en-US', optionDate )}
                            icon={day.weather[0].icon}
                            tempMin={day.main.temp_min}
                            tempMax={day.main.temp_max}
                            alt={day.weather[0].main}
                        />
                    ) )
                }
            </ContentDays>
        </section>
    );
};

export default DaysTemperatures;
