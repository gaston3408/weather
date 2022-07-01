import React from 'react';
import '../styles/Header.css';

const Header = () =>
{
    return (
        <header className="App-header">
            <section>
                <p className='date'>Friday, 31 June 2022</p>
                <h1>London</h1>
                <p className='weather'>Clear</p>
            </section>
            <section className='temp-section'>
                <img src='http://openweathermap.org/img/w/04n.png' width={120} alt='logo'/>
                <p className='temp'>20°</p>
                <div>
                    <p className='description'>+ Real feel: 25°</p>
                    <p className='description'>+ Humidity: 70%</p>
                    <p className='description'>+ Wind: 6 km/h</p>
                </div>
            </section>
            <section></section>
        </header>
    );
};

export default Header;
