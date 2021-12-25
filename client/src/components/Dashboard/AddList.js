import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import MenuItem from '@mui/material/MenuItem';
import { WidgetConfig } from "../WidgetConfig.js"

const useStyles = makeStyles((theme) => ({
    popup: {
        padding: theme.spacing(2)
    }
}));

//VIEW
export default function AddList({
    onAddItem,
    WidgetNames
}) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = (i) => {
        onAddItem(WidgetConfig.createWidget(i));
        handleClose();
    };

    return (
        <>
            <IconButton aria-label="add" onClick={handleClick} aria-describedby={id}>
                <AddCircleOutlineIcon />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
            >
                <div className={classes.popup}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Add Widgets</FormLabel>
                        <FormGroup>
                            {Object.keys(WidgetNames).map((i) => (
                                <FormControlLabel
                                    control={
                                        <MenuItem onClick={(e) => handleChange(i)}>
                                            <AddCircleOutlineIcon />
                                        </MenuItem>
                                    }
                                label={i}
                                key={i}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                </div>
            </Popover>
        </>
    );
}