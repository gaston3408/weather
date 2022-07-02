import { useEffect, useState } from 'react';
import config from '../config';

const { urlApi, apiKey } = config;

export const useWeatherFetch = ( path: string ) =>
{
    const [ loading, setLoading ] = useState<boolean>( false );
    const [ error, setError ] = useState<boolean>( false );
    const [ data, setData ] = useState<any>( null );

    const getData = async () =>
    {
        setLoading( true );
        try
        {
            const url = `${urlApi}${path}&appid=${apiKey}`;
            const res = await fetch( url );
            const data = await res.json();
            if ( data.cod == 200 )
            {
                setData( data );
            }
            else
            {
                setError( data.message );
            }

        }
        catch ( e: any )
        {
            setError( e.message );
        }
        finally
        {
            setLoading( false );
        }
    };

    useEffect( () =>
    {
        getData();
    }, [] );

    return { loading, error, data };

};
