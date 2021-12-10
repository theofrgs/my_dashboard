import { FaBars } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowAltCircleLeft, FaUserTimes} from "react-icons/fa";
import '../../index.css';
import Logout from "../Auth/Logout";
import StateRoute from "../Auth/StateRoute";

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
/* eslint-disable jsx-a11y/anchor-is-valid */
function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    );
}

function DropdownMenu(user) {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const [statusLogout, setStatusLogout] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight * 1.3)
    }, [])

    function calcHeight(el) {
        const height = dropdownRef.current?.firstChild.offsetHeight * 1.3;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            // eslint-disable-next-line
            <a className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon={<FaCog />}
                        rightIcon={<FaChevronRight />}
                        goToMenu="settings">
                        Settings
                    </DropdownItem>
                </div>
            </CSSTransition>
            <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<FaArrowAltCircleLeft />}>
                        <h2>Back</h2>
                    </DropdownItem>
                    <a className="menu-item" onClick={() => Logout(user, setStatusLogout)}>
                        <span className="icon-button">{<FaUserTimes/>}</span>
                        <h2>Logout</h2>
                    </a>
                    {StateRoute(statusLogout, "logout", "/login")}
                </div>
            </CSSTransition>
        </div>
    );
}


export default function logoutPopup(user) {

    return (
        <NavItem icon={<FaBars />}>
            {DropdownMenu(user)}
        </NavItem>
    );
}