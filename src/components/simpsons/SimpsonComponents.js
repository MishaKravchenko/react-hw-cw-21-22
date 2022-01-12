import React, {Component} from 'react';
import "./simpson.css"

class SimpsonComponents extends Component {
    render() {
        // let item = this.props.item
        // console.log(item);

        let {item} = this.props;

        return (<div>
            <h2>{item.name} - {item.surname}</h2>
            <h3>{item.age}</h3>
            <p>{item.info}</p> <img src={item.photo} alt="photo"/> </div>);
    }
}

export default SimpsonComponents;