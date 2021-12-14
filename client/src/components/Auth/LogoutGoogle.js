// import Axios from "axios"
import Cookies from 'js-cookie'

const LogoutGoogle = (setStatusLogout) => {
    // Axios.post("http://localhost:8080/google/logout", {
    // }).then((response) => {
    //     if (response.data)
    //         setStatusLogout(response.data);
    // })
    // localStorage.clear();
    Cookies.remove('user');
    Cookies.remove('exchanges');
    Cookies.remove('convertCurrency');
    setStatusLogout("logout");
};

export default LogoutGoogle;