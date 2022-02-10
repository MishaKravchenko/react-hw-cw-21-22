import React from 'react';
import "./App.css"
import Form from "./components/Form/Form";
import Todos from "./components/Todos/Todos";

const App = () => {
    return (
        <div>
            <Form/>
            <Todos/>
        </div>
    );
};

export default App;