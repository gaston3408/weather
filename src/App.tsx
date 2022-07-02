import { useEffect, useState } from 'react';
import Header from './Organisms/Header';
import config from './config';
import { useWeatherFetch } from './hooks/useWeatherFetch';
import './styles/App.css';
import DaysTemperatures from './Organisms/DaysTemperatures';
import useGeolocation from './hooks/useGeolocation';
import { cities } from './data/cities';
import Citylocation from './interfaces/Citylocation';

const { routes } = config;

interface CityList
{
    list: Citylocation[],
    selected: number
}

const App = () =>
{
    const [ cityList, setCityList ] = useState<CityList>( { list: cities, selected: 0 } );
    const { loading, error, data, getData } = useWeatherFetch();
    const { loading: loadingForecast, error: errorForecast, data: dataForecast, getData: getDataForecast } = useWeatherFetch();
    const { geolocation, setGeolocation, error: errorGeolocation } = useGeolocation();

    useEffect( () =>
    {
        if ( geolocation )
        {
            getData( `${routes.current}?units=metric&lat=${geolocation.lat}&lon=${geolocation.lon}` );
            getDataForecast( `${routes.forecast}?units=metric&lat=${geolocation.lat}&lon=${geolocation.lon}` );
            setCityList( {
                ...cityList,
                list: [ ...cityList.list, geolocation ]
            } );
        }
    }, [ geolocation ] );

    useEffect( () =>
    {
        if ( errorGeolocation )
        {
            setGeolocation( cities[0] );
        }
    }, [ errorGeolocation, cityList.selected ] );


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
