import React, {Component} from 'react';
import {simpsons} from "./database/simpsonsDB";
import SimpsonComponents from "./components/simpsons/SimpsonComponents";

class App extends Component {
  render() {
    return (
        <div>
          {
            simpsons.map((simpson, index ) =>(<SimpsonComponents item={simpson} key={index}/>))
          }
        </div>
    );
  }
}

export default App;