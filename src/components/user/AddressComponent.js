import React from 'react';
import GeoComponent from "./GeoComponent";

function AddressComponent(props) {
    let {street, suite, city, zipcode} = props.address;
    return (
        <div className={"container_address"}>
            <h3>A D D R E S S</h3>
            <p>street - {street}</p>
            <p>street - {suite}</p>
            <p>street - {city}</p>
            <p>street - {zipcode}</p>
            <GeoComponent geo={props.address.geo}/>
        </div>
    );
}

export default AddressComponent;