import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import config from '../config';

const { googleMapApiKey } = config;

interface Props
{
    lat: number;
    lng: number;
    width: string;
    height: string;
}

const Map: React.FC<Props> = ( { lat, lng, width, height } ) =>
{
    return (
        <LoadScript
            googleMapsApiKey={ googleMapApiKey ?? '' }
        >
            <GoogleMap
                mapContainerStyle={{ width, height }}
                center={{ lat, lng }}
                zoom={12}
            >
                <Marker position={{ lat, lng }}/>
            </GoogleMap>
        </LoadScript>
    );
};

export default  Map;
