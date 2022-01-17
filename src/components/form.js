import React, {useState} from 'react';

const Form = ({getFilter}) => {
    let [form, setForm] = useState({name: "", username: "", email: ""});

    const formHandler = (ev) => {
        const eventData = {...form, [ev.target.name]: ev.target.value}
        setForm({...form, ...eventData})
        getFilter(eventData)
    }
    return (
        <div>
            <form>
                <label>Name: <input type="text" name={"name"} value={form.name} onChange={formHandler}/> </label>
                <label>Username: <input type="text" name={"username"} value={form.username} onChange={formHandler}/> </label>
                <label>Email: <input type="text" name={"email"} value={form.email} onChange={formHandler}/> </label>
            </form>
        </div>
    );
};

export default Form;