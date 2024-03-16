import React from "react";
import styled from "styled-components";

/* Images ---------------------------*/
import logoUrl from "./PawfectCafe_logo.png";

const SiteLogo = () => {
    return (
        <SiteLogoStyled className="SiteLogo">
            <img src={logoUrl} alt="Pawfect Cafe Logo" />
        </SiteLogoStyled>
    );
};

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #13bbbb;
    width: 50%;
    height: 50%;

    img {
        width: 100%;
        height: auto;
    }
`;
