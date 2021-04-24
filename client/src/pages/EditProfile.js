import React, {useState, useEffect} from 'react';
import { userState } from '../recoil/atoms';
import { Redirect } from 'react-router-dom';
import {useRecoilValue, useSetRecoilState } from 'recoil';

import AuthModel from '../models/auth';
import useLogout from '../hooks/useLogout';

// Bootstrap + CSS
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditProfile = (props) => {
    const user = useRecoilValue(userState)
    const [shouldLogout, setShouldLogout] = useState(false);
    const [logout, setLogout] = useLogout();
    const [email, setEmail] = useState(user.email);
    const [username, setUsername] = useState(user.username);
    const [location, setLocation] = useState(user.location);
    
    const [show, setShow]  = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = async (event) => {
        event.preventDefault();
        const response = await AuthModel.deleteProfile({email});
        console.log("Successfully deleted user profile");
        setShouldLogout(true);
    }

    useEffect(
        function() {
            if (shouldLogout) {
                setLogout();
            }
        }
    )


    
    if (logout) {
        console.log(logout);
        return (
            <Redirect to='/' />
        ) 
    } else {
        return (
            <>
                <button onClick= {handleShow}> Delete Profile</button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={handleDelete}>
                        <Modal.Body>
                            Are you sure you want to delete your profile? 
                        </Modal.Body>
                        <Modal.Footer>
                            <Button id="delete-button"variant="outline-danger" type="submit">
                                Delete profile
                            </Button>
    
                        </Modal.Footer>
                    </Form>
                </Modal>
            </>
        );
    }
    
}

export default EditProfile;
