import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function dropDownCountryMenu(anchorEl, setAnchorEl, setCountry) {
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        setAnchorEl(null);
    };
    const handleItemClick = (country) => {
        setCountry(country)
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                Country
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}>
                <MenuItem onClick={() => handleItemClick("FR")}>France</MenuItem>
                <MenuItem onClick={() => handleItemClick("US")}>United States</MenuItem>
                <MenuItem onClick={() => handleItemClick("CH")}>China</MenuItem>
            </Menu>
        </div>
    )
}