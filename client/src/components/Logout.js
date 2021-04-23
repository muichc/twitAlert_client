import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import { userState } from '../recoil/atoms';
import { useSetRecoilState } from 'recoil';
import useLogout from '../hooks/useLogout';

// Bootstrap + CSS
import Button from 'react-bootstrap/Button';



const Logout = (props) => {
    const setUser = useSetRecoilState(userState);
    const [logout, setLogout] = useLogout();
    // const [logout, setLogout] = useState(false);

    const handleLogOut = (event) => {
        event.preventDefault()
        // localStorage.clear('uid');
        // setUser(null);
        // setLogout(true);
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
