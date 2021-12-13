// import Axios from 'axios';
import { FaGoogle } from "react-icons/fa";
import { GoogleLogin } from 'react-google-login';
import { env } from "../../config.js"


const LoginButton = (setStatusLog) => {
    // const { user, loginWithPopup } = useAuth0();
    // const Login = () => {
    //     loginWithPopup();
    //     Axios.post("http://localhost:8080/google/login", {
    //         username: user.email,
    //         userid: user.sub
    //     }).then((response) => {
    //         if (response.data)
    //             setStatusLog(response.data);
    //     })
    // }
    // return (
    //     <FaGoogle onClick={() => Login()}>
    //         Log In
    //     </FaGoogle>
    // )

    const responseGoogle = (response) => {
        console.log(response);
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
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </>
    );
};

export default LoginButton;