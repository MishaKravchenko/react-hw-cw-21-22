import "./App.css"

import Form from "./components/form/Form";
import Cars from "./components/cars/Cars";
import React, {useState} from 'react';

const App = () => {

    const [trigger, setTrigger] = useState(null);

    const update = (data) =>{
        setTrigger(data);
    }

    return (
        <div>
            <Form update={update}/>
            <Cars trigger={trigger}/>
        </div>
    );
};

export default App;