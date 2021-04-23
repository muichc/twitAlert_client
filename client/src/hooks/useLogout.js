import {useState, useEffect} from 'react';
import { userState } from '../recoil/atoms';
import { useSetRecoilState } from 'recoil';
import { Redirect } from 'react-router-dom';

const useLogout = () => {
    const [logout, setLogout] = useState(false);
    const setUser = useSetRecoilState(userState);
    console.log("in uselogout hook", logout)

    const handleLogOut = () => {
        localStorage.clear('uid');
        setUser(null);
        setLogout(true);
    }

    useEffect(
        function() {
            if (logout) {
                handleLogOut();
            }
        }, [logout]
    )
    if (logout) {
        return <Redirect to='/' />
    } else {
        return [logout, handleLogOut];
    }
    
}

export default useLogout;
