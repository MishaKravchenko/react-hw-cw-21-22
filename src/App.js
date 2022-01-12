import React from 'react';

import Launches from "./components/launches/launches";
import "./components/launches/launches.css"

function App() {
    return (
        <div className={"container_general"}>
          <Launches/>
        </div>
    );
}

export default App;