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
    const setUser = useSetRecoilState(userState);
    const [shouldLogout, setShouldLogout] = useState(false);
    const [logout, setLogout] = useLogout();
    // const [logout, setLogout] = useState(false);
    const [email, setEmail] = useState(user.email);
    const [show, setShow]  = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = async (event) => {
        event.preventDefault();
        const response = await AuthModel.deleteProfile({email});
        console.log(response);
        console.log("deleted user profile");
        // setShouldLogout(true);
        // console.log("is shouldlogout true yet", shouldLogout);
        setLogout();
    }

    // const handleLogOut = () => {
    //     console.log("shouldlogout in handlelogout", shouldLogout);
    //     localStorage.clear('uid');
    //     setUser(null);
    //     setLogout(true);
    //     console.log("is logout true yet", logout);
    // }

    // useEffect(
    //     function() {
    //         if (shouldLogout) {
    //             handleLogOut();
    //         }
    //     }
    // )


    
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
