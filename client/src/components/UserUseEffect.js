import { useEffect } from "react";

function UserUseEffect(setUser, setLogged) {

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user !== null) {
            if (user[0] !== undefined)
                setUser(user[0]);
            else
                setUser(user);
            setLogged(true);
        };
    }, [setUser, setLogged]);
}

export default UserUseEffect;