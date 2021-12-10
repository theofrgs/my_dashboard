import Axios from 'axios';
import { useEffect } from "react";

function UserEffect(setStatusLog) {

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get("http://localhost:8080/db/login").then((response) => {
            if (response && response.data.loggedIn === true) {
                setStatusLog("User logged");
            }
        });
    }, [setStatusLog]);
}

export default UserEffect;