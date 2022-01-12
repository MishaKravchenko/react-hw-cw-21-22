import React, {useEffect, useState} from 'react';

import "./launches.css"

function Launches() {

    let [launches, setLaunches] = useState([]);

    useEffect(()=>{

        fetch("https://api.spacexdata.com/v3/launches/")
            .then(value => value.json())
            .then(flights => {
                flights.filter(flight => flight.launch_year !=="2020")
                setLaunches(flights);
            });
    },[]);

    return (
        <div className={"container_launches"}>
            {
                launches.map(launch =>
                    <div className={"launch"} key={launch.flight_number}>
                        {launch.mission_name} - - {launch.launch_year}
                        <img src={launch.links.mission_patch} alt="mission_patch"/>
                </div>)
            }
        </div>
    );
}

export default Launches;