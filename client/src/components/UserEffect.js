import { useEffect } from "react";
import Cookies from 'js-cookie'

function UserEffect(setStatusLog) {

    useEffect(() => {
        if (Cookies.get('user') !== undefined)
            setStatusLog("User logged");
    }, [setStatusLog]);
}

export default UserEffect;