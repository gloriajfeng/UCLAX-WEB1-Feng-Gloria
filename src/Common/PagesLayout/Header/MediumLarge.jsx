import styled from "styled-components";

/* Components ---------------------------*/
import Inset from "../Inset.jsx";
import SiteLogo from "../SiteLogo/SiteLogo.jsx";
import MainMenu from "./MainMenu.jsx";

const MediumLarge = () => {
    return (
        <MediumLargeStyled className="MediumLarge">
            <Inset>
                <div className="inset">
                    <div className="logo">
                        <SiteLogo />
                    </div>
                    <div className="menus">
                        <MainMenu />
                    </div>
                </div>
            </Inset>
        </MediumLargeStyled>
    );
};

export default MediumLarge;

const MediumLargeStyled = styled.div`
    color: #452516;
    padding-bottom: 20px;

    .logo {
        .SiteLogo {
            width: 25%;
            margin: auto;
            padding: 20px 0px;
        }
    }

    nav {
        text-align: center;
        a {
            width: 100px;
            display: inline;

            line-height: 30px;
            margin: 0px 0px 20px 24px;
            border-bottom: solid 3px #f7d0bf;

            text-align: center;
            font-size: 16px;
            opacity: 0.5;
            color: #452516;
            font-weight: bold;
            text-decoration: none;
            text-transform: none;

            &:hover,
            &:active,
            &:focus {
                opacity: 1;
            }

            &.active {
                color: #452516;
                border-bottom-color: #452516;
            }
        }
    }
`;
