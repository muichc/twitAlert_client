import React, {useState} from 'react';
import { userState } from '../recoil/atoms';
import { useSetRecoilState } from 'recoil';

import AuthModel from '../models/auth';

// Bootstrap + CSS
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../static/css/landing.css';


const Landing = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const setUser = useSetRecoilState(userState)
    const [show, setShow]  = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        event.preventDefault()
        AuthModel.login({ email, password }).then((response) => {
            localStorage.setItem('uid', response.data.token)
            AuthModel.verify().then((response) => {
                console.log(response.data)
                setUser(response.data)
                props.history.push('/user/dashboard')
            })
        })
    }


    return (
        <>
            <div className="landing-button d-flex flex-column" onClick= {handleShow}>
                <p>Welcome</p>
                <p>Sign in here</p>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                            <Form.Group>
                                <Form.Label htmlFor='email'>Email</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" onChange={e => setEmail(e.target.value)} value={email}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor='password'>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" onChange={e => setPassword(e.target.value)} value={password}/>
                            </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button id="login-button"variant="outline-warning" type="submit">
                            Login
                        </Button>

                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default Landing;

