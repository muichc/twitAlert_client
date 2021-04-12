import React, { useState } from 'react'
import AuthModel from '../models/auth'

import Button from 'react-bootstrap/Button';

function Register(props) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [location, setLocation] = useState('')
    const [error, setError] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        AuthModel.register({ username, email, password, location }).then((response) => {
            if (response.ok) {
                props.history.push('/login')
            } else {
                setError('Something went wrong, please try again');
                console.log(response)
                props.history.push('/register')
            }
        })
    }

    return (
        <div>
            <h2>Sign up for an account!</h2>
            <p>{error ? `${error}` :  ''}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        name='username'
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='text'
                        name='email'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <div>
                    <label htmlFor='location'>Location</label>
                    <input
                        type='text'
                        name='location'
                        onChange={e => setLocation(parseInt(e.target.value))}
                        value={location}
                    />
                </div>

                <Button variant='outline-warning' type='submit'>Register</Button>
            </form>
        </div>
    )
}

export default Register;