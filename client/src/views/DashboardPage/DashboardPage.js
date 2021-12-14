import React, { useState } from "react";
import clsx from "clsx";
import Button from "@mui/material/Button"
import { CssBaseline, ThemeProvider, createTheme } from "@material-ui/core";
import { getUserSession } from "../../controller/session.js";
import Content from "../../components/Dashboard/Content";
import DashbpardStyle from "../../assets/jss/material-kit-react/components/dashboardStyle";
import Header from "../../components/Dashboard/Header";
import "../../styles.css";
import StateRoute from "../../components/Auth/StateRoute.js";
import Logout from "../../components/Auth/Logout.js";

//VIEW
export default function DashboardPage(req, res) {
    const classes = DashbpardStyle();
    const [open] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState("");
    const [status, setStatus] = useState("");

    const theme = createTheme({
        palette: {
            type: darkMode ? "light" : "dark"
        }
    });

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    getUserSession(setUser, setLogged);

    if (!logged) {
        return (
            <ThemeProvider theme={theme}>
                <div className={classes.root} class="center">
                    <center>
                        <CssBaseline />
                        <div>
                            <h3>
                                Not logged in go back to the login Page
                            </h3>
                            <Button variant="contained" onClick={() => {
                                Logout(setStatus);
                            }}>
                                Back to login Page
                            </Button>
                            {StateRoute(status, "logout", "/login")}
                        </div>
                    </center>
                </div>
            </ThemeProvider>
        );
    }

    return (
        logged && (
            <ThemeProvider theme={theme}>
                <div className={classes.root}>
                    <CssBaseline />
                    <Header
                        user={user}
                        toggleDarkMode={toggleDarkMode}
                        darkMode={darkMode}
                    />
                    <main
                        className={clsx(classes.content, {
                            [classes.contentShift]: open
                        })}
                    >
                        <div className={classes.drawerHeader} />
                        <Content />
                    </main>
                </div>
            </ThemeProvider>
        )
    );
}