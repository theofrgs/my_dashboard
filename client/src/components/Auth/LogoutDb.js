import Axios from "axios"

const LogoutDb = (setStatusLogout) => {
    Axios.post("http://localhost:8080/db/logout", {
    }).then((response) => {;
        if (response.data)
            setStatusLogout(response.data);
    })
};

export default LogoutDb;