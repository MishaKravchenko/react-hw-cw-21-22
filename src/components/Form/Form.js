import React, {useRef} from 'react';
import css from "./Form.module.css"

const Form = ({dispatch}) => {

    const form = (e) => {
        e.preventDefault();
        e.target.reset();
    }

    const catInput = useRef();
    const dogInput = useRef();

    const saveCat = () => {
        dispatch({type: "ADD_CAT", payload: {cat: catInput.current.value}})
    }

    const saveDog = () => {
        dispatch({type: "ADD_DOG", payload: {dog: dogInput.current.value}})
    }
    console.log(catInput.current)
    return (

        <form className={css.form} onSubmit={form}>
            <input type="text" placeholder={"cat"} ref={catInput}/>
            <button onClick={saveCat}>Save</button>

            <input type="text" placeholder={"dog"} ref={dogInput}/>
            <button onClick={saveDog}>Save</button>
        </form>
    );
};

export default Form;