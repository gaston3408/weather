import { useState } from 'react';
import Header from './Components/Header';
import config from './config';
import { useWeatherFetch } from './hooks/useWeatherFetch';
import './styles/App.css';

const { routes } = config;

const App = () =>
{
    const [ city, setCity ] = useState( 'Buenos Aires' );
    const { loading, error, data, getData: reloadCurrentData } = useWeatherFetch( `${routes.current}?q=${city}` );
    console.log( '🚀 ~ file: App.tsx ~ line 13 ~ data', data );


    return (
        <div className="App">
            <div className='content'>
                <nav></nav>
                <Header/>
                <section></section>
            </div>
        </div>
    );
};

export default App;
