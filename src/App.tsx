import { useState } from 'react';
import Header from './Organisms/Header';
import config from './config';
import { useWeatherFetch } from './hooks/useWeatherFetch';
import './styles/App.css';

const { routes } = config;

const App = () =>
{
    const [ city, setCity ] = useState( 'Buenos Aires' );
    const { loading, error, data } = useWeatherFetch( `${routes.current}?units=metric&q=${city}` );

    return (
        <div className="App">
            <div className='content'>
                <nav></nav>
                {
                    loading && <p>Loading</p>
                }
                {
                    error && <p>Error</p>
                }
                {
                    data &&
                    <Header data={data}/>
                }
                <section></section>
            </div>
        </div>
    );
};

export default App;
