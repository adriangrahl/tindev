import React, { useState } from 'react';
import './Login.css';

import api from '../services/api';

import logo from '../assets/logo.svg';

export default function Login({ history }) {
    const [username, setUsername] = useState();

    async function handleSubmit(e) {
        e.preventDefault();

        console.log(username);
        const response = await api.post('/devs', {
            username,
        });

        const { _id } = response.data;

        history.push(`/dev/${_id}`,);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev"/>
                <input 
                    placeholder="Type your Github user name" 
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}