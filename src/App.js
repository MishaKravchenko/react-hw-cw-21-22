import React from 'react';
import "./App.css"

import Form from "./components/form/form";
import Cars from "./components/cars/cars";

const App = () => {
    return (
        <div>
            <Form/>
            <Cars/>
        </div>
    );
};

export default App;