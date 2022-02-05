import React from 'react';

const Car = ({car: {id, model, price, year}}) => {

const deleteById = (id) =>{
    console.log(`kuku yopta ${id}`)
}

    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={deleteById}>Delete</button>
        </div>
    );
};

export default Car;