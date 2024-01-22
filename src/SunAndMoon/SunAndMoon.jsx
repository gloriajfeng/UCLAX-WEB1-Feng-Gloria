import styled from "styled-components";
import { useState } from "react";

import sunImg from "./images/sun.png";
import moonImg from "./images/moon.png";

const SunAndMoon = () => {
    const [imgSrc, imgSrcUpdate] = useState(moonImg);

    const changeToSun = () => {
        imgSrcUpdate(sunImg);
    };

    const changeToMoon = () => {
        imgSrcUpdate(moonImg);
    };

    //HTML Layer
    return (
        <SunAndMoonStyled>
            <h2>Sun And Moon</h2>
            <img
                src={imgSrc}
                onMouseEnter={changeToSun}
                onMouseLeave={changeToMoon}
            />
        </SunAndMoonStyled>
    );
};

export default SunAndMoon;

//CSS
const SunAndMoonStyled = styled.div`
    text-align: center;
    h2 {
        font-size: 40px;
        color: navy;
    }

    img {
        display: block;
        margin: 30px auto;
        padding: 20px;
        border: solid 20px navy;
        background-color: #030328;
    }
`;
