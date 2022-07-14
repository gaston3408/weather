import React from 'react';

interface Props {
    city: string,
    weather: string
}

const NameContent: React.FC<Props> = ( { city, weather } ) =>
{
    const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <section>
            <p className='date'>{new Date().toLocaleDateString( 'en-US', options )}</p>
            <h1>{city}</h1>
            <p className='weather'>{weather}</p>
        </section>
    );
};

export default NameContent;
