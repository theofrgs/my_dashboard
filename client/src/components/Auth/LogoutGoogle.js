import Axios from "axios"

const LogoutGoogle = (setStatusLogout) => {
    Axios.post("http://localhost:8080/google/logout", {
    }).then((response) => {
        if (response.data)
            setStatusLogout(response.data);
    })
};

export default LogoutGoogle;