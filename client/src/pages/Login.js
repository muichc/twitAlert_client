import React, { useState } from 'react'
import AuthModel from '../models/auth'

import { userState } from '../recoil/atoms'
import { useSetRecoilState } from 'recoil'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const setUser = useSetRecoilState(userState)

    function handleSubmit(event) {
        event.preventDefault()
        AuthModel.login({ email, password }).then((response) => {
            localStorage.setItem('uid', response.data.token)
            AuthModel.verify().then((response) => {
                setUser(response.data)
                props.history.push('/user/dashboard')
            })
        })
    }

    return (
        <div>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor='email'>Email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" onChange={e => setEmail(e.target.value)} value={email}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='password'>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" onChange={e => setPassword(e.target.value)} value={password}/>
                </Form.Group>
                <Button id="login-button"variant="outline-warning" type="submit">
                    Login
                </Button>
            </Form>
            
        </div>
    )
}

export default Login;