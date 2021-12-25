import React from "react";

import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/Save";
import AddList from "./AddList";

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
    WidgetNames
}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <AddList
                onAddItem={onAddItem}
                WidgetNames={WidgetNames}
            />
            <IconButton aria-label="save" onClick={onLayoutSave}>
                <SaveIcon />
            </IconButton>
        </Card>
    );
}