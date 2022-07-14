import { useEffect, useState } from 'react';
import config from './config';
import { cities } from './data/cities';
import useGeolocation from './hooks/useGeolocation';
import { useWeatherFetch } from './hooks/useWeatherFetch';
import CityList from './interfaces/CityList';
import AppLayout from './layouts/AppLayout';
import Error from './atoms/Error';
import Loader from './atoms/Loader';
import DaysTemperatures from './organisms/DaysTemperatures';
import Header from './organisms/Header';
import Nav from './organisms/Nav';
import { ArrowClockwise } from 'react-bootstrap-icons';
import Map from './organisms/Map';
import './styles/App.css';

const { routes } = config;

const App = () =>
{
    const [ cityList, setCityList ] = useState<CityList>( { list: cities, selected: 0 } );
    const { loading, error, data, getData } = useWeatherFetch();
    const { loading: loadingForecast, error: errorForecast, data: dataForecast, getData: getDataForecast } = useWeatherFetch();
    const { geolocation, setGeolocation, error: errorGeolocation, get: getGeolocation } = useGeolocation();

    const onClick = ( index: any ) =>
    {
        setCityList( { ...cityList, selected: index } );
        setGeolocation( cityList.list[index] );
    };

    useEffect( () =>
    {
        if ( geolocation )
        {
            getData( `${routes.current}?units=metric&lat=${geolocation.lat}&lon=${geolocation.lon}` );
            getDataForecast( `${routes.forecast}?units=metric&lat=${geolocation.lat}&lon=${geolocation.lon}` );

            if ( !cityList.list.find( c => c.city === geolocation.city ) )
            {
                setCityList( {
                    list: [ geolocation, ...cityList.list ],
                    selected: 0
                } );
            }
        }
    }, [ geolocation ] );

    useEffect( () =>
    {
        if ( errorGeolocation )
        {
            setGeolocation( cities[0] );
        }
    }, [ errorGeolocation ] );

    const onRefresh = () =>
    {
        getGeolocation();
    };

    return (
        <AppLayout>
            {
                errorGeolocation &&
                <ArrowClockwise
                    className='arrow-clockwise'
                    size={25}
                    title='Active browser ubication and refresh your location'
                    onClick={onRefresh}
                />
            }
            <Nav
                cityList={cityList}
                onClick={onClick}
            />
            {
                ( loading || loadingForecast ) && <Loader/>
            }
            {
                ( error || errorForecast ) && <Error error={error}/>
            }
            {
                data &&
                    <Header data={data}/>
            }
            {
                dataForecast &&
                    <DaysTemperatures data={dataForecast.list}/>
            }
            {
                data && dataForecast && geolocation &&
                    <Map
                        lat={geolocation.lat}
                        lng={geolocation.lon}
                        width='100%'
                        height='400px'
                    />
            }
        </AppLayout>
    );
};

export default App;
