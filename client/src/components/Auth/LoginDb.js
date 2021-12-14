import Axios from 'axios'
import Cookies from 'js-cookie'

const LoginDb = (name, password, setStatusLog) => {
    if (name && password) {
        Axios.post("http://localhost:8080/db/login", {
            username: name,
            userpassword: password,
        }).then((response) => {
            if (response.data.msg) {
                setStatusLog(response.data.msg);
                if (response.data.msg === "User logged") {
                    // localStorage.setItem('user', JSON.stringify(response.data.user));
                    Cookies.set('user', JSON.stringify(response.data));
                }
            }
        })
    } else {
        if (name === "")
            setStatusLog("Invalid username");
        else
            setStatusLog("Invalid password");
    }
};

export default LoginDb;