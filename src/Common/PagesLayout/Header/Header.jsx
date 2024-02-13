import styled from "styled-components";

// Media Query
import { useMediaQuery } from "@/Common/useMediaQuery";

// components
import MediumLarge from "./MediumLarge.jsx";
import Small from "./Small.jsx";

const Header = () => {
    const { isMediumAndUp } = useMediaQuery();

    return (
        <HeaderStyled>
            {isMediumAndUp ? <MediumLarge /> : <Small />}
        </HeaderStyled>
    );
};

export default Header;

const HeaderStyled = styled.header``;
