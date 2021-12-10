import Axios from 'axios'
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaGoogle } from "react-icons/fa";

const RegisterGoogle = (setStatusReg) => {
    const { loginWithPopup, isAuthenticated, user } = useAuth0();
    return (
        <FaGoogle onClick={() => {
            loginWithPopup();

            if (isAuthenticated) {
                Axios.post("http://localhost:8080/google/register", {
                    username: user.email,
                    userid: user.sub,
                }).then((response) => {
                    if (response.data)
                        setStatusReg(response.data);
                })
            } else {
                setStatusReg("Error with google");
            }
        }}>
            Log In
        </FaGoogle>
    );
};
export default RegisterGoogle;