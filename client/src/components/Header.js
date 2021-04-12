import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { userState } from '../recoil/atoms';
import { useSetRecoilState } from 'recoil';


const Header = (props) => {
    const setUser = useSetRecoilState(userState);
    const [logout, setLogout] = useState(false)

    const handleLogOut = (event) => {
        event.preventDefault()
        localStorage.clear('uid');
        setUser(null);
        setLogout(true);
    }

    if (logout) {
        return (
            <Redirect to='/' />
        )
    } else {
        return (
            <header>
                <nav>
                    <Link to={`/user/profile`}>Profile</Link>
                    <button onClick = {handleLogOut}>Log Out</button>
                </nav>
            </header>
        );
    }
    
}

export default Header;
