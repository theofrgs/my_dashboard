import Axios from 'axios';
import { FaGoogle } from "react-icons/fa";
import { GoogleLogin } from 'react-google-login';
import { env } from "../../config.js"

const RegisterGoogle = (setStatusReg) => {

    const handleResponseGoogle = (response) => {
        if (response.error) {
            setStatusReg(response.error);
        } else {
            Axios.post("http://localhost:8080/google/register", {
                username: response.profileObj.email,
                userid: response.profileObj.googleId
            }).then((response) => {
                if (response.data)
                    setStatusReg(response.data);
            })
        }
    }

    return (
        <>
            <GoogleLogin
                clientId={env.GOOGLE_CLIENT_ID}
                render={renderProps => (
                    <FaGoogle onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        Register
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

export default RegisterGoogle;