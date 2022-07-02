import { useEffect, useState } from 'react';
import Citylocation from '../interfaces/Citylocation';

const useGeolocation = () =>
{
    const [ geolocation, setGeolocation ] = useState<Citylocation | null>( null );
    const [ error, setError ] = useState<boolean>( false );

    const errorLocation = () =>
    {
        setError( true );
    };

    const success = ( position: any ) =>
    {
        setGeolocation( { city: 'My location', lat: position.coords.latitude, lon: position.coords.longitude } );
    };

    useEffect( () =>
    {
        navigator.geolocation.getCurrentPosition( success, errorLocation );
    }, [] );

    return { geolocation, setGeolocation, error };

};

export default useGeolocation;
