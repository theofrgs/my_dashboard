import { useEffect } from "react";
import Cookies from 'js-cookie'

function UserUseEffect(setUser, setLogged) {

    useEffect(() => {
        var user = Cookies.get('user');

        if (user !== undefined) {
            user = JSON.parse(user);
            if (user[0] !== undefined)
                setUser(user[0]);
            else
                setUser(user);
            setLogged(true);
        };
    }, [setUser, setLogged]);
}

export default UserUseEffect;