import React from 'react';
import { Redirect } from 'react-router-dom';
import useLogout from '../hooks/useLogout';

// Bootstrap + CSS
import Button from 'react-bootstrap/Button';



const Logout = () => {
    const [logout, setLogout] = useLogout();

    const handleLogOut = (event) => {
        event.preventDefault()
        setLogout();
    }

    if (logout) {
        return (
            <Redirect to='/' />
        )
    } else {
        return (
            <header>
                <Button onClick = {handleLogOut} variant="outline-warning" className="logout-button">Log Out</Button>
            </header>
            
        );
    }
    
}

export default Logout;
