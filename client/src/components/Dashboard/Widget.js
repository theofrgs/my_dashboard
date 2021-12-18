import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import WidgetJson from "../../WidgetConfig.json"

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    header: {
        display: "flex",
        alignItems: "center",
        padding: "0.5rem"
    },
    spacer: {
        flexGrow: 1
    },
    body: {
        padding: "0.5rem",
        flexGrow: 1
    }
});

const widgetNames = {};

Object.keys(WidgetJson).map((key) => (
    widgetNames[key] = WidgetJson[key].name
));

//VIEW
export default function Widget({ id, onRemoveItem, component: Item }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <div className={classes.header}>
                <Typography variant="h6" gutterBottom>
                    {widgetNames[id]}
                </Typography>
                <div className={classes.spacer} />
                <IconButton aria-label="delete" onClick={() => onRemoveItem(id)}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            </div>
            <div className={classes.body}>
                <Item />
            </div>
        </Card>
    );
}