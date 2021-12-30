import React, { useState } from 'react';
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/Save";
import AddList from "./AddList";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Logout from "../Auth/Logout";
import StateRoute from "../Auth/StateRoute";
import { FaUserTimes } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
        width: "100%",
        display: "flex",
        justifyContent: "flex-end"
    }
}));

//VIEW
export default function TopBar({
    onLayoutSave,
    onAddItem,
    WidgetNames,
    toggleDarkMode,
    darkMode,
}) {
    const [statusLogout, setStatusLogout] = useState(false);

    const classes = useStyles();

    return (
        <>
            <Card className={classes.root}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDarkMode}
                    edge="start"
                    className={classes.rightIcons}
                >
                    {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
                <IconButton onClick={() => Logout(setStatusLogout)}>
                    <FaUserTimes />
                </IconButton>
                {StateRoute(statusLogout, "logout", "/login")}
                <AddList
                    onAddItem={onAddItem}
                    WidgetNames={WidgetNames}
                />
                <IconButton aria-label="save" onClick={onLayoutSave}>
                    <SaveIcon />
                </IconButton>
            </Card>
        </>
    );
}