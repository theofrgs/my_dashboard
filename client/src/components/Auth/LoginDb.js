import Axios from 'axios'

const LoginDb = (name, password, setStatusLog) => {
    if (name && password) {
        Axios.post("http://localhost:8080/db/login", {
            username: name,
            userpassword: password,
        }).then((response) => {
            if (response.data)
                setStatusLog(response.data);
        })
    } else {
        if (name === "")
            setStatusLog("Invalid username");
        else
            setStatusLog("Invalid password");
    }
};

export default LoginDb;