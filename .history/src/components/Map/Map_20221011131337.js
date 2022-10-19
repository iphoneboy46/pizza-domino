import React, { useState, memo } from 'react'
import { GoogleMap, StreetViewPanorama, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '1140px',
    height: '500px'
};

const center = {
    lat: 10.821794051948276, 
    lng:106.63126671345086
};

function MapGG() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })

    const [map, setMap] = useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                clickableIcons={true}
                streetView={StreetViewPanorama}
                onClick={(e)=>{
                    e.target.location = location;
                }}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </div>
    ) : <></>
}

export default memo(MapGG)