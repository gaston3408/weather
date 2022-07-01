import React from 'react';
import NameContent from '../molecules/NameContent';
import '../styles/Header.css';
import TempContent from '../molecules/TempContent';

interface Props {
    data: any;
}

const Header: React.FC<Props> = ( { data } ) =>
{
    return (
        <header className="App-header">
            <NameContent
                weather={data.weather.main}
                city={data.name}
            />
            <TempContent
                temp={data.main.temp}
                feel={data.main.feels_like}
                humidity={data.main.humidity}
                windSpeed={data.wind.speed}
            />
        </header>
    );
};

export default Header;
