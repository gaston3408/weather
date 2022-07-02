import { useState } from 'react';
import Header from './Organisms/Header';
import config from './config';
import { useWeatherFetch } from './hooks/useWeatherFetch';
import './styles/App.css';
import DaysTemperatures from './Organisms/DaysTemperatures';

const { routes } = config;

const App = () =>
{
    const [ city, setCity ] = useState( 'Buenos Aires' );
    const { loading, error, data } = useWeatherFetch( `${routes.current}?units=metric&q=${city}` );
    const { loading: loadingForecast, error: errorForecast, data: dataForecast } = useWeatherFetch( `${routes.forecast}?units=metric&q=${city}` );

    return (
        // TODO: add layout.
        <div className="App">
            <div className='content'>
                <img className='image-bg' src='BG-MAIN.jpg' alt='background'/>
                <div className='shadow'/>
                <nav></nav>
                {
                    ( loading || loadingForecast ) && <p>Loading</p>
                }
                {
                    ( error || errorForecast ) && <p>Error</p>
                }
                {
                    data &&
                    <Header data={data}/>
                }
                {
                    dataForecast &&
                    <DaysTemperatures data={dataForecast.list}/>
                }
            </div>
        </div>
    );
};

export default App;
