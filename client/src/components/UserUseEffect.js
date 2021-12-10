import Axios from 'axios';
import { useEffect } from "react";

function UserUseEffect(setUser, setLogged) {

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get("http://localhost:8080/db/login").then((response) => {
            if (response && response.data.loggedIn === true) {
                if (response.data.user[0] !== undefined)
                    setUser(response.data.user[0]);
                else
                    setUser(response.data.user);
                setLogged(true);
            }
        });
    }, [setUser, setLogged]);
}

export default UserUseEffect;