import React from 'react';
import '../styles/Header.css';
import ContentDays from '../molecules/ContentDays';

interface Props {
    data: any;
}

const DaysTemperatures: React.FC<Props> = ( { data } ) =>
{
    return (
        <section>
            <ContentDays
                title='Daily temperatures'
            >
                <div className='content-cards'>
                    <div className='card-temp'>
                        <p>Friday</p>
                        <img src='http://openweathermap.org/img/w/04n.png' alt='weather'/>
                        <p>20°</p>
                    </div>
                    <div className='card-temp'>
                        <p>Friday</p>
                        <img src='http://openweathermap.org/img/w/04n.png' alt='weather'/>
                        <p>20°</p>
                    </div>
                    <div className='card-temp'>
                        <p>Friday</p>
                        <img src='http://openweathermap.org/img/w/04n.png' alt='weather'/>
                        <p>20°</p>
                    </div>
                    <div className='card-temp'>
                        <p>Friday</p>
                        <img src='http://openweathermap.org/img/w/04n.png' alt='weather'/>
                        <p>20°</p>
                    </div>
                    <div className='card-temp'>
                        <p>Friday</p>
                        <img src='http://openweathermap.org/img/w/04n.png' alt='weather'/>
                        <p>20°</p>
                    </div>
                </div>
            </ContentDays>
        </section>
    );
};

export default DaysTemperatures;
