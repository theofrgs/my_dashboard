import Axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import { FaGoogle } from "react-icons/fa";


const LoginButton = (setStatusLog) => {
    const { user, loginWithPopup } = useAuth0();
    const Login = () => {
        loginWithPopup();
        Axios.post("http://localhost:8080/google/login", {
            username: user.email,
            userid: user.sub
        }).then((response) => {
            if (response.data)
                setStatusLog(response.data);
        })
    }
    return (
        <FaGoogle onClick={() => Login()}>
            Log In
        </FaGoogle>
    )
};

export default LoginButton;