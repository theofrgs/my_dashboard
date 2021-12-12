import { useEffect } from "react";

function UserEffect(setStatusLog) {

    useEffect(() => {
        if (localStorage.getItem('user') !== null)
            setStatusLog("User logged");
    }, [setStatusLog]);
}

export default UserEffect;