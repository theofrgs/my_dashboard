import Axios from 'axios';
import { FaGoogle } from "react-icons/fa";
import { GoogleLogin } from 'react-google-login';
import { env } from "../../config.js"
import Cookies from 'js-cookie'

const LoginButton = (setStatusLog) => {

    const handleResponseGoogle = (response) => {
        if (response.error) {
            setStatusLog(response.error);
        } else {
            Axios.post("http://localhost:8080/google/login", {
                username: response.profileObj.email,
                userid: response.profileObj.googleId
            }).then((response) => {
                if (response.data)
                    setStatusLog(response.data);
                if (response.data === "User logged") {
                    // localStorage.setItem('user', JSON.stringify(response.data));
                    Cookies.set('user', JSON.stringify(response.data));
                }
            })
        }
    }

    return (
        <>
            <GoogleLogin
                clientId={env.GOOGLE_CLIENT_ID}
                render={renderProps => (
                    <FaGoogle onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        Log In
                    </FaGoogle>
                )}
                buttonText="Login"
                onSuccess={handleResponseGoogle}
                onFailure={handleResponseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </>
    );
};

export default LoginButton;