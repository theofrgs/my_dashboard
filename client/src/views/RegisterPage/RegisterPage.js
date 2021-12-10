import React, { useState } from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";
import {registerGoogle, registerDatabase} from "../../controller/register";
import NotifAuthComponent from '../../components/Auth/NotifAuthComponent'
import StateRoute from '../../components/Auth/StateRoute'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";

import styles from "../../assets/jss/material-kit-react/views/registerPage.js";

import image from "../../assets/img/landing-bg.jpg";

const useStyles = makeStyles(styles);

export default function RegisterPage() {

    const [userNameReg, setUserNameReg] = useState("");
    const [userPasswordReg, setUserPasswordReg] = useState("");
    const [statusReg, setStatusReg] = useState("");

    const handleKeypress = (e) => {
        if (e.charCode === 13) {
            registerDatabase(userNameReg, userPasswordReg, setStatusReg);
        }
    };

    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    return (
        <div>
            <Header
                absolute
                color="transparent"
                brand="DashBoard Register page"
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                }}
            >
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                            <Card className={classes[cardAnimaton]}>
                                <form className={classes.form}>
                                    <CardHeader color="primary" className={classes.cardHeader}>
                                        <h4>Register with google</h4>
                                        <div className={classes.socialLine}>
                                            <Button
                                                justIcon
                                                href="#pablo"
                                                target="_blank"
                                                color="transparent"
                                                onClick={
                                                    (e) => e.preventDefault()
                                                }
                                            >
                                                {registerGoogle(setStatusReg)}
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <p className={classes.divider}>Or Be Classical</p>
                                    <CardBody>
                                        <CustomInput
                                            labelText="Username"
                                            id="email"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                onChange: (e) => setUserNameReg(e.target.value),
                                                type: "email",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <FaUserAlt className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Password"
                                            id="pass"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                onKeyPress: (e) => handleKeypress(e),
                                                onChange: (e) => setUserPasswordReg(e.target.value),
                                                type: "password",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <FaLock />
                                                    </InputAdornment>
                                                ),
                                                autoComplete: "off",
                                            }}
                                        />
                                    </CardBody>
                                    <CardFooter className={classes.cardFooter}>
                                        <Button simple color="primary" size="lg" onClick={() => registerDatabase(userNameReg, userPasswordReg, setStatusReg)}>
                                            Register
                                        </Button>
                                    </CardFooter>
                                    {NotifAuthComponent(statusReg)}
                                    {StateRoute(statusReg, "User register", "/login")}
                                </form>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
                <Footer whiteFont />
            </div>
        </div>
    );
}