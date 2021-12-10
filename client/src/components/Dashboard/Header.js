import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import LogoutPopup from "./LogoutPopup.js"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        [theme.breakpoints.up("sm")]: {
            zIndex: theme.zIndex.drawer + 1
        }
    },
    rightIcons: {
        marginLeft: theme.spacing(0.5)
    },
    spacer: {
        flexGrow: 1
    }
}));

//VIEW
export default function Header({
    user,
    toggleDarkMode,
    darkMode
}) {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appbar}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Dashboard
                </Typography>
                <div className={classes.spacer} />
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDarkMode}
                    edge="start"
                    className={classes.rightIcons}
                >
                    {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
                {LogoutPopup(user)}
            </Toolbar>
        </AppBar>
    );
}