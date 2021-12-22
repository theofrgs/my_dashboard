import * as React from 'react';
import Alert from '@mui/material/Alert';

const NotifAuthComponent = (notif) => {
    if (notif === "")
        return (null);
    var severity = "success";
    if (notif === "Invalid username" || notif === "Invalid password" || notif === "User already exist" || notif === "Wrong username or password !" || notif === "Account with this google account already exit" || notif === "An account with goodle email as id already exist" || notif === "User not found" || notif === "popup_closed_by_user" || notif === "idpiframe_initialization_failed" || notif === "Error with spotify authentification")
        severity = "warning";
    return (
        <Alert variant="filled" severity={severity}>
            {notif}
        </Alert>
    );
};

export default NotifAuthComponent;