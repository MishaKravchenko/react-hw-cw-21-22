import React from 'react';

function GeoComponent(props) {
    let {lat, lng} = props.geo;
    return (
        <div className={"container_geo"}>
            <h3>G E O</h3>
            <p>lat - {lat}</p>
            <p>lng - {lng}</p>
        </div>
    );
}

export default GeoComponent;