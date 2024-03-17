import styled from "styled-components";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "./Hamburger.jsx";

// Components ------------------*/
import SiteLogo from "../SiteLogo/SiteLogo.jsx";
import MainMenu from "./MainMenu.jsx";

const Small = () => {
    const [showMenu, showMenuUpdate] = useState(false);

    const toggle = () => {
        showMenuUpdate(!showMenu);
    };

    const hideMenu = () => {
        showMenuUpdate(false);
    };

    return (
        <SmallStyled>
            <Hamburger toggle={toggle} />
            <SiteLogo />
            {showMenu && <MainMenu onClick={hideMenu} />}
        </SmallStyled>
    );
};

export default Small;

const SmallStyled = styled.div`
    display: flex;
    justify-content: center;

    .SiteLogo {
        height: 150px;
        display: flex;
        align-items: center;
        padding: 20px;
        max-width: 200px;
    }

    nav {
        position: fixed;
        left: 0px;
        top: 150px;
        right: 0px;
        bottom: 0px;

        z-index: 100;
        background-color: #f6d0c0;

        a {
            display: block;

            padding: 10px;
            border-bottom: solid 1px #d6b7aa;

            color: black;
            text-decoration: none;

            &:hover,
            &:active,
            &:focus {
                background-color: #e78451;
            }
        }
    }
`;
